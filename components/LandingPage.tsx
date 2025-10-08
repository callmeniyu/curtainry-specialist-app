"use client";
import React from "react";

interface LandingPageProps {
  onShowAuth: () => void;
}

export default function LandingPage({ onShowAuth }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center space-y-8 px-4 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">C</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">Curtainry</span>
            <p className="text-sm text-gray-600">Specialist Network</p>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Join the
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Curtainry Network
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Work with Curtainry as a specialist professional. Connect with customers, manage your appointments, 
            track your earnings, and be part of our comprehensive curtain services network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8">
            <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-2">Curtainry Consultants</h3>
              <p className="text-sm text-gray-600">Provide expert design consultations, color matching, and style recommendations for customers</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-700 mb-2">Curtainry Fitters</h3>
              <p className="text-sm text-gray-600">Deliver professional installation, repairs, and maintenance services for our clients</p>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={onShowAuth}
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Login to Continue
        </button>
      </div>
    </div>
  );
}