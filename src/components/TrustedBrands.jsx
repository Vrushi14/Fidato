import React, { useState } from 'react';
import ScaleReveal from './ScaleReveal';

const testimonials = [
  {
    stars: 5,
    quote: '"Fidato AI handles customer questions about our menu, hours, and delivery areas 24/7. Our phone lines are finally free to take actual orders!"',
    name: 'Sebastian',
    role: 'Founder @ Revocalize AI',
  },
  {
    stars: 5,
    quote: '"Not only was the professionalism impeccable during the setup, but we also felt a genuine dedication to aligning the AI with our core values."',
    name: 'Priya Sharma',
    role: 'Head of CX @ Nexora',
  },
  {
    stars: 5,
    quote: '"We reduced support ticket volume by 60% in the first month. The AI understands context incredibly well and our customers love the instant responses."',
    name: 'James Okafor',
    role: 'CEO @ Clearpath Solutions',
  },
];

const TrustedBrands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="tb-section" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        overflow: 'hidden', zIndex: -1,
        pointerEvents: 'none'
      }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 1578" fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
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

        {/* Stacked Cards Container */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="tb-cards-container">
            {testimonials.map((t, index) => {
              // Calculate the relative position of the card based on currentIndex
              let offset = (index - currentIndex + testimonials.length) % testimonials.length;
              
              // Limit the number of visible stacked cards
              if (offset > 2) offset = 2; // Only show up to 3 cards in the stack

              const isTop = offset === 0;

              return (
                <div 
                  key={index} 
                  className={`tb-card ${isTop ? 'tb-card-active' : 'tb-card-stacked'}`}
                  style={{
                    transform: `translateY(${offset * 20}px) scale(${1 - offset * 0.05})`,
                    opacity: offset === 0 ? 1 : 0.8 - offset * 0.2,
                    zIndex: 10 - offset,
                    visibility: offset > 2 ? 'hidden' : 'visible'
                  }}
                >
                  {/* Full content only visible on the top card */}
                  {isTop && (
                    <div className="tb-card-main-content">
                      <div className="tb-stars">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <span key={i} className="tb-star">★</span>
                        ))}
                      </div>
                      <p className="tb-quote">{t.quote}</p>
                    </div>
                  )}
                  
                  {/* Author info visible on all stacked cards */}
                  <div className="tb-card-footer">
                    <div className="tb-author">
                      <span className="tb-author-name">{t.name}</span>
                      <span className="tb-author-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Button */}
        <button className="tb-next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tb-section {
          position: relative;
          padding: 120px 24px;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }

        .tb-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 720px;
        }

        /* Pill badge */
        .tb-badge {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 999px;
          font-size: 13px;
          color: #555;
          letter-spacing: 0.01em;
          margin-bottom: 24px;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        /* Heading */
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

        /* Cards Container */
        .tb-cards-container {
          position: relative;
          width: 100%;
          min-height: 320px; /* adjust based on content */
          margin-bottom: 60px;
          display: flex;
          justify-content: center;
        }

        /* Base Card Styling */
        .tb-card {
          position: absolute;
          top: 0;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 24px;
          width: 100%;
          max-width: 600px;
          padding: 40px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.04);
          transition: none;
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tb-card-stacked {
          padding: 16px 40px; /* slimmer padding for stacked cards */
          justify-content: flex-end;
          align-items: center;
        }
        
        .tb-card-stacked .tb-card-footer {
          margin-top: 0;
        }

        /* Content inside card */
        .tb-card-main-content {
          opacity: 1;
        }

        .tb-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 24px;
        }
        .tb-star {
          font-size: 22px;
          color: #F5A623;
        }

        .tb-quote {
          font-size: 18px;
          line-height: 1.6;
          color: #111;
          text-align: center;
          max-width: 500px;
          margin: 0 auto 32px;
          font-weight: 500;
        }

        .tb-card-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .tb-author {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .tb-author-name {
          font-size: 16px;
          font-weight: 700;
          color: #111;
        }
        .tb-author-role {
          font-size: 13px;
          color: #666;
        }

        /* Next Button */
        .tb-next-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #111;
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .tb-next-btn:hover {
          background: #000;
          transform: translateY(2px);
        }

        @media (max-width: 600px) {
          .tb-card {
            padding: 32px 24px;
          }
          .tb-quote {
            font-size: 16px;
          }
          .tb-cards-container {
            min-height: 380px;
          }
        }
      `}} />
    </section>
  );
};

export default TrustedBrands;

