import { Link } from ".";

const Navbar = () => {
  const links = ["Home", "Experience", "Skills", "Resume"];
  return (
    <div className="flex justify-evenly items-center w-full h-16 fixed bg-black">
      {links.map((link) => (
        <Link key={link}>{link}</Link>
      ))}
    </div>
  );
};

export default Navbar;
