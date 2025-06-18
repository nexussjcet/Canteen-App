import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Truck, Shield, Award, Users } from 'lucide-react';
import { menuData, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';
import heroImage from '../components/hero.png';;


const Home = () => {
  const featuredItems = menuData.slice(0, 6);
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute w-[535px] h-[401px] left-[57px] top-1/2 transform -translate-y-1/2 bg-red-700/40 blur-[225px] hidden lg:block"></div>
        <div className="absolute w-[785px] h-[732px] right-[-200px] top-1/2 transform -translate-y-1/2 bg-red-600/30 blur-[225px] hidden lg:block"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 lg:px-16 pt-32 lg:pt-0">
          <div className="flex-1 text-center lg:text-left lg:max-w-[546px] mb-8 lg:mb-0">
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide capitalize mb-6">
              "Where Good Food Meets Good Times"
            </h1>
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
              Experience the taste of authentic flavors in our canteen
            </p>
            <Link 
              to="/menu" 
              className="inline-flex items-center justify-center w-full max-w-[278px] h-[55px] bg-red-800/80 hover:bg-red-700 rounded-full font-semibold text-lg text-red-200 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              VIEW MENU
            </Link>
          </div>

          </div>
      </section>

      {/* What's on your mind Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">What's on your mind?</h2>
          <div className="grid grid-cols-3 gap-6 mb-12">
            {categories.slice(1, 4).map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-red-50 transition-colors">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-medium text-gray-800 text-sm">{category.name}</h3>
              </Link>
            ))}
          </div>

          {/* Featured Items */}
          <div className="space-y-4">
            {featuredItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-red-700 font-bold">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-50 transition-colors">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-red-900 font-bold text-4xl lg:text-5xl mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to providing the best dining experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Food</h3>
              <p className="text-gray-600 leading-relaxed">Fresh ingredients and authentic recipes for the best taste experience</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quick Service</h3>
              <p className="text-gray-600 leading-relaxed">Fast preparation and delivery to save your valuable time</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-10 h-10 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Home Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Get your favorite food delivered fresh to your doorstep</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hygienic</h3>
              <p className="text-gray-600 leading-relaxed">Maintaining highest standards of cleanliness and food safety</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Award Winning</h3>
              <p className="text-gray-600 leading-relaxed">Recognized for excellence in taste and customer service</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Happy Customers</h3>
              <p className="text-gray-600 leading-relaxed">Thousands of satisfied customers who keep coming back</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-white font-bold text-4xl lg:text-5xl mb-6">
            Ready to Order?
          </h2>
          <p className="text-red-100 text-lg lg:text-xl mb-8 leading-relaxed">
            Don't wait! Order your favorite dishes now and experience the taste of authentic flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center bg-white text-red-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Order Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-900 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;