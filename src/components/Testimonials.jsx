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
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Trusted by global brands</h2>
        
        <div className="testimonials-stack" onClick={handleNext} style={{ perspective: "1000px" }}>
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, i) => {
              let relativeIndex = i - currentIndex;
              if (relativeIndex < 0) relativeIndex += testimonials.length;

              if (relativeIndex > 2) return null;

              return (
                <motion.div
                  key={testimonial.id}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: -50, scale: 0.9 }}
                  animate={{ 
                    opacity: relativeIndex === 0 ? 1 : relativeIndex === 1 ? 0.7 : 0.4,
                    y: relativeIndex * 30, 
                    scale: 1 - relativeIndex * 0.08,
                    zIndex: testimonials.length - relativeIndex,
                    filter: relativeIndex === 0 ? 'blur(0px)' : `blur(${relativeIndex * 2}px)`
                  }}
                  exit={{ opacity: 0, y: -100, scale: 1.1, filter: 'blur(10px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="stars">★★★★★</div>
                  <p className="testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <div className="author">
                    <div className="author-info">
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        <div style={{ marginTop: '40px', fontSize: '14px', color: '#666' }}>
          Click the card to see the next review
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
