"use client"
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Aboutsection from "./components/Aboutsection";
import Services from "./components/Services";
export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Services />
    </>
  );
}
