import React, { useState } from 'react';
import Menu from './components/Menu';
import mine from './components/Data';
import Categories from './components/Categories';
import './App.css';

const allCategories = ['all', ...new Set(mine.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(mine);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItem(mine);
      return;
    }
    const newItem = mine.filter((item) => item.category === category);
    setMenuItem(newItem);
  };

  return (
    <div className="bg-gray-400 min-h-screen p-8">
      <div className="text-center mb-12">
      <div className="text-center mb-12">
      <div className="text-center mb-12">
  <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block cursor-pointer transition-transform transition-colors duration-300 transform hover:scale-105 hover:text-pink-500 active:scale-95 active:text-indigo-600 focus:text-purple-600 hover:underline">
    Our Main Menu
    {/* Stylish animated underline */}
    <span className="underline-animation absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-4 h-1"></span>
  </h2>
</div>

</div>

      </div>

      <Categories categories={categories} filterItem={filterItem} />
      <Menu items={menuItem} />
    </div>
  );
}

export default App;
