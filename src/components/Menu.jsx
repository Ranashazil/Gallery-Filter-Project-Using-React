import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="bg-yellow-100 p-6">
      {items.map((menuItem) => {
        const { id, title, description, img, price } = menuItem;

        return (
          <div
            className="bg-blue-300 shadow-lg rounded-lg overflow-hidden m-6 flex flex-col md:flex-row transition-transform transform hover:scale-105 active:scale-95 active:bg-gray-200 hover:bg-purple-400 hover:text-lg"
            key={id}
          >
            <img
              src={img}
              alt={title}
              className="w-full md:w-1/3 object-cover h-64 transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-6 flex flex-col justify-between">
              <header className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                <h4 className="text-xl font-bold text-indigo-600">{`$${price}`}</h4>
              </header>
              <p className="text-gray-700 font-medium mb-4">{description}</p>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 active:bg-indigo-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
