import React from 'react';
import ScaleReveal from './ScaleReveal';

const TrustedBrands = () => {
  return (
    <section className="tb-section" id="benefits">
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
        {/* Heading */}
        <h2 className="tb-heading">
          Trusted by global&nbsp;<em>brands</em>
        </h2>

        {/* Brand Logos Container */}
        <div className="tb-card-wrapper">
          <div className="tb-card logo-card">
            <div className="trusted-logos-container">
              <div className="trusted-logos">
                {/* Replicating logos from Hero for consistency */}
                {[1, 2].map((i) => (
                  <React.Fragment key={i}>
                    <div className="trusted-logo">
                      <svg width="150" height="54" viewBox="0 0 200 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M86.9906 27.4316V50.5769H81.3526V41.0484H72.5823V50.5769H66.9443V27.4316H72.5823V36.4985H81.3526V27.4316H86.9906Z" fill="currentColor"/>
                        <path d="M92.5778 30.2675C91.5886 30.2675 90.7754 29.9818 90.1382 29.4103C89.5226 28.8168 89.2148 28.0914 89.2148 27.2342C89.2148 26.355 89.5226 25.6297 90.1382 25.0581C90.7754 24.4647 91.5886 24.168 92.5778 24.168C93.545 24.168 94.3365 24.4647 94.9516 25.0581C95.5893 25.6297 95.9079 26.355 95.9079 27.2342C95.9079 28.0914 95.5893 28.8168 94.9516 29.4103C94.3365 29.9818 93.545 30.2675 92.5778 30.2675ZM95.3804 32.1798V50.5773H89.7424V32.1798H95.3804Z" fill="currentColor"/>
                        <path d="M108.4 45.7963V50.5769H105.532C103.488 50.5769 101.894 50.0822 100.751 49.0934C99.6083 48.0821 99.0369 46.4448 99.0369 44.1807V36.8612H96.7949V32.1793H99.0369V27.6953H104.675V32.1793H108.367V36.8612H104.675V44.2466C104.675 44.7963 104.807 45.1916 105.07 45.4335C105.334 45.6754 105.774 45.7963 106.389 45.7963H108.4Z" fill="currentColor"/>
                        <path d="M127.565 41.0817C127.565 41.6093 127.532 42.1589 127.466 42.7303H114.707C114.795 43.8734 115.157 44.7525 115.795 45.368C116.454 45.9615 117.256 46.2584 118.201 46.2584C119.608 46.2584 120.586 45.6646 121.136 44.4777H127.136C126.829 45.6867 126.268 46.7747 125.455 47.7418C124.664 48.7089 123.664 49.4675 122.455 50.0168C121.246 50.5664 119.894 50.8413 118.399 50.8413C116.597 50.8413 114.992 50.4563 113.586 49.6873C112.179 48.9179 111.08 47.819 110.288 46.3902C109.497 44.9614 109.102 43.2908 109.102 41.3786C109.102 39.4661 109.486 37.7958 110.256 36.367C111.047 34.9383 112.146 33.8393 113.553 33.07C114.959 32.3007 116.575 31.916 118.399 31.916C120.18 31.916 121.762 32.2897 123.147 33.037C124.532 33.7844 125.609 34.8504 126.378 36.2352C127.169 37.6199 127.565 39.2355 127.565 41.0817ZM121.795 39.5983C121.795 38.631 121.466 37.8617 120.806 37.2902C120.147 36.7187 119.322 36.433 118.334 36.433C117.388 36.433 116.586 36.7077 115.926 37.2572C115.289 37.8067 114.893 38.5871 114.74 39.5983H121.795Z" fill="currentColor"/>
                        <path d="M128.1 41.3786C128.1 39.4661 128.484 37.7958 129.254 36.367C130.045 34.9383 131.133 33.8393 132.518 33.07C133.924 32.3007 135.529 31.916 137.331 31.916C139.639 31.916 141.562 32.5205 143.101 33.7294C144.662 34.9383 145.684 36.6418 146.167 38.8398H140.167C139.661 37.4331 138.683 36.7297 137.232 36.7297C136.199 36.7297 135.375 37.1363 134.76 37.9496C134.144 38.7409 133.836 39.884 133.836 41.3786C133.836 42.8733 134.144 44.0273 134.76 44.8405C135.375 45.6316 136.199 46.0274 137.232 46.0274C138.683 46.0274 139.661 45.3243 140.167 43.9172H146.167C145.684 46.0716 144.662 47.7639 143.101 48.9946C141.54 50.2257 139.617 50.8413 137.331 50.8413C135.529 50.8413 133.924 50.4563 132.518 49.6873C131.133 48.9179 130.045 47.819 129.254 46.3902C128.484 44.9614 128.1 43.2908 128.1 41.3786Z" fill="currentColor"/>
                        <path d="M159.173 31.9816C161.283 31.9816 162.976 32.6849 164.251 34.0917C165.525 35.4764 166.163 37.3887 166.163 39.8285V50.5769H160.558V40.5867C160.558 39.356 160.239 38.3998 159.602 37.7184C158.964 37.037 158.107 36.6964 157.03 36.6964C155.953 36.6964 155.096 37.037 154.458 37.7184C153.821 38.3998 153.502 39.356 153.502 40.5867V50.5769H147.864V26.1787H153.502V34.6522C154.074 33.8389 154.854 33.1905 155.843 32.7069C156.832 32.2233 157.942 31.9816 159.173 31.9816Z" fill="currentColor"/>
                        <path d="M37.752 38.4784V18.4648H44.4246V28.7528C45.5892 28.3032 46.8548 28.0568 48.1779 28.0568C53.936 28.0568 58.6038 32.7246 58.6038 38.4827V50.5768H51.9313V38.4827C51.9313 36.4098 50.2508 34.7294 48.1779 34.7294C46.1059 34.7294 44.426 36.4083 44.4246 38.48V38.4827V50.5768H37.752V38.4827V38.4784Z" fill="currentColor"/>
                        <path d="M51.9307 25.1375V18.4648H58.6031V25.1375H51.9307Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="trusted-logo">
                      <svg width="150" height="54" viewBox="0 0 200 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81.9805 25.6494H86.2923V48.8664H81.9805V25.6494Z" fill="currentColor"/>
                        <path d="M100.565 30.9561C102.798 30.9561 104.589 31.6083 105.938 32.9129C107.287 34.2175 107.961 36.1523 107.961 38.7172V48.8663H103.815V39.2481C103.815 37.7 103.45 36.5393 102.721 35.7653C101.991 34.9693 100.952 34.5713 99.6029 34.5713C98.0769 34.5713 96.8716 35.0357 95.9874 35.9643C95.1029 36.8709 94.6604 38.1867 94.6604 39.9112V48.8663H90.5146V31.1551H94.4615V33.4436C95.1471 32.6255 96.0096 32.0064 97.0489 31.5862C98.0882 31.1661 99.2601 30.9561 100.565 30.9561Z" fill="currentColor"/>
                        <path d="M127.822 31.1543L120.226 48.8655H115.948L108.353 31.1543H112.664L118.17 44.2885L123.842 31.1543H127.822Z" fill="currentColor"/>
                        <path d="M144.919 40.1101C144.919 40.3979 144.897 40.8066 144.853 41.3375H130.955C131.199 42.642 131.829 43.6812 132.846 44.4553C133.885 45.2072 135.168 45.5829 136.693 45.5829C138.639 45.5829 140.242 44.9415 141.503 43.6591L143.725 46.2131C142.929 47.1639 141.923 47.8825 140.707 48.3687C139.49 48.8554 138.12 49.0986 136.594 49.0986C134.648 49.0986 132.935 48.7116 131.453 47.9379C129.972 47.1639 128.822 46.0913 128.004 44.7205C127.207 43.3276 126.81 41.7574 126.81 40.0109C126.81 38.286 127.197 36.7382 127.971 35.3673C128.766 33.9743 129.861 32.8908 131.254 32.1169C132.647 31.343 134.217 30.9561 135.964 30.9561C137.688 30.9561 139.225 31.343 140.574 32.1169C141.945 32.8687 143.006 33.9411 143.758 35.3341C144.532 36.7051 144.919 38.2972 144.919 40.1101ZM135.964 34.2728C134.637 34.2728 133.509 34.6708 132.581 35.4668C131.674 36.2407 131.121 37.2801 130.922 38.5846H140.972C140.795 37.3022 140.253 36.2628 139.347 35.4668C138.44 34.6708 137.313 34.2728 135.964 34.2728Z" fill="currentColor"/>
                        <path d="M151.19 33.7414C152.384 31.884 154.485 31.287 157.492 31.287V34.6037C157.138 34.5374 156.818 34.5042 156.53 34.5042C154.916 34.5042 153.656 35.2781 152.749 36.2289C151.843 37.1575 151.389 38.5062 151.389 40.2753V48.8655H147.243V31.1543H151.19V33.7414Z" fill="currentColor"/>
                        <path d="M171.479 47.9045C170.992 48.3023 170.396 48.6009 169.688 48.7999C169.003 48.9992 168.273 49.0985 167.499 49.0985C165.553 49.0985 164.05 48.5901 162.988 47.5729C161.927 46.5558 161.396 45.074 161.396 43.1285V34.6044H158.478V31.2876H161.396V27.2412H165.542V31.2876H170.285V34.6044H165.542V43.0289C165.542 43.8913 165.752 44.5544 166.172 45.019C166.592 45.461 167.2 45.6825 167.996 45.6825C168.925 45.6825 169.699 45.4389 170.318 44.9527L171.479 47.9045Z" fill="currentColor"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M71.1367 37.3257C71.1367 49.0724 61.6144 58.5947 49.8676 58.5947C38.1211 58.5947 28.5986 49.0724 28.5986 37.3257C28.5986 25.5791 38.1211 16.0566 49.8676 16.0566C61.6144 16.0566 71.1367 25.5791 71.1367 37.3257ZM64.4523 37.3257C64.4523 45.3804 57.9228 51.9099 49.8681 51.9099C49.3096 51.9099 48.7584 51.8787 48.2162 51.8178C55.546 51.0475 61.2587 44.8478 61.2587 37.3136C61.2587 29.8174 55.6028 23.642 48.3258 22.8218C48.8326 22.7685 49.3472 22.7412 49.8681 22.7412C57.9228 22.7412 64.4523 29.2709 64.4523 37.3257ZM45.158 47.5986C49.9648 46.7495 53.621 42.4732 53.621 37.3257C53.621 32.178 49.9648 27.9016 45.158 27.0528C45.7397 26.9521 46.3379 26.8997 46.9483 26.8997C52.7064 26.8997 57.3744 31.5676 57.3744 37.3257C57.3744 43.0837 52.7064 47.7516 46.9483 47.7516C46.3379 47.7516 45.7397 47.6991 45.158 47.5986Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
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
        }

        .tb-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1100px;
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

        .logo-card {
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 40px;
          padding: 60px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 180px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.02);
          backdrop-filter: blur(10px);
        }

        .tb-card-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

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
          margin-top: auto;
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

        @media (max-width: 600px) {
          .tb-card {
            padding: 32px 24px;
          }
          .tb-quote {
            font-size: 16px;
          }
          .tb-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </section>
  );
};

export default TrustedBrands;

