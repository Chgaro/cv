import React from 'react';
import { Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality work and exceeding expectations in every project."
    },
    {
      icon: Target,
      title: "Focus",
      description: "Goal-oriented professional with a clear vision and strategic approach to challenges."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by genuine enthusiasm for growth and making meaningful contributions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              Crafting Success Through Experience
            </h3>
            <p className="text-lg text-accent/80 mb-6 leading-relaxed">
              With a diverse background spanning multiple industries and roles, I bring a unique perspective to every challenge. My journey has been shaped by continuous learning, adaptability, and a commitment to excellence.
            </p>
            <p className="text-lg text-accent/80 mb-8 leading-relaxed">
              I believe in the power of collaboration, innovation, and authentic relationships to drive meaningful results. Every experience has contributed to my growth as both a professional and an individual.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">Problem Solver</span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">Team Player</span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">Innovator</span>
            </div>
          </div>

          <div className="grid gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-primary/30 rounded-lg hover:bg-primary/50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <item.icon size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-accent mb-2">{item.title}</h4>
                  <p className="text-accent/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;