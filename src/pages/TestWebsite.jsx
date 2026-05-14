import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './TestWebsite.css';

const FidatoIcon = ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 51 53" fill="none">
        <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419" />
        <path d="M19.6657 46.4072C13.4264 46.4072 8.1543 41.2853 8.1543 35.2291V11.1781C8.15678 8.21508 9.33463 5.37413 11.4294 3.2785C13.5241 1.18287 16.3647 0.00372918 19.3277 0H39.0126C41.9761 0.00372686 44.8171 1.18255 46.9126 3.27804C49.0081 5.37353 50.187 8.21465 50.1907 11.1781V30.8631C50.187 33.8261 49.0079 36.6666 46.9123 38.7613C44.8167 40.8561 41.9756 42.0339 39.0126 42.0364H19.6657V46.4072Z" fill="#F26419" />
        <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="white" />
        <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="black" />
        <path d="M37.8258 12.8822H33.4785V22.5206H37.8258V12.8822Z" fill="black" />
    </svg>
);

const COLORS = ['linear-gradient(135deg,#f97316,#a855f7)', '#3b82f6', '#22c55e', '#f59e0b', '#ec4899', '#6366f1', '#a855f7'];

/** FAB 60px + 12px gap + 28px edge = panel offset from viewport edge */
const WIDGET_POS = [
    /* 0 — bottom-left */
    { fab: { bottom: 28, left: 28, right: 'auto', top: 'auto' }, panel: { bottom: 100, left: 28, right: 'auto', top: 'auto' } },
    /* 1 — bottom-right */
    { fab: { bottom: 28, right: 28, left: 'auto', top: 'auto' }, panel: { bottom: 100, right: 28, left: 'auto', top: 'auto' } },
    /* 2 — top-left */
    { fab: { top: 28, left: 28, right: 'auto', bottom: 'auto' }, panel: { top: 100, left: 28, right: 'auto', bottom: 'auto' } },
    /* 3 — top-right */
    { fab: { top: 28, right: 28, left: 'auto', bottom: 'auto' }, panel: { top: 100, right: 28, left: 'auto', bottom: 'auto' } },
];

const ChatWidget = ({ config }) => {
    const [open, setOpen] = useState(true);
    const [msgs, setMsgs] = useState([{ id: 1, role: 'bot', text: config.welcomeMsg }]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const endRef = useRef(null);
    const chatFileRef = useRef(null);

    const handleFileUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setMsgs(p => [...p, { id: Date.now(), role: 'user', text: `Uploaded: ${file.name}`, imageUrl: url }]);
            e.target.value = null;
            
            setTyping(true);
            setTimeout(() => {
                setTyping(false);
                setMsgs(p => [...p, { id: Date.now() + 1, role: 'bot', text: 'I received your file. Let me analyze it for you.' }]);
            }, 1500);
        }
    };

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, typing]);
    useEffect(() => { setMsgs([{ id: 1, role: 'bot', text: config.welcomeMsg }]); }, [config.welcomeMsg]);

    const send = () => {
        if (!input.trim()) return;
        setMsgs(p => [...p, { id: Date.now(), role: 'user', text: input }]);
        setInput('');
        setTyping(true);
        setTimeout(() => {
            setTyping(false);
            setMsgs(p => [...p, { id: Date.now() + 1, role: 'bot', text: 'Absolutely! Our platform allows real-time collaboration with shared workspaces, live editing and instant notification' }]);
        }, 1500);
    };

    const pos = WIDGET_POS[config.position] ?? WIDGET_POS[1];
    const bg = '#4B7BFF';

    const botIcon = config.avatarUrl ? (
        <img src={config.avatarUrl} alt="Bot" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
    ) : (
        <FidatoIcon size={18} />
    );

    return (
        <>
            {open && (
                <div className="cw-panel" style={{ ...pos.panel }}>
                    {/* Header */}
                    <div className="cw-header-new">
                        <div className="cw-hdr-left">
                            <div className="cw-hdr-icon-new" style={{ background: bg }}>
                                {botIcon}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span className="cw-title-new">{config.chatTitle}</span>
                                <span className="cw-dot-new" />
                            </div>
                        </div>
                        <div className="cw-hdr-actions">
                            <button className="cw-action-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                            </button>
                            <button className="cw-action-btn" onClick={() => setOpen(false)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="cw-msgs-new">
                        {msgs.map(m => {
                            if (m.id === 1 && config.showWelcome === 'Yes') {
                                const parts = m.text.split('\n');
                                return (
                                    <div key={m.id} className="cw-welcome-block">
                                        <div className="cw-welcome-icon">
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="4" y="8" width="2" height="8" rx="1" fill="#111827"/>
                                                <rect x="9" y="4" width="2" height="16" rx="1" fill="#111827"/>
                                                <rect x="14" y="2" width="2" height="20" rx="1" fill="#111827"/>
                                                <rect x="19" y="6" width="2" height="12" rx="1" fill="#111827"/>
                                            </svg>
                                        </div>
                                        {parts[0] && <h3>{parts[0]}</h3>}
                                        {parts[1] && <p>{parts[1]}</p>}
                                    </div>
                                );
                            }
                            return (
                                <div key={m.id} className={`cw-msg-item ${m.role}`}>
                                    {m.role === 'bot' && (
                                        <div className="cw-bot-avatar" style={{ background: bg }}>
                                            {botIcon}
                                        </div>
                                    )}
                                    <div className={m.role === 'user' ? "cw-bubble-user" : "cw-bubble-bot"}>
                                        {m.imageUrl && (
                                            <div style={{ marginBottom: 8 }}>
                                                <img src={m.imageUrl} alt="Uploaded file" style={{ maxWidth: '100%', borderRadius: 8 }} />
                                            </div>
                                        )}
                                        {m.text}
                                    </div>
                                </div>
                            );
                        })}
                        {typing && (
                            <div className="cw-msg-item bot">
                                <div className="cw-bot-avatar" style={{ background: bg }}>{botIcon}</div>
                                <div className="cw-typing-new"><span /><span /><span /></div>
                            </div>
                        )}
                        <div ref={endRef} />
                    </div>

                    {/* Input */}
                    <div className="cw-input-area">
                        <div className="cw-input-box">
                            <button className="cw-inp-plus" onClick={() => chatFileRef.current?.click()}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                            </button>
                            <input ref={chatFileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileUpload} />
                            <input className="cw-inp-text" placeholder="Ask AI anything..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} />
                            <button className="cw-inp-send" onClick={send} disabled={!input.trim()}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="starGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#fbcfe8"/>
                                            <stop offset="0.5" stopColor="#bfdbfe"/>
                                            <stop offset="1" stopColor="#fde047"/>
                                        </linearGradient>
                                    </defs>
                                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#starGrad)"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="cw-footer-text">
                        This chat is recorded. By chatting, you agree to the <a href="#">AI Terms.</a>
                    </div>
                </div>
            )}
            <button className="cw-fab" style={{ background: bg, ...pos.fab }} onClick={() => setOpen(v => !v)}>
                {open ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                ) : config.avatarUrl ? (
                    <img src={config.avatarUrl} alt="Bot" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                ) : (
                    <FidatoIcon size={32} />
                )}
            </button>
        </>
    );
};

export default function TestWebsite() {
    const navigate = useNavigate();
    const [appearOpen, setAppearOpen] = useState(true);
    const [behaviorOpen, setBehaviorOpen] = useState(true);
    const [isConfigOpen, setIsConfigOpen] = useState(true);
    const fileRef = useRef(null);

    const [config, setConfig] = useState({
        chatTitle: 'Fidato AI',
        welcomeMsg: "Hi! I'm Fidato AI.\nWhat can I help you with today?",
        position: 1,
        buttonColor: null,
        autoOpen: 'No',
        showWelcome: 'Yes',
        avatarUrl: null,
    });
    const [saved, setSaved] = useState({ ...config });
    const set = (k, v) => setConfig(c => ({ ...c, [k]: v }));

    const positionIcons = [
        <svg key="left" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M1.875 0.9375V14.6875C1.875 14.9361 1.77623 15.1746 1.60041 15.3504C1.4246 15.5262 1.18614 15.625 0.9375 15.625C0.68886 15.625 0.450403 15.5262 0.274587 15.3504C0.0987721 15.1746 0 14.9361 0 14.6875V0.9375C0 0.68886 0.0987721 0.450403 0.274587 0.274587C0.450403 0.0987721 0.68886 0 0.9375 0C1.18614 0 1.4246 0.0987721 1.60041 0.274587C1.77623 0.450403 1.875 0.68886 1.875 0.9375ZM3.125 5.625V2.8125C3.125 2.3981 3.28962 2.00067 3.58265 1.70765C3.87567 1.41462 4.2731 1.25 4.6875 1.25H14.5625C14.9769 1.25 15.3743 1.41462 15.6674 1.70765C15.9604 2.00067 16.125 2.3981 16.125 2.8125V5.625C16.125 6.0394 15.9604 6.43683 15.6674 6.72985C15.3743 7.02288 14.9769 7.1875 14.5625 7.1875H4.6875C4.2731 7.1875 3.87567 7.02288 3.58265 6.72985C3.28962 6.43683 3.125 6.0394 3.125 5.625ZM5 5.3125H14.25V3.125H5V5.3125ZM13.25 10V12.8125C13.25 13.2269 13.0854 13.6243 12.7924 13.9174C12.4993 14.2104 12.1019 14.375 11.6875 14.375H4.6875C4.2731 14.375 3.87567 14.2104 3.58265 13.9174C3.28962 13.6243 3.125 13.2269 3.125 12.8125V10C3.125 9.5856 3.28962 9.18817 3.58265 8.89515C3.87567 8.60212 4.2731 8.4375 4.6875 8.4375H11.6875C12.1019 8.4375 12.4993 8.60212 12.7924 8.89515C13.0854 9.18817 13.25 9.5856 13.25 10ZM11.375 10.3125H5V12.5H11.375V10.3125Z" fill="currentColor" />
        </svg>,
        <svg key="right" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M16.125 0.9375V14.6875C16.125 14.9361 16.0262 15.1746 15.8504 15.3504C15.6746 15.5262 15.4361 15.625 15.1875 15.625C14.9389 15.625 14.7004 15.5262 14.5246 15.3504C14.3488 15.1746 14.25 14.9361 14.25 14.6875V0.9375C14.25 0.68886 14.3488 0.450403 14.5246 0.274587C14.7004 0.0987721 14.9389 0 15.1875 0C15.4361 0 15.6746 0.0987721 15.8504 0.274587C16.0262 0.450403 16.125 0.68886 16.125 0.9375ZM13 2.8125V5.625C13 6.0394 12.8354 6.43683 12.5424 6.72985C12.2493 7.02288 11.8519 7.1875 11.4375 7.1875H1.5625C1.1481 7.1875 0.750671 7.02288 0.457646 6.72985C0.16462 6.43683 0 6.0394 0 5.625V2.8125C0 2.3981 0.16462 2.00067 0.457646 1.70765C0.750671 1.41462 1.1481 1.25 1.5625 1.25H11.4375C11.8519 1.25 12.2493 1.41462 12.5424 1.70765C12.8354 2.00067 13 2.3981 13 2.8125ZM11.125 3.125H1.875V5.3125H11.125V3.125ZM13 10V12.8125C13 13.2269 12.8354 13.6243 12.5424 13.9174C12.2493 14.2104 11.8519 14.375 11.4375 14.375H4.4375C4.0231 14.375 3.62567 14.2104 3.33265 13.9174C3.03962 13.6243 2.875 13.2269 2.875 12.8125V10C2.875 9.5856 3.03962 9.18817 3.33265 8.89515C3.62567 8.60212 4.0231 8.4375 4.4375 8.4375H11.4375C11.8519 8.4375 12.2493 8.60212 12.5424 8.89515C12.8354 9.18817 13 9.5856 13 10ZM11.125 10.3125H4.75V12.5H11.125V10.3125Z" fill="currentColor" />
        </svg>,
        <svg key="top" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M15.625 0.9375C15.625 1.18614 15.5262 1.4246 15.3504 1.60041C15.1746 1.77623 14.9361 1.875 14.6875 1.875H0.9375C0.68886 1.875 0.450403 1.77623 0.274587 1.60041C0.0987721 1.4246 0 1.18614 0 0.9375C0 0.68886 0.0987721 0.450403 0.274587 0.274587C0.450403 0.0987721 0.68886 0 0.9375 0H14.6875C14.9361 0 15.1746 0.0987721 15.3504 0.274587C15.5262 0.450403 15.625 0.68886 15.625 0.9375ZM14.375 4.6875V11.5625C14.375 11.9769 14.2104 12.3743 13.9174 12.6674C13.6243 12.9604 13.2269 13.125 12.8125 13.125H10C9.5856 13.125 9.18817 12.9604 8.89515 12.6674C8.60212 12.3743 8.4375 11.9769 8.4375 11.5625V4.6875C8.4375 4.2731 8.60212 3.87567 8.89515 3.58265C9.18817 3.28962 9.5856 3.125 10 3.125H12.8125C13.2269 3.125 13.6243 3.28962 13.9174 3.58265C14.2104 3.87567 14.375 4.2731 14.375 4.6875ZM12.5 5H10.3125V11.25H12.5V5ZM7.1875 4.6875V14.6875C7.1875 15.1019 7.02288 15.4993 6.72985 15.7924C6.43683 16.0854 6.0394 16.25 5.625 16.25H2.8125C2.3981 16.25 2.00067 16.0854 1.70765 15.7924C1.41462 15.4993 1.25 15.1019 1.25 14.6875V4.6875C1.25 4.2731 1.41462 3.87567 1.70765 3.58265C2.00067 3.28962 2.3981 3.125 2.8125 3.125H5.625C6.0394 3.125 6.43683 3.28962 6.72985 3.58265C7.02288 3.87567 7.1875 4.2731 7.1875 4.6875ZM5.3125 5H3.125V14.375H5.3125V5Z" fill="currentColor" />
        </svg>,
        <svg key="bottom" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M1.33866e-06 0.937499C1.3604e-06 0.688859 0.0987734 0.450402 0.274589 0.274586C0.450405 0.0987707 0.688861 -1.30576e-06 0.937501 -1.28402e-06L14.6875 -8.19589e-08C14.9361 -6.0222e-08 15.1746 0.098772 15.3504 0.274588C15.5262 0.450403 15.625 0.68886 15.625 0.9375C15.625 1.18614 15.5262 1.4246 15.3504 1.60041C15.1746 1.77623 14.9361 1.875 14.6875 1.875L0.937501 1.875C0.688861 1.875 0.450404 1.77623 0.274589 1.60041C0.0987733 1.4246 1.31692e-06 1.18614 1.33866e-06 0.937499ZM7.1875 4.6875L7.1875 11.5625C7.1875 11.9769 7.02288 12.3743 6.72985 12.6674C6.43683 12.9604 6.0394 13.125 5.625 13.125L2.8125 13.125C2.3981 13.125 2.00067 12.9604 1.70765 12.6674C1.41462 12.3743 1.25 11.9769 1.25 11.5625L1.25 4.6875C1.25 4.2731 1.41462 3.87567 1.70765 3.58264C2.00067 3.28962 2.3981 3.125 2.8125 3.125L5.625 3.125C6.0394 3.125 6.43683 3.28962 6.72986 3.58264C7.02288 3.87567 7.1875 4.2731 7.1875 4.6875ZM5.3125 5L3.125 5L3.125 11.25L5.3125 11.25L5.3125 5ZM14.375 4.6875L14.375 14.6875C14.375 15.1019 14.2104 15.4993 13.9174 15.7924C13.6243 16.0854 13.2269 16.25 12.8125 16.25L10 16.25C9.5856 16.25 9.18817 16.0854 8.89515 15.7924C8.60212 15.4993 8.4375 15.1019 8.4375 14.6875L8.4375 4.6875C8.4375 4.2731 8.60212 3.87567 8.89515 3.58264C9.18817 3.28962 9.5856 3.125 10 3.125L12.8125 3.125C13.2269 3.125 13.6243 3.28962 13.9174 3.58265C14.2104 3.87567 14.375 4.2731 14.375 4.6875ZM12.5 5L10.3125 5L10.3125 14.375L12.5 14.375L12.5 5Z" fill="currentColor" />
        </svg>,
    ];

    return (
        <div className="tw-root">
            {/* NAVBAR */}
            <header className="tw-navbar">
                <div className="tw-logo" onClick={() => navigate('/')}>
                    <FidatoIcon size={32} />
                    <svg width="86" height="22" viewBox="0 0 115 29" fill="none">
                        <path d="M103.765 28.35C101.753 28.35 99.97 27.9 98.416 27.013C96.862 26.096 95.627 24.873 94.71 23.345C93.818 21.791 93.372 20.059 93.372 18.149C93.372 16.238 93.818 14.519 94.71 12.991C95.627 11.437 96.862 10.214 98.416 9.323C99.97 8.406 101.753 7.947 103.765 7.947C105.752 7.947 107.522 8.406 109.076 9.323C110.63 10.214 111.852 11.424 112.744 12.953C113.661 14.481 114.119 16.213 114.119 18.149C114.119 20.059 113.661 21.791 112.744 23.345C111.852 24.873 110.63 26.096 109.076 27.013C107.522 27.9 105.752 28.35 103.765 28.35ZM103.765 24.606C104.962 24.606 106.006 24.326 106.898 23.765C107.79 23.18 108.477 22.403 108.961 21.435C109.445 20.467 109.687 19.371 109.687 18.149C109.687 16.952 109.445 15.869 108.961 14.901C108.477 13.908 107.79 13.131 106.898 12.57C106.006 11.985 104.962 11.692 103.765 11.692C102.542 11.692 101.485 11.985 100.594 12.57C99.728 13.131 99.04 13.895 98.531 14.863C98.047 15.831 97.805 16.926 97.805 18.149C97.805 19.346 98.047 20.441 98.531 21.435C99.04 22.403 99.728 23.18 100.594 23.765C101.485 24.326 102.542 24.606 103.765 24.606Z" fill="white" />
                        <path d="M0 27.892V8.52C0 7.119 0.331 5.871 0.993 4.776C1.656 3.655 2.534 2.776 3.63 2.14C4.751 1.477 6.011 1.146 7.412 1.146H16.964V5.158H7.909C6.941 5.158 6.139 5.489 5.502 6.151C4.891 6.788 4.585 7.578 4.585 8.52V13.411H15.627V17.423H4.585V27.892H0Z" fill="white" />
                        <path d="M20.938 27.892V8.406H25.332V27.892H20.938Z" fill="white" />
                        <path d="M39.657 28.35C38.103 28.35 36.689 28.108 35.416 27.624C34.168 27.115 33.098 26.389 32.206 25.447C31.34 24.504 30.665 23.396 30.181 22.122C29.723 20.823 29.494 19.397 29.494 17.843C29.494 15.856 29.888 14.124 30.678 12.647C31.493 11.169 32.614 10.023 34.04 9.208C35.467 8.368 37.097 7.947 38.931 7.947C39.848 7.947 40.714 8.087 41.529 8.368C42.344 8.648 43.083 9.043 43.745 9.552C44.407 10.061 44.942 10.66 45.35 11.348H45.388V0H49.782V17.92C49.782 20.059 49.349 21.919 48.483 23.498C47.642 25.052 46.458 26.249 44.93 27.089C43.427 27.93 41.669 28.35 39.657 28.35ZM39.657 24.606C40.778 24.606 41.758 24.338 42.599 23.804C43.465 23.243 44.14 22.479 44.624 21.511C45.108 20.543 45.35 19.422 45.35 18.149C45.35 16.875 45.108 15.754 44.624 14.787C44.14 13.819 43.465 13.067 42.599 12.532C41.758 11.972 40.765 11.692 39.619 11.692C38.523 11.692 37.543 11.972 36.677 12.532C35.811 13.093 35.136 13.857 34.652 14.825C34.168 15.793 33.926 16.901 33.926 18.149C33.926 19.422 34.168 20.543 34.652 21.511C35.136 22.479 35.811 23.243 36.677 23.804C37.568 24.338 38.562 24.606 39.657 24.606Z" fill="white" />
                        <path d="M62.801 28.35C60.942 28.35 59.337 27.892 57.987 26.975C56.637 26.058 55.592 24.835 54.854 23.307C54.141 21.753 53.784 20.046 53.784 18.187C53.784 16.251 54.192 14.519 55.007 12.991C55.847 11.437 57.032 10.214 58.56 9.323C60.114 8.406 61.96 7.947 64.1 7.947C66.214 7.947 68.01 8.406 69.487 9.323C70.99 10.214 72.137 11.437 72.926 12.991C73.741 14.519 74.149 16.226 74.149 18.111V27.892H69.755V24.262H69.678C69.296 24.975 68.8 25.65 68.188 26.287C67.577 26.898 66.826 27.395 65.934 27.777C65.043 28.159 63.998 28.35 62.801 28.35ZM63.985 24.606C65.132 24.606 66.125 24.326 66.966 23.765C67.832 23.18 68.494 22.403 68.953 21.435C69.436 20.441 69.678 19.333 69.678 18.111C69.678 16.888 69.449 15.805 68.991 14.863C68.532 13.895 67.883 13.131 67.042 12.57C66.202 11.985 65.195 11.692 64.024 11.692C62.801 11.692 61.757 11.985 60.891 12.57C60.025 13.131 59.362 13.895 58.904 14.863C58.445 15.831 58.216 16.926 58.216 18.149C58.216 19.346 58.445 20.441 58.904 21.435C59.362 22.403 60.012 23.18 60.852 23.765C61.718 24.326 62.763 24.606 63.985 24.606Z" fill="white" />
                        <path d="M86.131 27.892C84.399 27.892 83.036 27.395 82.043 26.402C81.075 25.408 80.591 24.058 80.591 22.352V3.515H84.946V22.161C84.946 22.746 85.125 23.23 85.481 23.613C85.838 23.969 86.309 24.147 86.895 24.147H90.983V27.892H86.131ZM77.228 12.15V8.406H91.021V12.15H77.228Z" fill="white" />
                    </svg>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <button className="tw-btn-primary" style={config.buttonColor ? { background: config.buttonColor, border: 'none' } : {}} onClick={() => navigate('/signup')}>Create an Account</button>
                    <button className="tw-btn-ghost" onClick={() => navigate('/')}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" /><polyline points="15 8 19 12 15 16" /><line x1="8" y1="12" x2="19" y2="12" /></svg>
                        Exit
                    </button>
                </div>
            </header>

            <div className="tw-body" style={{ position: 'relative' }}>
                {/* CONFIG CARD */}
                <AnimatePresence>
                    {isConfigOpen && (
                        <motion.div
                            className="cc-card"
                            drag
                            dragMomentum={false}
                            dragConstraints={{ left: 0, top: 0, right: typeof window !== 'undefined' ? window.innerWidth - 380 : 1000, bottom: typeof window !== 'undefined' ? window.innerHeight - 600 : 800 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, x: typeof window !== 'undefined' ? window.innerWidth : 1000, transition: { duration: 0.3 } }}
                            style={{ position: 'absolute', top: 24, left: 36, zIndex: 100 }}
                        >
                            {/* Card Header */}
                            <div className="cc-card-header" style={{ cursor: 'grab' }} whileTap={{ cursor: 'grabbing' }}>
                                <span className="cc-card-title">Configuration Chat AI</span>
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                    <button className="cc-icon-btn">•••</button>
                                    <button className="cc-icon-btn" onPointerDown={(e) => e.stopPropagation()} onClick={() => setIsConfigOpen(false)}>✕</button>
                                </div>
                            </div>

                            <div className="cc-scroll" onPointerDown={(e) => e.stopPropagation()}>
                                {/* APPEARANCE */}
                                <div className="cc-section">
                                    <button className="cc-section-hdr" onClick={() => setAppearOpen(v => !v)}>
                                        <span>APPEARANCE</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: appearOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}><polyline points="6 9 12 15 18 9" /></svg>
                                    </button>

                                    {appearOpen && (
                                        <div className="cc-section-body">
                                            <label className="cc-label">Chat Title</label>
                                            <input className="cc-input" value={config.chatTitle} onChange={e => set('chatTitle', e.target.value)} />

                                            <label className="cc-label">Welcome Message</label>
                                            <textarea className="cc-textarea" rows={4} value={config.welcomeMsg} onChange={e => set('welcomeMsg', e.target.value)} />

                                            <label className="cc-label">Widget Position</label>
                                            <div className="cc-pos-row">
                                                {positionIcons.map((icon, i) => (
                                                    <button key={i} className={`cc-pos-btn ${config.position === i ? 'active' : ''}`} onClick={() => set('position', i)}>{icon}</button>
                                                ))}
                                            </div>

                                            <label className="cc-label">Button Color</label>
                                            <div className="cc-color-row">
                                                {COLORS.map((c, i) => (
                                                    <button
                                                        key={i}
                                                        className="cc-color-swatch"
                                                        style={{ background: c }}
                                                        onClick={() => set('buttonColor', c)}
                                                    >
                                                        {config.buttonColor === c && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
                                                    </button>
                                                ))}
                                            </div>

                                            <label className="cc-label">Avatar</label>
                                            <div className="cc-avatar-row">
                                                <div className={`cc-avatar ${!config.avatarUrl ? 'selected' : ''}`} onClick={() => set('avatarUrl', null)}>
                                                    <div style={{ background: '#4B7BFF', borderRadius: '50%', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <FidatoIcon size={26} />
                                                    </div>
                                                </div>
                                                {config.avatarUrl ? (
                                                    <>
                                                        <div className="cc-avatar selected">
                                                            <img src={config.avatarUrl} alt="Uploaded" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                                        </div>
                                                        {[0, 1, 2].map(i => <div key={i} className="cc-avatar empty" />)}
                                                    </>
                                                ) : (
                                                    [0, 1, 2, 3].map(i => <div key={i} className="cc-avatar empty" />)
                                                )}
                                            </div>

                                            <label className="cc-label">Upload Custom Avatar</label>
                                            <div className="cc-file-row">
                                                <span className="cc-file-text">{config.avatarUrl ? 'Avatar Uploaded' : 'No file Chosen'}</span>
                                                <button className="cc-browse-btn" style={config.buttonColor ? { background: config.buttonColor, border: 'none' } : {}} onClick={() => fileRef.current?.click()}>Browse</button>
                                                <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => {
                                                    if (e.target.files && e.target.files[0]) {
                                                        const url = URL.createObjectURL(e.target.files[0]);
                                                        set('avatarUrl', url);
                                                    }
                                                }} />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* BEHAVIOR */}
                                <div className="cc-section">
                                    <button className="cc-section-hdr" onClick={() => setBehaviorOpen(v => !v)}>
                                        <span>BEHAVIOR</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: behaviorOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}><polyline points="6 9 12 15 18 9" /></svg>
                                    </button>

                                    {behaviorOpen && (
                                        <div className="cc-section-body">
                                            <label className="cc-label">Auto-open on Load</label>
                                            <div className="cc-select-wrap">
                                                <select className="cc-select" value={config.autoOpen} onChange={e => set('autoOpen', e.target.value)}>
                                                    <option>No</option><option>Yes</option>
                                                </select>
                                            </div>

                                            <label className="cc-label">Show Welcome Message</label>
                                            <div className="cc-select-wrap">
                                                <select className="cc-select" value={config.showWelcome} onChange={e => set('showWelcome', e.target.value)}>
                                                    <option>Yes</option><option>No</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="cc-footer" onPointerDown={(e) => e.stopPropagation()}>
                                <button className="cc-save" style={config.buttonColor ? { background: config.buttonColor, border: 'none' } : {}} onClick={() => setSaved({ ...config })}>
                                    Save Changes &nbsp;✓
                                </button>
                                <button className="cc-discard" onClick={() => setConfig({ ...saved })}>
                                    Discard Changes &nbsp;✕
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Minimized Dock Button on the right */}
                <AnimatePresence>
                    {!isConfigOpen && (
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: '40%',
                                transform: 'translateY(-50%)',
                                zIndex: 100,
                                padding: '14px 20px',
                                background: '#000000ff',
                                border: '1px solid #e5e7eb',
                                borderRight: 'none',
                                borderRadius: '12px 0 0 12px',
                                cursor: 'pointer',
                                boxShadow: '-4px 4px 15px rgba(0,0,0,0.06)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: '600',
                                color: '#f0f2f4ff',
                            }}
                            onClick={() => setIsConfigOpen(true)}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>
                            Configuration
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* PREVIEW */}
                <main className="tw-preview">
                    <div className="tw-preview-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        Live Preview
                    </div>
                    <ChatWidget config={config} />
                </main>
            </div>
        </div>
    );
}
