import React from 'react';
import { Code, Database, Smartphone, Brain, Server, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Full Stack Web Development',
      icon: <Globe className="w-8 h-8" />,
      level: 'Proficient',
      description: 'Proficient in Web Development, with expertise in Frontend technologies and modern frameworks.',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
      color: 'blue'
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      level: 'Competent',
      description: 'Knowledgeable in Python & Java programming with strong problem-solving capabilities.',
      skills: ['Python', 'Java', 'JavaScript', 'Git Version Control', 'Agile Methodologies'],
      color: 'green'
    },
    {
      title: 'Machine Learning Models',
      icon: <Brain className="w-8 h-8" />,
      level: 'Beginner',
      description: 'Familiar with making machine learning models, currently in the learning process.',
      skills: [ 'Regressive-Model','Classification'],
      color: 'purple'
    },
 
  
    
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Proficient':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30';
      case 'Competent':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'Beginner':
      case 'Learning':
        return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getColorClasses(category.color)} flex items-center justify-center text-white mb-6 shadow-lg hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(category.level)}`}>
                  {category.level}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)}`}></div>
                    <span className="text-gray-300 font-medium hover:text-white transition-colors duration-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;