import Form from "./components/Form";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex mt-4 h-[96px]">
        <img src="/caesar-head.png" alt="Caesar Cipher" className="h-full" />
        <h1 className="text-8xl font-bold ml-10">Cipher</h1>
      </div>
      <Form />
    </main>
  );
}
