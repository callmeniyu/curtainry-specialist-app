"use client";
import React, { useState } from "react";
import { authenticateUser } from '../data/dummyAuth';

type AuthMode = "login" | "signup";
type UserRole = "fitter" | "consultant";

interface AuthModalProps {
  onClose: () => void;
  onLogin: (userData: any, role: 'consultant' | 'fitter') => void;
}

interface RegistrationData {
  name: string;
  dateOfBirth: string;
  photo: File | null;
  location: string;
  username: string;
  password: string;
  confirmPassword: string;
  enrollmentDate: string;
}

export default function AuthModal({ onClose, onLogin }: AuthModalProps) {
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [selectedRole, setSelectedRole] = useState<UserRole>("consultant");
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [loginError, setLoginError] = useState('');
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    name: "",
    dateOfBirth: "",
    photo: null,
    location: "",
    username: "",
    password: "",
    confirmPassword: "",
    enrollmentDate: new Date().toISOString().split('T')[0]
  });

  const roles = [
    {
      id: "consultant" as UserRole,
      title: "Curtain Consultant",
      description: "Provide expert consultation & measurements",
      icon: "👔",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      id: "fitter" as UserRole,
      title: "Curtain Fitter",
      description: "Installation, repair & maintenance services",
      icon: "🔧",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    }
  ];

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setShowRoleSelection(false);
  };

  const handleInputChange = (field: keyof RegistrationData, value: string | File | null) => {
    setRegistrationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleInputChange('photo', file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    if (authMode === "login") {
      console.log('Login attempt:', {
        username: loginData.username,
        password: loginData.password,
        role: selectedRole
      });
      
      const user = authenticateUser(loginData.username, loginData.password, selectedRole);
      
      console.log('Authentication result:', user);
      
      if (user) {
        console.log('Login successful, calling onLogin with:', user, selectedRole);
        onLogin(user, selectedRole);
        // Don't call onClose() here - let the parent component handle the modal state
      } else {
        setLoginError('Invalid username or password');
      }
    } else {
      // TODO: Implement registration logic
      console.log('Registration data:', { ...registrationData, role: selectedRole });
      onClose();
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (showRoleSelection) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl w-full max-w-md p-6 animate-scale-in">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {authMode === "signup" ? "Choose Your Role" : "Sign in as"}
            </h2>
            <p className="text-gray-600">Select your specialist role</p>
          </div>
          
          <div className="space-y-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className={`w-full p-4 border-2 rounded-xl text-left transition-all duration-200 ${role.color}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{role.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{role.title}</h3>
                    <p className="text-sm text-gray-600">{role.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setShowRoleSelection(false)}
            className="w-full mt-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  if (authMode === "signup" && currentStep > 1) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl w-full max-w-2xl p-6 animate-scale-in max-h-[90vh] overflow-y-auto">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Join Curtainry Team
            </h2>
            <p className="text-gray-600">
              Step {currentStep} of 3 - Complete your profile
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${
                    step <= currentStep ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 2 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={registrationData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Photo *
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                      {registrationData.photo ? (
                        <img
                          src={URL.createObjectURL(registrationData.photo)}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400 text-2xl">📷</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">Upload a clear photo of yourself</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location (City, State) *
                  </label>
                  <input
                    type="text"
                    required
                    value={registrationData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="e.g., Bangalore, Karnataka"
                  />
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username *
                  </label>
                  <input
                    type="text"
                    required
                    value={registrationData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Choose a unique username"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={registrationData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Create a strong password"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={registrationData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Registration Summary</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">Role:</span> {selectedRole === 'consultant' ? 'Curtain Consultant' : 'Curtain Fitter'}</p>
                    <p><span className="font-medium">Name:</span> {registrationData.name}</p>
                    <p><span className="font-medium">Location:</span> {registrationData.location}</p>
                    <p><span className="font-medium">Enrollment Date:</span> {new Date().toLocaleDateString()}</p>
                    <p><span className="font-medium">Enrollment Time:</span> {new Date().toLocaleTimeString()}</p>
                  </div>
                </div>
              </>
            )}
            
            <div className="flex justify-between pt-4">
              {currentStep > 2 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
                >
                  Previous
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-semibold hover:from-primary-dark hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Complete Registration
                </button>
              )}
            </div>
          </form>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 animate-scale-in">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">C</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {authMode === "login" ? "Welcome Back" : "Join Curtainry Team"}
          </h2>
          <p className="text-gray-600">
            {authMode === "login" ? "Sign in to your specialist account" : "Start your professional journey"}
          </p>
        </div>
        
        <form onSubmit={authMode === "signup" ? (e) => { e.preventDefault(); setCurrentStep(2); } : handleSubmit} className="space-y-4">
          {authMode === "login" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role *
                </label>
                <button
                  type="button"
                  onClick={() => setShowRoleSelection(true)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-primary transition-all"
                >
                  <span className="capitalize">{selectedRole === "consultant" ? "Curtain Consultant" : "Curtain Fitter"}</span>
                  <span className="text-gray-400">→</span>
                </button>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  required
                  autoComplete="username"
                  value={loginData.username}
                  onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your username"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
              </div>
              
              {loginError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-600">{loginError}</p>
                </div>
              )}
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs">
                <p className="font-medium text-blue-900 mb-2">Demo Login Credentials:</p>
                <p className="text-blue-700"><strong>Consultant:</strong> raj_consultant / password123</p>
                <p className="text-blue-700"><strong>Fitter:</strong> kumar_fitter / password123</p>
              </div>
            </>
          )}
          
          {authMode === "signup" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialist Role *
                </label>
                <button
                  type="button"
                  onClick={() => setShowRoleSelection(true)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-primary transition-all"
                >
                  <span className="capitalize">{selectedRole === "consultant" ? "Curtain Consultant" : "Curtain Fitter"}</span>
                  <span className="text-gray-400">→</span>
                </button>
              </div>
            </>
          )}
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-primary-dark hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            {authMode === "login" ? "Sign In" : "Continue Registration"}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {authMode === "login" ? "New to Curtainry?" : "Already part of our team?"}
          </p>
          <button
            onClick={() => {
              setAuthMode(authMode === "login" ? "signup" : "login");
              setCurrentStep(1);
            }}
            className="text-primary font-semibold hover:underline mt-1"
          >
            {authMode === "login" ? "Join Our Team" : "Sign In"}
          </button>
        </div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}