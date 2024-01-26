import React from "react";

import work from "./utils/library/work-lib";

const Work = () => {
  return (
    <div name="work" className="w-full bg-[#77a8e3] dark:bg-slate-800">
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-[#5C44CE] dark:text-[#bb85fc]">
            {" "}
            Work{" "}
          </p>
          <p className="py-6 text-[#202b4b] dark:text-gray-400">
            {" "}
            Check out my recent project{" "}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {work.map((data, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${data.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-black tracking-wide">
                  {data.title}
                </span>
                {data.onGoing ? <span className="text-center block text-lg italic"> Ongoing </span> : ""}
                <div className="pt-8 text-center">
                  <a href={data.hrefRepo} target="_blank">
                    <button className="text-center font-bold text-md rounded-lg px-3 py-1 m-2 text-[#4471ce] border-[#4471ce] border-2 hover:text-white hover:bg-[#4471ce] hover:border-[#4471ce]">
                      {" "}
                      Code{" "}
                    </button>
                  </a>
                  <a href={data.hrefDemo} target="_blank">
                    <button className="text-center font-bold text-md rounded-lg px-3 py-1 m-2 text-[#4471ce] border-[#4471ce] border-2 hover:text-white hover:bg-[#4471ce] hover:border-[#4471ce] ">
                      {" "}
                      Demo{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
