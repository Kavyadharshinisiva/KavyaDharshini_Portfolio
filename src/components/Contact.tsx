import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'your_service_id',      // replace with your actual service ID
        'your_template_id',     // replace with your actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'your_public_key'       // replace with your actual public key
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Oops! Something went wrong. Try again later.');
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'kavyasiva05@gmail.com',
      link: 'mailto:kavyasiva05@gmail.com',
      color: 'from-blue-500 to-indigo-600',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 6379749096',
      link: 'tel:+916379749096',
      color: 'from-emerald-500 to-teal-600',
      hoverColor: 'hover:shadow-emerald-500/25'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Salem, Tamil Nadu',
      link: '#',
      color: 'from-purple-500 to-pink-600',
      hoverColor: 'hover:shadow-purple-500/25'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Kavyadharshinisiva',
      color: 'hover:bg-gray-700 hover:text-white'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kavyasiva',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: <Mail size={24} />,
      name: 'Email',
      url: 'mailto:kavyasiva05@gmail.com',
      color: 'hover:bg-red-500 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`block p-6 bg-gradient-to-r ${info.color} bg-opacity-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 ${info.hoverColor} hover:shadow-xl group`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-white">{info.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Availability</h3>
              </div>
              <p className="text-gray-300">
                I'm currently available for internships, freelance projects, and full-time opportunities. 
                I typically respond within 24 hours.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-semibold">Open to Work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              Send Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Message Sent!</h4>
                <p className="text-gray-300">Thank you for reaching out. I’ll reply shortly!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl w-full" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email" className="px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl w-full" />
                </div>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl w-full" />
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Your message" className="px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl w-full resize-none" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
