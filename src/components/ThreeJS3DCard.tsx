import React, { useMemo, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import withRouter from "../utils/withRouter";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLightbulb,
  FaTools,
  FaUserTie,
} from "react-icons/fa";

interface ThreeDCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  id: number;
  moreDes?: string;
  subheader?: string;
  tryLink?: string;
  sourceCodeLink?: string;
  rating?: number;
  technology?: string;
  category?: "Mobile" | "Web";
  problem?: string;
  solution?: string;
  role?: string;
  techStack?: string[];
  impact?: string;
  navigate?: (text?: string) => void;
}

const KEYWORDS = [
  "React",
  "React Native",
  "TypeScript",
  "Redux",
  "Tailwind",
  "Next.js",
  "NextJS",
  "Firebase",
  "Node",
  "Jest",
  "MUI",
  "AWS",
];

const getTechStack = (description?: string, technology?: string) => {
  if (technology && technology.includes("|")) {
    return technology.split("|").map((t) => t.trim());
  }
  if (technology) {
    return [technology];
  }
  if (!description) return [];
  const found = KEYWORDS.filter((keyword) =>
    description.toLowerCase().includes(keyword.toLowerCase())
  );
  return found.length > 0 ? found : ["React", "JavaScript"];
};

const getSummaryPoints = (text?: string) => {
  if (!text) return [];
  return text
    .split(/(?<=\.)\s+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 2);
};

const highlightText = (text: string) => {
  const pattern = new RegExp(`(${KEYWORDS.join("|")})`, "gi");
  return text.split(pattern).map((chunk, index) => {
    const match = KEYWORDS.find(
      (keyword) => keyword.toLowerCase() === chunk.toLowerCase()
    );
    if (match) {
      return (
        <span key={`${chunk}-${index}`} className="text-cyan-400 font-semibold">
          {chunk}
        </span>
      );
    }
    return <span key={`${chunk}-${index}`}>{chunk}</span>;
  });
};

// Fallback image component for lazy loading
const ImageWithFallback: React.FC<{ src?: string; alt?: string }> = ({
  src,
  alt,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-800">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-zinc-700" />
      )}
      <img
        alt={alt || "Project screenshot"}
        loading="lazy"
        decoding="async"
        className={`aspect-video w-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={src}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-muted">
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
};

const MotionDiv = motion.div;

const ThreeDCard: React.FC<ThreeDCardProps> = ({
  title,
  description,
  imageUrl,
  tryLink,
  sourceCodeLink,
  technology,
  category,
  problem,
  solution,
  role,
  techStack: providedTechStack,
  impact,
  rating,
  navigate,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const points = useMemo(() => getSummaryPoints(description), [description]);
  const techStack = useMemo(
    () => providedTechStack || getTechStack(description, technology),
    [description, technology, providedTechStack]
  );

  // Generate case study content from description if not provided
  const caseStudy = useMemo(
    () => ({
      problem:
        problem ||
        points[0] ||
        "Addressing specific user needs and technical challenges.",
      solution:
        solution ||
        points[1] ||
        description?.slice(0, 100) + "..." ||
        "Built a comprehensive solution.",
      role:
        role || "Full-stack development, UI/UX implementation, and deployment.",
      impact:
        impact ||
        (rating
          ? `Partner happiness score ${rating}/5 and improved engagement after launch.`
          : "Improved usability and conversions after launch."),
    }),
    [problem, solution, role, points, description, impact, rating]
  );

  return (
    <MotionDiv
      className="preview h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex items-center justify-center h-full"
        style={{ perspective: "1000px" }}
      >
        <MotionDiv
          className="flex items-center justify-center relative transition-all duration-200 ease-linear inter-var w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.02 }}
        >
          <article
            className="[transform-style:preserve-3d] surface-card relative group/card
              border border-white/5 hover:border-cyan-500/20
              w-full h-full 
              rounded-3xl p-6 flex flex-col"
            aria-labelledby={`project-${title?.replace(/\s/g, "-")}`}
          >
            {/* Header with Category Badge */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3
                id={`project-${title?.replace(/\s/g, "-")}`}
                className="text-xl font-bold line-clamp-2"
              >
                {title}
              </h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium flex-shrink-0 ${
                  category === "Mobile"
                    ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                    : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                }`}
              >
                {category || "Web"}
              </span>
            </div>

            {/* Tech Stack Pills */}
            <div
              className="flex flex-wrap gap-2 mb-4"
              role="list"
              aria-label="Technologies used"
            >
              {techStack.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-white/5 rounded-full text-muted border border-white/10"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Image with Lazy Loading */}
            <div className="w-full mb-4 overflow-hidden rounded-2xl shadow-2xl group-hover/card:shadow-cyan-500/10 transition-shadow duration-300">
              <ImageWithFallback src={imageUrl} alt={`${title} screenshot`} />
            </div>

            {/* Case Study Preview */}
            <div className="flex-1 space-y-3 text-sm">
              {/* Quick Summary */}
              <div className="text-muted line-clamp-2">
                {points[0] && highlightText(points[0])}
              </div>

              {/* Expandable Case Study Section */}
              <AnimatePresence>
                {isExpanded && (
                  <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 pt-3 border-t border-white/10">
                      {/* Problem */}
                      <div className="flex gap-3">
                        <FaLightbulb
                          className="text-yellow-400 mt-1 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-xs text-yellow-400 font-semibold uppercase tracking-wide mb-1">
                            Problem
                          </p>
                          <p className="text-muted text-sm">
                            {caseStudy.problem}
                          </p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="flex gap-3">
                        <FaTools
                          className="text-green-400 mt-1 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-xs text-green-400 font-semibold uppercase tracking-wide mb-1">
                            Solution
                          </p>
                          <p className="text-muted text-sm">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>

                      {/* Role */}
                      <div className="flex gap-3">
                        <FaUserTie
                          className="text-purple-400 mt-1 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-xs text-purple-400 font-semibold uppercase tracking-wide mb-1">
                            My Role
                          </p>
                          <p className="text-muted text-sm">{caseStudy.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span
                          className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <div>
                          <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wide mb-1">
                            Impact
                          </p>
                          <p className="text-muted text-sm">{caseStudy.impact}</p>
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>

              {/* Toggle Case Study */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-cyan-400 hover:text-cyan-300 text-xs font-medium flex items-center gap-1 transition-colors"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Hide Details" : "View Case Study"}
                <span
                  className={`transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-white/5">
              <a
                className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-cyan-400 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
                target="_blank"
                rel="noopener noreferrer"
                href={tryLink}
                aria-label={`View live demo of ${title}`}
              >
                <FaExternalLinkAlt aria-hidden="true" />
                Live Demo
              </a>
              {sourceCodeLink && sourceCodeLink !== "#" && (
                <button
                  className="flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-bold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900"
                  onClick={() => navigate && navigate(sourceCodeLink)}
                  aria-label={`View source code on GitHub for ${title}`}
                >
                  <FaGithub aria-hidden="true" />
                  Source Code
                </button>
              )}
            </div>
          </article>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default withRouter(ThreeDCard);
