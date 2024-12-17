import React from "react";

const socials = [
  { text: "Email", icon: "", color: "" },
  { text: "LinkedIn", icon: "", color: "" },
  { text: "Github", icon: "", color: "" },
  { text: "Resume", icon: "", color: "" },
];

const Socials = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="rounded-full w-36 mt-10 mb-4"
        src="../../../../public/pictures/profile_picture.jpg"
        alt="Bartosz Tobiński's face"
      />
      <div className="flex gap-4">
        {socials.map((social) => (
          <div>
            <div>{social.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
