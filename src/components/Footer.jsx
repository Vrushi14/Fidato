import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* SVG Gradient Background */}
      <div style={{
        position: 'absolute', inset: 0,
        overflow: 'hidden', zIndex: 0,
        pointerEvents: 'none'
      }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 1727" fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <g filter="url(#filter0_f_133_945)">
            <path d="M476.1 395.719C174.497 526.751 38.9627 871.32 173.375 1165.34C307.787 1459.35 661.247 1591.48 962.85 1460.45C1264.45 1329.41 1399.99 984.845 1265.57 690.829C1131.16 396.813 777.702 264.688 476.1 395.719Z" fill="url(#paint0_linear_133_945)" fillOpacity="0.6"/>
          </g>
          <defs>
            <filter id="filter0_f_133_945" x="-223.651" y="9.15527e-05" width="1886.25" height="1856.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="172.55" result="effect1_foregroundBlur_133_945"/>
            </filter>
            <linearGradient id="paint0_linear_133_945" x1="173.375" y1="1165.34" x2="887.54" y2="356.882" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D7F0FF"/>
              <stop offset="0.333333" stopColor="#D9CFFF"/>
              <stop offset="0.666667" stopColor="#FFD1EA"/>
              <stop offset="1" stopColor="#FFE3D2"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top: Logo + Links */}
      <div className="footer-top" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <svg width="32" height="32" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419"/>
              <path d="M19.6662 46.4072C13.4269 46.4072 8.15479 41.2853 8.15479 35.2291V11.1781C8.15727 8.21508 9.33511 5.37413 11.4299 3.2785C13.5246 1.18287 16.3651 0.00372918 19.3282 0H39.0131C41.9765 0.00372686 44.8176 1.18255 46.9131 3.27804C49.0086 5.37353 50.1875 8.21465 50.1912 11.1781V30.8631C50.1875 33.8261 49.0084 36.6666 46.9128 38.7613C44.8172 40.8561 41.9761 42.0339 39.0131 42.0364H19.6662V46.4072Z" fill="#F26419"/>
              <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="white"/>
              <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="black"/>
              <path d="M37.8253 12.8823H33.478V22.5206H37.8253V12.8823Z" fill="black"/>
            </svg>
            <span className="footer-logo-name">Fidato</span>
          </Link>
          <p className="footer-desc">
            AI-powered chatbots that learn from your<br />
            website and provide accurate, helpful<br />
            responses to your customers.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/#features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/#integrations">Integrations</Link>
            <Link to="/#api">API Docs</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/#about">About Us</Link>
            <Link to="/#blog">Blog</Link>
            <Link to="/#careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link to="/#terms">Terms and Conditions</Link>
            <Link to="/#privacy">Privacy Policy</Link>
            <Link to="/#refund">Cancellation and Refund</Link>
            <Link to="/#cookie">Cookie Policy</Link>
            <Link to="/#gdpr">GDPR</Link>
          </div>
          <div className="footer-col">
            <h4>Connect with us</h4>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">Reddit</a>
            <a href="mailto:hello@fidato.ai">Email</a>
          </div>
        </div>
      </div>

      {/* Giant Wordmark SVG */}
      <div className="footer-wordmark" aria-hidden="true" style={{ position: 'relative', zIndex: 1 }}>
        <svg width="100%" viewBox="0 0 1138 283" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path d="M1034.75 282.709C1014.68 282.709 996.901 278.264 981.406 269.374C965.912 260.23 953.592 248.037 944.448 232.797C935.558 217.303 931.113 200.03 931.113 180.98C931.113 161.929 935.558 144.784 944.448 129.543C953.592 114.049 965.912 101.857 981.406 92.9664C996.901 83.8221 1014.68 79.25 1034.75 79.25C1054.56 79.25 1072.21 83.8221 1087.71 92.9664C1103.2 101.857 1115.39 113.922 1124.28 129.162C1133.43 144.403 1138 161.675 1138 180.98C1138 200.03 1133.43 217.303 1124.28 232.797C1115.39 248.037 1103.2 260.23 1087.71 269.374C1072.21 278.264 1054.56 282.709 1034.75 282.709ZM1034.75 245.37C1046.69 245.37 1057.1 242.576 1065.99 236.988C1074.88 231.146 1081.74 223.399 1086.56 213.747C1091.39 204.094 1093.8 193.172 1093.8 180.98C1093.8 169.041 1091.39 158.246 1086.56 148.594C1081.74 138.688 1074.88 130.94 1065.99 125.352C1057.1 119.51 1046.69 116.589 1034.75 116.589C1022.56 116.589 1012.01 119.51 1003.12 125.352C994.488 130.94 987.629 138.561 982.549 148.213C977.723 157.865 975.31 168.787 975.31 180.98C975.31 192.918 977.723 203.84 982.549 213.747C987.629 223.399 994.488 231.146 1003.12 236.988C1012.01 242.576 1022.56 245.37 1034.75 245.37Z" fill="#1E1E1E"/>
          <path d="M858.899 278.132C841.627 278.132 828.038 273.179 818.131 263.273C808.479 253.367 803.653 239.904 803.653 222.886V35.0479H847.088V220.981C847.088 226.823 848.866 231.649 852.422 235.459C855.978 239.015 860.677 240.793 866.52 240.793H907.288V278.132H858.899ZM770.124 121.156V83.8171H907.669V121.156H770.124Z" fill="#1E1E1E"/>
          <path d="M626.25 282.709C607.708 282.709 591.706 278.137 578.243 268.993C564.781 259.849 554.367 247.656 547 232.416C539.888 216.922 536.332 199.903 536.332 181.361C536.332 162.056 540.396 144.784 548.524 129.543C556.907 114.049 568.718 101.857 583.958 92.9664C599.453 83.8221 617.868 79.25 639.205 79.25C660.287 79.25 678.195 83.8221 692.927 92.9664C707.914 101.857 719.344 114.049 727.218 129.543C735.346 144.784 739.41 161.802 739.41 180.599V278.137H695.594V241.941H694.832C691.022 249.054 686.069 255.785 679.973 262.135C673.877 268.231 666.383 273.184 657.493 276.994C648.603 280.804 638.189 282.709 626.25 282.709ZM638.062 245.37C649.492 245.37 659.398 242.576 667.781 236.988C676.417 231.146 683.021 223.399 687.593 213.747C692.419 203.84 694.832 192.791 694.832 180.599C694.832 168.406 692.546 157.611 687.974 148.213C683.402 138.561 676.925 130.94 668.543 125.352C660.16 119.51 650.127 116.589 638.443 116.589C626.25 116.589 615.836 119.51 607.2 125.352C598.564 130.94 591.96 138.561 587.387 148.213C582.815 157.865 580.529 168.787 580.529 180.98C580.529 192.918 582.815 203.84 587.387 213.747C591.96 223.399 598.437 231.146 606.819 236.988C615.455 242.576 625.869 245.37 638.062 245.37Z" fill="#1E1E1E"/>
          <path d="M395.46 282.709C379.966 282.709 365.868 280.296 353.168 275.47C340.721 270.39 330.053 263.151 321.163 253.753C312.527 244.354 305.796 233.305 300.969 220.605C296.397 207.65 294.111 193.426 294.111 177.932C294.111 158.119 298.048 140.847 305.923 126.114C314.051 111.382 325.227 99.9516 339.451 91.8234C353.676 83.4412 369.932 79.2501 388.221 79.2501C397.365 79.2501 406.001 80.6471 414.129 83.4412C422.258 86.2353 429.624 90.1724 436.228 95.2525C442.832 100.333 448.166 106.302 452.23 113.16H452.611V0H496.428V178.694C496.428 200.03 492.11 218.573 483.473 234.321C475.091 249.816 463.28 261.754 448.039 270.136C433.053 278.518 415.526 282.709 395.46 282.709ZM395.46 245.37C406.636 245.37 416.415 242.703 424.798 237.369C433.434 231.781 440.165 224.161 444.991 214.509C449.817 204.856 452.23 193.68 452.23 180.98C452.23 168.279 449.817 157.103 444.991 147.451C440.165 137.799 433.434 130.305 424.798 124.971C416.415 119.383 406.509 116.589 395.079 116.589C384.157 116.589 374.377 119.383 365.741 124.971C357.105 130.559 350.374 138.18 345.548 147.832C340.721 157.484 338.308 168.533 338.308 180.98C338.308 193.68 340.721 204.856 345.548 214.509C350.374 224.161 357.105 231.781 365.741 237.369C374.631 242.703 384.538 245.37 395.46 245.37Z" fill="#1E1E1E"/>
          <path d="M208.79 278.136V83.8211H252.607V278.136H208.79ZM230.508 56.7694C222.888 56.7694 216.284 53.9753 210.695 48.3872C205.107 42.799 202.313 36.1948 202.313 28.5746C202.313 20.9544 205.107 14.3503 210.695 8.76212C216.284 3.17397 222.888 0.379883 230.508 0.379883C238.382 0.379883 244.986 3.17397 250.32 8.76212C255.909 14.3503 258.703 20.9544 258.703 28.5746C258.703 36.1948 255.909 42.799 250.32 48.3872C244.986 53.9753 238.382 56.7694 230.508 56.7694Z" fill="#1E1E1E"/>
          <path d="M0 278.14V84.9676C0 70.9972 3.30209 58.5509 9.90626 47.6286C16.5104 36.4523 25.2737 27.6891 36.196 21.3389C47.3723 14.7347 59.9456 11.4326 73.916 11.4326H169.168V51.4387H78.8691C69.2168 51.4387 61.2156 54.7408 54.8655 61.3449C48.7693 67.6951 45.7212 75.5693 45.7212 84.9676V133.737H155.833V173.743H45.7212V278.14H0Z" fill="#1E1E1E"/>
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom" style={{ position: 'relative', zIndex: 1 }}>
        <p>© 2020 Fidato AI &nbsp; All rights reserved.</p>
        <p>Crafted with ❤ @ AgnesCreative</p>
      </div>

      <style>{`
        .main-footer {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 60px 24px 40px;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-brand {
          flex: 0 0 220px;
        }

        .footer-logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .footer-logo-name {
          font-size: 22px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.02em;
        }

        .footer-desc {
          font-size: 13px;
          line-height: 1.7;
          color: #555;
          margin: 0;
        }

        .footer-links {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 120px;
        }

        .footer-col h4 {
          font-size: 14px;
          font-weight: 700;
          color: #111;
          margin-bottom: 4px;
          letter-spacing: 0;
        }

        .footer-col a {
          font-size: 13px;
          color: #555;
          text-decoration: none;
          transition: color 0.2s ease;
          line-height: 1.4;
        }

        .footer-col a:hover {
          color: #111;
        }

        /* Giant wordmark */
        .footer-wordmark {
          width: 100%;
          padding: 20px 40px 0;
          display: block;
          line-height: 0;
        }

        .footer-wordmark svg {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .footer-wordmark {
          padding: 0 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          border-top: 1px solid rgba(0,0,0,0.08);
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-bottom p {
          font-size: 12px;
          color: #777;
          margin: 0;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            padding: 40px 24px 32px;
          }
          .footer-links {
            gap: 32px;
          }
          .footer-wordmark {
            font-size: clamp(60px, 16vw, 120px);
            padding: 0 24px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
            padding: 16px 24px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
