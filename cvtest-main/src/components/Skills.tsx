import React from 'react';
import { Code, Users, Lightbulb, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      skills: ["Project Management", "Data Analysis", "Process Optimization", "Strategic Planning"]
    },
    {
      icon: Users,
      title: "Leadership",
      skills: ["Team Management", "Mentoring", "Communication", "Conflict Resolution"]
    },
    {
      icon: Lightbulb,
      title: "Creative Skills",
      skills: ["Problem Solving", "Innovation", "Design Thinking", "Content Creation"]
    },
    {
      icon: Zap,
      title: "Core Competencies",
      skills: ["Adaptability", "Critical Thinking", "Time Management", "Client Relations"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-xl text-accent/70 mt-6 max-w-2xl mx-auto">
            A comprehensive skill set developed through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-secondary/20 transition-colors duration-300">
                <category.icon size={36} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-accent/70 hover:text-secondary transition-colors duration-300 cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;