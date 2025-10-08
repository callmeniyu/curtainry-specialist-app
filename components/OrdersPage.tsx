'use client';

import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, User, Eye, CheckCircle, XCircle, AlertCircle, Plus, Filter, Calendar, RotateCcw } from 'lucide-react';
import { getOrdersForUser, updateOrderStatus } from '../data/dummyAuth';
import CustomerDetailsModal from './CustomerDetailsModal';
import MeasurementModal from './MeasurementModal';

interface OrdersPageProps {
  userRole: 'consultant' | 'fitter';
  userData: any;
}

export default function OrdersPage({ userRole, userData }: OrdersPageProps) {
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showMeasurementModal, setShowMeasurementModal] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'accepted', 'in_progress', 'completed'
  const [dateFilter, setDateFilter] = useState('all'); // 'all', 'today', 'tomorrow', 'this_week'
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const userOrders = getOrdersForUser(userData.id, userRole);
    setOrders(userOrders);
  }, [userData.id, userRole]);

  const handleOrderAction = (orderId: string, action: string) => {
    let newStatus = '';
    switch (action) {
      case 'accept':
        newStatus = 'accepted';
        break;
      case 'visit': // For consultants
      case 'start':
        newStatus = 'in_progress';
        break;
      case 'complete':
        newStatus = 'completed';
        break;
      case 'reschedule':
        // Handle reschedule logic
        console.log('Reschedule order:', orderId);
        return;
      default:
        return;
    }

    const updatedOrder = updateOrderStatus(orderId, newStatus);
    if (updatedOrder) {
      const userOrders = getOrdersForUser(userData.id, userRole);
      setOrders(userOrders);
    }
  };

  const getFilteredOrders = () => {
    let filtered = orders;
    
    // Status filter
    if (filter !== 'all') {
      filtered = filtered.filter(order => order.status === filter);
    }
    
    // Date filter
    if (dateFilter !== 'all') {
      const today = new Date().toISOString().split('T')[0];
      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      switch (dateFilter) {
        case 'today':
          filtered = filtered.filter(order => order.scheduledDate === today);
          break;
        case 'tomorrow':
          filtered = filtered.filter(order => order.scheduledDate === tomorrow);
          break;
        case 'this_week':
          const weekStart = new Date();
          weekStart.setDate(weekStart.getDate() - weekStart.getDay());
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 6);
          
          filtered = filtered.filter(order => {
            const orderDate = new Date(order.scheduledDate);
            return orderDate >= weekStart && orderDate <= weekEnd;
          });
          break;
      }
    }
    
    return filtered;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-blue-100 text-blue-800';
      case 'in_progress':
        return 'bg-purple-100 text-purple-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
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

  const openCustomerDetails = (order: any) => {
    setSelectedOrder(order);
    setShowCustomerModal(true);
  };

  const openMeasurementModal = (order: any) => {
    setSelectedOrder(order);
    setShowMeasurementModal(true);
  };

  const canShowMeasurements = (order: any) => {
    return userRole === 'consultant' && order.status === 'in_progress';
  };

  const filteredOrders = getFilteredOrders();

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
            <p className="text-gray-600">
              {userRole === 'consultant' 
                ? 'Manage customer consultations and measurements' 
                : 'Handle curtain installations and fittings'
              }
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              {/* Date Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Dates</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="this_week">This Week</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Status Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6 overflow-x-auto">
        {[
          { key: 'all', label: 'All' },
          { key: 'pending', label: 'Pending' },
          { key: 'accepted', label: 'Accepted' },
          { key: 'in_progress', label: 'In Progress' },
          { key: 'completed', label: 'Completed' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
              filter === tab.key
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-500">
              {filter === 'all' 
                ? 'You don\'t have any orders yet.' 
                : `No ${filter} orders at the moment.`
              }
            </p>
          </div>
        ) : (
          filteredOrders.map((order: any) => (
            <div
              key={order.id}
              className={`bg-white rounded-lg shadow-sm border-l-4 p-4 ${getPriorityColor(order.priority)}`}
            >
              {/* Order Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-gray-900">#{order.id}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.replace('_', ' ').toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.orderType === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {order.orderType.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="font-medium">{order.scheduledDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="font-medium">{order.scheduledTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User size={16} className="text-gray-400" />
                    <button
                      onClick={() => openCustomerDetails(order)}
                      className="text-sm text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
                    >
                      {order.customerName}
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">
                    {userRole === 'consultant' ? 'Click for full details' : 'Click for basic info'}
                  </span>
                </div>
                
                {userRole === 'consultant' && (
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-700">{order.customerPhone}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-700">
                    {userRole === 'consultant' 
                      ? order.customerAddress 
                      : `${order.location} (${order.customerAddress.split(',').slice(-2).join(',').trim()})`
                    }
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => openCustomerDetails(order)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  View Details
                </button>

                {order.status === 'pending' && (
                  <button
                    onClick={() => handleOrderAction(order.id, 'accept')}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Accept Order
                  </button>
                )}

                {order.status === 'accepted' && userRole === 'consultant' && (
                  <button
                    onClick={() => handleOrderAction(order.id, 'start')}
                    className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <Eye size={16} />
                    <span>Start Visit</span>
                  </button>
                )}

                {order.status === 'accepted' && userRole === 'fitter' && (
                  <button
                    onClick={() => handleOrderAction(order.id, 'start')}
                    className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Start Installation
                  </button>
                )}

                {order.status === 'in_progress' && userRole === 'consultant' && (
                  <>
                    <button
                      onClick={() => openMeasurementModal(order)}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Plus size={16} />
                      <span>Add Measurements</span>
                    </button>
                    <button
                      onClick={() => handleOrderAction(order.id, 'complete')}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <CheckCircle size={16} />
                      <span>Complete</span>
                    </button>
                  </>
                )}

                {order.status === 'in_progress' && userRole === 'fitter' && (
                  <button
                    onClick={() => handleOrderAction(order.id, 'complete')}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <CheckCircle size={16} />
                    <span>Mark Complete</span>
                  </button>
                )}
              </div>

              {/* Room Count */}
              {order.rooms && order.rooms.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">{order.rooms.length}</span> room(s) measured
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Customer Details Modal */}
      {showCustomerModal && selectedOrder && (
        <CustomerDetailsModal
          order={selectedOrder}
          userRole={userRole}
          onClose={() => setShowCustomerModal(false)}
        />
      )}

      {/* Measurement Modal */}
      {showMeasurementModal && selectedOrder && (
        <MeasurementModal
          order={selectedOrder}
          onClose={() => setShowMeasurementModal(false)}
          onSave={(roomData: any) => {
            // Handle saving measurement data
            console.log('Saving measurement:', roomData);
            setShowMeasurementModal(false);
          }}
        />
      )}
    </div>
  );
}