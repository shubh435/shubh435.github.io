import { useMemo, useState } from "react";
import { Skill, skills } from "../assets/data";

const LEVEL_WIDTH: Record<Skill["level"], string> = {
  Beginner: "w-1/3",
  Intermediate: "w-2/3",
  Advanced: "w-full",
};

const GROUPS: Array<Skill["group"] | "All"> = [
  "All",
  "Frontend",
  "Backend",
  "Tools",
  "Testing",
  "Cloud",
];

const levelBadge = (level: Skill["level"]) => {
  const base =
    "text-[11px] px-2 py-1 rounded-full border font-semibold tracking-wide";
  if (level === "Advanced")
    return `${base} border-emerald-400/40 text-emerald-200 bg-emerald-500/10`;
  if (level === "Intermediate")
    return `${base} border-amber-400/40 text-amber-200 bg-amber-500/10`;
  return `${base} border-gray-400/40 text-gray-200 bg-gray-500/10`;
};

const SkillSection = () => {
  const [activeGroup, setActiveGroup] = useState<Skill["group"] | "All">("All");

  const filtered = useMemo(
    () =>
      activeGroup === "All"
        ? skills
        : skills.filter((skill) => skill.group === activeGroup),
    [activeGroup]
  );

  const highlights = useMemo(
    () => ({
      advanced: filtered.filter((s) => s.level === "Advanced").length,
      tools: filtered.filter((s) => s.group === "Tools").length,
    }),
    [filtered]
  );

  return (
    <section
      id="skill"
      className="section-shell text-white p-8 rounded-3xl shadow-lg max-w-6xl mx-auto"
      aria-labelledby="skills-heading"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">
            Skills
          </p>
          <h2 id="skills-heading" className="text-3xl font-semibold">
            Depth across the stack
          </h2>
          <p className="text-muted mt-2">
            Filter by domain to see where I spend the most time.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {GROUPS.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`rounded-full px-3 py-1 text-sm border transition ${
                activeGroup === group
                  ? "border-cyan-400 text-cyan-200 bg-cyan-500/10"
                  : "border-white/10 text-muted hover:border-cyan-400/60 hover:text-white"
              }`}
              aria-pressed={activeGroup === group}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted">
        <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
          {highlights.advanced}+ advanced skills
        </span>
        <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
          {highlights.tools}+ delivery & tooling habits
        </span>
        <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
          Hover cards for depth and favorite tools
        </span>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6" role="list">
        {filtered.map((skill, idx) => (
          <article
            key={`${skill.name}-${idx}`}
            className="surface-card p-4 rounded-2xl border border-white/5 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-200 shadow-md"
            role="listitem"
            aria-label={`${skill.name} skill level ${skill.level}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.category}</p>
                </div>
              </div>
              <span className={levelBadge(skill.level)}>{skill.level}</span>
            </div>
            <div className="mt-4 space-y-2">
              <div
                className="h-2 bg-zinc-800 rounded"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={
                  skill.level === "Advanced"
                    ? 100
                    : skill.level === "Intermediate"
                    ? 70
                    : 40
                }
              >
                <div
                  className={`h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded ${
                    LEVEL_WIDTH[skill.level]
                  }`}
                />
              </div>
              <p className="text-xs text-gray-400">
                Recently used in:{" "}
                {skill.group === "Frontend"
                  ? "React/React Native shipping"
                  : skill.category}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
