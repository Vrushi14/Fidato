import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "What does Fidato AI do?",
    a: "Fidato AI creates intelligent chatbots that learn directly from your website content. Using advanced RAG (Retrieval Augmented Generation) technology, it provides accurate answers to customer questions based solely on your website's information — no manual training required."
  },
  {
    q: "Do I need technical skills to use Fidato?",
    a: "Not at all! Simply enter your website URL, customize your chatbot's appearance, and embed it with a single line of code. Our platform is designed for business owners, marketers, and customer support teams — no coding experience necessary."
  },
  {
    q: "Can it answer questions based on my full website?",
    a: "Yes! Fidato crawls and indexes your entire website, including all pages, blog posts, product descriptions, FAQs, and more. The AI understands context across your site to provide comprehensive, accurate responses."
  },
  {
    q: "Can I embed the chatbot anywhere?",
    a: "Absolutely. Fidato works on any website platform — WordPress, Shopify, Wix, Squarespace, custom sites, and more. Just copy our embed code and paste it into your site. The chatbot automatically adapts to your website's design."
  },
  {
    q: "What makes Fidato different from other chatbots?",
    a: "Unlike traditional chatbots that require manual scripting or generic AI that can hallucinate, Fidato uses your actual website content as its knowledge base. This ensures accurate, on-brand responses without fabricating information."
  },
  {
    q: "Is my data secure?",
    a: "Security is our priority. We use enterprise-grade encryption, comply with GDPR and other data protection regulations, and never share your data with third parties. Your website content is processed securely and stored in isolated environments."
  }
];

const SparkIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 0C12 0 12 10 24 12C12 14 12 24 12 24C12 24 12 14 0 12C12 10 12 0 12 0Z" fill="#FF6B3D" />
  </svg>
);

const FAQ = ({ light = false, hideTitle = false }) => {
  // To match the screenshot exactly (where all appear open with an 'x'), 
  // we initialize all of them as open, but they can be toggled.
  const [openItems, setOpenItems] = useState(faqs.map((_, i) => i));

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section className={`faq-section ${light ? 'light-theme' : ''}`} id="faq">
      <div className="container">
        <div className={`faq-card-wrapper ${light ? 'standalone' : ''}`}>
          {/* Decorative Sparks */}
          <SparkIcon className="faq-spark spark-1" />
          <SparkIcon className="faq-spark spark-2" />
          <SparkIcon className="faq-spark spark-3" />
          <SparkIcon className="faq-spark spark-4" />
          <SparkIcon className="faq-spark spark-5" />
          <SparkIcon className="faq-spark spark-6" />
          <SparkIcon className="faq-spark spark-7" />
          <SparkIcon className="faq-spark spark-8" />

          <div className="faq-inner">
            {!hideTitle && (
              <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>Everything you need to know about Fidato AI.</p>
              </div>
            )}

            <div className="faq-container">
              {faqs.map((faq, index) => {
                const isOpen = openItems.includes(index);
                return (
                  <motion.div
                    key={index}
                    className={`faq-card ${isOpen ? 'open' : ''}`}
                    onClick={() => toggleItem(index)}
                    layout
                    transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                  >
                    <div className="faq-q-wrapper">
                      <h3 className="faq-q">{faq.q}</h3>
                      <div className="faq-icon-btn">
                        {isOpen ? (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 1L1 13M1 1l12 12" />
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 1v12M1 7h12" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-a-wrapper"
                          key="answer"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="faq-a">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .faq-section {
          padding: 0 0 80px 0;
          position: relative;
          background: transparent;
        }

        .faq-card-wrapper {
          background-color: #0A0A0A;
          border-radius: 80px;
          padding: 60px 40px 100px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2);
        }

        .faq-card-wrapper.standalone {
          background-color: transparent;
          box-shadow: none;
          padding: 0;
          border-radius: 0;
          overflow: visible;
        }

        .faq-inner {
          position: relative;
          z-index: 2;
          max-width: 100%;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .faq-header h2 {
          font-family: 'Rebond Grotesque', sans-serif;
          font-size: 48px;
          line-height: 55px;
          color: #ffffff;
          font-weight: 500;
          margin-bottom: 16px;
          letter-spacing: 0px;
        }

        .light-theme .faq-header h2 {
          color: #1A1A1A;
        }

        .faq-header p {
          font-family: 'Archivo', sans-serif;
          color: #000000;
          font-size: 19px;
          line-height: 22px;
          font-weight: 500;
          margin: 0;
          letter-spacing: 0px;
        }

        .light-theme .faq-header p {
          color: #000000;
        }

        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-card {
          background-color: #FFFFFF;
          border-radius: 24px;
          padding: 24px 32px;
          cursor: pointer;
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        }

        .light-theme .faq-card {
          background-color: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        }

        .faq-card:hover {
          background-color: rgba(255, 255, 255, 0.95);
          border-color: rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        .light-theme .faq-card:hover {
          background-color: rgba(255, 255, 255, 0.5);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        .faq-q-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .faq-q {
          color: #1A1A1A;
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
        }

        .light-theme .faq-q {
          color: #1A1A1A;
        }

        .faq-icon-btn {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          opacity: 0.7;
        }

        .faq-a-wrapper {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .light-theme .faq-a-wrapper {
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .faq-a {
          color: #444444;
          font-size: 16px !important;
          line-height: 1.8;
          margin: 0;
        }

        .light-theme .faq-a {
          color: #444444;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Floating Sparks */
        .faq-spark {
          position: absolute;
          z-index: 1;
          animation: float 6s ease-in-out infinite;
          opacity: 0.6;
        }

        .spark-1 { top: 15%; left: 8%; width: 14px; height: 14px; animation-delay: 0s; }
        .spark-2 { top: 40%; left: 18%; width: 18px; height: 18px; animation-delay: -2s; }
        .spark-3 { top: 75%; left: 12%; width: 12px; height: 12px; animation-delay: -4s; }
        .spark-4 { top: 20%; right: 15%; width: 12px; height: 12px; animation-delay: -1s; }
        .spark-5 { top: 50%; right: 22%; width: 16px; height: 16px; animation-delay: -3s; }
        .spark-6 { top: 80%; right: 12%; width: 14px; height: 14px; animation-delay: -5s; }
        .spark-7 { top: 30%; right: 5%; width: 10px; height: 10px; animation-delay: -1.5s; }
        .spark-8 { top: 60%; left: 4%; width: 10px; height: 10px; animation-delay: -3.5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }

        @media (max-width: 992px) {
          .faq-card-wrapper {
            border-radius: 40px;
            padding: 60px 24px;
          }
          .faq-header h2 { font-size: 36px; }
        }

        @media (max-width: 768px) {
          .faq-section { padding: 40px 0; }
          .faq-card { padding: 20px 24px; }
          .faq-header h2 { font-size: 28px; }
          .faq-spark { display: none; }
        }
      `}} />
    </section>
  );
};

export default FAQ;

