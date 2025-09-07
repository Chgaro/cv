import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "cris@example.com",
      href: "mailto:cris@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "City, State, Country",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-xl text-accent/70 mt-6 max-w-2xl mx-auto">
            Ready to discuss opportunities or simply want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-accent mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-primary/30 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-secondary-dark transition-colors duration-300">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-accent">{info.title}</h4>
                    <p className="text-accent/70">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-accent mb-6">Send a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-secondary/10 border border-secondary/30 rounded-lg flex items-center space-x-2 animate-fade-in">
                  <CheckCircle size={20} className="text-secondary" />
                  <span className="text-secondary font-medium">Message sent successfully!</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-accent font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-accent/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-accent font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-accent/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-accent font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-accent/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-300"
                  placeholder="Message subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-accent font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-accent/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary-dark transition-colors duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;