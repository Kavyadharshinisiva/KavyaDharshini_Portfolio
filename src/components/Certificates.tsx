import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Calendar, Building2, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const certificates = [
    {
      title: 'Spring Data JPA with Boot',
      issuer: 'Infosys Spring Boot',
      date: '2024',
      color: 'from-blue-500 to-indigo-600',
      category: 'Backend Development',
      link: 'https://drive.google.com/file/d/1Mrx2tInT7hcPCNn-VhYfsJuJWmjzmxRd/view?usp=drive_link'
    },
    {
      title: 'Web Development Certification',
      issuer: "Let's Gametech",
      date: 'September 2024',
      color: 'from-emerald-500 to-teal-600',
      category: 'Frontend Development',
      link: 'https://drive.google.com/file/d/1lmA6H1QFfil-g29oTIX9eHJJKeY5KxUk/view?usp=drive_link'
    },
    {
      title: 'Content Writing Certification',
      issuer: 'Marpu Foundation',
      date: 'November 2024',
      color: 'from-purple-500 to-pink-600',
      category: 'Content Writing',
      link: 'https://drive.google.com/file/d/1XNw54M21hsy_T6Zu-ylQG1ms1z218oG2/view?usp=drive_link'
    },
    {
      title: 'Programming Training',
      issuer: 'Quizaro Extendedge',
      date: 'Feb - Apr 2024',
      color: 'from-orange-500 to-red-600',
      category: 'Full-Stack Development',
      link: 'https://drive.google.com/file/d/1dZppKv7m5H_H53pspiaD6DxQrJUoTLYs/view?usp=drive_link'
    },
    {
      title: 'Go for Gold – iAspire Gold Level',
      issuer: 'Accenture Advanced Technology Centers',
      date: 'January 2025',
      color: 'from-yellow-500 to-orange-600',
      category: 'Corporate Upskilling',
      link: 'https://drive.google.com/file/d/11FAQpmwc1Sml9zUbWKC7BlF1OEEuJpQx/view?usp=drive_link'
    },
    {
      title: 'Cloud Computing Certification',
      issuer: 'NPTEL (Govt. of India)',
      date: 'Jan - Apr 2024',
      color: 'from-blue-500 to-cyan-600',
      category: 'Cloud Technology',
      link: 'https://drive.google.com/file/d/1_iiC75QvLof98d_SfCrrXD9ptSiIQ_TI/view?usp=drive_link'
    },
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Tech Academy',
      date: '2024',
      color: 'from-indigo-500 to-purple-600',
      category: 'Machine Learning',
      link: 'https://example.com/ml-fundamentals'
    },
    {
      title: 'React Development',
      issuer: 'Lets Upgrade Development Institute',
      date: '2024',
      color: 'from-cyan-500 to-blue-600',
      category: 'Frontend Framework',
      link: 'https://drive.google.com/file/d/1TL2tvq11yEUr0OlChbeLtCvsC4mytukA/view?usp=drive_link'
    }
    // Add remaining certificates here...
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollTo({
            left: scrollLeft + 350,
            behavior: 'smooth'
          });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  return (
    <section id="certificates" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Professional Certificates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of my professional certifications and training achievements that validate my technical expertise.
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-110'
                  : 'bg-white/5 border-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                canScrollRight
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-110'
                  : 'bg-white/5 border-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <button
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-300 ${
              isAutoScrolling
                ? 'bg-blue-600/20 border-blue-400/30 text-blue-400 hover:bg-blue-600/30'
                : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
            }`}
          >
            {isAutoScrolling ? 'Pause Auto-scroll' : 'Resume Auto-scroll'}
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" ref={scrollContainerRef}>
          {certificates.map((cert, index) => (
            <div key={index} className="flex-shrink-0 w-80 group">
              <div className="relative h-[430px] bg-white/5 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between border border-white/10 hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition duration-500" />
                <div className="relative h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-5 relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
                        {cert.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Building2 size={14} className="text-purple-400" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={14} className="text-emerald-400" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full bg-gradient-to-r from-slate-700 to-slate-800 border border-gray-600 text-blue-400 py-2 px-4 rounded-lg hover:from-slate-600 hover:to-slate-700 hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Credentials
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
