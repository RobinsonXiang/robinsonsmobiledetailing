'use client';

import React from 'react';
import { Phone, MessageCircle, Star, Car, Sparkles, Shield, Clock, MapPin } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactElement;
}

export default function Home(): React.ReactElement {
  const services: Service[] = [
    {
      id: 1,
      name: "Interior Detail",
      price: "$99+",
      description: "Deep clean and protection for your vehicle's interior",
      features: [
        "Vacuum all surfaces and crevices",
        "Steam clean seats and carpets",
        "Dashboard and console cleaning",
        "Leather conditioning",
        "Glass cleaning (interior)",
        "Air freshener application"
      ],
      icon: <Car className="w-8 h-8" />
    },
    {
      id: 2,
      name: "Exterior Detail",
      price: "$99+",
      description: "Complete exterior wash, wax, and protection",
      features: [
        "Hand wash and dry",
        "Clay bar treatment",
        "Premium wax application",
        "Tire shine and wheel cleaning",
        "Chrome polishing",
        "Glass cleaning (exterior)"
      ],
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      id: 3,
      name: "Complete Detail",
      price: "$199",
      description: "Full interior and exterior detailing package",
      features: [
        "Everything from Interior Detail",
        "Everything from Exterior Detail",
        "Engine bay cleaning",
        "Headlight restoration",
        "Paint protection application",
        "30-day satisfaction guarantee"
      ],
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const handleCall = (): void => {
    if (typeof window !== 'undefined') {
      window.open('tel:408-333-2639', '_self');
    }
  };

  const handleText = (): void => {
    if (typeof window !== 'undefined') {
      window.open('sms:408-333-2639', '_self');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Robinson's Mobile Detailing</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCall}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <Car className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Mobile Detailing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional car detailing services that come to you. Experience the difference of premium care for your vehicle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleCall}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>Call (408) 333-2639</span>
            </button>
            <button
              onClick={handleText}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              <span>Text Us</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Mobile Service</h3>
              <p className="text-gray-300">We come to you</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-300">7 days a week</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-300">100% satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive detailing packages designed to keep your vehicle looking its absolute best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-gradient-to-br ${
                  index === 0 ? 'from-blue-50 to-blue-100 border-blue-200' :
                  index === 1 ? 'from-purple-50 to-purple-100 border-purple-200' :
                  'from-green-50 to-green-100 border-green-200'
                } border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    index === 0 ? 'bg-blue-600 text-white' :
                    index === 1 ? 'bg-purple-600 text-white' :
                    'bg-green-600 text-white'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        index === 0 ? 'bg-blue-600' :
                        index === 1 ? 'bg-purple-600' :
                        'bg-green-600'
                      }`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCall}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    index === 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                    index === 1 ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                    'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Call or text us today to schedule your mobile detailing service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleCall}
              className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>Call (408) 333-2639</span>
            </button>
            <button
              onClick={handleText}
              className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              <span>Text Us</span>
            </button>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">Robinson's Mobile Detailing</span>
            </div>
            <p className="text-gray-400">
              Professional mobile car detailing services • San Jose, CA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}