import React from "react";
import { review } from "../Data";
import quoteImg from "../assets/images/quote-img.png";

const Review = () => {
  return (
    <section className="w-full h-full mx-auto bg-[#000] py-16 px-4 md:px-8 lg:px-16">
      <h1 className="heading text-center text-white text-4xl md:text-6xl mb-12">
        Customer's <span className="text-yellow-500">Review</span>
      </h1>

      <div className="box-container flex flex-wrap justify-center gap-8">
        {review.map((item, index) => (
          <div className="box bg-black border border-2 border-yellow-500 text-white rounded-3xl p-6 max-w-xs md:max-w-sm shadow-2xl" key={index}>
            <img src={quoteImg} alt="Quote" className="quote w-8 h-8 mb-4" />
            <p className="mb-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
            </p>
            <img src={item.img} className="user w-24 h-24 rounded-full mx-auto mb-4" alt="User" />
            <h3 className="text-xl md:text-2xl font-bold">Name</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
