import { useState } from "react"
import { data } from '../data/data.js';

const Food = () => {
    const [foods, setFoods] = useState(data)

    // Filter Type burgers/pizza/etc
    const filterType = (category) => {
      setFoods(
        data.filter((item) => {
          return item.category === category
        })
      );
    };

    // Fşkter by price
    const filterPrice = (price) => {
      setFoods(
        data.filter((item)=> {
          return item.price === price
        })
      );
    };


    return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
            <p className="text-lg font-bold text-gray-700">Filter Type</p>
            <div className="flex justify-between flex-wrap">
                <button
                onClick={()=> setFoods(data)} 
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  All</button>
                <button 
                onClick={()=> filterType("burger")}
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  Burgers</button>
                <button 
                onClick={()=> filterType("pizza")}
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  Pizza</button>
                <button 
                onClick={()=> filterType("salad")}
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  Salads</button>
                <button 
                onClick={()=> filterType("chicken")}
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  Chicken</button>
            </div>
        </div>
        {/* Filter Price */}
        <div>
            <p className="text-lg font-bold text-gray-700">Filter Price</p>
            <div className="flex justify-between max-w-[390px] w-full ">
                <button
                onClick={()=> filterPrice("$")} 
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  $</button>
                <button 
                onClick={()=> filterPrice("$$")} 
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  $$</button>
                <button 
                onClick={()=> filterPrice("$$$")} 
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  $$$</button>
                <button  
                onClick={()=> filterPrice("$$$$")}
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                  $$$$</button>
            </div>
        </div>
      </div>
      
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                <img src={item.image} 
                alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg " />
                <div className="flex justify-between px-2 py-4">
                    <p className="font-bold text-lg">{item.name}</p>
                    <p>
                        <span className="bg-orange-600 text-white p-1 rounded-full text-lg">{item.price}</span>
                    </p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Food
