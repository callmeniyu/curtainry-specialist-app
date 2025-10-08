'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Phone, User, CheckCircle, XCircle, Eye, Calendar, DollarSign } from 'lucide-react';

interface NewRequestsProps {
  userRole: 'consultant' | 'fitter';
  userData: any;
}

const NewRequests: React.FC<NewRequestsProps> = ({ userRole, userData }) => {
  const [filter, setFilter] = useState('all'); // 'all', 'high', 'medium', 'low'

  // Sample new requests data - role-specific
  const getRequestsData = () => {
    if (userRole === 'consultant') {
      return [
        {
          id: 'CONS001',
          customerName: 'Jennifer Adams',
          customerPhone: '+1 (555) 234-5678',
          address: '789 Maple Ave, Downtown',
          requestDate: '2025-10-06',
          preferredTime: '10:00 AM - 12:00 PM',
          priority: 'high',
          type: 'design_consultation',
          description: 'Need comprehensive design consultation for living room and master bedroom. Looking for modern, minimalist style with neutral colors. Budget around $5000 for complete makeover.',
          estimatedValue: 1200,
          urgency: 'ASAP',
          roomCount: 2,
          location: 'Central District',
          specialRequests: 'Pet-friendly fabrics, blackout options for bedroom',
          budgetRange: '$3000 - $5000'
        },
        {
          id: 'CONS002',
          customerName: 'Michael Chen',
          customerPhone: '+1 (555) 345-6789',
          address: '456 Oak Street, Midtown',
          requestDate: '2025-10-07',
          preferredTime: '2:00 PM - 4:00 PM',
          priority: 'medium',
          type: 'color_consultation',
          description: 'Kitchen and dining area color consultation needed. Current curtains clash with new paint. Looking for professional advice on color coordination and fabric selection.',
          estimatedValue: 800,
          urgency: 'This Week',
          roomCount: 2,
          location: 'North District',
          specialRequests: 'Easy to clean, kitchen-safe materials',
          budgetRange: '$1500 - $2500'
        },
        {
          id: 'CONS003',
          customerName: 'Sarah Thompson',
          customerPhone: '+1 (555) 456-7890',
          address: '123 Pine Road, Suburbs',
          requestDate: '2025-10-08',
          preferredTime: '11:00 AM - 1:00 PM',
          priority: 'low',
          type: 'style_consultation',
          description: 'Complete home style consultation for new house. Need help choosing curtain styles that match traditional decor theme. Premium quality preferred.',
          estimatedValue: 1500,
          urgency: 'Next Week',
          roomCount: 5,
          location: 'South District',
          specialRequests: 'Traditional patterns, premium materials',
          budgetRange: '$8000 - $12000'
        }
      ];
    } else {
      return [
        {
          id: 'FIT001',
          customerName: 'Robert Martinez',
          customerPhone: '+1 (555) 678-9012',
          address: '321 Cedar Street, East Side',
          requestDate: '2025-10-06',
          preferredTime: '9:00 AM - 11:00 AM',
          priority: 'high',
          type: 'installation',
          description: 'Urgent installation needed for 4 rooms. Customer already has curtains and rods. Need professional installation before house showing this weekend.',
          estimatedValue: 950,
          urgency: 'ASAP',
          roomCount: 4,
          location: 'East District',
          equipmentNeeded: 'Standard installation tools, ladder',
          timeEstimate: '3-4 hours'
        },
        {
          id: 'FIT002',
          customerName: 'Lisa Rodriguez',
          customerPhone: '+1 (555) 789-0123',
          address: '654 Birch Lane, West End',
          requestDate: '2025-10-07',
          preferredTime: '1:00 PM - 3:00 PM',
          priority: 'medium',
          type: 'repair',
          description: 'Curtain rod fell down in master bedroom. Need repair and reinforcement. May require wall anchor replacement and repainting touch-up.',
          estimatedValue: 350,
          urgency: 'This Week',
          roomCount: 1,
          location: 'West District',
          equipmentNeeded: 'Wall anchors, drill, paint for touch-up',
          timeEstimate: '1-2 hours'
        },
        {
          id: 'FIT003',
          customerName: 'David Kim',
          customerPhone: '+1 (555) 890-1234',
          address: '987 Elm Court, North Side',
          requestDate: '2025-10-08',
          preferredTime: '10:00 AM - 12:00 PM',
          priority: 'low',
          type: 'maintenance',
          description: 'Annual maintenance check for motorized curtain system. 6 windows total. Need cleaning, lubrication, and motor inspection for smooth operation.',
          estimatedValue: 600,
          urgency: 'Next Week',
          roomCount: 3,
          location: 'North District',
          equipmentNeeded: 'Cleaning supplies, lubricants, motor testing kit',
          timeEstimate: '2-3 hours'
        }
      ];
    }
  };

  const newRequests = getRequestsData();

  const filteredRequests = filter === 'all' 
    ? newRequests 
    : newRequests.filter(req => req.priority === filter);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-red-500 bg-red-50';
      case 'medium':
        return 'border-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-green-500 bg-green-50';
      default:
        return 'border-gray-300 bg-white';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAcceptRequest = (requestId: string) => {
    console.log('Accepting request:', requestId);
    // Handle request acceptance logic
  };

  const handleDeclineRequest = (requestId: string) => {
    console.log('Declining request:', requestId);
    // Handle request decline logic
  };

  const handleViewDetails = (requestId: string) => {
    console.log('Viewing details for:', requestId);
    // Handle view details logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 space-y-4 lg:space-y-0">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">New Requests</h2>
              <p className="text-gray-600 mt-1">
                {userRole === 'consultant' 
                  ? 'Review consultation requests from customers' 
                  : 'Review installation and repair requests'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <span className="text-sm text-gray-500 font-medium">Filter by Priority:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white shadow-sm min-w-[150px]"
              >
                <option value="all">All Priorities</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-bold text-blue-600 mb-1">{newRequests.length}</h3>
              <p className="text-sm text-gray-600 font-medium">Total Requests</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-bold text-green-600 mb-1">
                ₹{newRequests.reduce((sum, req) => sum + req.estimatedValue, 0).toLocaleString()}
              </h3>
              <p className="text-sm text-gray-600 font-medium">Potential Earnings</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-bold text-orange-600 mb-1">
                {newRequests.filter(req => req.priority === 'high').length}
              </h3>
              <p className="text-sm text-gray-600 font-medium">Urgent Requests</p>
            </div>
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-6">{filteredRequests.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No requests found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {filter === 'all' 
                ? 'No new requests at the moment. Check back later or adjust your availability settings.' 
                : `No ${filter} priority requests available. Try checking other priority levels.`}
            </p>
          </div>
        ) : (
          filteredRequests.map((request) => (
            <div
              key={request.id}
              className={`rounded-xl border-l-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${getPriorityColor(request.priority)}`}
            >
              {/* Request Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-3 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">#{request.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getPriorityBadge(request.priority)}`}>
                        {request.priority} Priority
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                        {request.type.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-blue-500" />
                        <span className="font-medium">{request.requestDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-green-500" />
                        <span className="font-medium">{request.preferredTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign size={16} className="text-green-500" />
                        <span className="font-bold text-green-600">₹{request.estimatedValue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className={`inline-block px-4 py-2 text-sm font-bold rounded-full ${
                      request.urgency === 'ASAP' ? 'bg-red-100 text-red-800 border border-red-200' :
                      request.urgency === 'This Week' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                      'bg-green-100 text-green-800 border border-green-200'
                    }`}>
                      {request.urgency}
                    </span>
                  </div>
                </div>
              </div>

              {/* Request Body */}
              <div className="p-6">
                {/* Customer Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <User size={18} className="text-blue-500 mr-2" />
                      Customer Information
                    </h4>
                    <div className="space-y-3 pl-6">
                      <div className="flex items-center space-x-3">
                        <User size={16} className="text-gray-400 flex-shrink-0" />
                        <span className="font-medium text-gray-900 truncate">{request.customerName}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone size={16} className="text-gray-400 flex-shrink-0" />
                        <a href={`tel:${request.customerPhone}`} className="text-blue-600 hover:text-blue-800 font-medium">
                          {request.customerPhone}
                        </a>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{request.address}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Request Details</h4>
                    <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Location:</span>
                        <span className="font-semibold text-gray-900">{request.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Rooms:</span>
                        <span className="font-semibold text-gray-900">{request.roomCount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Est. Value:</span>
                        <span className="font-bold text-green-600">₹{request.estimatedValue.toLocaleString()}</span>
                      </div>
                      {/* Role-specific details */}
                      {userRole === 'consultant' ? (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Budget Range:</span>
                            <span className="font-semibold text-blue-600">{(request as any).budgetRange}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-gray-600 font-medium">Special Requests:</span>
                            <span className="font-medium text-gray-900 text-right max-w-[200px] leading-relaxed">{(request as any).specialRequests}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Time Estimate:</span>
                            <span className="font-semibold text-orange-600">{(request as any).timeEstimate}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-gray-600 font-medium">Equipment Needed:</span>
                            <span className="font-medium text-gray-900 text-right max-w-[200px] leading-relaxed">{(request as any).equipmentNeeded}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Request Description</h4>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      {request.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleAcceptRequest(request.id)}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <CheckCircle size={18} />
                    <span>Accept Request</span>
                  </button>
                  <button
                    onClick={() => handleViewDetails(request.id)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Eye size={18} />
                    <span>View Details</span>
                  </button>
                  <button
                    onClick={() => handleDeclineRequest(request.id)}
                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <XCircle size={18} />
                    <span>Decline</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            💡 {userRole === 'consultant' ? 'Consultation' : 'Installation'} Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-800">
            {userRole === 'consultant' ? (
              <>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Design Consultation:</strong> Bring fabric samples and color wheels to help clients visualize options</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Budget Discussion:</strong> Always discuss budget range before presenting options to match expectations</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Style Matching:</strong> Take photos of existing decor to suggest complementary curtain styles</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Follow-up:</strong> Provide design proposals within 24 hours for high-priority consultations</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Tool Preparation:</strong> Always bring complete tool kit including backup anchors and drill bits</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Time Management:</strong> Add 30 minutes buffer to estimates for unexpected installation challenges</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Quality Check:</strong> Test all installations thoroughly and provide maintenance tips to customers</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Safety First:</strong> Always check wall structure before drilling, especially in older buildings</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequests;