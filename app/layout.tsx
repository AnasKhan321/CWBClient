import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Inter from "next/font"; 
import {Toaster  }  from "react-hot-toast"
import ReactQueryClient  from "@/Providers/ReactQueryClient"
import Navbar from "@/ClientComponents/Navbar";
import Footer from "@/ClientComponents/Footer"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeWithBat",
  description: "A tutorial based website where CodeWithBat upload their tutorial and courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ReactQueryClient>

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Navbar/>
              {/* <Toaster
                position="top-center"
                reverseOrder={false}
              /> */}
        {children}
        <Footer/> 

      </body>
    </html>

    </ReactQueryClient>
  );
}
