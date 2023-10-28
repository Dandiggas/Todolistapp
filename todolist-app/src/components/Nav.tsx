// Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Todo List App</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-blue-800 focus:outline-none focus:bg-blue-800">Login</Link>
          <Link to="/register" className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-blue-800 focus:outline-none focus:bg-blue-800">Register</Link>
        </div>
      </div>
    </nav>
  );
}


