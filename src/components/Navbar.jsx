import { Link } from "react-scroll";
import { useState } from "react";
import { GiChefToque } from "react-icons/gi";
import Button from "../templates/Button";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-slate-500 shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <GiChefToque size={32} />
            </span>
            <h1 className="text-xl font-semibold">Culinary Conversations</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-semibold gap-8">
            <Link
              className=" hover:text-white transition-all cursor-pointer"
              to="home"
              duration={500}
              smooth={true}
              spy={true}
            >
              Home
            </Link>
            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-white  transition-all cursor-pointer"
                >
                  Dishes
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block border-2 border-blue-300 bg-slate-500  rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" text-gray-950 hover:text-white transition-all cursor-pointer"
                  >
                    Spicy
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" text-gray-950 hover:text-white transition-all cursor-pointer"
                  >
                    Tasty
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="  text-gray-950 hover:text-white transition-all cursor-pointer"
                  >
                    Delicious
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="  text-gray-950 hover:text-white transition-all cursor-pointer"
                  >
                    Crispy
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              className=" hover:text-white transition-all cursor-pointer"
              to="about"
              duration={500}
              smooth={true}
              spy={true}
            >
              About
            </Link>
            <Link
              className=" hover:text-white transition-all cursor-pointer"
              to="menu"
              duration={500}
              smooth={true}
              spy={true}
            >
              Menu
            </Link>
            <Link
              className=" hover:text-white transition-all cursor-pointer"
              to="review"
              duration={500}
              smooth={true}
              spy={true}
            >
              Reviews
            </Link>
            <Button title="SignIn" />
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-25 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            className=" hover:text-white transition-all cursor-pointer"
            to="home"
            duration={500}
            smooth={true}
            spy={true}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className=" hover:text-white transition-all cursor-pointer"
            to="dishes"
            duration={500}
            smooth={true}
            spy={true}
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            className=" hover:text-white transition-all cursor-pointer"
            to="about"
            duration={500}
            smooth={true}
            spy={true}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className=" hover:text-white transition-all cursor-pointer"
            to="menu"
            duration={500}
            smooth={true}
            spy={true}
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            className=" hover:text-white transition-all cursor-pointer"
            to="review"
            duration={500}
            smooth={true}
            spy={true}
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <Button title="SignIn" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
