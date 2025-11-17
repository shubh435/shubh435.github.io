import React from "react";
import { testimonials } from "../assets/data";
import { motion } from "framer-motion";

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

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-5">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Trust Signals
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Testimonials from clients & teammates
        </h2>
        <p className="text-muted max-w-3xl mx-auto">
          5+ releases shipped across healthcare, social, and SaaS products.
          Here’s what people say about collaborating with me.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.id}
            className="surface-card rounded-3xl p-6 shadow-xl border border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={index}
          >
            <p className="text-left text-lg leading-relaxed text-muted">
              “{testimonial.quote}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="h-12 w-12 rounded-full border border-white/10"
                loading="lazy"
                decoding="async"
              />
              <div className="text-left">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
