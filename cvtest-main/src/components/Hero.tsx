import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-accent mb-6 animate-slide-up">
            Hello, I'm <span className="text-secondary">Cris</span>
          </h2>
          <p className="text-xl md:text-2xl text-accent/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A passionate professional showcasing my journey through various experiences and achievements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToAbout}
              className="bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Story
            </button>
            <button className="flex items-center space-x-2 text-accent hover:text-secondary transition-colors duration-300 font-medium border-2 border-accent hover:border-secondary px-8 py-4 rounded-full hover:bg-accent/5">
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button
            onClick={scrollToAbout}
            className="text-accent/60 hover:text-secondary transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;