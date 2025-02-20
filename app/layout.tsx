import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NarrowOne Hub",
  description: "Credits to NarrowNews for creating most of the content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Protest+Guerrilla&family=Protest+Strike&display=swap" rel="stylesheet"/>

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body
        className={`noto antialiased`}
      >
        <div className="px-8 py-4">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
