import React from "react";
import Header from "../Components/Header";
const HomePage = () => {
  return (
    <>
      <Header />

      {/* section banner */}
      <section className="banner  bg-banner bg-no-repeat bg-cover  h-[100vh] w-full">
        <div className="container text-white text-center flex justify-center items-center h-full w-full font-bold text-4xl mx-auto">
          <h1 className="title text-[200%] leading-[150%] font-extrabold text-shadow-outlined text-[#2a701f] ">
            Welcome to My Website
          </h1>
        </div>
      </section>

      {/* section myskill */}
      <section className="myskill">
        
      </section>
    </>
  );
};

export default HomePage;
