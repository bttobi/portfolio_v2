const socials = [
  {
    text: "Email",
    iconPath: "./logos/mail.svg",
    color: "#8C00A3",
    // TODO: add notification when copying
    // TODO: add tooltips
    action: () => navigator.clipboard.writeText("bartosz@tobinski.pl"),
  },
  {
    text: "LinkedIn",
    iconPath: "./logos/linkedin.svg",
    color: "#0072A9",
    action: () =>
      window.open("https://www.linkedin.com/in/bartosz-tobinski/", "_blank"),
  },
  {
    text: "Github",
    iconPath: "./logos/github.svg",
    color: "transparent",
    action: () => window.open("https://github.com/bttobi", "_blank"),
  },
  {
    text: "Resume",
    iconPath: "./logos/resume.svg",
    color: "#009886",
    action: () =>
      window.open(
        "https://drive.google.com/file/d/1bQoaJ2hbbfTNXjCBzyOezza2QwNOnPV3/view?usp=sharing",
        "_blank",
      ),
  },
];

const Socials = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="rounded-full w-36 mt-10 mb-4 border-primary border-2"
        src="./pictures/profile_picture.jpg"
        alt="Bartosz Tobiński's face"
      />
      <div className="flex gap-4">
        {socials.map((social) => (
          <button
            className="flex flex-col justify-center items-center"
            key={social.text}
            onClick={social.action}
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
          </button>
        ))}
      </div>
    </div>
  );
};

export default Socials;
