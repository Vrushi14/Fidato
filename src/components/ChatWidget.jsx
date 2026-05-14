import React, { useState, useRef, useEffect } from 'react';

const FIDATO_LOGO = () => (
  <svg width="28" height="28" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419" />
    <path d="M19.6657 46.4072C13.4264 46.4072 8.1543 41.2853 8.1543 35.2291V11.1781C8.15678 8.21508 9.33463 5.37413 11.4294 3.2785C13.5241 1.18287 16.3647 0.00372918 19.3277 0H39.0126C41.9761 0.00372686 44.8171 1.18255 46.9126 3.27804C49.0081 5.37353 50.187 8.21465 50.1907 11.1781V30.8631C50.187 33.8261 49.0079 36.6666 46.9123 38.7613C44.8167 40.8561 41.9756 42.0339 39.0126 42.0364H19.6657V46.4072Z" fill="#F26419" />
    <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="white" />
    <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="black" />
    <path d="M37.8258 12.8822H33.4785V22.5206H37.8258V12.8822Z" fill="black" />
  </svg>
);

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    text: "👋 Hi there! I'm the Fidato AI assistant. I can answer questions about this website. What would you like to know?",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [config, setConfig] = useState({
    accentColor: '#FF6B3D',
    widgetName: 'Fidato AI',
    greeting: "Hi! I'm the Fidato AI assistant. How can I help you today?",
    position: 'bottom-right',
    showBranding: true,
  });
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;
    const userMsg = {
      id: Date.now(),
      role: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: "Thanks for your question! I'm analyzing this website to give you the most accurate answer. For a full integration, connect me to your backend AI service.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1800);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const accent = config.accentColor;

  return (
    <>
      {/* ── CHAT PANEL ── */}
      {isOpen && (
        <div className="cw-panel" style={{ '--cw-accent': accent }}>
          {/* ── HEADER ── */}
          <div className="cw-header">
            <div className="cw-header-left">
              <div className="cw-avatar">
                <FIDATO_LOGO />
              </div>
              <div>
                <p className="cw-header-title">{config.widgetName}</p>
                <span className="cw-status-dot" /> <span className="cw-status-text">Online</span>
              </div>
            </div>
            <div className="cw-header-actions">
              <button
                className="cw-icon-btn"
                title="Settings"
                onClick={() => setShowConfig((v) => !v)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>
              <button className="cw-icon-btn" title="Close" onClick={() => setIsOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── CONFIG PANEL (slides in) ── */}
          {showConfig && (
            <div className="cw-config-panel">
              <p className="cw-config-title">Widget Configuration</p>

              <label className="cw-config-label">Widget Name</label>
              <input
                className="cw-config-input"
                value={config.widgetName}
                onChange={(e) => setConfig((c) => ({ ...c, widgetName: e.target.value }))}
              />

              <label className="cw-config-label">Greeting Message</label>
              <textarea
                className="cw-config-textarea"
                value={config.greeting}
                rows={3}
                onChange={(e) => setConfig((c) => ({ ...c, greeting: e.target.value }))}
              />

              <label className="cw-config-label">Accent Color</label>
              <div className="cw-color-row">
                <input
                  type="color"
                  className="cw-color-swatch"
                  value={config.accentColor}
                  onChange={(e) => setConfig((c) => ({ ...c, accentColor: e.target.value }))}
                />
                <span className="cw-color-hex">{config.accentColor}</span>
              </div>

              <label className="cw-config-label">Widget Position</label>
              <div className="cw-position-grid">
                {['bottom-right', 'bottom-left'].map((pos) => (
                  <button
                    key={pos}
                    className={`cw-position-btn${config.position === pos ? ' active' : ''}`}
                    onClick={() => setConfig((c) => ({ ...c, position: pos }))}
                  >
                    {pos === 'bottom-right' ? '↘ Bottom Right' : '↙ Bottom Left'}
                  </button>
                ))}
              </div>

              <label className="cw-config-label cw-toggle-label">
                <span>Show "Powered by Fidato"</span>
                <div
                  className={`cw-toggle${config.showBranding ? ' on' : ''}`}
                  onClick={() => setConfig((c) => ({ ...c, showBranding: !c.showBranding }))}
                >
                  <div className="cw-toggle-thumb" />
                </div>
              </label>

              <button
                className="cw-config-save"
                onClick={() => setShowConfig(false)}
              >
                Save Changes
              </button>
            </div>
          )}

          {/* ── MESSAGES ── */}
          {!showConfig && (
            <>
              <div className="cw-messages">
                {messages.map((msg) => (
                  <div key={msg.id} className={`cw-msg-row ${msg.role}`}>
                    {msg.role === 'assistant' && (
                      <div className="cw-bot-avatar"><FIDATO_LOGO /></div>
                    )}
                    <div className="cw-msg-bubble">
                      <p>{msg.text}</p>
                      <span className="cw-msg-time">{msg.time}</span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="cw-msg-row assistant">
                    <div className="cw-bot-avatar"><FIDATO_LOGO /></div>
                    <div className="cw-typing">
                      <span /><span /><span />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* ── QUICK REPLIES ── */}
              <div className="cw-quick-replies">
                {['What can you do?', 'Contact support', 'Pricing info'].map((q) => (
                  <button
                    key={q}
                    className="cw-quick-btn"
                    onClick={() => {
                      setInputValue(q);
                      setTimeout(() => inputRef.current?.focus(), 50);
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* ── INPUT ── */}
              <div className="cw-input-area">
                <textarea
                  ref={inputRef}
                  className="cw-input"
                  placeholder="Ask me anything…"
                  value={inputValue}
                  rows={1}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  className="cw-send-btn"
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  title="Send"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>

              {config.showBranding && (
                <div className="cw-branding">Powered by <strong>Fidato AI</strong></div>
              )}
            </>
          )}
        </div>
      )}

      {/* ── FAB BUTTON ── */}
      <button
        className="cw-fab"
        style={{ background: `linear-gradient(135deg, ${accent} 0%, #FF5226 100%)` }}
        onClick={() => setIsOpen((v) => !v)}
        title={isOpen ? 'Close chat' : 'Chat with AI'}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <FIDATO_LOGO />
        )}
        {!isOpen && <span className="cw-fab-ping" />}
      </button>
    </>
  );
};

export default ChatWidget;
