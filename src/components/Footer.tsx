import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Kavya Dharshini S
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer & IT Student passionate about creating innovative web solutions 
              and exploring the frontiers of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                About Me
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Skills
              </a>
              <a href="#certificates" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Certificates
              </a>
              <a href="#achievements" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Achievements
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:kavyasiva05@gmail.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={16} />
                kavyasiva05@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/Kavyadharshinisiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-200 hover:scale-110 border border-white/10"
                >
                  <Github size={20} className="text-gray-400 hover:text-white transition-colors duration-200" />
                </a>
                <a
                  href="https://linkedin.com/in/kavyasiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200 hover:scale-110 border border-white/10"
                >
                  <Linkedin size={20} className="text-blue-400 hover:text-white transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2024 Kavya Dharshini S. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;