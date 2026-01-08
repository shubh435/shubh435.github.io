import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
const focusAreas = [
  "Shipping audit-ready React/React Native apps with crisp UI polish",
  "Design systems that keep teams fast: tokens, docs, and reusable patterns",
  "Analytics, accessibility, and performance budgets baked in from day one",
  "Async-friendly collaboration with Loom walkthroughs and transparent milestones",
];

// Quick highlights with visual indicators
const highlights = [
  {
    icon: <FaAward className="text-yellow-400" aria-hidden="true" />,
    text: "Led feature teams at Builder.ai & Extended Web App Tech",
  },
  {
    icon: <FaCheckCircle className="text-green-400" aria-hidden="true" />,
    text: "Shipped 5+ apps on App Store & Google Play",
  },
  {
    icon: <FaUsers className="text-blue-400" aria-hidden="true" />,
    text: "Delivered healthcare, social & SaaS products",
  },
  {
    icon: <FaGraduationCap className="text-indigo-400" aria-hidden="true" />,
    text: "Master's in Computer Science; mentor for junior devs",
  },
];
const MotionDiv = motion.div;
function SummarySection() {
  return (
    <section
      className="py-14 px-4 md:px-6 lg:px-10"
      aria-labelledby="summary-heading"
    >
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "var(--accent-text)" }}>
              Snapshot
            </p>
            <h2 id="summary-heading" className="text-2xl md:text-3xl font-bold">
              Quick summary without the scroll
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
            <span>Available for fast-paced builds & audits</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-6 items-stretch">
          {/* Quick Highlights - Scannable List */}
          <div className="surface-card rounded-2xl p-6 shadow-xl h-full" style={{ border: "1px solid var(--border-subtle)" }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: "var(--accent-text)" }}>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              ></span>
              Quick Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index}>
                  <MotionDiv
                    className="flex items-center gap-3 text-base transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                    custom={index + 4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </MotionDiv>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card rounded-2xl p-6 h-full flex flex-col gap-4" style={{ border: "1px solid var(--border-subtle)" }}>
            <h3 className="text-lg font-semibold" style={{ color: "var(--accent-text)" }}>
              Delivery Style
            </h3>
            <div className="space-y-3" style={{ color: "var(--text-muted)" }}>
              <p className="flex items-start gap-3">
                <FaCheckCircle
                  className="text-green-400 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Weekly demos and transparent, ticket-sized milestones.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <FaCheckCircle
                  className="text-green-400 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Documented handoffs with Loom walkthroughs + Notion specs.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <FaCheckCircle
                  className="text-green-400 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Accessibility-first mindset: keyboard support and
                  WCAG-friendly contrast.
                </span>
              </p>
            </div>
            <div className="mt-auto pt-4 text-sm" style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
              Collaboration-first, async-friendly, and ready for hands-on coding
              or audits.
            </div>
          </div>
        </div>

        {/* What I focus on */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="surface-card rounded-2xl p-6 h-full" style={{ border: "1px solid var(--border-subtle)" }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--accent-text)" }}>
              What I Focus On
            </h3>
            <ul className="space-y-3 text-left" style={{ color: "var(--text-muted)" }}>
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  ></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card rounded-2xl p-6 h-full flex flex-col justify-between" style={{ border: "1px solid var(--border-subtle)" }}>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold" style={{ color: "var(--accent-text)" }}>
                Let&apos;s Build Something
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I love partnering with teams that want to move fast without
                compromising craft.{" "}
                <strong className="not-italic" style={{ color: "var(--text-primary)" }}>
                  Let&apos;s build something memorable.
                </strong>
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm mt-4" style={{ color: "var(--text-muted)" }}>
              <span className="w-8 h-px" style={{ background: "linear-gradient(to right, var(--accent), transparent)" }} />
              <span>Based in Pune · Comfortable across time zones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummarySection;
