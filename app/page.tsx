'use client';

import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import LandingPage from '../components/LandingPage';
import AuthModal from '../components/AuthModal';
import Dashboard from '../components/Dashboard';

type AppState = 'loading' | 'landing' | 'auth' | 'dashboard';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<'consultant' | 'fitter' | null>(null);

  const handleLoadingComplete = () => {
    setAppState('landing');
  };

  const handleGetStarted = () => {
    setAppState('auth');
  };

  const handleAuthClose = () => {
    setAppState('landing');
  };

  const handleLogin = (userData: any, role: 'consultant' | 'fitter') => {
    console.log('handleLogin called with:', userData, role);
    setUser(userData);
    setUserRole(role);
    setAppState('dashboard');
    console.log('App state set to dashboard');
    console.log('Current state after login:', { user: userData, userRole: role, appState: 'dashboard' });
  };

  const handleLogout = () => {
    setUser(null);
    setUserRole(null);
    setAppState('landing');
  };

  // Add debugging for render
  console.log('Current render state:', { appState, user: !!user, userRole });

  return (
    <main>
      {appState === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {appState === 'landing' && (
        <LandingPage onShowAuth={handleGetStarted} />
      )}
      
      {appState === 'auth' && (
        <AuthModal 
          onClose={handleAuthClose} 
          onLogin={handleLogin}
        />
      )}
      
      {appState === 'dashboard' && user && userRole && (
        <Dashboard 
          userRole={userRole}
          userData={user}
          onLogout={handleLogout}
        />
      )}
    </main>
  );
}