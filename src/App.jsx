import React from 'react';
import { 
  ShoppingCart, 
  Tag, 
  User, 
  RotateCcw, 
  Truck, 
  FileText,
  ChevronRight,
  MessageCircle,
  AlertCircle,
  Bell,
  Heart,
  Search,
  ChevronDown
} from 'lucide-react';

function App() {
  const popularArticles = [
    {
      title: 'Buying as a guest',
      time: '4 min',
      link: '#'
    },
    {
      title: 'Get help with an item that hasn\'t arrived',
      time: '4 min',
      link: '#'
    },
    {
      title: 'Get help with a hacked account',
      time: '2 min',
      link: '#'
    },
    {
      title: 'Get help if you bought as a guest',
      time: '3 min',
      link: '#'
    },
    {
      title: 'Creating an eBay account',
      time: '2 min',
      link: '#'
    },
    {
      title: 'Reset your password',
      time: '2 min',
      link: '#'
    }
  ];

  const helpCategories = [
    { icon: <ShoppingCart size={24} />, title: 'Buying' },
    { icon: <Tag size={24} />, title: 'Selling' },
    { icon: <User size={24} />, title: 'Account' },
    { icon: <RotateCcw size={24} />, title: 'Returns and refunds' },
    { icon: <Truck size={24} />, title: 'Shipping and tracking' },
    { icon: <FileText size={24} />, title: 'Fees and billing' }
  ];  
  

  const otherOptions = [
    { title: 'Ask the Community', link: '#' },
    { title: 'Start a return', link: '#' },
    { title: 'Report an item that hasn\'t arrived', link: '#' }
  ];

  const footerLinks = [
    { title: 'About eBay', link: '#' },
    { title: 'Announcements', link: '#' },
    { title: 'Community', link: '#' },
    { title: 'Security Center', link: '#' },
    { title: 'Seller Center', link: '#' },
    { title: 'Policies', link: '#' },
    { title: 'Affiliates', link: '#' },
    { title: 'Help & Contact', link: '#' },
    { title: 'Site Map', link: '#' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Upper Nav */}
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Hi!</span>
              <a href="#" className="text-blue-600 hover:underline">Sign in</a>
              <span className="text-gray-600">or</span>
              <a href="#" className="text-blue-600 hover:underline">register</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Daily Deals</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Brand Outlet</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Gift Cards</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Help & Contact</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sell</a>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                Watchlist <ChevronDown size={16} className="ml-1" />
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                My eBay <ChevronDown size={16} className="ml-1" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Bell size={20} />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Title Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-[#e53238] text-3xl font-bold">ebay</a>
            <h1 className="text-2xl text-gray-700">Customer Service</h1>
          </div>
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mt-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900">Customer Service</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">How can we help you today?</h1>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mb-12">
          <input
            type="text"
            placeholder="Search eBay Help..."
            className="w-full px-4 py-3 pl-12 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

      

          {/* Header Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Suggestions for you</h2>
            <p className="text-gray-600 text-sm mb-4">Select an action or article to learn more</p>
            
            {/* Sign In Section */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Get personalized help and see your recent orders</h3>
              <button className="w-full bg-blue-600 text-white rounded-full py-3 px-4 font-medium hover:bg-blue-700 transition-colors">
                Sign in
              </button>
              <div className="mt-3 text-sm">
                <span className="text-gray-600">Don't have an account? </span>
                <a href="#" className="text-blue-600 hover:underline">Register now</a>
              </div>
            </div>

            {/* Popular Articles Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div>
                    <h4 className="font-medium text-gray-900">{article.title}</h4>
                    <p className="text-sm text-gray-500">Popular article - {article.time}</p>
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-gray-600" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Browse Help Articles Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Browse help articles</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {helpCategories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex flex-col items-center p-6 bg-white rounded-full hover:shadow-md transition-shadow text-center"
                >
                  <div className="bg-gray-50 p-4 rounded-full mb-3">
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium">{category.title}</span>
                </a>
              ))}
            </div>
          </div>

            {/* Rest of the content */}
        <div className="space-y-8">
          {/* Alert Banner */}
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <AlertCircle size={16} className="text-red-500" />
                <p>eBay is monitoring potential changes to tariffs and will update the eBay community as additional information becomes available.</p>
              </div>
            </div>
          </div>

          {/* Additional Help Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Need More Help Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Need more help?</h2>
              <p className="text-gray-600 text-sm mb-6">
                Get the help you need from our automated assistant, or contact an agent
              </p>
              <button className="w-full bg-blue-600 text-white rounded-full py-3 px-4 font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Contact us
              </button>
            </div>

            {/* Other Options Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Other options for you</h2>
              <div className="space-y-4">
                {otherOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.link}
                    className="block text-blue-600 hover:underline"
                  >
                    {option.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                {link.title}
              </a>
            ))}
          </nav>
          <p className="text-xs text-gray-500">
            Copyright © 1995-2023 eBay Inc. All Rights Reserved.
            <span className="mx-2">·</span>
            <a href="#" className="hover:underline">Accessibility</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:underline">User Agreement</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:underline">Cookies</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;