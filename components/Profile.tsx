'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Star, Award, DollarSign, Edit3, Save, X } from 'lucide-react';

interface ProfileProps {
  userRole: 'consultant' | 'fitter';
  userData: any;
}

export default function Profile({ userRole, userData }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
    phone: userData?.phone || '',
    location: userData?.location || '',
    specialization: userData?.specialization || ''
  });

  const handleSave = () => {
    // In a real app, this would make an API call to update the profile
    console.log('Saving profile data:', editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: userData?.name || '',
      email: userData?.email || '',
      phone: userData?.phone || '',
      location: userData?.location || '',
      specialization: userData?.specialization || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
          <p className="text-gray-600 capitalize">{userRole} Dashboard</p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Edit3 size={16} />
            <span>Edit Profile</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleCancel}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <X size={16} />
              <span>Cancel</span>
            </button>
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Save size={16} />
              <span>Save</span>
            </button>
          </div>
        )}
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header with Photo */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {userData?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold">{userData?.name}</h3>
              <p className="text-blue-100 capitalize">{userRole}</p>
              <div className="flex items-center space-x-1 mt-2">
                <Star size={16} className="text-yellow-300 fill-current" />
                <span className="text-blue-100">{userData?.rating || '0.0'}</span>
                <span className="text-blue-200 text-sm">
                  ({userData?.completedJobs || 0} jobs)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <User size={16} className="text-gray-400" />
                    <span className="text-gray-700">{userData?.name}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-gray-400" />
                    <span className="text-gray-700">{userData?.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editData.phone}
                    onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-gray-400" />
                    <span className="text-gray-700">{userData?.phone}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) => setEditData(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-700">{userData?.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Professional Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Specialization</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.specialization}
                    onChange={(e) => setEditData(prev => ({ ...prev, specialization: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-gray-400" />
                    <span className="text-gray-700">{userData?.specialization}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Experience</label>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-700">{userData?.experience}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-700">{userData?.dateOfBirth}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Enrollment Date</label>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-700">{userData?.enrollmentDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Performance Statistics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Star size={20} className="text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Rating</span>
                </div>
                <p className="text-2xl font-bold text-blue-900">{userData?.rating || '0.0'}</p>
                <p className="text-sm text-blue-700">Out of 5.0</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Award size={20} className="text-green-600" />
                  <span className="text-sm font-medium text-green-900">Completed Jobs</span>
                </div>
                <p className="text-2xl font-bold text-green-900">{userData?.completedJobs || 0}</p>
                <p className="text-sm text-green-700">Total projects</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign size={20} className="text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Total Earnings</span>
                </div>
                <p className="text-2xl font-bold text-purple-900">₹{userData?.totalEarnings?.toLocaleString() || '0'}</p>
                <p className="text-sm text-purple-700">Lifetime earnings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}