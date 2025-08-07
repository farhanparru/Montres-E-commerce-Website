import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter, FaEye, FaEyeSlash, FaTag, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginBanner from '../../assets/standard-quality-control-concept-m.jpg';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe, promoCode });
  };

  const applyPromoCode = () => {
    // Handle promo code validation and application
    alert(`Promo code ${promoCode} applied!`);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left side - Banner Image Section */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-black">
        <img 
          src={LoginBanner} 
          alt="Luxury Watch Collection" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70 flex flex-col items-center justify-end pb-16 px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white tracking-wider mb-4 font-serif">MONTRES TRADING</h1>
            <p className="text-xl text-gold-300 text-center max-w-md">
              Discover timeless elegance in every piece
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-gold-300 opacity-70"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-gold-300 opacity-70"></div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="md:hidden mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800 font-serif">MONTRES TRADING</h1>
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Promo Code Section */}
          {!showPromoCode && (
            <div className="mb-4 text-center">
              <button 
                type="button"
                onClick={() => setShowPromoCode(true)}
                className="text-gold-500 hover:text-gold-600 text-sm font-medium flex items-center justify-center gap-1"
              >
                <FaTag className="text-sm" />
                Have a promo code? Apply it here
              </button>
            </div>
          )}

          {showPromoCode && (
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Promo Code
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="promoCode"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-300 outline-none transition placeholder-gray-400"
                    />
                    <FaTag className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={applyPromoCode}
                  className="mt-6 bg-gold-500 hover:bg-gold-600 text-black font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                >
                  Apply
                </button>
              </div>
              <button 
                type="button"
                onClick={() => setShowPromoCode(false)}
                className="mt-1 text-xs text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          )}

          {/* Social Login Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <button 
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 px-4 hover:bg-gray-50 transition shadow-sm"
              aria-label="Sign in with Google"
            >
              <FcGoogle className="text-xl" />
              <span className="sr-only sm:not-sr-only">Google</span>
            </button>
            
            <button 
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 px-4 hover:bg-gray-50 transition shadow-sm"
              aria-label="Sign in with Facebook"
            >
              <FaFacebook className="text-xl text-blue-600" />
              <span className="sr-only sm:not-sr-only">Facebook</span>
            </button>
            
            <button 
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 px-4 hover:bg-gray-50 transition shadow-sm"
              aria-label="Sign in with Twitter"
            >
              <FaTwitter className="text-xl text-blue-400" />
              <span className="sr-only sm:not-sr-only">Twitter</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <div className="px-4 text-gray-500 text-sm">OR</div>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-gold-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-300 outline-none transition placeholder-gray-400"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-gold-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-300 outline-none transition placeholder-gray-400 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gold-500"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-gold-500 focus:ring-gold-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-gold-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Legal Notice */}
            <div className="text-xs text-gray-500 mt-4">
              <p>
                By continuing, you agree to Montres Trading LLC's{' '}
                <Link to="/conditions" className="text-gold-500 hover:underline">Conditions of Use</Link> and{' '}
                <Link to="/privacy" className="text-gold-500 hover:underline">Privacy Notice</Link>.
              </p>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-medium py-3 px-4 rounded-lg transition duration-200 mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Help Section */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center justify-center gap-2">
                <FaQuestionCircle className="text-gold-500" />
                Need help?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <Link to="/forgot-password" className="text-gold-500 hover:underline">
                  Forgot your password?
                </Link>
                <Link to="/contact" className="text-gold-500 hover:underline">
                  Other issues with Sign-In
                </Link>
              </div>
            </div>
          </div>

          {/* Create Account Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-gold-500 hover:underline font-medium">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;