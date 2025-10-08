'use client';

import React, { useState } from 'react';
import { X, Plus, Save, Trash2, Ruler } from 'lucide-react';
import { roomTypes, addRoomToOrder } from '../data/dummyAuth';

interface MeasurementModalProps {
  order: any;
  onClose: () => void;
  onSave: (roomData: any) => void;
}

export default function MeasurementModal({ order, onClose, onSave }: MeasurementModalProps) {
  const [roomData, setRoomData] = useState({
    roomType: '',
    width: '',
    height: '',
    quantity: '1',
    curtainSerial: order.catalogDetails.serialNumber || '',
    notes: ''
  });

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (field: string, value: string) => {
    setRoomData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!roomData.roomType) {
      newErrors.roomType = 'Room type is required';
    }

    if (!roomData.width || parseFloat(roomData.width) <= 0) {
      newErrors.width = 'Valid width is required';
    }

    if (!roomData.height || parseFloat(roomData.height) <= 0) {
      newErrors.height = 'Valid height is required';
    }

    if (!roomData.quantity || parseInt(roomData.quantity) <= 0) {
      newErrors.quantity = 'Valid quantity is required';
    }

    if (!roomData.curtainSerial) {
      newErrors.curtainSerial = 'Curtain serial number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      const measurementData = {
        roomType: roomData.roomType,
        width: parseFloat(roomData.width),
        height: parseFloat(roomData.height),
        quantity: parseInt(roomData.quantity),
        curtainSerial: roomData.curtainSerial,
        notes: roomData.notes,
        measuredAt: new Date().toISOString(),
        area: parseFloat(roomData.width) * parseFloat(roomData.height)
      };

      // Add to order
      addRoomToOrder(order.id, measurementData);
      onSave(measurementData);
    }
  };

  const calculateArea = () => {
    const width = parseFloat(roomData.width) || 0;
    const height = parseFloat(roomData.height) || 0;
    return (width * height).toFixed(2);
  };

  const calculateEstimatedCost = () => {
    const area = parseFloat(calculateArea()) || 0;
    const pricePerMeter = order.catalogDetails.pricePerMeter || 0;
    const quantity = parseInt(roomData.quantity) || 1;
    return (area * pricePerMeter * quantity).toFixed(0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Add Room Measurement</h2>
            <p className="text-sm text-gray-600">Order #{order.id}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Type *
            </label>
            <select
              value={roomData.roomType}
              onChange={(e) => handleInputChange('roomType', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.roomType ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select room type</option>
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.roomType && (
              <p className="mt-1 text-sm text-red-600">{errors.roomType}</p>
            )}
          </div>

          {/* Measurements */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Width (feet) *
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="8.5"
                value={roomData.width}
                onChange={(e) => handleInputChange('width', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.width ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.width && (
                <p className="mt-1 text-sm text-red-600">{errors.width}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (feet) *
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="7.0"
                value={roomData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.height ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.height && (
                <p className="mt-1 text-sm text-red-600">{errors.height}</p>
              )}
            </div>
          </div>

          {/* Area Calculation */}
          {roomData.width && roomData.height && (
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Ruler size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Calculated Area</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{calculateArea()} sq ft</p>
            </div>
          )}

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Panels *
            </label>
            <input
              type="number"
              min="1"
              placeholder="2"
              value={roomData.quantity}
              onChange={(e) => handleInputChange('quantity', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.quantity ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            {errors.quantity && (
              <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>
            )}
          </div>

          {/* Curtain Serial */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Curtain Serial Number *
            </label>
            <input
              type="text"
              placeholder="Auto-detected from order"
              value={roomData.curtainSerial}
              onChange={(e) => handleInputChange('curtainSerial', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.curtainSerial ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            {errors.curtainSerial && (
              <p className="mt-1 text-sm text-red-600">{errors.curtainSerial}</p>
            )}
          </div>

          {/* Cost Estimation */}
          {roomData.width && roomData.height && roomData.quantity && (
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">Estimated Cost</h4>
              <div className="space-y-1 text-sm text-green-700">
                <p>Area: {calculateArea()} sq ft</p>
                <p>Price per sq ft: ₹{order.catalogDetails.pricePerMeter}</p>
                <p>Quantity: {roomData.quantity} panel(s)</p>
                <div className="border-t border-green-200 pt-2 mt-2">
                  <p className="text-lg font-bold text-green-900">
                    Total: ₹{calculateEstimatedCost()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              rows={3}
              placeholder="Any special requirements or observations..."
              value={roomData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Save size={16} />
            <span>Save Measurement</span>
          </button>
        </div>
      </div>
    </div>
  );
}