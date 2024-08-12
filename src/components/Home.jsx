import React, { useState } from "react";
import { product } from "./ProductData";
import backgroundImage from "../assets/images/home-img.jpeg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [filteredItem, setFilteredItem] = useState(null);
  const [quantity, setQuantity] = useState(1)

  const quantityChange = (e) =>{
        const value= e.target.value;
        setQuantity(Number(value));
  }
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = product.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  const handleButtonClick = () => {
    if (searchTerm) {
      const filtered = product.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  const handleForm = (item) =>{
    setFilteredItem(item);
    setShowOrderForm(true);
    setFilteredItems([]);

  }
  const cancelOrder = () =>{
    setShowOrderForm(false);
  }
  const handleSubmit = () =>{
    alert(`Submit your ${filteredItem.name} order ${quantity}`);
    setShowOrderForm(false);
    setSearchTerm("");
  }

 

  return (
    <>
    <section
      className="relative w-full h-full mx-auto bg-[#000] justify-center items-center py-64"

    >
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mx-auto container"
          src={backgroundImage}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50 mx-auto container"></div>
      </div>
      <div className="relative text-center text-white">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-500">FoodTech</span>
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6">
          Explore our delicious food items and place your order now!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search food items..."
            value={searchTerm}
            onChange={handleSearch}
            className="py-2 px-4 bg-gray-800 text-white text-xl rounded-lg w-full sm:w-auto"
          />
          <button
            onClick={handleButtonClick}
            className="bg-yellow-500 text-white text-xl font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition"
          >
            Search
          </button>
        </div>
      </div>


      <div className="box-container mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10 max-w-screen-lg mx-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="bg-black border border-2 border-yellow-500 text-white rounded-2xl shadow-xl overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <div className="price text-lg mb-2">${item.price.toFixed(2)}</div>
                <button onClick={() =>{handleForm(item)}} className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
                  Order now
                </button>
              </div>
            </div>
          ))
        ) : (
          searchTerm && <p className="text-xl mt-4 text-yellow-500">No food items found</p>
        )}
      </div>
    

         

    {showOrderForm && filteredItem && (<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl text-white font-bold mb-4 text-center">{filteredItem.name}</h2>
            <form  onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="quantity" className="text-white text-2xl font-semibold mb-2 block">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min="1"
                  onChange={quantityChange}
                  className="w-full p-4 bg-gray-200 text-xl rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="btn w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
              >
                Submit Order
              </button>
              <button
                type="button"
                onClick={cancelOrder}
                className="btn w-full mt-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-400"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>)}
        </section>
      </>
  );
};

export default Home;
