import React from 'react';
import { Trophy, Award, Star, Medal, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained consistent high performance with 8.67 CGPA in B.Tech IT',
      icon: <Trophy size={32} />,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      title: 'Multiple Internships',
      description: 'Successfully completed 5+ internships in web development and content writing',
      icon: <Award size={32} />,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-400/30'
    },
    {
      title: 'Hackathon Participation',
      description: 'Participated in 3+ hackathons, showcasing problem-solving and teamwork skills',
      icon: <Zap size={32} />,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-400/30'
    },
    {
      title: 'Project Portfolio',
      description: 'Developed 4+ major projects demonstrating full-stack development expertise',
      icon: <Star size={32} />,
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-400/30'
    },
    {
      title: 'Professional Certifications',
      description: 'Earned 6+ professional certifications in various technologies and frameworks',
      icon: <Medal size={32} />,
      color: 'from-red-400 to-rose-500',
      bgColor: 'from-red-500/10 to-rose-500/10',
      borderColor: 'border-red-400/30'
    },
    {
      title: 'Technical Leadership',
      description: 'Led development teams and mentored junior developers in various projects',
      icon: <Target size={32} />,
      color: 'from-indigo-400 to-purple-500',
      bgColor: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'border-indigo-400/30'
    }
  ];

  const stats = [
    { label: 'CGPA', value: '8.67/10', color: 'text-yellow-400' },
    { label: 'Internships', value: '5+', color: 'text-blue-400' },
    { label: 'Projects', value: '4+', color: 'text-emerald-400' },
    { label: 'Certificates', value: '6+', color: 'text-purple-400' }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Achievements & Milestones</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my academic excellence, professional accomplishments, and technical milestones that define my journey in technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`relative bg-gradient-to-br ${achievement.bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 border ${achievement.borderColor} hover:border-white/20 h-full`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">{achievement.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {achievement.description}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500"></div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up delay-1000">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Achieve More</h3>
            <p className="text-gray-300 mb-6">
              These achievements represent just the beginning of my journey. I'm always looking for new challenges and opportunities to grow.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border border-white/10"
            >
              <Trophy size={20} />
              Let's Create Something Amazing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;