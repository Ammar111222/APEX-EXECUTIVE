import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/lib/AuthContext';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await login(data.email, data.password);
      // Navigation is handled in the login function in AuthContext
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Apex Executive Partners</title>
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-jet-black py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-md w-full space-y-8 bg-deep-charcoal p-8 rounded-xl shadow-lg border border-royal-gold/30">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-royal-gold">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-soft-cream/80">
              Enter your credentials to manage Insights content
            </p>
          </div>
          
          {error && (
            <div className="bg-jet-black border-l-4 border-red-500 p-4">
              <p className="text-red-400">{error}</p>
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-royal-gold">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    }
                  })}
                  className={`mt-1 block w-full px-3 py-2 bg-jet-black border ${
                    errors.email ? 'border-red-500' : 'border-royal-gold/30'
                  } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-royal-gold text-soft-cream`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-royal-gold">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register('password', { required: 'Password is required' })}
                  className={`mt-1 block w-full px-3 py-2 bg-jet-black border ${
                    errors.password ? 'border-red-500' : 'border-royal-gold/30'
                  } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-royal-gold text-soft-cream`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-royal-gold/30 rounded-md shadow-sm text-jet-black bg-royal-gold hover:bg-warm-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-gold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging in...' : 'Sign in'}
              </button>
            </div>
            
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-sm text-soft-cream/80 hover:text-royal-gold transition-colors"
              >
                Return to Home
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Login; 