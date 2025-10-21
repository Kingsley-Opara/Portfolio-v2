"use client"
import Image from "next/image";
import Navbar from "./components/navbar";
import MobileNavbar from "./components/mobileNavbar";
import Hero from "./components/hero";
import SkillMarquee from "./components/skills";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="font-sans transition-all duration-300s pb-2">
      <Navbar/>
      <MobileNavbar/>

      <Hero/>
      <SkillMarquee/>
      <Services/>



    </main>
  );
}
