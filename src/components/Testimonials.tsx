import React from "react";
import { testimonials } from "../assets/data";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaLinkedin } from "react-icons/fa";

const MotionArticle = motion.article;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
    },
  }),
};

// Stats for social proof
const trustStats = [
  { value: "5+", label: "Apps Shipped" },
  { value: "100%", label: "Test Coverage" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Happy Clients" },
];

const Testimonials: React.FC = () => {
  return (
    <section 
      className="py-16 px-5 container mx-auto" 
      id="testimonial"
      aria-labelledby="testimonials-heading"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-medium">
          Trust Signals
        </p>
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold">
          Testimonials from Clients & Teammates
        </h2>
        <p className="text-muted max-w-3xl mx-auto">
          5+ releases shipped across healthcare, social, and SaaS products.
          Here's what people say about collaborating with me.
        </p>
      </div>

      {/* Trust Stats Bar */}
      <motion.div 
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {trustStats.map((stat, index) => (
          <div 
            key={index}
            className="surface-card rounded-2xl p-4 text-center border border-white/5"
          >
            <p className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</p>
            <p className="text-sm text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Testimonials Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <MotionArticle
            key={testimonial.id}
            className="surface-card rounded-3xl p-6 border border-white/5 flex flex-col relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={index}
            whileHover={{
              y: -10,
              boxShadow: "0 25px 60px rgba(15,23,42,0.45)",
            }}
            aria-label={`Testimonial from ${testimonial.name}`}
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-cyan-500/20 text-4xl" aria-hidden="true">
              <FaQuoteLeft />
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" aria-hidden="true" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="flex-1">
              <p className="text-left text-base leading-relaxed text-muted italic">
                "{testimonial.quote}"
              </p>
            </blockquote>

            {/* Author Info */}
            <footer className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="h-12 w-12 rounded-full border-2 border-cyan-500/30"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-1 text-left">
                <cite className="font-semibold not-italic block">{testimonial.name}</cite>
                <p className="text-sm text-muted">
                  {testimonial.role}
                </p>
                <p className="text-xs text-cyan-400">
                  {testimonial.company}
                </p>
              </div>
              {/* LinkedIn indicator for credibility */}
              <div 
                className="text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              >
                <FaLinkedin className="text-xl" />
              </div>
            </footer>

            {/* Subtle gradient overlay on hover */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              aria-hidden="true"
            />
          </MotionArticle>
        ))}
      </div>

      {/* CTA to Add Testimonial */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-muted text-sm mb-4">
          Worked with me? I'd love to hear your feedback.
        </p>
        <a
          href="https://www.linkedin.com/in/shubh435/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          <FaLinkedin aria-hidden="true" />
          Connect on LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Testimonials;
