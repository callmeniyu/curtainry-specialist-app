'use client';

import React from 'react';
import { TrendingUp, Calendar, DollarSign, Star, Users, CheckCircle, Clock, Award, MapPin, Phone, Inbox } from 'lucide-react';

interface HomeDashboardProps {
  userType: 'consultant' | 'fitter';
  onNavigate?: (tab: string) => void;
}

const HomeDashboard: React.FC<HomeDashboardProps> = ({ userType, onNavigate }) => {
  // Mock user data based on role
  const userData = {
    name: userType === 'consultant' ? 'Sarah Chen' : 'Mike Rodriguez',
    email: userType === 'consultant' ? 'sarah.chen@curtainry.com' : 'mike.rodriguez@curtainry.com'
  };

  // Sample dashboard data based on role
  const getDashboardData = () => {
    if (userType === 'consultant') {
      return {
        stats: {
          totalEarnings: 78400,
          monthlyGrowth: 23.8,
          completedJobs: 89,
          avgRating: 4.9,
          activeCustomers: 67,
          responseTime: 0.8, // hours
          consultationsBooked: 45,
          conversionRate: 92, // percentage
          thisWeekEarnings: 12800,
          pendingConsultations: 8,
          upcomingAppointments: 12,
          monthlyTarget: 85000,
          customerSatisfaction: 97
        },
        recentActivity: [
          { id: 1, type: 'consultation', customer: 'Sarah Johnson', amount: 1250, date: '2 hours ago', status: 'completed', location: 'Downtown' },
          { id: 2, type: 'design_consultation', customer: 'Mike Wilson', amount: 0, date: '4 hours ago', status: 'in_progress', location: 'Suburbs' },
          { id: 3, type: 'measurement', customer: 'Emily Davis', amount: 800, date: '6 hours ago', status: 'completed', location: 'City Center' },
          { id: 4, type: 'color_consultation', customer: 'Robert Taylor', amount: 950, date: 'Yesterday', status: 'completed', location: 'Uptown' }
        ],
        upcomingAppointments: [
          { id: 1, customer: 'John Smith', time: '10:00 AM', address: '123 Main St', type: 'design_consultation', priority: 'high' },
          { id: 2, customer: 'Lisa Brown', time: '2:00 PM', address: '456 Oak Ave', type: 'measurement', priority: 'medium' },
          { id: 3, customer: 'David Wilson', time: '4:30 PM', address: '789 Pine St', type: 'color_consultation', priority: 'high' }
        ]
      };
    } else {
      return {
        stats: {
          totalEarnings: 65200,
          monthlyGrowth: 19.3,
          completedJobs: 73,
          avgRating: 4.8,
          activeCustomers: 54,
          responseTime: 1.2, // hours
          installationsCompleted: 58,
          repairJobs: 15,
          thisWeekEarnings: 8950,
          pendingInstallations: 6,
          emergencyCallouts: 3,
          monthlyTarget: 72000,
          customerSatisfaction: 95
        },
        recentActivity: [
          { id: 1, type: 'installation', customer: 'Robert Brown', amount: 1350, date: '1 hour ago', status: 'completed', location: 'East Side' },
          { id: 2, type: 'repair', customer: 'Anna White', amount: 650, date: '3 hours ago', status: 'in_progress', location: 'West End' },
          { id: 3, type: 'installation', customer: 'David Lee', amount: 1800, date: '5 hours ago', status: 'completed', location: 'North District' },
          { id: 4, type: 'maintenance', customer: 'Maria Garcia', amount: 450, date: 'Yesterday', status: 'completed', location: 'South Bay' }
        ],
        upcomingAppointments: [
          { id: 1, customer: 'Maria Garcia', time: '9:00 AM', address: '789 Pine St', type: 'installation', priority: 'urgent' },
          { id: 2, customer: 'James Wilson', time: '1:00 PM', address: '321 Elm Dr', type: 'repair', priority: 'medium' },
          { id: 3, customer: 'Jennifer Davis', time: '3:30 PM', address: '654 Cedar Ave', type: 'maintenance', priority: 'low' }
        ]
      };
    }
  };

  const data = getDashboardData();

  const renderStatCard = (icon: React.ReactNode, title: string, value: string | number, subtitle: string, color: string) => (
    <div className={`bg-gradient-to-br ${color} rounded-lg p-6 text-white`}>
      <div className="flex items-center justify-between mb-2">
        <div className="p-2 bg-white/20 rounded-lg">
          {icon}
        </div>
        <TrendingUp size={16} className="opacity-80" />
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-sm opacity-90">{title}</p>
      <p className="text-xs opacity-75 mt-1">{subtitle}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Enhanced Welcome Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black bg-opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between text-white">
            <div className="flex-1 mb-6 lg:mb-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
                  {userData.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    Welcome back, {userData.name.split(' ')[0]}! 👋
                  </h1>
                  <p className="text-lg text-white text-opacity-90">
                    {userType === 'consultant' 
                      ? 'Ready to help more customers find their perfect curtains?' 
                      : 'Your installation expertise is in high demand today!'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Request Notification - Compact */}
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
          <div 
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => onNavigate?.(userType === 'consultant' ? 'orders' : 'requests')}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white bg-opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <div className="relative flex items-center space-x-3 flex-1 min-w-0">
              <div className="relative">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                  <Inbox size={18} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse">
                  <span className="sr-only">1 new</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-white text-sm truncate">
                  🎉 New {userType === 'consultant' ? 'Consultation' : 'Installation'} Request!
                </h4>
                <p className="text-white text-opacity-90 text-xs truncate">
                  {userType === 'consultant' 
                    ? 'Mrs. Johnson • Manhattan • ₹2,500'
                    : 'Office Complex • Brooklyn • ₹8,500'
                  }
                </p>
              </div>
            </div>
            
            <div className="relative flex items-center space-x-2">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:bg-opacity-30 transition-all">
                →
              </div>
            </div>
          </div>
        </div>

        {/* Quick Metric Access for Consultants */}
        {userType === 'consultant' && (
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-4 text-white cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                 onClick={() => onNavigate?.('revenue')}>
              <div className="flex items-center justify-between mb-2">
                <TrendingUp size={20} className="opacity-80" />
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">Growth</span>
              </div>
              <div className="text-2xl font-bold mb-1">+{data.stats.monthlyGrowth}%</div>
              <div className="text-xs opacity-90">Monthly Growth</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-4 text-white cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                 onClick={() => onNavigate?.('revenue')}>
              <div className="flex items-center justify-between mb-2">
                <Star size={20} className="opacity-80" />
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">Rating</span>
              </div>
              <div className="text-2xl font-bold mb-1">{data.stats.avgRating}/5</div>
              <div className="text-xs opacity-90">Average Rating</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                 onClick={() => onNavigate?.('schedule')}>
              <div className="flex items-center justify-between mb-2">
                <Clock size={20} className="opacity-80" />
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">Response</span>
              </div>
              <div className="text-2xl font-bold mb-1">{data.stats.responseTime}h</div>
              <div className="text-xs opacity-90">Response Time</div>
            </div>
          </div>
        )}

      {/* Special Requests Section for Fitters */}
      {userType === 'fitter' && (
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center">
                <Inbox size={24} className="mr-3 text-orange-600" />
                New Work Requests
              </h3>
              <p className="text-orange-700 mb-4">
                Check available installation and repair requests from customers in your area
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-orange-600">
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} />
                  <span>3 High Priority</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign size={16} />
                  <span>₹4,200 Potential</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto">
              <button 
                onClick={() => onNavigate?.('requests')}
                className="w-full lg:w-auto bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 min-w-[160px]"
              >
                <Inbox size={18} />
                <span>View Requests</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {renderStatCard(
          <DollarSign size={20} />,
          'Total Earnings',
          `₹${data.stats.totalEarnings.toLocaleString()}`,
          `+${data.stats.monthlyGrowth}% this month`,
          'from-green-500 to-green-600'
        )}
        
        {renderStatCard(
          <Calendar size={20} />,
          'Jobs Completed',
          data.stats.completedJobs,
          'This month',
          'from-blue-500 to-blue-600'
        )}
        
        {renderStatCard(
          <Star size={20} />,
          'Average Rating',
          `${data.stats.avgRating}/5.0`,
          'Customer satisfaction',
          'from-yellow-500 to-orange-500'
        )}
        
        {renderStatCard(
          <Clock size={20} />,
          'Response Time',
          `${data.stats.responseTime}h`,
          'Average response',
          'from-indigo-500 to-indigo-600'
        )}
      </div>

      {/* Additional Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {renderStatCard(
          <Users size={20} />,
          'Active Customers',
          data.stats.activeCustomers,
          'Regular clients',
          'from-purple-500 to-purple-600'
        )}
        
        {renderStatCard(
          <TrendingUp size={20} />,
          'Growth Rate',
          `+${data.stats.monthlyGrowth}%`,
          'Monthly increase',
          'from-pink-500 to-rose-500'
        )}

        {renderStatCard(
          <DollarSign size={20} />,
          'This Week',
          `₹${(data.stats as any).thisWeekEarnings.toLocaleString()}`,
          'Weekly earnings',
          'from-emerald-500 to-emerald-600'
        )}

        {renderStatCard(
          <Award size={20} />,
          'Satisfaction',
          `${(data.stats as any).customerSatisfaction}%`,
          'Customer satisfaction',
          'from-cyan-500 to-blue-500'
        )}
      </div>

      {/* Role-specific Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{userType === 'consultant' ? (
          <>
            {renderStatCard(
              <Users size={20} />,
              'Consultations Booked',
              (data.stats as any).consultationsBooked || 0,
              'This month',
              'from-teal-500 to-teal-600'
            )}
            {renderStatCard(
              <TrendingUp size={20} />,
              'Conversion Rate',
              `${(data.stats as any).conversionRate || 0}%`,
              'Consultation to sale',
              'from-violet-500 to-violet-600'
            )}
            {renderStatCard(
              <Calendar size={20} />,
              'Pending Consultations',
              `${(data.stats as any).pendingConsultations || 0}`,
              'Scheduled ahead',
              'from-amber-500 to-orange-500'
            )}
            {renderStatCard(
              <Star size={20} />,
              'Target Progress',
              `${Math.round(((data.stats.totalEarnings / (data.stats as any).monthlyTarget) * 100))}%`,
              'Monthly target',
              'from-lime-500 to-green-500'
            )}
          </>
        ) : (
          <>
            {renderStatCard(
              <CheckCircle size={20} />,
              'Installations',
              (data.stats as any).installationsCompleted || 0,
              'This month',
              'from-cyan-500 to-cyan-600'
            )}
            {renderStatCard(
              <Clock size={20} />,
              'Repair Jobs',
              (data.stats as any).repairJobs || 0,
              'This month',
              'from-orange-500 to-red-500'
            )}
            {renderStatCard(
              <Calendar size={20} />,
              'Pending Installs',
              `${(data.stats as any).pendingInstallations || 0}`,
              'Scheduled ahead',
              'from-purple-500 to-purple-600'
            )}
            {renderStatCard(
              <Award size={20} />,
              'Emergency Calls',
              `${(data.stats as any).emergencyCallouts || 0}`,
              'This month',
              'from-red-500 to-pink-500'
            )}
          </>
        )}
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {userType === 'consultant' ? 'Consultation' : 'Installation'} Performance
          </h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-600">This Week</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-gray-600">Last Week</span>
            </div>
          </div>
        </div>
        
        {/* Weekly Chart */}
        <div className="flex items-end justify-between space-x-3 h-48 mb-4 bg-gray-50 rounded-lg p-4">
          {[
            { current: 8, previous: 6, day: 'Mon' },
            { current: 5, previous: 4, day: 'Tue' },
            { current: 12, previous: 8, day: 'Wed' },
            { current: 15, previous: 11, day: 'Thu' },
            { current: 7, previous: 9, day: 'Fri' },
            { current: 18, previous: 14, day: 'Sat' },
            { current: 10, previous: 8, day: 'Sun' }
          ].map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1 max-w-[60px]">
              <div className="flex items-end space-x-1 h-32 w-full">
                {/* Previous week bar */}
                <div className="flex-1 flex flex-col justify-end">
                  <div 
                    className="w-full bg-gradient-to-t from-gray-400 to-gray-500 rounded-t-md shadow-sm relative group transition-all duration-300 hover:shadow-md min-h-[8px]"
                    style={{ height: `${Math.max(data.previous * 6, 8)}px` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      Last: {data.previous} jobs
                    </div>
                  </div>
                </div>
                
                {/* Current week bar */}
                <div className="flex-1 flex flex-col justify-end">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md shadow-md relative group transition-all duration-300 hover:from-blue-600 hover:to-blue-500 hover:shadow-lg min-h-[8px]"
                    style={{ height: `${Math.max(data.current * 6, 8)}px` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      This: {data.current} jobs
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Day label */}
              <div className="text-xs text-gray-600 mt-2 font-medium">{data.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
          <span className="text-sm text-blue-600 font-medium">
            {data.upcomingAppointments.length} appointments
          </span>
        </div>
        <div className="space-y-3">
          {data.upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  (appointment as any).priority === 'urgent' || (appointment as any).priority === 'high' ? 'bg-red-500' :
                  (appointment as any).priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <div>
                  <p className="font-medium text-gray-900">{appointment.customer}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>{appointment.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium capitalize mb-1 block">
                  {appointment.type.replace('_', ' ')}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${
                  (appointment as any).priority === 'urgent' || (appointment as any).priority === 'high' ? 'bg-red-100 text-red-800' :
                  (appointment as any).priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                }`}>
                  {(appointment as any).priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {data.recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  {activity.status === 'completed' ? (
                    <CheckCircle size={16} className="text-green-600" />
                  ) : (
                    <Clock size={16} className="text-yellow-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900 capitalize">
                    {activity.type} - {activity.customer}
                  </p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
              <div className="text-right">
                {activity.amount > 0 && (
                  <p className="font-semibold text-green-600">+₹{activity.amount}</p>
                )}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activity.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
          <Calendar size={24} className="mx-auto mb-2" />
          <span className="font-medium">View Schedule</span>
        </button>
        <button className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
          <DollarSign size={24} className="mx-auto mb-2" />
          <span className="font-medium">View Earnings</span>
        </button>
        {userType === 'consultant' ? (
          <>
            <button className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              <Users size={24} className="mx-auto mb-2" />
              <span className="font-medium">New Consultation</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              <Star size={24} className="mx-auto mb-2" />
              <span className="font-medium">Client Reviews</span>
            </button>
          </>
        ) : (
          <>
            <button className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
              <CheckCircle size={24} className="mx-auto mb-2" />
              <span className="font-medium">New Installation</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
              <Clock size={24} className="mx-auto mb-2" />
              <span className="font-medium">Repair Jobs</span>
            </button>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default HomeDashboard;