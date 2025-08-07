import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
import Registerbanner from "../../assets/shop-online-internet-shopping-store-concept.jpg";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left side - Enhanced Banner Image Section */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-black">
        <img
          src={Registerbanner}
          alt="Luxury Watch Shopping"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Gradient overlay with brand content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70 flex flex-col items-center justify-end pb-16 px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white tracking-wider mb-4 font-serif">
              MONTRES TRADING
            </h1>
            <p className="text-xl text-gold-300 text-center max-w-md">
              Join our exclusive community of watch enthusiasts
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-gold-300 opacity-70"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-gold-300 opacity-70"></div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo (visible only on mobile) */}
          <div className="md:hidden mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800 font-serif">
              MONTRES TRADING
            </h1>
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600">Join our luxury watch community</p>
          </div>

          {/* Social Sign Up Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {/* Google */}
            <button
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 px-4 hover:bg-gray-50 transition shadow-sm"
              aria-label="Sign up with Google"
            >
              <FcGoogle className="text-xl" />
              <span className="sr-only sm:not-sr-only">Google</span>
            </button>

            {/* Facebook */}
            <button
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 px-4 hover:bg-gray-50 transition shadow-sm"
              aria-label="Sign up with Facebook"
            >
              <FaFacebook className="text-xl text-blue-600" />
              <span className="sr-only sm:not-sr-only">Facebook</span>
            </button>

            {/* Twitter */}
            <button
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 px-4 hover:bg-gray-50 transition shadow-sm"
              aria-label="Sign up with Twitter"
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

          {/* Registration Form */}
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name <span className="text-gold-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-300 outline-none transition placeholder-gray-400"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address <span className="text-gold-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-300 outline-none transition placeholder-gray-400"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password <span className="text-gold-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-300 outline-none transition placeholder-gray-400 pr-10"
                  required
                  minLength="8"
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
              <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-start pt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-gold-500 focus:ring-gold-500 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3">
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to Montres Trading L.L.C's{" "}
                  <a href="#" className="text-gold-500 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-gold-500 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-medium py-3 px-4 rounded-lg transition duration-200 mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

          {/* Already have an account */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/Login"
                className="text-gold-500 hover:underline font-medium"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
