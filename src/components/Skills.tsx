import React from 'react';
import { Code, Users, Lightbulb, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Skills Técnicas",
      skills: ["Testing Manual", "Testing automatizado (Cypress)", "API Testing (Postman, Karate)", "Bug reporting (JIRA)", "Scripting (Python)"]
    },
    {
      icon: Users,
      title: "Liderazgo",
      skills: ["Colaboración entre equipos", "Mentoring a QA juniors", "Mejora y optimización de procesos", "Comunicación efectiva"]
    },
    {
      icon: Lightbulb,
      title: "Fortalezas Profesionales",
      skills: ["Resolución de probelmas", "Gestión del tiempo y prioridades", "Documentación y reporte sólido"]
    },
    {
      icon: Zap,
      title: "Competencias clave",
      skills: ["Adaptabilidad", "Pensamiento crítico", "Propuestas de mejora", "Formación continua"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-xl text-accent/70 mt-6 max-w-2xl mx-auto">
            Un conjunto sólido de habilidades QA desarrolladas mediante experiencia práctica, automatización y aprendizaje continuo.
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