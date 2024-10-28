import React from 'react';

const ContactForm = () => {
  return (
    <div className="mx-auto p-4 h-screen w-full bg-white">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-[#5db9ee] ">Contact me</h3>
          <h1 className="text-3xl font-bold text-blue-400">Get in Touch</h1>
        </div>
        <form className="flex flex-col gap-5 w-1/2">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full border-none rounded-md p-4 bg-gray-200 text-base focus:outline focus:outline-blue-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-full border-none rounded-md p-4 bg-gray-200 text-base focus:outline focus:outline-blue-400"
          />
          <input
            type="text"
            placeholder="Email Address"
            required
            className="w-full border-none rounded-md p-4 bg-gray-200 text-base focus:outline focus:outline-blue-400"
          />
          <textarea
            placeholder="Type Your Message Here"
            rows={6}
            required
            className="w-full border-none rounded-md p-4 bg-gray-200 text-base resize-none focus:outline focus:outline-blue-400"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-md cursor-pointer hover:bg-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
