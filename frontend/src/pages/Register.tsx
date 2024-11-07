import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

function Register() {
  return (
    <div className="h-screen flex flex-col md:flex-row">

      {/* Left Side - Image and Text */}
      <div className="hidden md:block w-1/2 h-full bg-primary-blue relative flex items-center justify-center">
        <div className="absolute pb-24 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-3xl font-semibold">Share Document and Study Group Platform</h2>
          <p className="text-lg font-light mt-2">Join us and collaborate with others!</p>
        </div>

        <div className="w-4/5">
          <img
            src="/login/online-group.png"
            className="w-full h-auto pt-20 ml-20"
            alt="Registration Illustration"
          />
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-white px-8 md:px-16 relative">
        {/* Logo */}
        <img src="logodocuroom.png" alt="Logo" className="absolute top-12 left-12 md:left-24 w-40 h-auto" />

        {/* Form Container */}
        <div className="w-full max-w-sm mt-20">
          <h3 className="text-3xl font-semibold mb-6 text-center">Register</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-blue text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-blue text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-blue text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-blue transition duration-300 text-lg"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-500 my-4">
            Already have an account?{' '}
            <Link to="/" className="text-primary-blue hover:underline">
              Login now
            </Link>
          </p>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-primary-blue hover:text-white transition duration-300">
              <FaGoogle className="text-2xl" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-primary-blue hover:text-white transition duration-300">
              <FaFacebookF className="text-2xl" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-primary-blue hover:text-white transition duration-300">
              <RiInstagramFill className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
