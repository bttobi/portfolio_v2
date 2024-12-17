import React from "react";
import { Socials } from "..";

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10 mx-5">
      <div className="text-3xl ">BARTOSZ TOBIŃSKI</div>
      <div className="text-lg text-secondary">FRONTEND DEVELOPER</div>
      <div className="text-sm mt-2">📍 Poznań, Poland 🇵</div>
      <div className="text-sm">
        🎓 ICT Engineer, Poznań University of Technology 🏫
      </div>
      <div className="text-sm text-justify my-4">
        Hello! 👋 I specialize in React and TypeScript, with experience building
        web applications in the financial crime sector. I focus on creating
        efficient software and user-friendly interfaces.
      </div>
      <Socials />
    </section>
  );
};

export default Intro;
