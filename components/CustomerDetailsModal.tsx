'use client';

import React from 'react';
import { X, User, Phone, MapPin, Package, Info, Star, Calendar, DollarSign } from 'lucide-react';

interface CustomerDetailsModalProps {
  order: any;
  userRole: 'consultant' | 'fitter';
  onClose: () => void;
}

export default function CustomerDetailsModal({ order, userRole, onClose }: CustomerDetailsModalProps) {
  const isConsultant = userRole === 'consultant';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Order Info */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Order Information</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Order ID:</span>
                <span className="text-sm font-medium text-gray-900">#{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Type:</span>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  order.orderType === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                }`}>
                  {order.orderType.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Status:</span>
                <span className="text-sm font-medium text-gray-900 capitalize">
                  {order.status.replace('_', ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Priority:</span>
                <span className={`text-sm font-medium capitalize ${
                  order.priority === 'high' ? 'text-red-600' :
                  order.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                }`}>
                  {order.priority}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Scheduled:</span>
                <span className="text-sm font-medium text-gray-900">
                  {order.scheduledDate} at {order.scheduledTime}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Info - Role-based access */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Customer Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <User size={18} className="text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{order.customerName}</p>
                  {isConsultant && (
                    <p className="text-sm text-gray-600">Customer ID: {order.customerId}</p>
                  )}
                </div>
              </div>
              
              {isConsultant ? (
                <>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-gray-400" />
                    <p className="text-gray-700">{order.customerPhone}</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-gray-400 mt-1" />
                    <p className="text-gray-700">{order.customerAddress}</p>
                  </div>
                </>
              ) : (
                // Fitter sees limited info
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-yellow-600 mt-1" />
                    <div>
                      <p className="font-medium text-yellow-900">Customer Address</p>
                      <p className="text-yellow-700">{order.customerAddress}</p>
                    </div>
                  </div>
                </div>
              )}

              {!isConsultant && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                  <div className="flex items-center space-x-2">
                    <Info size={16} className="text-blue-600" />
                    <p className="text-sm text-blue-800">
                      <strong>Fitter Access:</strong> You can see customer name and address only. 
                      Contact your consultant for additional customer details if needed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Catalog Details */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Curtain Details</h3>
            <div className="bg-blue-50 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-medium text-blue-900">{order.catalogDetails.title}</h4>
                <p className="text-sm text-blue-700">Serial: {order.catalogDetails.serialNumber}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-600 font-medium">Composition:</span>
                  <p className="text-blue-700">{order.catalogDetails.composition}</p>
                </div>
                <div>
                  <span className="text-blue-600 font-medium">Color:</span>
                  <p className="text-blue-700">{order.catalogDetails.color}</p>
                </div>
                <div>
                  <span className="text-blue-600 font-medium">Pattern:</span>
                  <p className="text-blue-700">{order.catalogDetails.pattern}</p>
                </div>
                <div>
                  <span className="text-blue-600 font-medium">Price/Meter:</span>
                  <p className="text-blue-700">₹{order.catalogDetails.pricePerMeter}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t border-blue-200">
                <p className="text-sm text-blue-600">
                  <span className="font-medium">Manufacturer:</span> {order.catalogDetails.manufacturer}
                </p>
                <p className="text-sm text-blue-600">
                  <span className="font-medium">Retailer:</span> {order.catalogDetails.retailer}
                </p>
              </div>
            </div>
          </div>

          {/* Room Measurements */}
          {order.rooms && order.rooms.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Room Measurements</h3>
              <div className="space-y-3">
                {order.rooms.map((room: any, index: number) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">{room.roomType}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-600 font-medium">Width:</span>
                        <p className="text-green-700">{room.width} feet</p>
                      </div>
                      <div>
                        <span className="text-green-600 font-medium">Height:</span>
                        <p className="text-green-700">{room.height} feet</p>
                      </div>
                      <div>
                        <span className="text-green-600 font-medium">Quantity:</span>
                        <p className="text-green-700">{room.quantity} panels</p>
                      </div>
                      <div>
                        <span className="text-green-600 font-medium">Serial:</span>
                        <p className="text-green-700">{room.curtainSerial}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultant-only Additional Info */}
          {isConsultant && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Additional Information</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Location Zone:</span> {order.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Assigned Professional:</span> {order.assignedTo}
                </p>
                <div className="flex items-center space-x-2 pt-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Available for rescheduling if needed</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}