import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Professional",
      company: "Current Company",
      location: "City, State",
      period: "2022 - Present",
      description: "Leading innovative projects and driving strategic initiatives that deliver measurable business value.",
      achievements: [
        "Increased team productivity by 40% through process optimization",
        "Led cross-functional teams of 10+ members",
        "Implemented new systems that reduced costs by 25%"
      ]
    },
    {
      title: "Mid-Level Professional",
      company: "Previous Company",
      location: "City, State",
      period: "2019 - 2022",
      description: "Developed expertise in core competencies while contributing to major organizational goals.",
      achievements: [
        "Managed high-priority projects worth $500K+",
        "Mentored 5 junior team members",
        "Achieved 95% client satisfaction rating"
      ]
    },
    {
      title: "Entry-Level Position",
      company: "First Company",
      location: "City, State",
      period: "2017 - 2019",
      description: "Established foundation skills and gained valuable industry experience in a fast-paced environment.",
      achievements: [
        "Completed comprehensive training program",
        "Contributed to 3 successful product launches",
        "Received Employee of the Month award"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Experience</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-xl text-accent/70 mt-6 max-w-2xl mx-auto">
            A journey of growth, learning, and meaningful contributions across diverse roles
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-secondary">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-accent mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-secondary mb-4">{exp.company}</h4>
                    <div className="space-y-2 text-accent/70">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-accent/80 mb-6 leading-relaxed text-lg">{exp.description}</p>
                    <div>
                      <h5 className="font-bold text-accent mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ChevronRight size={16} className="text-secondary mt-1 flex-shrink-0" />
                            <span className="text-accent/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;