import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 px-4 py-6">
          <div className="max-w-md mx-auto">
            <h1 className="text-white text-2xl font-bold text-center">Your Cart</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-4 py-20">
          <div className="text-center bg-white rounded-2xl p-12">
            <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-red-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Looks like you haven't added any delicious items to your cart yet. 
              Browse our menu and discover amazing flavors!
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="mr-2" size={20} />
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const deliveryFee = 30;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-900 to-red-800 px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-white text-2xl font-bold text-center">Your Cart</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-600 capitalize text-sm mb-2">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-red-700">₹{item.price}</span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-red-50 hover:text-red-700 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-2 font-medium text-sm min-w-[40px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-red-50 hover:text-red-700 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Bill Details</h2>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Item Total</span>
              <span className="font-medium">₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Taxes & Charges</span>
              <span className="font-medium">₹{tax}</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>To Pay</span>
                <span className="text-red-700">₹{total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleCheckout}
            className="w-full bg-red-700 hover:bg-red-800 text-white py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
          >
            <CreditCard className="mr-2" size={20} />
            Proceed to Pay
          </button>

          <Link
            to="/menu"
            className="block w-full text-center text-red-700 py-4 px-4 border-2 border-red-700 rounded-xl font-bold hover:bg-red-50 transition-colors duration-300"
          >
            Add More Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;