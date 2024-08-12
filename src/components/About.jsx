import React from "react";
import aboutImg from "../assets/images/about-img.png";

const About = () => {
  return (
    <section className="bg-[#000] py-16 px-4 md:px-8 lg:px-16 w-full h-full mx-auto" id="about">
      <h1 className="heading text-center text-3xl md:text-4xl lg:text-5xl text-white mb-8">
        <span className="text-yellow-500">About</span> Us
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 container mx-auto">
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="flex-1 bg-[#1c1c1c] text-white p-8 md:p-12 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold my-4">
            What makes our food special?
          </h3>
          <p className="mb-4 text-sm md:text-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?
          </p>
          <p className="mb-6 text-sm md:text-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?
          </p>
          <a href="#" className="btn bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
