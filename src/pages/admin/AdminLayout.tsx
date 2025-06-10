import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AdminSidebar from '@/components/admin/AdminSidebar';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import { useAuth } from '@/lib/AuthContext';

const AdminLayout = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log("AdminLayout rendered", { user: currentUser?.email });
  }, [currentUser]);

  return (
    <ProtectedRoute>
      <Helmet>
        <title>Admin Dashboard | Apex Executive Partners</title>
      </Helmet>
      
      <div className="flex h-screen bg-jet-black">
        <AdminSidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-8 text-soft-cream">
            <Outlet />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout; 