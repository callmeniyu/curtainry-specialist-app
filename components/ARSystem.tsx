'use client';

import React from 'react';
import { Smartphone, Camera, Eye, Sparkles, Zap, Clock, ArrowRight } from 'lucide-react';

interface ARSystemProps {
  userType: 'consultant' | 'fitter';
}

const ARSystem: React.FC<ARSystemProps> = ({ userType }) => {
  const features = [
    {
      icon: Camera,
      title: 'Virtual Room Scan',
      description: 'Scan customer rooms with AR to visualize curtain placements instantly'
    },
    {
      icon: Eye,
      title: 'Real-time Preview',
      description: 'Show customers exactly how different curtains will look in their space'
    },
    {
      icon: Sparkles,
      title: 'Style Matching',
      description: 'AI-powered recommendations based on room decor and lighting'
    },
    {
      icon: Zap,
      title: 'Quick Measurements',
      description: 'Accurate measurements using AR technology for perfect fitting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-purple-200">
            <Smartphone className="text-purple-600" size={24} />
            <span className="text-lg font-semibold text-purple-800">AR Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Augmented Reality
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Curtain Visualization
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AR technology coming soon to transform how {userType === 'consultant' ? 'consultants design and present' : 'customers visualize'} curtain solutions
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full shadow-lg">
            <Clock size={24} />
            <span className="text-xl font-bold">Coming Soon - Q1 2026</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Preview Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Will Work</h2>
            <p className="text-lg text-gray-600">Experience the future of curtain consultation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scan Room</h3>
              <p className="text-gray-600">Point your device camera at the windows and room</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visualize</h3>
              <p className="text-gray-600">See different curtain styles in real-time AR</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finalize</h3>
              <p className="text-gray-600">Get measurements and place orders instantly</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-16 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Benefits for {userType === 'consultant' ? 'Consultants' : 'Professionals'}</h2>
            <p className="text-xl opacity-90">Revolutionize your workflow with AR technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userType === 'consultant' ? (
              <>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Instant Visualization</h3>
                  <p className="opacity-90">Show clients exactly how curtains will look without physical samples</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Higher Conversion</h3>
                  <p className="opacity-90">Increase sales with immersive AR experiences</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Time Efficient</h3>
                  <p className="opacity-90">Reduce consultation time while improving accuracy</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Precise Measurements</h3>
                  <p className="opacity-90">Get accurate measurements using AR technology</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Installation Preview</h3>
                  <p className="opacity-90">Visualize installation challenges before arriving</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                  <p className="opacity-90">Ensure perfect results with pre-visualization</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Notify Me Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Be the First to Know</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the waitlist to get early access to AR features and exclusive training sessions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <span>Notify Me</span>
              <ArrowRight size={20} />
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            * No spam, only important updates about AR feature launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default ARSystem;