import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#77a8e3] dark:bg-slate-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-[#5C44CE] font-bold inline dark:text-[#bb85fc]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-[#2e437a] dark:text-[#4100da]">
            <p>
              Hello I'm Miftahul Habib, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="text-[#202b4b] dark:text-gray-400">
              I am a hard-worker, enthusiastic, and eager to learn new things.
              My skills are in the fields of Front-end Web Developer. Currently
              using ReactJS and Tailwind as a framework and styling. Looking
              forward for an opportunity to work together
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
