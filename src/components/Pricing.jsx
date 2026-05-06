import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScaleReveal from './ScaleReveal';
import './Pricing.css';

const Pricing = () => {
  const [currency, setCurrency] = useState('USD');

  const plans = [
    {
      name: "Growth",
      price: currency === 'USD' ? "$9.99" : "₹849",
      period: "/mo.",
      desc: "Gives you the most freedom. Perfect if you want to try for growing businesses.",
      buttonText: "Get Started for Free",
      buttonStyle: "outline",
      features: [
        "Everything in the basic plan",
        "500 chat sessions/month",
        "Add additional knowledge of up to 500 MB to chatbot",
        "Advanced customization features",
        "Priority email support"
      ]
    },
    {
      name: "Pro",
      price: currency === 'USD' ? "$29.99" : "₹2,499",
      period: "/mo.",
      desc: "For companies of all sizes, who know what they need.",
      buttonText: "Start Today",
      buttonStyle: "filled",
      popular: true,
      features: [
        "Everything in growth plan",
        "2,000 chat sessions/month",
        "Add additional knowledge of up to 500 MB to chatbot",
        "Custom branding",
        "Analytics dashboard",
        "Capture leads in chat",
        "Send completed chats to supervisor inbox"
      ]
    },
    {
      name: "Enterprise",
      price: currency === 'USD' ? "$29.99" : "₹2,499", // Note: Following image's price, though usually higher
      period: "/mo.",
      desc: "The most cost-effective option. For a long-term relationship with us.",
      buttonText: "Start Today",
      buttonStyle: "outline-dark",
      dark: true,
      features: [
        "Everything in Pro plan",
        "Unlimited messages",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom training data",
        "Phone support"
      ]
    }
  ];

  const basicPlan = {
    name: "Basic",
    price: currency === 'USD' ? "$0" : "₹0",
    period: "/mo.",
    desc: "Perfect for trying out.",
    buttonText: "Get Started for Free",
    features: [
      "200 chat sessions/month",
      "Website-only knowledge",
      "Basic customization",
      "Email support"
    ]
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">Plans That Scale With You</h2>
          <p className="section-subtitle">
            <span className="highlight-wrapper">
              Start free
              <svg className="sketch-underline" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M5 15 Q 50 20 95 12" stroke="#FF7A50" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span> and upgrade as your business grows. No hidden fees, cancel anytime.
          </p>

          <div className="currency-toggle">
            <button 
              className={`toggle-btn ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => setCurrency('USD')}
            >
              USD
            </button>
            <button 
              className={`toggle-btn ${currency === 'INR' ? 'active' : ''}`}
              onClick={() => setCurrency('INR')}
            >
              INR
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <ScaleReveal key={index} delay={index * 0.15} style={{ height: '100%' }}>
              <div className={`pricing-card ${plan.dark ? 'dark' : ''} ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <span className="heart-icon">❤️</span> most popular
                  </div>
                )}
                <div className="card-top">
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-desc">{plan.desc}</p>
                    <div className="plan-price">
                      <span className="amount">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </div>
                  </div>
                  <Link to="/contact" className={`plan-btn ${plan.buttonStyle}`} style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}>
                    {plan.buttonText}
                  </Link>
                </div>
                <div className="card-features">
                  <h4>What's included</h4>
                  <ul>
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <span className="check-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScaleReveal>
          ))}
        </div>

        <ScaleReveal delay={0.4}>
          <div className="basic-plan-horizontal">
            <div className="basic-info">
            <div className="basic-title-wrap">
              <h3 className="plan-name">{basicPlan.name}</h3>
              <p className="plan-desc">{basicPlan.desc}</p>
            </div>
            <div className="plan-price">
              <span className="amount">{basicPlan.price}</span>
              <span className="period">{basicPlan.period}</span>
            </div>
          </div>
          
          <div className="basic-features-grid">
            <h4>What's included</h4>
            <div className="features-columns">
              <ul>
                {basicPlan.features.slice(0, 2).map((feature, fIndex) => (
                  <li key={fIndex}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <ul>
                {basicPlan.features.slice(2).map((feature, fIndex) => (
                  <li key={fIndex}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/contact" className="plan-btn filled" style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}>
            {basicPlan.buttonText}
          </Link>
        </div>
        </ScaleReveal>
      </div>
    </section>
  );
};

export default Pricing;
