import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your form has been submitted!");
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="bg-[#000] w-full h-full mx-auto flex flex-col justify-center items-center py-16 px-4">
      <h1 className="heading text-center text-3xl md:text-4xl lg:text-5xl text-white mb-12">
        <span className="text-yellow-500">Contact</span> Us
      </h1>
      <div className="max-w-sm md:max-w-lg">
        <div className="bg-black py-12 px-20 rounded-3xl shadow-lg border border-yellow-500 border-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffc107] mb-8 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="text-white text-xl md:text-2xl mb-2 block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 text-xl text-white bg-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="text-white text-xl md:text-2xl mb-2 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 text-xl text-white bg-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn w-full py-4 text-lg md:text-xl font-bold text-black bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
