import React from 'react';

const Categories = ({ categories, filterItem }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="p-3 m-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            key={index}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
