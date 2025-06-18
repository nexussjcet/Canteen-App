import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Truck, Shield, Award, Users } from 'lucide-react';
import { menuData, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';

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
    <div className="relative w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] md:min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute w-[535px] h-[401px] left-[57px] top-1/2 transform -translate-y-1/2 bg-red-700/40 blur-[225px] hidden lg:block"></div>
        <div className="absolute w-[785px] h-[732px] right-[-200px] top-1/2 transform -translate-y-1/2 bg-red-600/30 blur-[225px] hidden lg:block"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[90vh] md:min-h-screen px-4 sm:px-8 lg:px-16 pt-24 md:pt-32 lg:pt-0">
          <div className="flex-1 text-center lg:text-left lg:max-w-[546px] mb-8 lg:mb-0">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide capitalize mb-4 sm:mb-6">
              "Where Good Food Meets Good Times"
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
              Experience the taste of authentic flavors in our canteen
            </p>
            <Link 
              to="/menu" 
              className="inline-flex items-center justify-center w-full sm:max-w-[278px] h-[50px] sm:h-[55px] bg-red-800/80 hover:bg-red-700 rounded-full font-semibold text-base sm:text-lg text-red-200 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              VIEW MENU
            </Link>
          </div>
        </div>
      </section>
      {/* What's on your mind Section */}
      <section className="py-12 md:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
            What's on your mind?
          </h2>

          {/* First Row - Featured Categories */}
          <div className="hidden md:flex justify-center gap-6 mb-8">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200 w-48"
              >
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                  <span className="text-3xl text-red-700">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm group-hover:text-red-700 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* Second Row - Remaining Categories */}
          <div className="hidden md:flex justify-center gap-6">
            {categories.slice(4).map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200 w-48"
              >
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                  <span className="text-3xl text-red-700">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm group-hover:text-red-700 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* Mobile Grid (shown on smaller screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="group bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-red-100 transition-colors">
                  <span className="text-xl sm:text-2xl text-red-700">{category.icon}</span>
                </div>
                <h3 className="font-medium text-gray-800 text-xs sm:text-sm group-hover:text-red-700 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-red-900 font-bold text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We're committed to providing the best dining experience
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-red-700" />, title: "Quality Food", desc: "Fresh ingredients and authentic recipes for the best taste experience" },
              { icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-red-700" />, title: "Quick Service", desc: "Fast preparation and delivery to save your valuable time" },
              { icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-red-700" />, title: "Home Delivery", desc: "Get your favorite food delivered fresh to your doorstep" },
              { icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-red-700" />, title: "Hygienic", desc: "Maintaining highest standards of cleanliness and food safety" },
              { icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-red-700" />, title: "Award Winning", desc: "Recognized for excellence in taste and customer service" },
              { icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-red-700" />, title: "Happy Customers", desc: "Thousands of satisfied customers who keep coming back" }
            ].map((feature, index) => (
              <div key={index} className="text-center group p-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-red-900 to-red-800 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Ready to Order?
          </h2>
          <p className="text-red-100 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
            Don't wait! Order your favorite dishes now and experience the taste of authentic flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center bg-white text-red-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Order Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-red-900 transition-all duration-300 transform hover:scale-105"
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