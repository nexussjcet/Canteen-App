import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout.tsx';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login.tsx';
import Signup from './pages/signup.tsx';
import Profile from './pages/Profile.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';

import FoodCard from "./components/FoodCard";
import teaImg from "@/assets/tea.png";
import coffeeImg from "@/assets/coffee.png";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Admin route outside layout */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Routes inside layout */}
            <Route
              path="*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/foodcards" element={
                      <div className="min-h-screen bg-[#F9FAFB] p-4 flex flex-col gap-4 items-center">
                        <FoodCard title="Tea" price={10} image={teaImg} />
                        <FoodCard title="Coffee" price={15} image={coffeeImg} />
                      </div>
                    } />
                  </Routes>
                </Layout>
              }
            />

            {/* Auth pages outside layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;