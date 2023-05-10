import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#FFE787] font-bold text-spacing">
          {" "}
          Hello, my name is{" "}
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#BCEDF6]">
          {" "}
          Miftahul Habib{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#DDFBD2]">
          {" "}
          I'm a Frontend Web Developer.{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {""}
          I’m a front-end web developer specializing in turning and building
          UI/UX designs into fully operable websites.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6B7FD7] hover:border-[#6B7FD7]">
              {" View Work"}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
