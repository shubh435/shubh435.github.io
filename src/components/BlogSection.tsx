import React from "react";
import { blogPosts } from "../assets/data";
import { FaExternalLinkAlt, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionArticle = motion.article;

const BlogSection: React.FC = () => {
  return (
    <section
      id="writing"
      className="section-shell rounded-3xl shadow-lg max-w-6xl mx-auto px-6 py-12 mt-12"
      aria-labelledby="blog-heading"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">
            Writing
          </p>
          <h2 id="blog-heading" className="text-3xl font-semibold">
            Articles & Playbooks
          </h2>
          <p className="text-muted mt-2 max-w-2xl">
            Short, tactical notes on React, React Native, testing, and shipping design systems.
          </p>
        </div>
        <a
          href="https://medium.com/@shubh435"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10 transition"
        >
          View all writing
          <FaExternalLinkAlt aria-hidden="true" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5" role="list">
        {blogPosts.map((post, index) => (
          <MotionArticle
            key={post.id}
            className="surface-card rounded-2xl border border-white/5 p-5 flex flex-col gap-3 hover:border-cyan-400/40 transition-all"
            role="listitem"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold leading-tight">
                {post.title}
              </h3>
              <span className="text-muted text-xs flex-shrink-0">
                {post.tags[0]}
              </span>
            </div>
            <p className="text-sm text-muted flex-1">{post.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-muted" aria-label="Tags">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10"
                >
                  <FaTag aria-hidden="true" className="text-cyan-300" />
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm mt-2 hover:text-cyan-200"
              aria-label={`Read ${post.title}`}
            >
              Read article
              <FaExternalLinkAlt aria-hidden="true" />
            </a>
          </MotionArticle>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
