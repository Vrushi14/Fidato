import React, { useState } from 'react';
import ScaleReveal from './ScaleReveal';



const TrustedBrands = () => {
  return (
    <section className="tb-section" style={{ position: 'relative' }}>
      <div className="tb-container">
        <div style={{
          position: 'absolute', inset: 0,
          overflow: 'hidden', zIndex: -1,
          pointerEvents: 'none',
          borderRadius: '36px'
        }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 1578" fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <g filter="url(#filter0_f_133_862)">
              <path d="M534.152 383.611C304.696 483.299 201.583 745.443 303.842 969.128C406.102 1192.81 675.011 1293.33 904.468 1193.64C1133.92 1093.96 1237.04 831.813 1134.78 608.128C1032.52 384.443 763.609 283.924 534.152 383.611Z" fill="url(#paint0_linear_133_862)" fillOpacity="0.85"/>
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

          {/* Testimonial Card */}
          <div className="tb-card-wrapper">
            <div className="tb-card">
              {/* Left Navigation */}
              <button className="tb-nav-btn tb-nav-left" aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>

              <div className="tb-card-content">
                <div className="tb-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="tb-star">★</span>
                  ))}
                </div>
                
                <p className="tb-quote">
                  "Fidato AI handles customer questions about our menu, hours, and delivery areas 24/7. Our phone lines are finally free to take actual orders!"
                </p>

                <div className="tb-author-section">
                  <span className="tb-author-name">Sebastian</span>
                  <span className="tb-author-role">Founder @ Revocalize AI</span>
                </div>
              </div>

              {/* Right Navigation */}
              <button className="tb-nav-btn tb-nav-right" aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tb-section {
          position: relative;
          padding: 120px 24px;
          overflow: hidden;
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
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
        }

        .tb-card {
          width: 794px;
          height: 338.99px;
          background: #FFFFFF;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
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
          margin-bottom: 30px;
        }
        
        .tb-star {
          font-size: 18px;
          color: #FFB800;
        }

        .tb-quote {
          font-family: 'Archivo', sans-serif;
          font-size: 24px;
          line-height: 33.6px;
          color: #111111;
          text-align: center;
          max-width: 679px;
          margin: 0 auto 35px;
          font-weight: 400;
          letter-spacing: -0.28px;
        }

        .tb-author-section {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .tb-author-name {
          font-size: 20px;
          font-weight: 600;
          color: #000;
        }

        .tb-author-role {
          font-size: 13px;
          color: #888;
        }

        .tb-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: #F8F9FA;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tb-nav-btn:hover {
          background: #EEF0F2;
          transform: scale(1.05);
        }

        @media (max-width: 850px) {
          .tb-card {
            width: 100%;
            height: auto;
            padding: 60px 24px;
            flex-direction: column;
            gap: 40px;
          }
          
          .tb-card-content {
            padding: 0;
          }

          .tb-nav-btn {
            display: none; /* Hide nav arrows on mobile for better fit */
          }
        }
      `}} />
    </section>
  );
};

export default TrustedBrands;

