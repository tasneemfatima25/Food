import React, { useState } from "react";
import { menu } from "./MenuData";

const Menu = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section className="mx-auto w-full h-full bg-[#000] py-16 px-4 md:px-8 lg:px-16">
        <h1 className="heading text-center text-3xl md:text-4xl lg:text-5xl text-white mb-8">
          Our <span className="text-yellow-500">Menu</span>
        </h1>

        <div className="box-container flex flex-wrap justify-center gap-8 ">
          {menu.map((item, index) => (
            <div className="rounded-3xl shadow-2xl p-4 bg-black border border-2 border-yellow-500 flex flex-col" key={index}>
              <img
                src={item.img}
                alt={item.name}
                className="rounded-t-3xl w-full h-48 object-cover"
              />
              <h3 className="text-xl text-white font-semibold mt-4">{item.name}</h3>
              <div className="text-white text-2xl font-bold mt-2">${item.price.toFixed(2)}</div>
              <button
                onClick={() => handleViewDetails(item)}
                className="bg-yellow-500 text-black py-2 px-4 rounded-xl mt-4 hover:bg-yellow-600 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        {showDetails &&  (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg overflow-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedItem.name}</h2>
            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-800 text-lg md:text-xl font-semibold mb-6">
              {selectedItem.description}
            </p>
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ${selectedItem.price.toFixed(2)}
            </div>
            <button
              onClick={handleCloseDetails}
              className="bg-yellow-500 text-black w-full py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </section>

      
    </>
  );
};

export default Menu;
