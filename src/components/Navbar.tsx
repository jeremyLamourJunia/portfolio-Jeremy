import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="text-2xl font-bold gradient-text">
            JL
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Accueil
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Expériences
            </NavLink>
            <NavLink to="/business" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Business
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <NavLink
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/experience"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Expériences
            </NavLink>
            <NavLink
              to="/business"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Business
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;