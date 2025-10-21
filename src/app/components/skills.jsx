"use client";
import Marquee from "react-fast-marquee";
import { skills } from "@/app/lib/utilis";

export default function SkillMarquee() {
  
  return (
    <Marquee gradient={false} speed={60} pauseOnHover className="bg-blue-400 mt-10 p-4">
      {skills.map((skill) => (
        <span key={skill.title} className="mx-8 text-lg font-bold flex space-x-3 font-sansita">
          {skill.logo}
          <span className="">{skill.title}</span>
        </span>
      ))}
    </Marquee>
  );
}
