import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { menuData, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const { addToCart } = useCart();

  const filteredItems = selectedCategory === 'all'
    ? menuData
    : menuData.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
    });
  };

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-900 to-red-800 w-full px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">Our Menu</h1>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs - Horizontal Scroll */}
          <div className="w-full mb-8 overflow-x-auto">
            <div className="flex space-x-2 pb-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-red-700 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-red-50'
                  }`}
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl sm:rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="flex flex-col h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.name}</h3>
                      <button className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
                        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-bold text-red-700">₹{item.price}</span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 w-full">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No items found</h3>
              <p className="text-gray-600 text-lg">Try selecting a different category or search term.</p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="mt-4 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                View All Items
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;