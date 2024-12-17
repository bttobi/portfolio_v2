import { useState } from "react";
import { Link } from ".";
import { Icon, IconType } from "../icons";

const sections = [
  {
    text: "About",
    icon: IconType.ACCOUNT_CIRCLE,
  },
  { text: "Experience", icon: IconType.WORK },
  { text: "Tech Stack", icon: IconType.CONSTRUCTION },
  { text: "Education", icon: IconType.SCHOOL },
  { text: "Resume", icon: IconType.DESCRIPTION },
];

const Navbar = () => {
  const [isOpen, toggleOpen] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        className={`${isOpen ? "text-white" : "text-primary"} z-10 fixed top-0 left-0`}
        onClick={() => toggleOpen((prev) => !prev)}
      >
        <Icon type={isOpen ? IconType.CANCEL : IconType.MENU} />
      </button>
      {isOpen && (
        <nav className="flex flex-col justify-evenly items-center w-16 h-full fixed bg-primary">
          {sections.map((section) => (
            <Link key={section.text} className="flex flex-col items-center">
              <Icon type={section.icon} />
              <span className="text-xs text-white">{section.text}</span>
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
