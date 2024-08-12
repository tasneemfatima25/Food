import React,{useState} from "react";
import { blog } from "../Data";

const Blog = () => {
  const[showDetails, setShowDetails] = useState(false);
  const[filteredItem, setFilteredItem] = useState(null);
 
  const handleButtonClick = (item) =>{
    setFilteredItem(item);
    setShowDetails(true);
  }


  const closeHandle = () => {
    setShowDetails(false);
    
  }
  
  return (
    <>
      <section className="w-full h-full mx-auto bg-[#000] py-16 px-4" id="blogs">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-white mb-12">
          Our <span className="text-yellow-500">Blogs</span>
        </h1>

        <div className="box-container flex flex-wrap justify-center gap-8">
          {blog.map((item, index) => (
            <div className="box rounded-3xl shadow-xl bg-black border border-2 border-yellow-500 max-w-xs md:max-w-sm" key={index}>
              <div className="image rounded-t-3xl overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              </div>
              <div className="content p-6">
                <a href="#" className="title block text-white text-2xl font-bold mb-4 hover:underline">
                  {item.title}
                </a>
                <span className="text-white mb-4 block">by admin / 21st May, 2021</span>
                <p className="text-white mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.
                </p>
                <button onClick={()=>{handleButtonClick(item)}} className="btn px-6 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

      {showDetails && filteredItem && (<div className="fixed flex inset-0 bg-gray-900 bg-opacity-75 w-full h-full justify-center items-center">
       <div className="max-w-5xl text-center">
        <h1 className="text-6xl text-white py-4">Hello</h1>
        <p className="text-2xl text-white py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea, ab, dolorum nulla voluptas harum reiciendis delectus nobis, provident quod incidunt et quae libero placeat! Ratione laboriosam magni et sit.</p>
        <button onClick={closeHandle} className="bg-yellow-500 py-4 px-8 rounded-lg hover:bg-red-500 text-white font-bold text-2xl">Close</button>
        </div>
      </div>
      )}





      </section>
    </>
  );
};

export default Blog;
