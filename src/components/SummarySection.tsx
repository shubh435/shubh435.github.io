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
    <section>
      {" "}
      {/* Quick Highlights - Scannable List */}
      <div className="surface-card rounded-2xl p-6 shadow-xl border border-white/5">
        <h3 className="text-lg font-semibold mb-4 text-cyan-300 flex items-center gap-2">
          <span
            className="w-2 h-2 bg-cyan-400 rounded-full"
            aria-hidden="true"
          ></span>
          Quick Highlights
        </h3>
        <ul className="space-y-3" role="list">
          {highlights.map((item, index) => (
            <MotionDiv
              key={index}
              className="flex items-center gap-3 text-base text-muted hover:text-white transition-colors"
              custom={index + 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <span>{item.text}</span>
            </MotionDiv>
          ))}
        </ul>
      </div>
      {/* What I focus on */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="surface-card rounded-2xl p-6 border border-white/5">
          <h3 className="text-lg font-semibold mb-3 text-cyan-300">
            What I Focus On
          </h3>
          <ul className="space-y-3 text-left text-muted" role="list">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"
                  aria-hidden="true"
                ></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card rounded-2xl p-6 border border-white/5">
          <h3 className="text-lg font-semibold mb-3 text-cyan-300">
            Delivery Style
          </h3>
          <div className="space-y-3 text-muted">
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
                Accessibility-first mindset: keyboard support and WCAG-friendly
                contrast.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <p className="text-lg text-muted border-l-4 border-cyan-500 pl-4 italic">
        I love partnering with teams that want to move fast without compromising
        craft.{" "}
        <strong className="text-white not-italic">
          Let's build something memorable.
        </strong>
      </p>
    </section>
  );
}

export default SummarySection;
