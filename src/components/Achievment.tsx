import React from 'react';

const Achievements: React.FC<{}> = () => {
  return (
    <section id="achievements" className="py-10 px-4 section-shell rounded-3xl">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          🏆 Achievements
        </h2>
        <ul className="space-y-4 text-base" style={{ color: 'var(--text-secondary)' }}>
          <li
            className="p-4 rounded-xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <strong style={{ color: 'var(--text-primary)' }}>
              Client Appreciation (×2) — Builder.ai
            </strong>{' '}
            — Recognized twice for exceptional delivery and contribution to client projects.
          </li>
          <li
            className="p-4 rounded-xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <strong style={{ color: 'var(--text-primary)' }}>
              Star Performer of the Year — Extended Web App Tech
            </strong>{' '}
            — Honored as the top contributor for innovative solutions and consistent excellence in
            web application development.
          </li>
          <li
            className="p-4 rounded-xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <strong style={{ color: 'var(--text-primary)' }}>
              Employee Achievement of the Month — Extended Web App Tech
            </strong>{' '}
            — Awarded for outstanding performance and initiative in cross-functional collaboration.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
