import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const BottomNav = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { user } = useAuth();
  const totalItems = getTotalItems();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/menu', icon: Menu, label: 'Menu' },
    { path: '/cart', icon: ShoppingCart, label: 'Cart', count: totalItems },
    { path: user ? '/profile' : '/login', icon: User, label: user ? 'Profile' : 'Login' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="grid grid-cols-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 px-2 relative transition-colors ${
                isActive 
                  ? 'text-red-700 bg-red-50' 
                  : 'text-gray-600 hover:text-red-700'
              }`}
            >
              {/* Cart count badge positioned above icon */}
              {item.count !== undefined && item.count > 0 && (
                <span className="absolute -top-1 right-4 bg-red-600 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {item.count}
                </span>
              )}
              
              <div className="relative mt-1">
                <Icon size={20} />
              </div>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;