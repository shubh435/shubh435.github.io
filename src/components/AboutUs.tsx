import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-zinc-900 text-white w-full py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold  mb-6">About Me</h2>
        <p className="text-lg  text-justify leading-relaxed">
          I am Shubham Sarode, a Software Engineer with 3+ years of experience in front end development, specializing in React JS, React Native, and Redux. I hold a Master’s degree in Computer Science from North Maharashtra University and a Bachelor’s degree from RTMNU University. I have a strong track record in designing responsive web and mobile applications, improving code reusability, and streamlining state management.
          <br /><br />
          My projects include <strong>Parents Who Date</strong>, a React Native app for single parents, and <strong>Fudu</strong>, a platform blending features from Zomato and Instagram. Proficient in TypeScript, Jest, and Enzyme, I ensure high code quality and performance. I'm passionate about delivering innovative solutions that enhance user experience and exceed client expectations.
          Let’s collaborate to bring your ideas to life!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
