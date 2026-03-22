import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  CheckCircle, 
  Users, 
  Shield, 
  TrendingUp, 
  Clock, 
  MessageCircle,
  ChevronDown,
  Facebook,
  Menu,
  X
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { mockData } from '../utils/mockData';

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = '5212224146832';
  const whatsappDisplay = '+52 1 222 414 6832';
  const facebookUrl = 'https://www.facebook.com/conerconsultores';
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de retiro de AFORE');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleFacebookClick = () => {
    window.open(facebookUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCTAClick = () => {
    handleWhatsAppClick();
  };

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="dark-header">
        <div className="dark-header-content">
          <img 
            src="/CONER_LOGO.png" 
            alt="CONER Logo" 
            className="dark-logo"
          />
          
          <nav className="dark-nav desktop-nav">
            <a href="#servicios" className="dark-nav-link">Servicios</a>
            <a href="#nosotros" className="dark-nav-link">Nosotros</a>
            <a href="#testimonios" className="dark-nav-link">Testimonios</a>
            <a href="#faq" className="dark-nav-link">FAQ</a>
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar
            </Button>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#servicios" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
            <a href="#nosotros" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
            <a href="#testimonios" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Testimonios</a>
            <a href="#faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button 
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="btn-primary w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Recupera tu dinero de AFORE sin complicaciones
            </h1>
            <p className="hero-subtitle">
              En CONER gestionamos tu trámite de forma segura, rápida y con acompañamiento profesional.
            </p>
            <div className="hero-urgency">
              <TrendingUp className="w-5 h-5 text-brand" />
              <span>Miles de personas ya están retirando su dinero, no lo dejes detenido.</span>
            </div>
            
            <div className="hero-cta-group">
              <Button 
                onClick={handleCTAClick}
                className="btn-primary btn-large"
              >
                Iniciar trámite
                <CheckCircle className="w-5 h-5" />
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-secondary btn-large"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1565688527174-775059ac429c" 
              alt="Consultoría profesional"
              className="hero-img"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="section-container">
          <h2 className="section-title">¿Te sientes frustrado con tu AFORE?</h2>
          <p className="section-subtitle">No eres el único. Miles de mexicanos enfrentan estos obstáculos:</p>
          
          <div className="problem-grid">
            {mockData.problems.map((problem, index) => (
              <motion.div
                key={index}
                className="problem-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="problem-icon">{problem.icon}</div>
                <h3 className="problem-title">{problem.title}</h3>
                <p className="problem-description">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="section-container">
          <h2 className="section-title gold-text">Nosotros nos encargamos de todo</h2>
          <p className="section-subtitle">Un proceso transparente y sin complicaciones</p>
          
          <div className="solution-steps">
            {mockData.solutionSteps.map((step, index) => (
              <motion.div
                key={index}
                className="solution-step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services-section">
        <div className="section-container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones especializadas para cada necesidad</p>
          
          <div className="services-grid">
            {mockData.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="service-card">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="nosotros" className="trust-section">
        <div className="section-container">
          <h2 className="section-title">¿Por qué confiar en CONER?</h2>
          
          <div className="trust-content">
            <div className="trust-image">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4" 
                alt="Equipo CONER"
                className="trust-img"
              />
            </div>
            
            <div className="trust-features">
              {mockData.trustFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="trust-feature"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="trust-feature-icon">{feature.icon}</div>
                  <div>
                    <h3 className="trust-feature-title">{feature.title}</h3>
                    <p className="trust-feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="section-container">
          <h2 className="section-title gold-text">Resultados que hablan por sí solos</h2>
          
          <div className="results-grid">
            {mockData.results.map((result, index) => (
              <motion.div
                key={index}
                className="result-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="result-icon">{result.icon}</div>
                <div className="result-value">{result.value}</div>
                <div className="result-label">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">Historias reales de éxito</p>
          
          <div className="testimonials-grid">
            {mockData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{testimonial.name.charAt(0)}</div>
                    <div>
                      <div className="testimonial-name">{testimonial.name}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="section-container-narrow">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">Resolvemos tus dudas</p>
          
          <Accordion type="single" collapsible className="faq-accordion">
            {mockData.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                <AccordionTrigger className="faq-question">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Agenda tu asesoría ahora y comienza tu proceso hoy mismo</h2>
            <p className="cta-subtitle">Cupos limitados por semana. No dejes tu dinero detenido.</p>
            <Button 
              onClick={handleCTAClick}
              className="btn-primary btn-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Iniciar mi trámite ahora
            </Button>
            <p className="cta-note">✓ Respuesta en menos de 1 hora</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img 
              src="/CONER_LOGO.png" 
              alt="CONER Logo" 
              className="footer-logo"
            />
            <p className="footer-tagline">Consultores Especializados en Retiros</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Servicios</h4>
              <a href="#servicios" className="footer-link">Retiro por desempleo</a>
              <a href="#servicios" className="footer-link">Retiro por matrimonio</a>
              <a href="#servicios" className="footer-link">Asesoría AFORE</a>
              <a href="#servicios" className="footer-link">Corrección de datos</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Empresa</h4>
              <a href="#nosotros" className="footer-link">Nosotros</a>
              <a href="#testimonios" className="footer-link">Testimonios</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Contacto</h4>
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  handleWhatsAppClick();
                }}
                href="#"
                className="footer-link"
                style={{ cursor: 'pointer' }}
              >
                <Phone className="w-4 h-4" />
                {whatsappDisplay}
              </a>
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  handleFacebookClick();
                }}
                href="#"
                className="footer-link"
                style={{ cursor: 'pointer' }}
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 CONER. Todos los derechos reservados.</p>
          <p className="footer-location">Oaxaca, Zona Costa, Mixteca y parte de Chiapas</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.button
        className="whatsapp-float"
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Landing;
