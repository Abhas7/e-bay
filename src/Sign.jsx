import React, { useState } from 'react';
import { Apple, Facebook, Mail } from 'lucide-react';

function Sign() {
  const [email, setEmail] = useState('');
  const [staySignedIn, setStaySignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Stay signed in:', staySignedIn);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-8">
        <Mail className="w-12 h-12 text-blue-600" />
      </div>

      {/* Info Alert */}
      <div className="bg-blue-600 text-white p-4 rounded-lg mb-8 max-w-md text-sm">
        To buy and sell on www.example.com or other sites internationally, existing users can login using their credentials or new users can register an account.
      </div>

      {/* Sign In Form */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center mb-2">Sign in to your account</h1>
        <p className="text-center text-gray-600 mb-6">
          New to the site?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Create account
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email or username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Continue
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <button className="w-full border border-gray-300 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200 mb-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700">Continue with Google</span>
          </button>

          <button className="w-full border border-gray-300 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200 mb-3">
            <Facebook className="w-5 h-5 text-[#1877F2]" />
            <span className="text-gray-700">Continue with Facebook</span>
          </button>

          <button className="w-full border border-gray-300 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200">
            <Apple className="w-5 h-5" />
            <span className="text-gray-700">Continue with Apple</span>
          </button>

          {/* Stay Signed In Checkbox */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="staySignedIn"
              checked={staySignedIn}
              onChange={(e) => setStaySignedIn(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="staySignedIn" className="ml-2 block text-sm text-gray-700">
              Stay signed in
            </label>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>
          Copyright © 1995-{new Date().getFullYear()} Example Inc. All Rights Reserved.{' '}
          <a href="#" className="text-blue-600 hover:underline">
            User Agreement
          </a>
          ,{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy
          </a>
          ,{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Cookies
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Sign;