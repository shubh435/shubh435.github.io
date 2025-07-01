  import React from "react";

  const Achievements:React.FC<{}> = () => {
    return (
      <section id="achievements" className="py-10 px-4 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            🏆 Achievements
          </h2>
          <ul className="space-y-4 text-lg text-white">
            <li>
              <strong>Client Appreciation (×2)</strong> — Recognized twice for
              exceptional delivery and contribution to client projects.
            </li>
            <li>
              <strong>Employee Achievement of the Month</strong> — Awarded for
              outstanding performance and initiative in cross-functional
              collaboration.
            </li>
            <li>
              <strong>Star Performer of the Year — Extended Web App Tech</strong> — Honored as the top contributor for innovative solutions and consistent
              excellence in web application development.
            </li>
          </ul>
        </div>
      </section>
    );
  };

  export default Achievements;
