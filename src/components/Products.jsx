import React, { useState } from "react";
import { product } from "./ProductData";

const Products = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (item) => {
    setSelectedProduct(item);
    setShowOrderForm(true);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${quantity} of ${selectedProduct.name}`);
    setShowOrderForm(false);
    setQuantity(1);
  };

  return (
    <>
      <section className="w-full h-full mx-auto bg-[#000] py-16">
        <h1 className="heading text-center text-white text-4xl md:text-6xl mb-12">
          Our <span className="text-yellow-500">Products</span>
        </h1>

        <div className="box-container flex flex-wrap justify-center gap-8">
          {product.map((item, index) => (
            <div className="box rounded-3xl shadow-2xl max-w-xs md:max-w-sm bg-black border border-2 border-yellow-500" key={index}>
              <div className="image overflow-hidden rounded-t-3xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 md:h-64 object-cover transition-transform transform hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl text-white font-bold">{item.name}</h3>
                <div className="text-white text-xl mt-2">
                  ${item.price.toFixed(2)} <span className="line-through text-yellow-500">${item.oldPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showOrderForm &&   selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-center">{selectedProduct.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="quantity" className="text-white text-2xl font-semibold mb-2 block">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min="1"
                  onChange={handleQuantityChange}
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
                onClick={() => setShowOrderForm(false)}
                className="btn w-full mt-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-400"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
