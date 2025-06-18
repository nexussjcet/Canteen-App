import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Utensils, User, Phone, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const isHomePage = location.pathname === '/';
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/menu', label: 'Menu', icon: Utensils },
    { path: '/about', label: 'About Us', icon: User },
    { path: '/contact', label: 'Contact Us', icon: Phone },
    { path: user ? '/profile' : '/login', label: user ? 'Profile' : 'Login', icon: User },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isHomePage) {
    return (
      <>
        {/* Desktop Navigation for Home Page */}
        <div className="hidden lg:block fixed w-[788px] h-[72px] left-1/2 top-[40px] transform -translate-x-1/2 bg-white/28 backdrop-blur-sm shadow-lg rounded-tr-[40px] z-50">
          <div className="flex justify-around items-center h-full px-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center text-white text-[20px] font-medium capitalize hover:text-red-300 transition-colors duration-300"
              >
                <Icon className="mr-2" size={20} />
                {label}
              </Link>
            ))}
            {/* Desktop-only Cart */}
            <Link
              to="/cart"
              className="flex items-center text-white text-[20px] font-medium capitalize hover:text-red-300 transition-colors duration-300 relative"
            >
              <ShoppingCart className="mr-2" size={20} />
              Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation for Home Page */}
        <div className="lg:hidden fixed top-4 right-4 z-50">
          <button
            onClick={toggleMobileMenu}
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-red-900/95 backdrop-blur-sm z-40 flex items-center justify-center">
            <div className="text-center space-y-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center text-white text-2xl font-medium hover:text-red-300 transition-colors"
                >
                  <Icon className="mr-3" size={24} />
                  {label}
                </Link>
              ))}
              {/* Removed cart from mobile menu since it will be in bottom nav */}
            </div>
          </div>
        )}
      </>
    );
  }

  // Mobile-first navigation for other pages
  return (
    <>
      {/* Desktop Navigation Header for other pages */}
      <div className="hidden lg:block fixed w-full top-0 bg-gradient-to-r from-red-900 to-red-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-white text-xl font-bold">
              Canteen
            </Link>
            <div className="flex items-center space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center text-white text-lg font-medium hover:text-red-300 transition-colors ${
                    location.pathname === path ? 'text-red-300' : ''
                  }`}
                >
                  <Icon className="mr-2" size={18} />
                  {label}
                </Link>
              ))}
              {/* Desktop-only Cart */}
              <Link
                to="/cart"
                className="relative text-white hover:text-red-300 transition-colors"
              >
                <ShoppingCart size={24} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Header for other pages */}
      <nav className="lg:hidden fixed w-full top-0 bg-gradient-to-r from-red-900 to-red-800 shadow-lg z-50">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-white text-xl font-bold">
              Canteen
            </Link>
            <div className="flex items-center space-x-4">
              {/* Removed cart from mobile header since it will be in bottom nav */}
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 hover:text-red-300 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-red-900/98 backdrop-blur-sm border-t border-red-800">
            <div className="px-4 py-4 space-y-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center text-lg font-medium transition-colors duration-300 ${
                    location.pathname === path
                      ? 'text-red-300'
                      : 'text-white hover:text-red-300'
                  }`}
                >
                  <Icon className="mr-3" size={18} />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;