'use client';

import React, { useState } from 'react';
import { TrendingUp, Star, Users, Clock, Target, Award, BarChart3, PieChart } from 'lucide-react';

interface AnalysisPageProps {
  userRole: 'consultant' | 'fitter';
  userData: any;
}

const AnalysisPage: React.FC<AnalysisPageProps> = ({ userRole, userData }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('this_month');

  // Sample analytics data
  const analyticsData = {
    this_month: {
      completion_rate: 95.2,
      customer_satisfaction: 4.8,
      avg_response_time: 24, // hours
      jobs_completed: 15,
      repeat_customers: 8,
      revenue_growth: 12.5,
      performance_score: 92,
      efficiency_rating: 88,
      monthly_goals: {
        jobs: { target: 20, achieved: 15 },
        revenue: { target: 15000, achieved: 12500 },
        satisfaction: { target: 4.5, achieved: 4.8 }
      },
      weekly_performance: [
        { week: 'Week 1', jobs: 4, satisfaction: 4.9, revenue: 3200 },
        { week: 'Week 2', jobs: 3, satisfaction: 4.7, revenue: 2800 },
        { week: 'Week 3', jobs: 5, satisfaction: 4.8, revenue: 3800 },
        { week: 'Week 4', jobs: 3, satisfaction: 4.8, revenue: 2700 }
      ],
      customer_feedback: [
        { id: 1, customer: 'John Smith', rating: 5, comment: 'Excellent work and very professional!', date: '2025-10-05' },
        { id: 2, customer: 'Sarah Johnson', rating: 5, comment: 'Perfect installation, highly recommended.', date: '2025-10-03' },
        { id: 3, customer: 'Mike Wilson', rating: 4, comment: 'Good service, arrived on time.', date: '2025-10-01' }
      ]
    }
  };

  const currentData = analyticsData[selectedPeriod as keyof typeof analyticsData];

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getGoalProgress = (achieved: number, target: number) => {
    return Math.min((achieved / target) * 100, 100);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Performance Analysis</h2>
            <p className="text-gray-600">
              Track your performance metrics and growth insights
            </p>
          </div>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="this_month">This Month</option>
            <option value="last_month">Last Month</option>
            <option value="this_quarter">This Quarter</option>
          </select>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Completion Rate */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Completion Rate</h3>
            <Target size={20} className="text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">{currentData.completion_rate}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${currentData.completion_rate}%` }}
            />
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Satisfaction</h3>
            <Star size={20} className="text-yellow-500" />
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <p className="text-2xl font-bold text-gray-900">{currentData.customer_satisfaction}</p>
            <div className="flex space-x-1">
              {renderStars(Math.round(currentData.customer_satisfaction))}
            </div>
          </div>
          <p className="text-xs text-gray-500">Average customer rating</p>
        </div>

        {/* Response Time */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Avg Response</h3>
            <Clock size={20} className="text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">{currentData.avg_response_time}h</p>
          <p className="text-xs text-gray-500">Average response time</p>
        </div>

        {/* Performance Score */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium opacity-90">Performance</h3>
            <Award size={20} className="opacity-80" />
          </div>
          <p className="text-2xl font-bold mb-1">{currentData.performance_score}</p>
          <p className="text-xs opacity-90">Overall score</p>
        </div>
      </div>

      {/* Monthly Goals Progress */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Goals Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Jobs Goal */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Jobs Completed</span>
              <span className="text-sm text-gray-500">
                {currentData.monthly_goals.jobs.achieved}/{currentData.monthly_goals.jobs.target}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ 
                  width: `${getGoalProgress(
                    currentData.monthly_goals.jobs.achieved, 
                    currentData.monthly_goals.jobs.target
                  )}%` 
                }}
              />
            </div>
            <p className="text-xs text-gray-500">
              {getGoalProgress(currentData.monthly_goals.jobs.achieved, currentData.monthly_goals.jobs.target).toFixed(0)}% of target
            </p>
          </div>

          {/* Revenue Goal */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Revenue Target</span>
              <span className="text-sm text-gray-500">
                ₹{currentData.monthly_goals.revenue.achieved.toLocaleString()}/₹{currentData.monthly_goals.revenue.target.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-green-500 h-3 rounded-full transition-all duration-300"
                style={{ 
                  width: `${getGoalProgress(
                    currentData.monthly_goals.revenue.achieved, 
                    currentData.monthly_goals.revenue.target
                  )}%` 
                }}
              />
            </div>
            <p className="text-xs text-gray-500">
              {getGoalProgress(currentData.monthly_goals.revenue.achieved, currentData.monthly_goals.revenue.target).toFixed(0)}% of target
            </p>
          </div>

          {/* Satisfaction Goal */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Satisfaction Rating</span>
              <span className="text-sm text-gray-500">
                {currentData.monthly_goals.satisfaction.achieved}/{currentData.monthly_goals.satisfaction.target}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                style={{ 
                  width: `${getGoalProgress(
                    currentData.monthly_goals.satisfaction.achieved, 
                    currentData.monthly_goals.satisfaction.target
                  )}%` 
                }}
              />
            </div>
            <p className="text-xs text-gray-500">
              {getGoalProgress(currentData.monthly_goals.satisfaction.achieved, currentData.monthly_goals.satisfaction.target).toFixed(0)}% achieved
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Performance Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Weekly Performance Trend</h3>
        <div className="grid grid-cols-4 gap-4">
          {currentData.weekly_performance.map((week, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <div className="flex flex-col items-center space-y-2">
                  {/* Jobs Bar */}
                  <div className="w-8 bg-gray-200 rounded">
                    <div 
                      className="bg-blue-500 rounded transition-all duration-300"
                      style={{ height: `${week.jobs * 10}px` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{week.jobs} jobs</span>
                </div>
              </div>
              <h4 className="text-sm font-medium text-gray-900">{week.week}</h4>
              <div className="text-xs text-gray-500 mt-1">
                <p>⭐ {week.satisfaction}</p>
                <p>₹{week.revenue.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Customer Feedback */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Customer Feedback</h3>
        <div className="space-y-4">
          {currentData.customer_feedback.map((feedback) => (
            <div key={feedback.id} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{feedback.customer}</h4>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(feedback.rating)}
                  </div>
                </div>
                <span className="text-xs text-gray-500">{feedback.date}</span>
              </div>
              <p className="text-sm text-gray-700 italic">"{feedback.comment}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-green-50 rounded-lg border border-green-200 p-6">
          <h3 className="text-lg font-medium text-green-900 mb-4">Your Strengths</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm text-green-800">High customer satisfaction (4.8/5)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm text-green-800">Excellent completion rate (95.2%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm text-green-800">Strong repeat customer base</span>
            </div>
          </div>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-orange-50 rounded-lg border border-orange-200 p-6">
          <h3 className="text-lg font-medium text-orange-900 mb-4">Growth Opportunities</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-sm text-orange-800">Increase monthly job target</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-sm text-orange-800">Improve response time (currently 24h)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-sm text-orange-800">Focus on revenue growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <Star size={24} className="text-white" />
            </div>
            <span className="text-xs font-medium text-blue-900 text-center">Top Rated</span>
            <span className="text-xs text-blue-700">This Month</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
              <Target size={24} className="text-white" />
            </div>
            <span className="text-xs font-medium text-green-900 text-center">Goal Achiever</span>
            <span className="text-xs text-green-700">15 Jobs</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
              <Users size={24} className="text-white" />
            </div>
            <span className="text-xs font-medium text-purple-900 text-center">Customer Favorite</span>
            <span className="text-xs text-purple-700">8 Repeats</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
              <Award size={24} className="text-white" />
            </div>
            <span className="text-xs font-medium text-yellow-900 text-center">High Performer</span>
            <span className="text-xs text-yellow-700">92 Score</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;