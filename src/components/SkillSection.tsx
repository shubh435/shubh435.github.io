import { useState } from "react";
import { Skill, skills } from "../assets/data";

const getProgressWidth = (level: Skill["level"]) => {
  switch (level) {
    case "Beginner":
      return "w-1/3";
    case "Intermediate":
      return "w-2/3";
    case "Advanced":
      return "w-full";
  }
};

const SkillSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section
      id="skill"
      className="section-shell text-white p-8 rounded-3xl shadow-lg max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {visibleSkills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-zinc-800 p-4 rounded-lg hover:scale-[1.03] transition-all duration-200 shadow-md"
          >
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
                  className={`h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded ${getProgressWidth(
                    skill.level
                  )}`}
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
