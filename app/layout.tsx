import type { Metadata } from "next";
import {Ovo , Outfit , Bungee} from "next/font/google"
import { ThemeProvider } from "./components/Theme-provider";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  weight : ["400" , "500" , "600" , "700"],
  variable : "--font-outfit"
});

const ovo = Ovo({

  subsets: ["latin"],
  weight : ["400"],
  variable : "--font-ovo"
});

const bungee = Bungee({
  subsets : ["latin"],
  weight : "400",
  variable : "--font-bungee"
})

export const metadata: Metadata = {
  title: "Personal portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${ovo.variable} ${outfit.variable} ${bungee.variable} antialiased leading-8 overflow-x-hidden`}
      >
        <ThemeProvider 
            attribute={"class"}
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
        {children}
        </ThemeProvider> 
      </body>
    </html>
  );
}
