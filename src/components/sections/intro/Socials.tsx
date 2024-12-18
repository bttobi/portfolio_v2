import { Icon, IconType } from "../../icons";

const socials = [
  { text: "Email", iconPath: "", color: "white", link: "" },
  {
    text: "LinkedIn",
    iconPath: "./logos/linkedin.svg",
    color: "#0072A9",
    link: "",
  },
  { text: "Github", iconPath: "./logos/github.svg", color: "#FFF", link: "" },
  { text: "Resume", iconPath: "", color: "#009886", link: "" },
];

const Socials = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="rounded-full w-36 mt-10 mb-4"
        src="./pictures/profile_picture.jpg"
        alt="Bartosz Tobiński's face"
      />
      <div className="flex gap-4">
        {socials.map((social) => (
          <a
            className="flex flex-col justify-center items-center"
            href={social.link}
            target="_blank"
            key={social.text}
          >
            <div
              style={{ backgroundColor: social.color }}
              className={
                "flex justify-center items-center w-10 h-10 rounded-full bg-white"
              }
            >
              <img alt="logo" width="44px" src={social.iconPath} />
            </div>
            {social.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
