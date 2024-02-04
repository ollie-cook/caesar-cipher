'use client'

import { useState, useEffect } from 'react'

export default function Form() {
  const [action, setAction] = useState("encipher")
  const [key, setKey] = useState(0);
  const [message, setMessage] = useState('');
  const [encodedMessage, setEncodedMessage] = useState("")

  useEffect(() => {
    const newMessage = encodeDecodeMessage(message, key, action)
    setEncodedMessage(newMessage)
  }, [key, message])

  return (
    <div className="w-1/4 mt-12 flex flex-col items-center">
      <form className="flex flex-col items-start w-full">
        <p className="text-neutral-600">Action</p>
        <div className="flex">
          <div >
            <input 
              type="radio" 
              id="encipher" 
              name="encipher" 
              value="encipher"
              checked={action === 'encipher'}
              onChange={() => setAction('encipher')}
            ></input>
            <label htmlFor="encipher" className="ml-1">Encipher</label><br/>
          </div>
          <div className="ml-2">
            <input 
              type="radio" 
              id="decipher" 
              name="decipher" 
              value="decipher"
              checked={action === 'decipher'}
              onChange={() => setAction('decipher')}
            ></input>
            <label htmlFor="decipher" className="ml-1">Decipher</label><br/>
          </div>
        </div>
        <label htmlFor="key" className="mt-4 text-neutral-600">Key</label>
        <input 
          type = "number" 
          id="key" 
          name="key"
          value={key}
          onChange={(e)=> setKey(+e.target.value)}
          className="border border-black w-full pl-1 mt-1"
        ></input>
        <label htmlFor="message" className="mt-4 text-neutral-600">Message</label>
        <textarea 
          id="message" 
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-black w-full pl-1 mt-1"
        />
      </form>
      <div className="w-full h-32 mt-8">
        <h2 className="font-semibold">{action == "encipher" ? 'Enciphered ' : 'Deciphered '} message</h2>
        <p>{encodedMessage}</p>
      </div>
    </div>
  )
}


const encodeDecodeMessage = (message: string, key: number, action: string) => {
  let encodedMessage = "";
  for (let i=0; i<message.length; i++) {
    let character = message[i]
    let ascii = character.charCodeAt(0);
    if (ascii == 32) {
      encodedMessage += ' ';
      continue;
    }
    let newAscii = 0;
    if (action === 'encipher') {
      newAscii = ascii - key;
      while (newAscii < 97) {
        newAscii += 26
      }
    } else {
      newAscii = ascii + key;
      while (newAscii > 122) {
        newAscii -= 26
      }
    }
    
    let newCharacter = String.fromCharCode(newAscii);

    encodedMessage += newCharacter
  }

  return encodedMessage
}