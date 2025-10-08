'use client';

import React, { useState } from 'react';
import { DollarSign, TrendingUp, Calendar, CreditCard, Eye, Download, Filter } from 'lucide-react';

interface RevenuePageProps {
  userRole: 'consultant' | 'fitter';
  userData: any;
}

const RevenuePage: React.FC<RevenuePageProps> = ({ userRole, userData }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('this_month');
  const [showTransactions, setShowTransactions] = useState(false);

  // Sample revenue data
  const revenueData = {
    this_month: {
      total: 12500,
      completed_jobs: 15,
      average_per_job: 833,
      pending_payment: 2500,
      transactions: [
        { id: 1, orderId: '#12345', customer: 'John Smith', amount: 850, date: '2025-10-05', status: 'paid', type: userRole === 'consultant' ? 'consultation' : 'installation' },
        { id: 2, orderId: '#12346', customer: 'Sarah Johnson', amount: 1200, date: '2025-10-03', status: 'paid', type: userRole === 'consultant' ? 'consultation' : 'installation' },
        { id: 3, orderId: '#12347', customer: 'Mike Wilson', amount: 950, date: '2025-10-01', status: 'pending', type: userRole === 'consultant' ? 'consultation' : 'installation' },
        { id: 4, orderId: '#12348', customer: 'Emily Davis', amount: 1100, date: '2025-09-28', status: 'paid', type: userRole === 'consultant' ? 'consultation' : 'installation' },
        { id: 5, orderId: '#12349', customer: 'Robert Brown', amount: 750, date: '2025-09-25', status: 'paid', type: userRole === 'consultant' ? 'consultation' : 'installation' }
      ]
    },
    last_month: {
      total: 11200,
      completed_jobs: 14,
      average_per_job: 800,
      pending_payment: 1800,
      transactions: []
    },
    this_quarter: {
      total: 34500,
      completed_jobs: 42,
      average_per_job: 821,
      pending_payment: 4200,
      transactions: []
    }
  };

  const currentData = revenueData[selectedPeriod as keyof typeof revenueData];

  const getGrowthPercentage = () => {
    if (selectedPeriod === 'this_month') {
      const growth = ((currentData.total - revenueData.last_month.total) / revenueData.last_month.total) * 100;
      return growth.toFixed(1);
    }
    return '15.2'; // Default growth
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Enhanced Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl shadow-xl p-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black bg-opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }} />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between text-white">
            <div className="flex-1 mb-6 lg:mb-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <DollarSign size={28} />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2">Revenue Dashboard</h2>
                  <p className="text-lg text-white text-opacity-90">
                    Track your earnings and financial performance 💰
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent backdrop-blur-sm text-sm font-medium min-w-[140px]"
              >
                <option value="this_month" className="text-gray-900">This Month</option>
                <option value="last_month" className="text-gray-900">Last Month</option>
                <option value="this_quarter" className="text-gray-900">This Quarter</option>
              </select>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white border-opacity-30 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm font-medium min-w-[120px]">
                <Download size={16} />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Revenue Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Revenue */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold opacity-90">Total Revenue</h3>
                <div className="p-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                  <DollarSign size={20} />
                </div>
              </div>
              <p className="text-3xl font-bold mb-2">₹{currentData.total.toLocaleString()}</p>
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-white bg-opacity-20 rounded-full">
                  <TrendingUp size={12} />
                </div>
                <span className="text-sm font-medium">+{getGrowthPercentage()}% from last period</span>
              </div>
            </div>
          </div>

          {/* Completed Jobs */}
          <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -mr-8 -mt-8"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-600">Completed Jobs</h3>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar size={20} className="text-blue-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{currentData.completed_jobs}</p>
              <p className="text-sm text-gray-500 font-medium">
                {userRole === 'consultant' ? 'Consultations' : 'Installations'} completed
              </p>
            </div>
          </div>

          {/* Average per Job */}
          <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -mr-8 -mt-8"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-600">Avg per Job</h3>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp size={20} className="text-purple-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">₹{currentData.average_per_job}</p>
              <p className="text-sm text-gray-500 font-medium">Average earning per job</p>
            </div>
          </div>

          {/* Pending Payment */}
          <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold opacity-90">Pending Payment</h3>
                <div className="p-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                  <CreditCard size={20} />
                </div>
              </div>
              <p className="text-3xl font-bold mb-2">₹{currentData.pending_payment.toLocaleString()}</p>
              <p className="text-sm opacity-90 font-medium">Awaiting payment</p>
            </div>
          </div>
        </div>

        {/* Enhanced Revenue Chart */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Trend</h3>
              <p className="text-gray-600">Track your financial growth over time</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">Revenue</span>
              </div>
              <span className="text-sm text-gray-500">Last 30 days</span>
            </div>
          </div>
          
          {/* Enhanced Bar Chart */}
          <div className="relative">
            <div className="flex items-end justify-between space-x-3 h-48 mb-6 bg-gray-50 rounded-lg p-4">
              {[
                { amount: 9750, day: 1 },
                { amount: 6800, day: 2 },
                { amount: 11250, day: 3 },
                { amount: 12800, day: 4 },
                { amount: 8300, day: 5 },
                { amount: 14250, day: 6 },
                { amount: 10500, day: 7 },
                { amount: 12000, day: 8 },
                { amount: 13500, day: 9 },
                { amount: 9000, day: 10 },
                { amount: 12750, day: 11 },
                { amount: 11250, day: 12 }
              ].map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1 max-w-[50px]">
                  <div className="flex items-end h-36 w-full">
                    <div className="flex-1 flex flex-col justify-end">
                      <div 
                        className="w-full bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-lg shadow-md relative group transition-all duration-500 hover:from-emerald-600 hover:to-teal-500 hover:shadow-lg transform hover:scale-105 min-h-[12px]"
                        style={{ height: `${Math.max((data.amount / 15000) * 140, 12)}px` }}
                      >
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-10">
                          <div className="font-bold text-emerald-300">₹{data.amount.toLocaleString()}</div>
                          <div className="text-gray-300 text-center">Oct {data.day}</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Day label */}
                  <div className="text-xs text-gray-600 mt-2 font-medium">{data.day}</div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between text-xs text-gray-500 font-medium bg-white rounded-lg p-2">
              <span className="font-semibold">Oct 1</span>
              <span>Oct 8</span>
              <span>Oct 15</span>
              <span>Oct 22</span>
              <span className="font-semibold">Oct 30</span>
            </div>
          </div>
        </div>

        {/* Enhanced Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Recent Transactions</h3>
              <p className="text-gray-600">Your latest payment activities</p>
            </div>
            <button
              onClick={() => setShowTransactions(!showTransactions)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium mt-4 sm:mt-0"
            >
              <Eye size={16} />
              <span>{showTransactions ? 'Hide' : 'Show'} Details</span>
            </button>
          </div>

          {showTransactions && (
            <div className="divide-y divide-gray-100">
              {currentData.transactions.map((transaction) => (
                <div key={transaction.id} className="p-6 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex-1 mb-3 sm:mb-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${
                          transaction.status === 'paid' ? 'bg-green-500' : 
                          transaction.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="font-bold text-gray-900 text-lg">{transaction.orderId}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(transaction.status)}`}>
                          {transaction.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-800 font-medium mb-1">{transaction.customer}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="capitalize bg-gray-100 px-2 py-1 rounded-full">{transaction.type}</span>
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900 mb-1">₹{transaction.amount.toLocaleString()}</p>
                      {transaction.status === 'pending' && (
                        <p className="text-sm text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded-full">Payment due</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!showTransactions && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye size={24} className="text-blue-600" />
              </div>
              <p className="text-gray-600 font-medium">Click "Show Details" to view transaction history</p>
            </div>
          )}
        </div>

        {/* Enhanced Payment Methods & Bank Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <CreditCard size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Payment Methods</h3>
                <p className="text-gray-600">Your active payment options</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <CreditCard size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Bank Transfer</p>
                    <p className="text-sm text-gray-600">Primary payment method</p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full">Active</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <DollarSign size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Digital Wallet</p>
                    <p className="text-sm text-gray-600">Instant payments & transfers</p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full">Active</span>
              </div>
            </div>
          </div>

          {/* Earnings Summary */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} className="text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Earnings Breakdown</h3>
                <p className="text-gray-600">Detailed revenue analysis</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Base Rate</span>
                <span className="font-bold text-gray-900">₹{Math.round(currentData.total * 0.8).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Bonus/Tips</span>
                <span className="font-bold text-gray-900">₹{Math.round(currentData.total * 0.15).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Additional Services</span>
                <span className="font-bold text-gray-900">₹{Math.round(currentData.total * 0.05).toLocaleString()}</span>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                <span className="text-lg font-bold text-gray-900">Total Earnings</span>
                <span className="text-xl font-bold text-emerald-600">₹{currentData.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;