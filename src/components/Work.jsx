import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import LaravelProject from "../assets/project-laravel.png";
import ReactTodo from "../assets/todo.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#77a8e3]">
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-[#5C44CE]">
            {" "}
            Work{" "}
          </p>
          <p className="py-6 text-[#202b4b]"> Check out my recent project </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${LaravelProject})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wide">
                Laravel Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/swiftahul20/laravel-project-crud" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-[#4471ce] border-[#4471ce] border-2 hover:text-white hover:bg-[#4471ce] hover:border-[#4471ce] font-bold text-lg">
                    {" "}
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ReactTodo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect  */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wide">
                React ToDo List App
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-todo-list-mift.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-[#4471ce] border-[#4471ce] border-2 hover:text-white hover:bg-[#4471ce] hover:border-[#4471ce] font-bold text-lg">
                    {" "}
                    Demo{" "}
                  </button>
                </a>
                <a href="https://github.com/swiftahul20/react-todo-list-app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-[#4471ce] border-[#4471ce] border-2 hover:text-white hover:bg-[#4471ce] hover:border-[#4471ce] font-bold text-lg">
                    {" "}
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
