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

const levelBadge = (level: Skill["level"]) => "text-[11px] px-2 py-1 rounded-full border font-semibold tracking-wide";

const levelBadgeStyle = (level: Skill["level"]) => {
  if (level === "Advanced")
    return { borderColor: "rgba(52, 211, 153, 0.4)", color: "#a7f3d0", background: "rgba(16, 185, 129, 0.1)" };
  if (level === "Intermediate")
    return { borderColor: "rgba(251, 191, 36, 0.4)", color: "#fde68a", background: "rgba(245, 158, 11, 0.1)" };
  return { borderColor: "var(--border-subtle)", color: "var(--text-muted)", background: "var(--bg-tertiary)" };
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
      className="section-shell p-8 rounded-3xl shadow-lg max-w-6xl mx-auto"
      style={{ color: "var(--text-primary)" }}
      aria-labelledby="skills-heading"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] font-medium" style={{ color: "var(--accent-text)" }}>
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
              className="rounded-full px-3 py-1 text-sm border transition"
              style={
                activeGroup === group
                  ? {
                      borderColor: "var(--accent)",
                      color: "var(--accent-text)",
                      background: "rgba(6, 182, 212, 0.1)",
                    }
                  : {
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-muted)",
                      background: "var(--bg-card)",
                    }
              }
              onMouseEnter={(e) => {
                if (activeGroup !== group) {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeGroup !== group) {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }
              }}
              aria-pressed={activeGroup === group}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
        <span className="px-3 py-2 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)" }}>
          {highlights.advanced}+ advanced skills
        </span>
        <span className="px-3 py-2 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)" }}>
          {highlights.tools}+ delivery & tooling habits
        </span>
        <span className="px-3 py-2 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)" }}>
          Hover cards for depth and favorite tools
        </span>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6" role="list">
        {filtered.map((skill, idx) => (
          <article
            key={`${skill.name}-${idx}`}
            className="surface-card p-4 rounded-2xl hover:-translate-y-1 transition-all duration-200 shadow-md"
            style={{ border: "1px solid var(--border-subtle)" }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border-subtle)"}
            role="listitem"
            aria-label={`${skill.name} skill level ${skill.level}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{skill.category}</p>
                </div>
              </div>
              <span className={levelBadge(skill.level)} style={levelBadgeStyle(skill.level)}>{skill.level}</span>
            </div>
            <div className="mt-4 space-y-2">
              <div
                className="h-2 rounded"
                style={{ background: "var(--bg-tertiary)" }}
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
                  className={`h-2 rounded ${LEVEL_WIDTH[skill.level]}`}
                  style={{ background: "var(--accent-gradient)" }}
                />
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
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
