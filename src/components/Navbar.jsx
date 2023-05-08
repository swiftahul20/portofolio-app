import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineNewspaper } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Avatar from "../assets/avatar.png";
import { Link } from "react-scroll";
import Pdf from '../assets/cvats.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          className="rounded-full"
          src={Avatar}
          alt="avatar"
          style={{ width: "50px" }}
        />
      </div>

      {/* menu  */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link  onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link  onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link  onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>{" "}
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>{" "}
        </li>
      </ul>

      {/* social icon  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
            <a
              href="https://www.linkedin.com/in/miftahul-habib-4b4bb4194/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DB4437]">
            <a
              href="/"
              onClick={() => window.location = 'mailto:miftahul.habib1992@gmail.com'}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#299ac7]">
            <a
              href={Pdf}
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <HiOutlineNewspaper size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
