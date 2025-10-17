import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  // Debug logging
  console.log('ProtectedRoute - Current user:', currentUser?.email);
  console.log('ProtectedRoute - Loading:', loading);
  console.log('ProtectedRoute - User authenticated:', !!currentUser);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-jet-black text-royal-gold">
        <div className="animate-spin h-12 w-12 border-4 border-royal-gold border-t-transparent rounded-full mr-3"></div>
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  if (!currentUser) {
    console.log('ProtectedRoute - No user found, redirecting to login');
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 