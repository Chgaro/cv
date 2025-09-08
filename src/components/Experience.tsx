import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior QA Mobile",
      company: "Win Systems",
      location: "Sant Cugat del Vallès",
      period: "2025",
      description: "Liderando iniciativas de testing para WinUP, aplicación de pagos y gestión de casinos (web, móvil iOS/Android y backoffice).",
      achievements: [
        "Reducción significativa del tiempo de pruebas mediante la creación de scripts y automatización de flujos (datos de prueba, ejecución y diseño).",
        "Validación de integraciones de pago complejas (Redsys, Nuvei, Google Pay, Apple Pay), garantizando transacciones seguras y fiables",
        "Incremento de la cobertura de pruebas combinando testing manual, pruebas automatizadas de API (Karate, ApiDOG) y validaciones SQL."
      ]
    },
    {
      title: "Senior QA / Team Lead",
      company: "GRIFOLS",
      location: "Parets del Vallès",
      period: "2017 - 2023",
      description: "Responsable de QA para SGP, sistema de gestión de plasma donado y su transporte en condiciones críticas.",
      achievements: [
        "Lideré la implementación de QA de SGP en Egipto desde cero, con despliegue exitoso adaptado a requisitos locales estrictos.",
        "Mejora de la calidad y de los tiempos de entrega mediante la mentoría y guía de varios miembros del equipo de QA.",
        "Ejecución de pruebas prácticas en software y hardware (dispositivos RFID, escáneres de código de barras, logística médica)."
      ]
    },
    {
      title: "Junior QA",
      company: "GFT",
      location: "Sant Cugat del Vallès",
      period: "2015 - 2017",
      description: "Participación en el testing de sistemas de transacciones de Deutsche Bank, asegurando su fiabilidad mediante pruebas funcionales y de regresión.",
      achievements: [
        "Refuerzo de las pruebas de regresión mediante el mantenimiento y ejecución de suites de pruebas completas.",
        "Colaboración estrecha con equipos de desarrollo para analizar nuevas funcionalidades y resolver defectos.",
        "Ejecución de pruebas manuales consistentes bajo la supervisión del Test Lead."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Experiencia</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-xl text-accent/70 mt-6 max-w-2xl mx-auto">
            De los bugs a los logros: impulsando la calidad en cada paso.
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
                      <h5 className="font-bold text-accent mb-3">Logros:</h5>
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