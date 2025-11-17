import React, { useMemo } from "react";
import withRouter from "../utils/withRouter";

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
  navigate?: (text?: string) => void;
}

const KEYWORDS = [
  "React",
  "React Native",
  "TypeScript",
  "Redux",
  "Tailwind",
  "Next.js",
  "Firebase",
  "Node",
];

const getSummaryPoints = (text?: string) => {
  if (!text) return [];
  return text
    .split(/(?<=\.)\s+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);
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

const ThreeDCard: React.FC<ThreeDCardProps> = ({
  title,
  description,
  imageUrl,
  tryLink,
  sourceCodeLink,
  navigate,
}) => {
  const points = useMemo(() => getSummaryPoints(description), [description]);

  return (
    <div className="preview">
      <div
        className="flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div
          className="flex items-center justify-center relative transition-all duration-200 ease-linear inter-var"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="[transform-style:preserve-3d] surface-card relative group/card
          border border-white/5
        w-full h-auto 
         rounded-3xl p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-xl font-bold">{title}</div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                Featured
              </span>
            </div>
            <div className="mt-3 space-y-2 text-sm text-muted">
              {points.map((point, index) => (
                <p key={index} className="line-clamp-3">
                  {highlightText(point)}
                </p>
              ))}
            </div>
            <div className="transition duration-200 ease-linear w-full mt-4 overflow-hidden rounded-2xl shadow-2xl">
              <img
                alt={title}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover"
                src={imageUrl}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 mt-6">
              <a
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-cyan-400"
                target="__blank"
                rel="noreferrer"
                href={tryLink}
              >
                Try now →
              </a>
              {sourceCodeLink ? (
                <button
                  className="rounded-full bg-white text-black px-4 py-2 text-xs font-bold"
                  onClick={() => navigate && navigate(sourceCodeLink)}
                >
                  Github
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ThreeDCard);
