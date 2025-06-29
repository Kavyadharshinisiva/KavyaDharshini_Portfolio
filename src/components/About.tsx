import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech (Information Technology)',
      institution: 'Nandha College of Technology, Erode',
      period: '2022 – 2026',
      grade: '8.67 CGPA',
      status: 'Pursuing',
      color: 'from-blue-400 to-purple-400'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Sri Vidhyasaagar Matric Hr. Sec School, Salem',
      period: '2020 – 2021',
      grade: '74.2%',
      status: 'Completed',
      color: 'from-emerald-400 to-teal-400'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Sri Vidhyasaagar Matric Hr. Sec School, Salem',
      period: '2019 – 2020',
      grade: '94.2%',
      status: 'Completed',
      color: 'from-purple-400 to-pink-400'
    }
  ];

  const personalInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'kavyasiva05@gmail.com', color: 'text-blue-400' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 6379749096', color: 'text-emerald-400' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Salem, Tamil Nadu', color: 'text-purple-400' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate IT student and full-stack developer with a strong foundation in modern web technologies. 
            My journey in technology is driven by curiosity and a desire to create meaningful digital experiences 
            that make a positive impact on people's lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Personal Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 border border-white/10 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              Personal Information
            </h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
                <div className="text-lg font-semibold text-gray-300 mb-2">Full Name</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Kavya Dharshini S
                </div>
              </div>
              
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group border border-transparent hover:border-white/10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                    <span className={info.color}>{info.icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-300">{info.label}</div>
                    <div className="text-gray-400 group-hover:text-white group-hover:font-semibold transition-all duration-300">{info.value}</div>
                  </div>
                </div>
              ))}
              
              <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-white/10">
                <div className="text-lg font-semibold text-gray-300 mb-2">Address</div>
                <div className="text-gray-400">2/47F Pirivu Road, Sankari</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 border border-white/10 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg mb-2">{edu.degree}</h4>
                        <p className="text-gray-300 mb-3">{edu.institution}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        edu.status === 'Pursuing' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' 
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30'
                      } group-hover:scale-105 transition-transform duration-300`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-yellow-400" />
                        <span className={`font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting line for timeline effect */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;