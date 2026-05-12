import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Fidato AI handles customer questions about our menu, hours, and delivery areas 24/7. Our phone lines are finally free to take actual orders!",
    author: "Sebastian",
    role: "Founder @ Revocalize AI"
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

const TrustedBrands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="tb-section" style={{ position: 'relative' }}>
      <div className="tb-container">
        {/* Background Gradient SVG */}
        <div className="tb-bg-gradient" style={{ position: 'absolute', top: '-20%', left: 0, width: '100%', height: '140%', zIndex: 0, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '36px' }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 1578" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ transform: 'scale(1.2)' }}>
            <g filter="url(#filter0_f_133_862)">
              <path d="M534.152 383.611C304.696 483.299 201.583 745.443 303.842 969.128C406.102 1192.81 675.011 1293.33 904.468 1193.64C1133.92 1093.96 1237.04 831.813 1134.78 608.128C1032.52 384.443 763.609 283.924 534.152 383.611Z" fill="url(#paint0_linear_133_862)" fillOpacity="0.6"/>
            </g>
            <defs>
              <filter id="filter0_f_133_862" x="-80.7621" y="9.15527e-05" width="1600.14" height="1577.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="172.55" result="effect1_foregroundBlur_133_862"/>
              </filter>
              <linearGradient id="paint0_linear_133_862" x1="303.842" y1="969.128" x2="847.173" y2="354.064" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D7F0FF"/>
                <stop offset="0.333333" stopColor="#D9CFFF"/>
                <stop offset="0.666667" stopColor="#FFD1EA"/>
                <stop offset="1" stopColor="#FFE3D2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="tb-inner" style={{ position: 'relative', zIndex: 1 }}>
          {/* Pill badge */}
          <div className="tb-badge">What our clients say</div>

          {/* Heading */}
          <h2 className="tb-heading">
            Trusted by global&nbsp;<em>brands</em>
          </h2>

          {/* Testimonial Stacked Cards */}
          <div className="tb-card-wrapper" onClick={handleNext}>
            <AnimatePresence initial={false}>
              {testimonials.map((testimonial, i) => {
                let relativeIndex = i - currentIndex;
                if (relativeIndex < 0) relativeIndex += testimonials.length;

                // Only show top 3 cards
                if (relativeIndex > 2) return null;

                return (
                  <motion.div
                    key={testimonial.id}
                    className="tb-card"
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ 
                      opacity: relativeIndex === 0 ? 1 : relativeIndex === 1 ? 0.7 : 0.4,
                      y: relativeIndex * 40, 
                      scale: 1 - relativeIndex * 0.04,
                      zIndex: testimonials.length - relativeIndex,
                      filter: relativeIndex === 0 ? 'blur(0px)' : `blur(${relativeIndex * 2}px)`
                    }}
                    exit={{ opacity: 0, y: -100, scale: 1.1, filter: 'blur(10px)' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="tb-card-content">
                      <div className="tb-stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="tb-star">★</span>
                        ))}
                      </div>
                      
                      <p className="tb-quote">
                        "{testimonial.text}"
                      </p>

                      <div className="tb-author-section">
                        <span className="tb-author-name">{testimonial.author}</span>
                        <span className="tb-author-role">{testimonial.role}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <button className="tb-next-review-btn" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
            Click to see next review
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tb-section {
          position: relative;
          padding: 60px 24px;
          overflow: visible;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .tb-container {
          width: 1200px;
          height: 819px;
          background: #FFFFFF;
          border-radius: 36px;
          border: 1px solid #E2E2E2;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .tb-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .tb-badge {
          display: inline-block;
          padding: 8px 24px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 999px;
          font-family: 'Archivo', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #444;
          line-height: 21.6px;
          letter-spacing: 0.36px;
          margin-bottom: 24px;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .tb-heading {
          font-family: 'Rebond Grotesque', 'Inter', sans-serif;
          font-size: 48px;
          font-weight: 500;
          color: #111;
          text-align: center;
          margin: 0 0 64px;
          letter-spacing: 0;
          line-height: 55px;
        }
        .tb-heading em {
          font-family: 'Archivo', sans-serif;
          font-style: italic;
          font-weight: inherit;
          font-size: 48px;
          line-height: 76.8px;
          letter-spacing: -0.64px;
          color: #000;
        }

        .tb-card-wrapper {
          width: 100%;
          height: 280px;
          display: flex;
          justify-content: center;
          position: relative;
          perspective: 1000px;
          cursor: pointer;
        }

        .tb-card {
          width: 650px;
          height: 280px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          position: absolute;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
          transform-origin: top center;
        }

        .tb-card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 40px;
        }

        .tb-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }
        
        .tb-star {
          font-size: 16px;
          color: #FFB800;
        }

        .tb-quote {
          font-family: 'Archivo', sans-serif;
          font-size: 20px;
          line-height: 30px;
          color: #111111;
          text-align: center;
          max-width: 580px;
          margin: 0 auto 25px;
          font-weight: 400;
          letter-spacing: -0.28px;
        }

        .tb-author-section {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .tb-author-name {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #000;
          line-height: 24.4px;
          letter-spacing: 0%;
        }
        
        .tb-author-role {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #888;
          line-height: 14.2px;
          letter-spacing: 0%;
        }

        .tb-next-review-btn {
          margin-top: 40px;
          padding: 14px 28px;
          background: transparent;
          color: #111;
          border: none;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
        }

        .tb-next-review-btn:hover {
          color: #555;
          transform: translateY(-2px);
        }

        /* ── Tablet (≤ 900px) ── */
        @media (max-width: 900px) {
          .tb-section {
            padding: 60px 16px;
          }

          .tb-container {
            width: 100%;
            height: auto;
            min-height: unset;
            padding: 52px 20px 52px;
            border-radius: 24px;
          }

          .tb-heading {
            font-size: 36px;
            line-height: 44px;
            margin: 0 0 48px;
          }

          .tb-heading em {
            font-size: 36px;
            line-height: 44px;
          }

          .tb-badge {
            font-size: 15px;
            padding: 7px 18px;
            margin-bottom: 18px;
          }

          .tb-card-wrapper {
            height: 300px;
            width: 100%;
          }

          .tb-card {
            width: calc(100% - 32px);
            height: auto;
            min-height: 260px;
            padding: 32px 24px;
          }

          .tb-card-content {
            padding: 0;
          }

          .tb-quote {
            font-size: 17px;
            line-height: 26px;
            margin-bottom: 20px;
          }

          .tb-author-name {
            font-size: 15px;
          }

          .tb-next-review-btn {
            margin-top: 32px;
            font-size: 14px;
          }
        }

        /* ── Mobile (≤ 540px) ── */
        @media (max-width: 540px) {
          .tb-section {
            padding: 40px 12px;
          }

          .tb-container {
            width: 100%;
            height: auto;
            min-height: unset;
            padding: 40px 16px 44px;
            border-radius: 20px;
          }

          .tb-badge {
            font-size: 13px;
            padding: 6px 14px;
            margin-bottom: 14px;
          }

          .tb-heading {
            font-size: 28px;
            line-height: 36px;
            margin: 0 0 36px;
          }

          .tb-heading em {
            font-size: 28px;
            line-height: 36px;
          }

          .tb-card-wrapper {
            height: 320px;
            width: 100%;
          }

          .tb-card {
            width: 100%;
            height: auto;
            min-height: 280px;
            padding: 28px 20px;
          }

          .tb-card-content {
            padding: 0;
          }

          .tb-stars {
            margin-bottom: 14px;
          }

          .tb-star {
            font-size: 14px;
          }

          .tb-quote {
            font-size: 15px;
            line-height: 23px;
            margin-bottom: 16px;
            max-width: 100%;
          }

          .tb-author-section {
            gap: 3px;
          }

          .tb-author-name {
            font-size: 14px;
            line-height: 20px;
          }

          .tb-author-role {
            font-size: 12px;
            line-height: 16px;
          }

          .tb-next-review-btn {
            margin-top: 28px;
            font-size: 13px;
            padding: 10px 20px;
          }
        }
      `}} />
    </section>
  );
};

export default TrustedBrands;
