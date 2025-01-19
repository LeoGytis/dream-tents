import type { Metadata } from "next";
import "./globals.css";
// import {Nunito, Inter, Lato, Quicksand} from "next/font/google";
import { Quicksand } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

const font = Quicksand({
  //   weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream Tents",
  description: "Rent a tent for your festival experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main className="mx-auto max-w-screen-xl flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
