import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Fidato AI has transformed our customer support. We've seen a 40% reduction in support costs and our customers are happier than ever.",
    author: "Sarah Jenkins",
    role: "Head of Customer Support at TechFlow"
  },
  {
    id: 2,
    text: "Implementing Fidato took less than an hour. The AI immediately understood our product catalog and began resolving 70% of tier 1 tickets automatically.",
    author: "Marcus Chen",
    role: "Operations Director at InnovateCorp"
  },
  {
    id: 3,
    text: "What blew me away was how perfectly Fidato captured our brand voice. It doesn't sound like a bot; it sounds exactly like our best human agents.",
    author: "Elena Rodriguez",
    role: "VP of Digital Experience at RetailPlus"
  },
  {
    id: 4,
    text: "The integration with our existing CRM was flawless. Fidato not only answers questions but actually helps drive conversions by proactively assisting customers.",
    author: "David Kim",
    role: "E-commerce Manager at StyleHub"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section" style={{ backgroundColor: '#EEF0FF', padding: '100px 0', textAlign: 'center', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="section-title" style={{ fontSize: '64px', fontWeight: 500, color: '#111', marginBottom: '16px', letterSpacing: '-0.02em' }}>Our clients trust us</h2>
        <p style={{ fontSize: '14px', fontWeight: 600, color: '#111', marginBottom: '60px', opacity: 0.8 }}>AND BASED ON WHAT THEY SAY, WE'RE NAILING IT.</p>

        <div className="reviews" style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto 40px', minHeight: '200px' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`review-content ${index === currentIndex ? 'active' : ''}`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '16px',
                padding: '40px',
                textAlign: 'left',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                width: '100%'
              }}
            >
              <p className="testimonial-text" style={{ fontSize: '20px', lineHeight: '1.5', color: '#111', marginBottom: '24px' }}>
                « {testimonial.text} »
              </p>
              <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#DDD', overflow: 'hidden' }}>
                  <img src={`https://i.pravatar.cc/100?u=${testimonial.id}`} alt={testimonial.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="author-info">
                  <strong style={{ display: 'block', fontSize: '16px', color: '#111' }}>{testimonial.author}</strong>
                  <span style={{ fontSize: '13px', color: '#666' }}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="next-review-btn"
          onClick={handleNext}
        >
          Next review
        </button>
      </div>
    </section>
  )
}


export default Testimonials;
