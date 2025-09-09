import React from 'react';
import { Heart, BarChart3 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="text-cyan-400" size={32} />
              <h3 className="text-2xl font-bold">DataViz Pro</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Transforming complex data into clear, actionable insights through innovative 
              business intelligence solutions and stunning visualizations.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 DataViz Pro. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Experience</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Business Intelligence</li>
              <li>Dashboard Development</li>
              <li>Data Analysis</li>
              <li>Report Automation</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by a passionate data analyst</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;