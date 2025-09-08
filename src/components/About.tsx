import React from 'react';
import { Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: "Excelencia",
      description: "Comprometido con garantizar la máxima calidad del software."
    },
    {
      icon: Target,
      title: "Enfoque",
      description: "Foco en el detalle y con la mejora continua de procesos."
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Impulsado por el entusiasmo en el aprendizaje continuo y por contribuir en proyectos que realmente marquen la diferencia."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Sobre mí</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              Construyendo calidad a través de la experiencia
            </h3>
            <p className="text-lg text-accent/80 mb-6 leading-relaxed">
              Con más de una década de experiencia como QA, aporto una perspectiva única gracias a mi participación en proyectos de diversos sectores.  
              Mi trayectoria se ha guiado por el aprendizaje continuo, la adaptabilidad y un firme compromiso con la entrega de software fiable y de alta calidad.  
            </p>
            <p className="text-lg text-accent/80 mb-8 leading-relaxed">
              Creo en el poder de la colaboración, la innovación y la precisión para construir productos que realmente marquen la diferencia.  
              Cada proyecto ha fortalecido mis habilidades como profesional de QA y como aliado de confianza en los equipos de desarrollo.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">Resolutivo</span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">Team Player</span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">Innovador</span>
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