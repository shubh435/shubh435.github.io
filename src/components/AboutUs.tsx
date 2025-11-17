import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="section-shell w-full py-10 px-5 rounded-3xl shadow-lg"
    >
      <div className="max-w-4xl mx-auto flex flex-col  gap-6 text-center md:text-left">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg text-muted">
          React & React Native engineer with <strong>3+ years</strong> of
          experience shipping polished mobile and web products for startups and
          enterprise teams.
        </p>
        <div className="grid gap-4 text-left">
          <div className="surface-card rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">
              What I focus on
            </h3>
            <ul className="space-y-2 text-base text-muted">
              <li>
                • Pixel-perfect front-ends using{" "}
                <strong>React, React Native, and TypeScript</strong>
              </li>
              <li>
                • Scalable design systems powered by{" "}
                <strong>Tailwind CSS, MUI,</strong> and reusable hooks
              </li>
              <li>
                • Performance, accessibility, and automated testing with{" "}
                <strong>Jest</strong>
              </li>
            </ul>
          </div>
          <div className="surface-card rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">
              Quick highlights
            </h3>
            <ul className="grid gap-2 text-base text-muted">
              <li>
                • Led feature teams for <strong>Builder.ai</strong> &{" "}
                <strong>Extended Web App Tech</strong>
              </li>
              <li>
                • Delivered social, fintech, and health apps such as{" "}
                <strong>Parents Who Date</strong>
              </li>
              <li>
                • Master’s in Computer Science; mentor for junior devs and
                freelancers
              </li>
            </ul>
          </div>
        </div>
        <p className="text-lg text-muted">
          I love partnering with teams that want to move fast without
          compromising craft. Let’s build something memorable.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
