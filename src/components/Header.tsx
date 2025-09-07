import React, { useState } from 'react';
import { Menu, X, User, Briefcase, Mail, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-accent transition-colors duration-300 hover:text-accent-dark">
              Cris Resumee
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-2 text-accent hover:text-secondary transition-colors duration-300 font-medium"
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent hover:text-secondary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="bg-primary-dark rounded-lg p-4">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center space-x-3 w-full text-left text-accent hover:text-secondary transition-colors duration-300 py-2 px-3 rounded-md hover:bg-primary"
                    >
                      <item.icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;