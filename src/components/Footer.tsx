import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                Me contacter
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Réseaux</h3>
            <div className="space-y-2">
              <a href="https://github.com/jeremyLamourJunia" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jeremy-lamour/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-blue-600">Accueil</Link>
              <Link to="/experience" className="block text-gray-600 hover:text-blue-600">Expériences</Link>
              <Link to="/business" className="block text-gray-600 hover:text-blue-600">Business</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jérémy Lamour. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;