import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caesar Cipher",
  description: "Enchipher and Decipher messages using the Caesar Cipher method.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundImage: `url(./background.webp)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        {children}
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold text-white" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
      </body>
    </html>
  );
}
