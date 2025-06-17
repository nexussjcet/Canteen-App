import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              We are passionate about serving delicious, authentic food that brings people together
              and creates memorable dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to provide quality food at affordable prices, our canteen has
                been serving the community for over a decade. We believe that good food has the
                power to bring people together and create lasting memories.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey started with a simple idea: to serve fresh, homemade-style meals that
                remind you of home. Today, we continue to uphold these values while constantly
                innovating to meet the evolving tastes of our customers.
              </p>
              <p className="text-gray-600">
                Every dish we serve is prepared with love, using the finest ingredients and
                traditional cooking methods that have been passed down through generations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Kitchen"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our ingredients and preparation methods.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">
                We are proud to be an integral part of our local community and culture.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Service</h3>
              <p className="text-gray-600">
                Quick, friendly service that makes every customer feel valued and welcome.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Passion</h3>
              <p className="text-gray-600">
                Every meal is prepared with passion and attention to detail that you can taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">The people behind the delicious food</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Head Chef"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Chef Rajesh Kumar</h3>
              <p className="text-red-700 font-medium mb-2">Head Chef</p>
              <p className="text-gray-600 text-sm">
                15+ years of culinary experience specializing in Indian cuisine
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Priya Sharma</h3>
              <p className="text-red-700 font-medium mb-2">Restaurant Manager</p>
              <p className="text-gray-600 text-sm">
                Ensures exceptional service and customer satisfaction every day
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3771051/pexels-photo-3771051.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Sous Chef"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Chef Amit Singh</h3>
              <p className="text-red-700 font-medium mb-2">Sous Chef</p>
              <p className="text-gray-600 text-sm">
                Passionate about creating innovative dishes while maintaining traditional flavors
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;