import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Food Street, Canteen Block', 'City Center, State 12345', 'India'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@canteenapp.com', 'orders@canteenapp.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Friday: 8:00 AM - 9:00 PM', 'Saturday - Sunday: 9:00 AM - 10:00 PM'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-red-100 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Get in touch with us for any queries, feedback, or suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-red-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have questions about our menu, want to place a bulk order, or just want to share feedback? 
                  We're here to help and would love to hear from you.
                </p>
              </div>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-2xl">
                      <info.icon className="w-6 h-6 text-red-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Cards */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Phone className="w-8 h-8 text-red-700 mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2">Call Us Now</h4>
                  <p className="text-gray-600 text-sm">For immediate assistance</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <MessageCircle className="w-8 h-8 text-red-700 mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2">Live Chat</h4>
                  <p className="text-gray-600 text-sm">Chat with our support team</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-red-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Find Us</h2>
            <p className="text-gray-600 text-lg">Visit us at our location for the best dining experience</p>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-200 h-96 rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-red-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-900 mb-2">Interactive Map</h3>
              <p className="text-red-700 text-lg">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What are your delivery hours?</h3>
              <p className="text-gray-600">We deliver from 11:00 AM to 9:00 PM on weekdays and 11:00 AM to 10:00 PM on weekends.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Do you cater for events?</h3>
              <p className="text-gray-600">Yes! We provide catering services for events, parties, and corporate functions. Contact us for custom quotes.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are there vegetarian options?</h3>
              <p className="text-gray-600">Absolutely! We have a wide variety of delicious vegetarian dishes clearly marked on our menu.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;