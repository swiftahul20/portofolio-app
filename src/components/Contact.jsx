import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/95ebefaa-3a3e-480d-b2d1-f23b5103dca1"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-[#6B7FD7] text-gray-300">
            {" "}
            Contact{" "}
          </p>
          <p className="text-gray-300 py-4"> Submit form </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#6B7FD7] hover:border-[#6B7FD7] px-4 py-4 my-8 mx-auto items-center">
          {" "}
          Let's Collaborate{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
