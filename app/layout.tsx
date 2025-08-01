import type { Metadata } from "next";
import {Ovo , Outfit} from "next/font/google"
import { ThemeProvider } from "./components/Theme-provider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight : ["400" , "500" , "600" , "700"]
});

const ovo = Ovo({

  subsets: ["latin"],
  weight : ["400"]

});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        <ThemeProvider 
            attribute={"class"}
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
        {children}
        </ThemeProvider> 
      </body>
    </html>
  );
}
