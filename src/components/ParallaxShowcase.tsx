import React, { useRef } from "react";
import { backgroundMedia } from "../assets/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { navigateTo } from "../utils/utils";
import withRouter from "../utils/withRouter";

interface ParallaxShowcaseProps {
  navigate: (path: string) => void;
}

const ParallaxShowcase: React.FC<ParallaxShowcaseProps> = ({ navigate }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section ref={sectionRef} className="relative isolate pb-16">
      <motion.div style={{ y }} className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={backgroundMedia.parallax}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </motion.div>
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 text-center text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
          Why hire me
        </p>
        <h2 className="text-3xl font-semibold md:text-4xl">
          Smooth-built interactions that guide hiring managers
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-zinc-200">
          I build scalable, high-quality frontend experiences that drive real
          results. I transform ideas into smooth, user-focused products with
          precision.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide backdrop-blur hover:bg-white/20 transition"
            onClick={() => navigateTo("/project", navigate)}
          >
            Browse showcase work
          </button>
          <button
            className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold tracking-wide text-white hover:bg-cyan-400 transition"
            onClick={() => navigateTo("#footer", navigate)}
          >
            Talk about your idea
          </button>
        </div>
      </div>
    </section>
  );
};

export default withRouter(ParallaxShowcase);
