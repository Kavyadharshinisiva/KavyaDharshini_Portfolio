import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Resume Analyzer',
      period: 'Recent Team Project',
      description:
        'The Resume Analyzer Project is a web-based application designed to analyze resumes and extract key information for recruitment and evaluation purposes. Built using modern front-end technologies like TypeScript, Tailwind CSS, and Vite, this tool aims to streamline the process of reviewing resumes by automating data extraction and assessment.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'PostCSS', 'ESLint', 'AI'],
      category: 'Web Development',
      detailsLink: 'https://balamanikandanb191.github.io/Resume_Analyzer_Project/',
      sourceLink: 'https://github.com/BalamanikandanB191/Resume_Analyzer_Project',
    },
    {
      title: 'Smart Medicine Delivery System',
      period: '06/2025',
      description:
        'Built a Smart Medicine Delivery app enabling seamless ordering, secure payments, real-time tracking, user-friendly interface, and efficient delivery management for improved healthcare accessibility.',
      technologies: ['Mobile Development', 'Payment Integration', 'Real-time Tracking', 'Healthcare Tech'],
      category: 'Mobile App',
      detailsLink: 'https://kavyadharshinisiva.github.io/Interactive_Medicine_delivery_System_Project/',
      sourceLink: 'https://github.com/Kavyadharshinisiva/Interactive_Medicine_delivery_System_Project',
    },
    {
      title: 'REACT Portfolio',
      period: '11/2024',
      description:
        'Built a React portfolio using Tailwind CSS, Styled Components, and 3D CSS for an interactive and visually engaging design. Utilized React for dynamic content, Tailwind for responsiveness, and 3D CSS effects for modern visual appeal.',
      technologies: ['React', 'Tailwind CSS', 'Styled Components', '3D CSS'],
      category: 'Web Development',
      detailsLink: 'https://drive.google.com/file/d/1H_GCGQop7vLUJMFNm1n3UnH6i92goOsc/view?usp=sharing',
      sourceLink: 'https://github.com/BalamanikandanB191/ReactPortfolio',
    },
    {
      title: 'Smart Door Lock Access System',
      period: '06/2024',
      description:
        'A Smart Door Lock Access System enhances security with keyless entry via biometrics, PINs, or mobile apps. It integrates IoT for remote control, real-time alerts, and access logs. With encryption and AI-driven authentication, it prevents unauthorized access.',
      technologies: ['IoT', 'Biometrics', 'Mobile Apps', 'AI Authentication', 'Encryption'],
      category: 'IoT/Security',
      detailsLink: 'https://www.projectsof8051.com/project-photos/5150-iot-lpg-leakage-detector-project-21.jpg',
      sourceLink: 'https://github.com/Kavyadharshinisiva/Smart-Gas-Leakage-Detecting-System',
    },
    {
      title: 'Summarizing PDF',
      period: 'Hackathon Project 2024',
      description:
        'A Python-based app that summarizes PDFs using NLP and HuggingFace Transformers. Designed to help users extract key content from large academic or business documents quickly.',
      technologies: ['Python', 'NLP', 'Flask', 'HuggingFace', 'Text Summarization'],
      category: 'Python Web-Based',
      detailsLink: 'https://summarizing-pdf2.onrender.com',
      sourceLink: 'https://github.com/balamanikandanb191/Summarizing_PDF',
    },
    {
      title: 'Analystic Dashboard',
      period: 'Recent Team Project',
      description:
        'The Analytics Dashboard Project provides real-time business insights through a responsive UI. It uses modern web technologies like HTML, Tailwind CSS for styling, and JavaScript/TypeScript for dynamic interactions. Visual components include KPI cards, pie charts, and product performance metrics.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'HTML', 'JavaScript'],
      category: 'Data Analysis Web Based',
      detailsLink: 'https://kavyadharshinisiva.github.io/Analystic_Dashboard_Project/',
      sourceLink: 'https://github.com/Kavyadharshinisiva/Analystic_Dashboard_Project',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      case 'Web Development':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'Mobile App':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30';
      case 'IoT/Security':
        return 'bg-red-500/20 text-red-400 border-red-400/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, mobile applications, AI/ML, and IoT solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <Calendar size={16} className="text-blue-400" />
                    <span>{project.period}</span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(project.category)}`}
                >
                  {project.category}
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              {project.technologies && (
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Tag size={16} className="text-purple-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                {project.detailsLink ? (
                  <a
                    href={project.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </a>
                ) : (
                  <button disabled className="flex items-center gap-2 px-4 py-2 bg-gray-600/30 text-gray-400 rounded-lg cursor-not-allowed">
                    <ExternalLink size={16} />
                    No Preview
                  </button>
                )}

                {project.sourceLink ? (
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 hover:scale-105"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600/30 text-gray-400 rounded-lg cursor-not-allowed"
                  >
                    <Github size={16} />
                    No Source
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
