import { useState } from "react";
import {
  FaReact, FaGithub, FaGitlab, FaAws, FaNode, FaGit,
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiRedux, SiJest, SiExpress,
  SiMongodb, SiCypress, SiTailwindcss, SiMaterialdesign
} from "react-icons/si";
import { MdMobileFriendly } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { GiCube } from "react-icons/gi";


type Skill = {
  name: string;
  icon: JSX.Element;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
};

const skills: Skill[] = [
  { name: "React", icon: <FaReact className="text-cyan-400" />, level: "Advanced", category: "Frontend" },
  { name: "React Native", icon: <MdMobileFriendly className="text-pink-400" />, level: "Advanced", category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: "Advanced", category: "Programming" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "Advanced", category: "Programming" },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: "Advanced", category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "Advanced", category: "Frontend" },
  { name: "Material UI", icon: <SiMaterialdesign className="text-indigo-400" />, level: "Advanced", category: "Frontend" },
  { name: "Node.js", icon: <FaNode className="text-green-500" />, level: "Advanced", category: "Backend" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, level: "Advanced", category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: "Intermediate", category: "Database" },
  { name: "AWS", icon: <FaAws className="text-orange-400" />, level: "Intermediate", category: "DevOps" },
  { name: "CI/CD", icon: <AiOutlineDeploymentUnit className="text-teal-300" />, level: "Advanced", category: "DevOps" },
  { name: "Git", icon: <FaGit className="text-red-500" />, level: "Advanced", category: "Version Control" },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" />, level: "Advanced", category: "Version Control" },
  { name: "GitLab", icon: <FaGitlab className="text-orange-500" />, level: "Intermediate", category: "Version Control" },
  { name: "Jest", icon: <SiJest className="text-red-400" />, level: "Advanced", category: "Testing" },
  { name: "Enzyme", icon: <SiCypress className="text-lime-400" />, level: "Intermediate", category: "Testing" },
  { name: "Three.js", icon: <GiCube className="text-green-300" />, level: "Intermediate", category: "Frontend" },
];

const getProgressWidth = (level: Skill["level"]) => {
  switch (level) {
    case "Beginner": return "w-1/3";
    case "Intermediate": return "w-2/3";
    case "Advanced": return "w-full";
  }
};

const SkillSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section id="skill" className="bg-zinc-900 text-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {visibleSkills.map((skill, idx) => (
          <div key={idx} className="bg-zinc-800 p-4 rounded-lg hover:scale-[1.03] transition-all duration-200 shadow-md">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{skill.icon}</div>
              <div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="h-2 bg-zinc-700 rounded">
                <div
                  className={`h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded ${getProgressWidth(skill.level)}`}
                />
              </div>
              <p className="text-xs mt-1 text-gray-400">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-cyan-400 hover:underline text-sm"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default SkillSection;
