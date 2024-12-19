import { useEffect } from "react";
import anime from "animejs";
import { Socials } from "..";

const Intro = () => {
  useEffect(() => {
    anime({
      targets: ".text-header",
      translateX: [100, 0],
      delay: anime.stagger(70),
      opacity: [0, 1],
    });
    anime({
      targets: ".text",
      translateX: [100, 0],
      delay: 70,
      opacity: [0, 1],
    });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center mt-10 mx-5">
      <div className="text-header text-3xl ">BARTOSZ TOBIŃSKI</div>
      <div className="text-header text-lg text-secondary">
        FRONTEND DEVELOPER
      </div>
      <div className="text text-sm mt-2">📍 Poznań, Poland 🇵</div>
      <div className="text text-sm">
        🎓 ICT Engineer, Poznań University of Technology 🏫
      </div>
      <div className="text text-sm text-justify my-4">
        Hello! 👋 I specialize in React and TypeScript, with experience building
        web applications in the financial crime sector. I focus on creating
        efficient software and user-friendly interfaces.
      </div>
      <Socials />
    </section>
  );
};

export default Intro;
