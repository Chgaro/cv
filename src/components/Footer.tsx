import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chgaro1986/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/chgaro', label: 'GitHub' },
    { icon: FaDiscord, href: 'https://discordapp.com/users/stur#3730', label: 'Discord' },
    { icon: Mail, href: 'mailto:chgaro.dev@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-accent text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold hover:text-secondary transition-colors duration-300"
          >
            CHGARO Web
          </button>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
              >
                <link.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-white/80">
              Gracias por visitar mi página. Vamos a colaborar y crear algo genial juntos.
            </p>
            <p className="flex items-center justify-center space-x-2 text-white/60">
              <span>Made with</span>
              <Heart size={16} className="text-secondary animate-pulse" />
              <span>by CHGARO</span>
            </p>
          </div>
          
          <div className="w-full border-t border-white/20 pt-6 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} CHGARO Web. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;