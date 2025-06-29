import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Eye, FileText } from 'lucide-react';

const Hero = () => {
  const [showCredentials, setShowCredentials] = useState(false);

  const credentials = [
    { label: 'Current CGPA', value: '8.67/10', color: 'text-emerald-400' },
    { label: 'HSC Score', value: '74.2%', color: 'text-blue-400' },
    { label: 'SSLC Score', value: '94.2%', color: 'text-purple-400' },
    { label: 'Internships', value: '5+ Completed', color: 'text-orange-400' },
    { label: 'Projects', value: '4+ Major', color: 'text-red-400' },
    { label: 'Hackathons', value: '3+ Participated', color: 'text-indigo-400' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl backdrop-blur-sm">
                <img
                  src="/WhatsApp Image 2025-06-27 at 8.13.43 PM.jpeg"
                  alt="Kavya Dharshini S"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Kavya Dharshini S
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                <span className="font-semibold text-white">Full Stack Developer</span> & 
                <span className="font-semibold text-white"> IT Student</span> passionate about creating 
                <span className="text-blue-400 font-semibold"> innovative web solutions</span> and exploring the 
                <span className="text-purple-400 font-semibold"> frontiers of technology</span>.
              </p>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up delay-300">
              <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group">
                  <Mail size={20} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:font-semibold transition-all duration-300">kavyasiva05@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300 group">
                  <Phone size={20} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:font-semibold transition-all duration-300">+91 6379749096</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 group">
                  <MapPin size={20} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:font-semibold transition-all duration-300">Salem, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Credentials Section */}
            <div className="animate-fade-in-up delay-400 mb-8">
              <button
                onClick={() => setShowCredentials(!showCredentials)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 mx-auto lg:mx-0 group border border-white/10"
              >
                <Eye size={20} className="group-hover:scale-110 transition-transform duration-300" />
                {showCredentials ? 'Hide Credentials' : 'View Credentials'}
              </button>
              
              {showCredentials && (
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
                  {credentials.map((cred, index) => (
                    <div 
                      key={index} 
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-sm text-gray-400 mb-1">{cred.label}</div>
                      <div className={`text-lg font-bold ${cred.color}`}>{cred.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up delay-500">
              <div className="flex gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="https://github.com/Kavyadharshinisiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 hover:scale-110 hover:bg-gray-800 group border border-white/10"
                >
                  <Github size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://linkedin.com/in/kavyasiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 hover:bg-blue-600 group border border-white/10"
                >
                  <Linkedin size={24} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="mailto:kavyasiva05@gmail.com"
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-110 hover:bg-red-500 group border border-white/10"
                >
                  <Mail size={24} className="text-red-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-600">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 group flex items-center justify-center gap-2 border border-white/10"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:scale-105 group flex items-center justify-center gap-2"
                >
                  <FileText size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  View Projects
                </a>
               <a
  href="/Kavya Dharshini_IT.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:from-emerald-700 hover:to-teal-700 group flex items-center justify-center gap-2 border border-white/10"
>
  <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
  Download CV
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;