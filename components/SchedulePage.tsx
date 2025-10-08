'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Plus, MapPin, User, Phone, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface SchedulePageProps {
  userRole: 'consultant' | 'fitter';
  userData: any;
}

const SchedulePage: React.FC<SchedulePageProps> = ({ userRole, userData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedWeek, setSelectedWeek] = useState(new Date());

  // Time slots - 2 per day as requested
  const timeSlots = [
    { id: 1, time: '10:00 AM - 12:00 PM', slot: 'morning' },
    { id: 2, time: '2:00 PM - 4:00 PM', slot: 'afternoon' }
  ];

  // Sample schedule data
  const scheduleData = [
    {
      id: 1,
      date: '2025-10-06',
      slot: 'morning',
      time: '10:00 AM - 12:00 PM',
      status: 'booked',
      orderId: '#12345',
      customerName: 'John Smith',
      customerPhone: '+1 (555) 123-4567',
      address: '123 Main St, Downtown',
      type: userRole === 'consultant' ? 'consultation' : 'installation',
      priority: 'high'
    },
    {
      id: 2,
      date: '2025-10-06',
      slot: 'afternoon',
      time: '2:00 PM - 4:00 PM',
      status: 'available',
      orderId: null,
      customerName: null,
      customerPhone: null,
      address: null,
      type: null,
      priority: null
    },
    {
      id: 3,
      date: '2025-10-07',
      slot: 'morning',
      time: '10:00 AM - 12:00 PM',
      status: 'booked',
      orderId: '#12346',
      customerName: 'Sarah Johnson',
      customerPhone: '+1 (555) 987-6543',
      address: '456 Oak Ave, Midtown',
      type: userRole === 'consultant' ? 'consultation' : 'installation',
      priority: 'medium'
    },
    {
      id: 4,
      date: '2025-10-07',
      slot: 'afternoon',
      time: '2:00 PM - 4:00 PM',
      status: 'unavailable',
      orderId: null,
      customerName: null,
      customerPhone: null,
      address: null,
      type: null,
      priority: null
    }
  ];

  // Generate week dates
  const getWeekDates = (date: Date) => {
    const week = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const weekDates = getWeekDates(selectedWeek);

  const getScheduleForDate = (date: string) => {
    return scheduleData.filter(item => item.date === date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'booked':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'unavailable':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      case 'low':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-300';
    }
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newWeek = new Date(selectedWeek);
    newWeek.setDate(selectedWeek.getDate() + (direction === 'next' ? 7 : -7));
    setSelectedWeek(newWeek);
  };

  const handleReschedule = (appointmentId: number) => {
    console.log('Reschedule appointment:', appointmentId);
    // Implement reschedule logic here
  };

  const handleToggleAvailability = (date: string, slot: string) => {
    console.log('Toggle availability for:', date, slot);
    // Implement availability toggle logic here
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Schedule</h2>
            <p className="text-gray-600">
              {userRole === 'consultant' 
                ? 'Manage your consultation appointments' 
                : 'Manage your installation schedule'
              }
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={16} />
              <span>Block Time</span>
            </button>
          </div>
        </div>

        {/* Week Navigation */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigateWeek('prev')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ←
          </button>
          <h3 className="text-lg font-medium text-gray-900">
            {weekDates[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {' '}
            {weekDates[6].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </h3>
          <button
            onClick={() => navigateWeek('next')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            →
          </button>
        </div>
      </div>

      {/* Weekly Calendar View */}
      <div className="grid grid-cols-1 gap-4">
        {weekDates.map((date, index) => {
          const dateStr = date.toISOString().split('T')[0];
          const daySchedule = getScheduleForDate(dateStr);
          const isToday = dateStr === new Date().toISOString().split('T')[0];
          
          return (
            <div key={dateStr} className={`bg-white rounded-lg border ${isToday ? 'border-blue-300 shadow-md' : 'border-gray-200'} p-4`}>
              {/* Date Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className={`font-medium ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
                    {date.toLocaleDateString('en-US', { weekday: 'long' })}
                  </h4>
                  <p className={`text-sm ${isToday ? 'text-blue-500' : 'text-gray-500'}`}>
                    {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    {isToday && ' (Today)'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    {daySchedule.filter(s => s.status === 'booked').length}/2 slots booked
                  </p>
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-3">
                {timeSlots.map((timeSlot) => {
                  const appointment = daySchedule.find(s => s.slot === timeSlot.slot);
                  const status = appointment?.status || 'available';
                  
                  return (
                    <div key={timeSlot.id} className={`border rounded-lg p-3 ${status === 'booked' ? getPriorityColor(appointment?.priority || '') : ''}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-gray-400" />
                          <span className="text-sm font-medium text-gray-700">{timeSlot.time}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>
                          {status.toUpperCase()}
                        </span>
                      </div>

                      {status === 'booked' && appointment && (
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <User size={14} className="text-gray-400" />
                            <span className="text-sm text-gray-700">{appointment.customerName}</span>
                            <span className="text-xs text-gray-500">({appointment.orderId})</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Phone size={14} className="text-gray-400" />
                            <span className="text-sm text-gray-600">{appointment.customerPhone}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <MapPin size={14} className="text-gray-400" />
                            <span className="text-sm text-gray-600">{appointment.address}</span>
                          </div>

                          <div className="flex space-x-2 mt-3">
                            <button
                              onClick={() => handleReschedule(appointment.id)}
                              className="flex items-center space-x-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-md text-xs font-medium hover:bg-orange-200 transition-colors"
                            >
                              <RotateCcw size={12} />
                              <span>Reschedule</span>
                            </button>
                            <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium hover:bg-green-200 transition-colors">
                              <CheckCircle size={12} />
                              <span>Confirm</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {status === 'available' && (
                        <div className="mt-3 flex space-x-2">
                          <button
                            onClick={() => handleToggleAvailability(dateStr, timeSlot.slot)}
                            className="flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-700 rounded-md text-xs font-medium hover:bg-red-200 transition-colors"
                          >
                            <XCircle size={12} />
                            <span>Block Slot</span>
                          </button>
                        </div>
                      )}

                      {status === 'unavailable' && (
                        <div className="mt-3 flex space-x-2">
                          <button
                            onClick={() => handleToggleAvailability(dateStr, timeSlot.slot)}
                            className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium hover:bg-green-200 transition-colors"
                          >
                            <CheckCircle size={12} />
                            <span>Make Available</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Calendar size={20} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-900">This Week</span>
          </div>
          <p className="text-2xl font-bold text-blue-900 mt-2">
            {scheduleData.filter(s => s.status === 'booked').length}
          </p>
          <p className="text-xs text-blue-700">Appointments Booked</p>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Clock size={20} className="text-green-600" />
            <span className="text-sm font-medium text-green-900">Available</span>
          </div>
          <p className="text-2xl font-bold text-green-900 mt-2">
            {scheduleData.filter(s => s.status === 'available').length}
          </p>
          <p className="text-xs text-green-700">Open Slots</p>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;