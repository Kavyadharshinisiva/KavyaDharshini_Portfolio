import React from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Content Writer Intern',
      company: 'Marpu Foundation',
      location: 'Remote',
      period: '11/2024',
      type: 'Internship',
      description: [
        'Created impactful written content to promote the foundation\'s social initiatives and events, enhancing public engagement and awareness.',
        'Researched, drafted, and edited articles, social media posts, and reports to communicate the organization\'s mission clearly.'
      ]
    },
    {
      title: 'Training and Programming',
      company: 'Quizaro Extendedge',
      location: 'Bangalore (Remote)',
      period: '02/2024 – 04/2024',
      type: 'Training',
      description: [
        'Collaborated with backend teams to integrate REST API optimizing data flow and application performance.',
        'Applied version control (Git) and Agile methodologies to deliver high-quality, maintainable code in a fast-paced EdTech environment.'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Let\'s Gametech',
      location: 'Coimbatore',
      period: '09/2024',
      type: 'Internship',
      description: [
        'Completed a Web Development Internship at Let\'s Gametech, Coimbatore.',
        'Gained hands-on experience in HTML, CSS, JavaScript, and responsive design.',
        'Developed and optimized interactive web applications.'
      ]
    },
    
    {
      title: 'Spring Data JPA with Boot',
      company: 'Infosys Spring Boot',
      location: 'Online',
      period: '2024',
      type: 'Training',
      description: [
        'Completed comprehensive training in Spring Data JPA with Spring Boot framework.'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'Training':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Experience & Training</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey through internships and specialized training programs that have shaped my technical expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-gray-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-blue-400 font-semibold mb-2">{exp.company}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-purple-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-emerald-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;