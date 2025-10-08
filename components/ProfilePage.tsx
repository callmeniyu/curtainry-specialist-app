'use client';

import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Edit3, Save, X, Shield, Award, Clock, Camera } from 'lucide-react';

interface ProfilePageProps {
  userType: 'consultant' | 'fitter';
}

export default function ProfilePage({ userType }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: userType === 'consultant' ? 'Sarah Chen' : 'Mike Rodriguez',
    email: userType === 'consultant' ? 'sarah.chen@curtainry.com' : 'mike.rodriguez@curtainry.com',
    phone: userType === 'consultant' ? '+1 (555) 123-4567' : '+1 (555) 987-6543',
    address: userType === 'consultant' ? '123 Design Ave, New York, NY 10001' : '456 Service St, Brooklyn, NY 11201',
    joinDate: userType === 'consultant' ? 'March 2022' : 'June 2021',
    specialization: userType === 'consultant' ? 'Interior Design & Color Consultation' : 'Professional Installation & Maintenance',
    experience: userType === 'consultant' ? '8 years' : '12 years',
    certifications: userType === 'consultant' 
      ? ['Certified Interior Designer', 'Color Theory Specialist', 'Customer Relations Expert', 'Advanced Fabric Analysis']
      : ['Licensed Installer', 'Safety Certified', 'Quality Assurance Specialist', 'Heavy Duty Installation Expert'],
    completedProjects: userType === 'consultant' ? 245 : 189,
    rating: userType === 'consultant' ? 4.9 : 4.8,
    bio: userType === 'consultant' 
      ? 'Passionate interior design consultant with expertise in creating beautiful, functional spaces. I specialize in helping clients choose the perfect window treatments that complement their unique style and needs. With 8 years of experience, I have transformed over 245 homes and commercial spaces.'
      : 'Experienced curtain installation specialist committed to precision and quality. I take pride in ensuring every installation meets the highest standards and exceeds customer expectations. Specialized in complex installations and emergency repairs.',
    // Enhanced profile data
    totalEarnings: userType === 'consultant' ? 128500 : 95400,
    monthlyAverage: userType === 'consultant' ? 12200 : 8900,
    responseTime: userType === 'consultant' ? '1.2 hours' : '2.1 hours',
    languages: ['English', 'Spanish', userType === 'consultant' ? 'French' : 'Portuguese'],
    workingHours: {
      weekdays: '9:00 AM - 6:00 PM',
      weekends: 'By Appointment',
      emergency: userType === 'fitter' ? '24/7 Available' : 'Not Available'
    },
    serviceAreas: userType === 'consultant' 
      ? ['Manhattan', 'Brooklyn', 'Queens', 'Bronx']
      : ['Brooklyn', 'Queens', 'Staten Island', 'Long Island'],
    lastActive: '2 minutes ago',
    verificationStatus: 'Verified Professional'
  });

  const [editedData, setEditedData] = useState(profileData);

  const handleEdit = () => {
    setEditedData(profileData);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-xl shadow-xl mb-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black bg-opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="relative z-10 p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex items-center space-x-6">
                {/* Enhanced Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-3xl font-bold backdrop-blur-sm border-4 border-white border-opacity-30 shadow-lg">
                    {(isEditing ? editedData.name : profileData.name).charAt(0)}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full shadow-lg">
                    <Camera size={12} />
                  </div>
                </div>
                
                <div className="text-white">
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    {isEditing ? editedData.name : profileData.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-lg text-white text-opacity-90">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {userType === 'consultant' ? '🎨 Design Consultant' : '🔧 Professional Fitter'}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Shield size={16} />
                      <span className="text-sm">{profileData.verificationStatus}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 ml-auto">
                {!isEditing ? (
                  <button 
                    onClick={handleEdit}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white border px-6 py-3 rounded-lg transition-all flex items-center justify-center whitespace-nowrap backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Edit3 className="mr-2" size={16} />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button 
                      onClick={handleSave}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all inline-flex items-center justify-center whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Save className="mr-2" size={16} />
                      Save Changes
                    </button>
                    <button 
                      onClick={handleCancel}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white border px-6 py-3 rounded-lg transition-all inline-flex items-center justify-center whitespace-nowrap backdrop-blur-sm"
                    >
                      <X className="mr-2" size={16} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="mr-2 text-blue-600" size={24} />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg flex items-center">
                      <Mail className="mr-2 text-gray-400" size={16} />
                      {profileData.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg flex items-center">
                      <Phone className="mr-2 text-gray-400" size={16} />
                      {profileData.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg flex items-center">
                      <MapPin className="mr-2 text-gray-400" size={16} />
                      {profileData.address}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Award className="mr-2 text-purple-600" size={24} />
                Professional Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Specialization</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.specialization}
                      onChange={(e) => handleInputChange('specialization', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.specialization}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Experience</label>
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.experience}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Rating</label>
                    <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {'★'.repeat(Math.floor(profileData.rating))}
                        {profileData.rating % 1 !== 0 && '☆'}
                      </div>
                      <span className="font-semibold">{profileData.rating}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={editedData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={4}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Certifications */}
          <div className="space-y-6">
            {/* Performance Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-600">Completed Projects</span>
                  <span className="font-bold text-blue-600 text-xl">{profileData.completedProjects}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-600">Customer Rating</span>
                  <span className="font-bold text-green-600 text-xl">{profileData.rating}/5.0</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-600">Years Experience</span>
                  <span className="font-bold text-purple-600 text-xl">{profileData.experience.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="mr-2 text-green-600" size={20} />
                Certifications
              </h3>
              <div className="space-y-2">
                {profileData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Earnings & Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Total Earnings</span>
                    <span className="font-bold text-green-600 text-lg">₹{profileData.totalEarnings.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Monthly Average</span>
                    <span className="font-bold text-blue-600 text-lg">₹{profileData.monthlyAverage.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Response Time</span>
                    <span className="font-bold text-purple-600 text-lg">{profileData.responseTime}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Status</span>
                    <span className="font-bold text-orange-600 text-lg">{profileData.verificationStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.languages.map((lang, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-2">Service Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.serviceAreas.map((area, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-2">Working Hours</h4>
                  <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekdays:</span>
                      <span className="font-medium">{profileData.workingHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekends:</span>
                      <span className="font-medium">{profileData.workingHours.weekends}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emergency:</span>
                      <span className={`font-medium ${
                        profileData.workingHours.emergency === '24/7 Available' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {profileData.workingHours.emergency}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Status */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Status</h3>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Currently Active</span>
                </div>
                <span className="text-green-600 font-semibold">Last seen: {profileData.lastActive}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <Calendar size={18} />
                  <span>View My Schedule</span>
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <Award size={18} />
                  <span>Performance Report</span>
                </button>
                {userType === 'consultant' ? (
                  <>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
                      <User size={18} />
                      <span>Client Portfolio</span>
                    </button>
                    <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
                      <MapPin size={18} />
                      <span>Design Gallery</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
                      <Shield size={18} />
                      <span>Safety Records</span>
                    </button>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
                      <Clock size={18} />
                      <span>Emergency Contacts</span>
                    </button>
                  </>
                )}
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2 md:col-span-2">
                  <Edit3 size={18} />
                  <span>Account Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}