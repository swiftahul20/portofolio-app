import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#a3c7ed] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/95ebefaa-3a3e-480d-b2d1-f23b5103dca1"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-3">
          <p className="text-4xl font-bold inline text-[#5C44CE]">
            {" "}
            Contact{" "}
          </p>
          <p className="text-[#202b4b] py-4"> Submit form </p>
        </div>
        <input
          className="p-2 bg-[#c8ddf5] rounded-md focus:outline-none focus:ring focus:ring-[#4471ce]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#c8ddf5] rounded-md focus:outline-none focus:ring focus:ring-[#4471ce]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#c8ddf5] p-2 rounded-md focus:outline-none focus:ring focus:ring-[#4471ce]"
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="text-[#4471ce] border-[#4471ce] border-2 hover:text-white hover:bg-[#4471ce] hover:border-[#4471ce] px-4 py-4 my-8 mx-auto items-center">
          {" "}
          Let's Collaborate{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
