import React from 'react';
import { Star, Users, Award, Clock, Heart, Utensils } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: Utensils, label: 'Dishes Served', value: '50,000+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Clock, label: 'Years of Service', value: '8+' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Head Chef',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      description: 'Master of traditional Indian cuisine with 15+ years of experience'
    },
    {
      name: 'Priya Sharma',
      role: 'Kitchen Manager',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      description: 'Ensures quality and hygiene standards in every dish we serve'
    },
    {
      name: 'Amit Singh',
      role: 'Service Manager',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      description: 'Dedicated to providing exceptional customer service experience'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Food Image */}
      <section className="relative bg-gradient-to-br from-red-900 to-red-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-red-100 text-lg lg:text-xl leading-relaxed mb-8">
                Discover the story behind our passion for authentic flavors and exceptional dining experiences. 
                We've been serving delicious, home-style cooking to our community since 2016.
              </p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
                VIEW MENU
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-red-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 2016, our canteen began as a small dream to bring authentic, home-style cooking to our community. What started as a humble food stall has grown into a beloved dining destination.
                </p>
                <p>
                  We believe that great food brings people together. Every dish we serve is prepared with the same care and attention as if we were cooking for our own family. Our recipes have been passed down through generations, ensuring that every bite carries the authentic taste of traditional Indian cuisine.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers who have made us a part of their daily lives. From students grabbing a quick bite between classes to families enjoying weekend meals, we're honored to be your food destination.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
                alt="Our kitchen"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-700 text-white p-6 rounded-2xl shadow-xl">
                <Heart className="w-8 h-8 mb-2" />
                <p className="font-bold">Made with Love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-red-100 text-lg">Numbers that speak for our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/20 transition-colors duration-300">
                  <stat.icon className="w-12 h-12 text-red-200 mx-auto mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-red-100 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide delicious, authentic, and affordable food that brings joy to every meal. We strive to create a welcoming environment where everyone feels at home while enjoying the finest flavors of traditional Indian cuisine.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted and beloved food destination in our community, known for exceptional quality, outstanding service, and the authentic taste that reminds everyone of home-cooked meals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate people behind every delicious meal you enjoy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-red-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">We never compromise on the quality of ingredients and preparation methods.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Focus</h3>
              <p className="text-gray-600 leading-relaxed">Every decision we make is centered around our customers' satisfaction and happiness.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">We preserve traditional recipes and cooking methods to deliver authentic flavors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;