import React, { useState } from 'react';
import { Eye, EyeOff, ChevronDown, Store } from 'lucide-react';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState('personal');
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    password: '',
    country: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" 
            alt="eBay Logo" 
            className="h-8"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Create an account</h1>
              <div className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Sign in
                </a>
              </div>
            </div>

            {/* Account Type Toggle */}
            <div className="flex rounded-full bg-gray-100 p-1 mb-6">
              <button
                onClick={() => setAccountType('personal')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors
                  ${accountType === 'personal' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'}`}
              >
                Personal
              </button>
              <button
                onClick={() => setAccountType('business')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors
                  ${accountType === 'business' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'}`}
              >
                Business
              </button>
            </div>

            {accountType === 'business' && (
              <div className="mb-4 text-sm text-gray-600">
                Continue to register as a <span className="font-medium">business or nonprofit</span>, or if you plan to sell a large number of goods.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {accountType === 'business' && (
                <div className="mb-4">
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                    Business name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {accountType === 'business' ? 'Business email' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {accountType === 'business' && (
                <div className="mb-6">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Where is your business registered?
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                        <option value="ES">Spain</option>
                        <option value="BR">Brazil</option>
                        <option value="NL">Netherlands</option>
                        <option value="MX">Mexico</option>
                        <option value="SE">Sweden</option>
                        <option value="PL">Poland</option>
                        <option value="CH">Switzerland</option>
                        <option value="BE">Belgium</option>
                        <option value="AT">Austria</option>
                        <option value="IN">India</option>
                        <option value="JP">Japan</option>
                        <option value="IND">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="PH">Philippines</option>
                        <option value="SG">Singapore</option>
                        <option value="TH">Thailand</option>
                        <option value="MY">Malaysia</option>
                        <option value="KR">South Korea</option>
                        <option value="SA">Saudi Arabia</option>   
                        <option value="AE">United Arab Emirates</option>
                        <option value="QA">Qatar</option>
                        <option value="KW">Kuwait</option>
                        <option value="BH">Bahrain</option>
                        <option value="OM">Oman</option>
                        <option value="EG">Egypt</option>
                        <option value="ZA">South Africa</option>
                        <option value="NG">Nigeria</option>
                        <option value="KE">Kenya</option>
                        <option value="TZ">Tanzania</option>
                        <option value="UG">Uganda</option>
                        <option value="MA">Morocco</option>
                        <option value="DZ">Algeria</option>
                        <option value="KE">Kenya</option>
                        <option value="GH">Ghana</option>
                        <option value="ET">Ethiopia</option>
                        <option value="CM">Cameroon</option>
                        <option value="TZ">Tanzania</option>
                        <option value="UG">Uganda</option>
                        <option value="KE">Kenya</option>
                        <option value="GH">Ghana</option>
                        <option value="KE">Kenya</option>
                        <option value="GH">Ghana</option>
                        <option value="KE">Kenya</option>
                        <option value="GH">Ghana</option>
                        <option value="KE">Kenya</option>
                        <option value="GH">Ghana</option>
                        <option value="KE">Kenya</option>
                        
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    If your business isn't registered, select your country of residence.
                  </p>
                </div>
              )}

              <div className="text-sm text-gray-600 mb-6">
                By selecting{' '}
                <span className="font-medium">
                  {accountType === 'business' ? 'Create business account' : 'Create account'}
                </span>
                , you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  User Agreement
                </a>{' '}
                and acknowledge reading our{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  User Privacy Notice
                </a>
                .
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-full font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {accountType === 'business' ? 'Create business account' : 'Create account'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;