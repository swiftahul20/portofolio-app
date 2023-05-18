import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#a3c7ed] dark:bg-[#121212]">
      {/* container */}
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#5C44CE] font-bold text-spacing dark:text-[#bb85fc]">
          {" "}
          Hello, my name is{" "}
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#2e437a] dark:text-[#4100da]">
          {" "}
          Miftahul Habib{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#395dbc] dark:text-gray-400">
          {" "}
          I'm a Frontend Web Developer.{" "}
        </h2>
        <p className="text-[#202b4b] py-4 max-w-[700px] dark:text-slate-500">
          {""}
          I’m a front-end web developer specializing in turning and building
          UI/UX designs into fully operable websites.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-[#4471ce] border-[#4471ce] border-2 px-6 py-3 my-2 flex items-center 
              hover:text-white hover:bg-[#4471ce] hover:border-[#4471ce]
              dark:text-[#4100da] dark:border-[#4100da] dark:hover:text-gray-100 dark:hover:bg-[#4100da]">
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
