import React from "react";
import "./skill.css";
import {
  SiBootstrap,
  SiC,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const skills = [
  { name: "C", icon: SiC, color: "#60a5fa", tag: "Programming" },
  { name: "HTML", icon: SiHtml5, color: "#f97316", tag: "Structure" },
  { name: "CSS", icon: FaCss3Alt, color: "#38bdf8", tag: "Styling" },
  { name: "JavaScript", icon: SiJavascript, color: "#facc15", tag: "Frontend" },
  { name: "React", icon: SiReact, color: "#22d3ee", tag: "UI Library" },
  { name: "Node.js", icon: SiNodedotjs, color: "#86efac", tag: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#e2e8f0", tag: "API Framework" },
  { name: "MongoDB", icon: SiMongodb, color: "#4ade80", tag: "Database" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#2dd4bf", tag: "Utility CSS" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#a78bfa", tag: "Framework" },
];

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="skills-title">
        <span>My Skills</span>
      </h1>
      <div className="skills-container">
        {skills.map(({ name, icon: Icon, color, tag }) => (
          <article className="skill-card" key={name}>
            <div className="skill-icon" style={{ "--skill-color": color }}>
              <Icon />
            </div>
            <div className="skill-content">
              <h3>{name}</h3>
              <span>{tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
