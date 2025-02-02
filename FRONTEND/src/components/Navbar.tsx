import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">DreamForge</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/profile" className="text-gray-600 hover:text-indigo-600">Profile</Link>
            <Link to="/chat-ai" className="text-gray-600 hover:text-indigo-600">Chat with AI</Link>
            <Link to="/experts" className="text-gray-600 hover:text-indigo-600">Chat with Experts</Link>
            <Link to="/shop" className="text-gray-600 hover:text-indigo-600">Shopping</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;