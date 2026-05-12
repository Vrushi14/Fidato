import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ChatWidget from '../components/ChatWidget';
import './TestWebsite.css';

const TestWebsite = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const targetUrl = searchParams.get('url');
    const fileInputRef = React.useRef(null);
    const [selectedFile, setSelectedFile] = React.useState('No file Chosen');
    const [buttonColor, setButtonColor] = React.useState('linear-gradient(90deg, #FF8651 0%, #FF5430 100%)');
    const [isGradient, setIsGradient] = React.useState(true);
    const [appearanceOpen, setAppearanceOpen] = React.useState(true);
    const [behaviorOpen, setBehaviorOpen] = React.useState(true);
    const [widgetPosition, setWidgetPosition] = React.useState('bottom-right');

    return (
        <div className="test-website-container" style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <header className="test-header">
                {/* Mobile Header */}
                <div className="test-header-mobile">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 'bold', fontSize: '18px', fontFamily: 'Archivo, sans-serif' }}>
                        <svg width="24" height="24" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419"/>
                            <path d="M19.6662 46.4072C13.4269 46.4072 8.15479 41.2853 8.15479 35.2291V11.1781C8.15727 8.21508 9.33511 5.37413 11.4299 3.2785C13.5246 1.18287 16.3651 0.00372918 19.3282 0H39.0131C41.9765 0.00372686 44.8176 1.18255 46.9131 3.27804C49.0086 5.37353 50.1875 8.21465 50.1912 11.1781V30.8631C50.1875 33.8261 49.0084 36.6666 46.9128 38.7613C44.8172 40.8561 41.9761 42.0339 39.0131 42.0364H19.6662V46.4072Z" fill="#F26419"/>
                            <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="white"/>
                            <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="black"/>
                            <path d="M37.8253 12.8822H33.478V22.5206H37.8253V12.8822Z" fill="black"/>
                        </svg>
                        Fidato
                    </div>
                    <div className="test-header-mobile-buttons">
                        <button onClick={() => navigate('/signup')} style={{ background: isGradient ? 'linear-gradient(90deg, #FF8651 0%, #FF5430 100%)' : buttonColor, color: 'white', border: 'none', borderRadius: '20px', padding: '8px 16px', fontSize: '13px', fontWeight: 600 }}>Create Account</button>
                        <button onClick={() => navigate('/')} style={{ background: 'transparent', color: 'white', border: 'none', fontSize: '14px', cursor: 'pointer' }}>Exit</button>
                    </div>
                </div>

                {/* Desktop Header */}
                <svg className="test-header-svg" width="1440" height="106" viewBox="0 0 1440 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_133_1036)">
                        <rect width="1440" height="84" fill="url(#paint0_linear_header)" />
                        <rect x="-0.5" y="-0.5" width="1441" height="85" stroke="black" />
                    </g>

                    {/* Create Account Button (Integrated) */}
                    <g transform="translate(1060, 20)" style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>
                        <rect width="237" height="46" rx="23" fill={isGradient ? "url(#paint0_linear_signup)" : buttonColor} />
                        <text x="118.5" y="23.5" fill="white" fontSize="16" fontFamily="Archivo, sans-serif" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: 500 }}>Create an Account</text>
                    </g>

                    {/* Exit Button Path */}
                    <g style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                        <path
                            d="M1317 42C1317 29.2975 1327.3 19 1340 19H1388C1400.7 19 1411 29.2975 1411 42C1411 54.7025 1400.7 65 1388 65H1340C1327.3 65 1317 54.7025 1317 42Z"
                            fill="#2C2C2C"
                        />
                        <text x="1378" y="42.5" fill="white" fontSize="16" fontFamily="Archivo, sans-serif" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: 500 }}>Exit</text>
                        <path d="M1344.5 47.75C1344.5 47.9489 1344.42 48.1397 1344.28 48.2803C1344.14 48.421 1343.95 48.5 1343.75 48.5H1339.75C1339.55 48.5 1339.36 48.421 1339.22 48.2803C1339.08 48.1397 1339 47.9489 1339 47.75V36.75C1339 36.5511 1339.08 36.3603 1339.22 36.2197C1339.36 36.079 1339.55 36 1339.75 36H1343.75C1343.95 36 1344.14 36.079 1344.28 36.2197C1344.42 36.3603 1344.5 36.5511 1344.5 36.75C1344.5 36.9489 1344.42 37.1397 1344.28 37.2803C1344.14 37.421 1343.95 37.5 1343.75 37.5H1340.5V47H1343.75C1343.95 47 1344.14 47.079 1344.28 47.2197C1344.42 47.3603 1344.5 47.5511 1344.5 47.75ZM1351.28 41.7194L1348.78 39.2194C1348.64 39.0785 1348.45 38.9993 1348.25 38.9993C1348.05 38.9993 1347.86 39.0785 1347.72 39.2194C1347.58 39.3603 1347.5 39.5514 1347.5 39.7506C1347.5 39.9499 1347.58 40.141 1347.72 40.2819L1348.94 41.5H1343.75C1343.55 41.5 1343.36 41.579 1343.22 41.7197C1343.08 41.8603 1343 42.0511 1343 42.25C1343 42.4489 1343.08 42.6397 1343.22 42.7803C1343.36 42.921 1343.55 43 1343.75 43H1348.94L1347.72 44.2194C1347.58 44.3603 1347.5 44.5514 1347.5 44.7506C1347.5 44.9499 1347.58 45.141 1347.72 45.2819C1347.86 45.4228 1348.05 45.5019 1348.25 45.5019C1348.45 45.5019 1348.64 45.4228 1348.78 45.2819L1351.28 42.7819C1351.35 42.7122 1351.41 42.6295 1351.44 42.5383C1351.48 42.4472 1351.5 42.3495 1351.5 42.2508C1351.5 42.152 1351.48 42.0543 1351.44 41.9631C1351.41 41.8719 1351.35 41.7891 1351.28 41.7194Z" fill="white" style={{ pointerEvents: 'none' }} />
                    </g>

                    <path d="M41.9857 21.0374L33.7699 33.0277C32.6179 34.615 31.9983 36.5263 32 38.4876V56.2525C31.9942 58.2077 32.61 60.1139 33.7585 61.6961C34.9071 63.2784 36.5288 64.4548 38.3895 65.0551L46.5677 67.6512C47.8241 68.0516 49.1529 68.1726 50.461 68.0056C51.7691 67.8385 53.0248 67.3874 54.1403 66.684L74.8439 57.351L41.9857 21.0374Z" fill="#F26419" />
                    <path d="M51.6657 62.4072C45.4264 62.4072 40.1543 57.2853 40.1543 51.2291V27.1781C40.1568 24.2151 41.3346 21.3741 43.4294 19.2785C45.5241 17.1829 48.3647 16.0037 51.3277 16H71.0126C73.9761 16.0037 76.8171 17.1825 78.9126 19.278C81.0081 21.3735 82.187 24.2147 82.1907 27.1781V46.8631C82.187 49.8261 81.0079 52.6666 78.9123 54.7613C76.8167 56.8561 73.9756 58.0339 71.0126 58.0364H51.6657V62.4072Z" fill="#F26419" />
                    <path d="M51.136 21C49.509 21.0037 47.9497 21.652 46.7996 22.8029C45.6496 23.9539 45.0025 25.5137 45 27.1407V51.1917C45 54.3982 47.9107 57.2197 51.2768 57.323V52.9616H70.8209C72.4475 52.9591 74.0068 52.3118 75.1569 51.1616C76.3071 50.0115 76.9544 48.4523 76.9569 46.8257V27.1407C76.9556 25.5133 76.3089 23.9527 75.1586 22.8015C74.0083 21.6504 72.4483 21.0025 70.8209 21H51.136Z" fill="white" />
                    <path d="M57.9713 28.8823H53.624V38.5206H57.9713V28.8823Z" fill="black" />
                    <path d="M69.8258 28.8822H65.4785V38.5206H69.8258V28.8822Z" fill="black" />
                    <path d="M198.765 53.3503C196.752 53.3503 194.969 52.9045 193.416 52.013C191.862 51.096 190.626 49.8733 189.709 48.345C188.818 46.7912 188.372 45.0591 188.372 43.1487C188.372 41.2383 188.818 39.519 189.709 37.9907C190.626 36.4369 191.862 35.2142 193.416 34.3227C194.969 33.4057 196.752 32.9472 198.765 32.9472C200.751 32.9472 202.522 33.4057 204.076 34.3227C205.629 35.2142 206.852 36.4241 207.743 37.9525C208.66 39.4808 209.119 41.2129 209.119 43.1487C209.119 45.0591 208.66 46.7912 207.743 48.345C206.852 49.8733 205.629 51.096 204.076 52.013C202.522 52.9045 200.751 53.3503 198.765 53.3503ZM198.765 49.6059C199.962 49.6059 201.006 49.3257 201.898 48.7653C202.789 48.1795 203.477 47.4026 203.961 46.4346C204.445 45.4667 204.687 44.3714 204.687 43.1487C204.687 41.9516 204.445 40.869 203.961 39.9011C203.477 38.9077 202.789 38.1308 201.898 37.5704C201.006 36.9845 199.962 36.6916 198.765 36.6916C197.542 36.6916 196.485 36.9845 195.593 37.5704C194.727 38.1308 194.04 38.8949 193.53 39.8629C193.046 40.8308 192.804 41.9261 192.804 43.1487C192.804 44.3459 193.046 45.4412 193.53 46.4346C194.04 47.4026 194.727 48.1795 195.593 48.7653C196.485 49.3257 197.542 49.6059 198.765 49.6059Z" fill="white" />
                    <path d="M181.131 52.8918C179.399 52.8918 178.036 52.3951 177.043 51.4017C176.075 50.4082 175.591 49.0582 175.591 47.3516V28.5151H179.947V47.1606C179.947 47.7464 180.125 48.2304 180.481 48.6125C180.838 48.9691 181.309 49.1474 181.895 49.1474H185.983V52.8918H181.131ZM172.229 37.1501V33.4057H186.022V37.1501H172.229Z" fill="white" />
                    <path d="M157.801 53.3503C155.942 53.3503 154.337 52.8918 152.987 51.9748C151.637 51.0578 150.593 49.8351 149.854 48.3068C149.141 46.753 148.784 45.0464 148.784 43.187C148.784 41.2511 149.192 39.519 150.007 37.9907C150.847 36.4369 152.032 35.2142 153.56 34.3227C155.114 33.4057 156.961 32.9472 159.1 32.9472C161.214 32.9472 163.01 33.4057 164.488 34.3227C165.99 35.2142 167.137 36.4369 167.926 37.9907C168.741 39.519 169.149 41.2256 169.149 43.1105V52.8918H164.755V49.262H164.679C164.297 49.9752 163.8 50.6502 163.189 51.287C162.577 51.8984 161.826 52.3951 160.934 52.7771C160.043 53.1592 158.998 53.3503 157.801 53.3503ZM158.986 49.6059C160.132 49.6059 161.125 49.3257 161.966 48.7653C162.832 48.1795 163.494 47.4026 163.953 46.4346C164.437 45.4412 164.679 44.3332 164.679 43.1105C164.679 41.8879 164.449 40.8053 163.991 39.8629C163.532 38.8949 162.883 38.1308 162.042 37.5704C161.202 36.9845 160.196 36.6916 159.024 36.6916C157.801 36.6916 156.757 36.9845 155.891 37.5704C155.025 38.1308 154.363 38.8949 153.904 39.8629C153.446 40.8308 153.216 41.9261 153.216 43.1487C153.216 44.3459 153.446 45.4412 153.904 46.4346C154.363 47.4026 155.012 48.1795 155.853 48.7653C156.719 49.3257 157.763 49.6059 158.986 49.6059Z" fill="white" />
                    <path d="M134.656 53.3503C133.103 53.3503 131.689 53.1083 130.415 52.6243C129.167 52.1149 128.097 51.3889 127.206 50.4465C126.34 49.504 125.665 48.396 125.181 47.1224C124.722 45.8233 124.493 44.3969 124.493 42.8431C124.493 40.8563 124.888 39.1242 125.678 37.6468C126.493 36.1694 127.613 35.0232 129.04 34.2081C130.466 33.3675 132.097 32.9472 133.931 32.9472C134.848 32.9472 135.714 33.0873 136.529 33.3675C137.344 33.6477 138.082 34.0425 138.745 34.552C139.407 35.0614 139.942 35.66 140.349 36.3478H140.388V25H144.782V42.9195C144.782 45.0592 144.349 46.9186 143.483 48.4979C142.642 50.0517 141.457 51.2488 139.929 52.0894C138.426 52.93 136.669 53.3503 134.656 53.3503ZM134.656 49.6059C135.777 49.6059 136.758 49.3384 137.598 48.8035C138.465 48.2432 139.14 47.479 139.624 46.5111C140.107 45.5431 140.349 44.4224 140.349 43.1488C140.349 41.8752 140.107 40.7544 139.624 39.7865C139.14 38.8185 138.465 38.0671 137.598 37.5322C136.758 36.9718 135.765 36.6916 134.618 36.6916C133.523 36.6916 132.542 36.9718 131.676 37.5322C130.81 38.0926 130.135 38.8567 129.651 39.8247C129.167 40.7926 128.925 41.9006 128.925 43.1488C128.925 44.4224 129.167 45.5431 129.651 46.5111C130.135 47.479 130.81 48.2432 131.676 48.8035C132.568 49.3384 133.561 49.6059 134.656 49.6059Z" fill="white" />
                    <path d="M115.938 52.8918V33.4057H120.332V52.8918H115.938ZM118.115 30.693C117.351 30.693 116.689 30.4128 116.129 29.8524C115.568 29.292 115.288 28.6298 115.288 27.8656C115.288 27.1014 115.568 26.4392 116.129 25.8788C116.689 25.3184 117.351 25.0382 118.115 25.0382C118.905 25.0382 119.567 25.3184 120.102 25.8788C120.663 26.4392 120.943 27.1014 120.943 27.8656C120.943 28.6298 120.663 29.292 120.102 29.8524C119.567 30.4128 118.905 30.693 118.115 30.693Z" fill="white" />
                    <path d="M95 52.8918V33.5204C95 32.1194 95.3311 30.8713 95.9934 29.776C96.6557 28.6552 97.5345 27.7764 98.6298 27.1396C99.7505 26.4774 101.011 26.1462 102.412 26.1462H111.964V30.1581H102.909C101.941 30.1581 101.139 30.4892 100.502 31.1515C99.8906 31.7883 99.585 32.5779 99.585 33.5204V38.411H110.627V42.4228H99.585V52.8918H95Z" fill="white" />
                    <defs>
                        <filter id="filter0_d_133_1036" x="-12" y="-4" width="1466" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="9" />
                            <feGaussianBlur stdDeviation="6" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.31 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_133_1036" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_133_1036" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_header" x1="720" y1="0" x2="720" y2="84" gradientUnits="userSpaceOnUse">
                            <stop stopColor="black" />
                            <stop offset="1" stopColor="#292929" />
                        </linearGradient>
                        <linearGradient id="paint0_linear_signup" x1="0" y1="23" x2="237" y2="23" gradientUnits="userSpaceOnUse">
                            <stop stopColor={isGradient ? "#FF8651" : buttonColor} />
                            <stop offset="1" stopColor={isGradient ? "#FF5430" : buttonColor} />
                        </linearGradient>
                    </defs>
                </svg>
            </header>

            <main className="test-content">
                {/* Configuration Card with SVG Background */}
                <div className="config-card-container" style={{
                    position: 'relative',
                    width: '344px',
                    fontFamily: 'Archivo, sans-serif',
                    backgroundColor: 'white',
                    borderRadius: '32px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 6px rgba(16, 24, 40, 0.03), 0 12px 16px rgba(16, 24, 40, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                    {/* Content Layer */}
                    <div style={{ position: 'relative', zIndex: 1, padding: '32px 36px 40px 36px', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        {/* Header */}
                        <div style={{ paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9' }}>
                            <h2 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#0F172A' }}>Configuration Chat AI</h2>
                            <div style={{ display: 'flex', gap: '12px', color: '#94A3B8' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="hide-scrollbar" style={{ flex: 1, overflowY: 'visible', overflowX: 'hidden', margin: '0 -23px', padding: '0 23px' }}>
                            {/* Appearance Section */}
                        <div 
                            onClick={() => setAppearanceOpen(!appearanceOpen)}
                            style={{ backgroundColor: '#F8FAFC', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9', cursor: 'pointer', margin: '0 -23px' }}
                        >
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569', letterSpacing: '0.05em', paddingLeft: '23px' }}>APPEARANCE</span>
                            <svg 
                                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                style={{ transform: appearanceOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.3s ease', marginRight: '23px' }}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>

                        {appearanceOpen && (
                            <div style={{ paddingTop: '20px' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Chat Title</label>
                                    <input type="text" defaultValue="Fidato AI" style={{ width: '100%', padding: '12px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none' }} />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Welcome Message</label>
                                    <textarea defaultValue="Hi! I'm Fidato AI.&#10;What can I help you with today?" style={{ width: '100%', height: '80px', padding: '12px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', resize: 'none' }} />
                                </div>

                                <div style={{ marginBottom: '20px', position: 'relative' }}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Widget Position</label>
                                    <div style={{ display: 'flex', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                                        {/* Position 1 (Bottom Left) */}
                                        <div 
                                            onClick={() => setWidgetPosition('bottom-left')}
                                            style={{ flex: 1, padding: '10px', textAlign: 'center', borderRight: '1px solid #E2E8F0', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: widgetPosition === 'bottom-left' ? '#F1F5F9' : 'transparent' }}
                                        >
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.625 0.9375C15.625 1.18614 15.5262 1.4246 15.3504 1.60041C15.1746 1.77623 14.9361 1.875 14.6875 1.875H0.9375C0.68886 1.875 0.450403 1.77623 0.274587 1.60041C0.0987721 1.4246 0 1.18614 0 0.9375C0 0.68886 0.0987721 0.450403 0.274587 0.274587C0.450403 0.0987721 0.68886 0 0.9375 0H14.6875C14.9361 0 15.1746 0.0987721 15.3504 0.274587C15.5262 0.450403 15.625 0.68886 15.625 0.9375ZM14.375 4.6875V11.5625C14.375 11.9769 14.2104 12.3743 13.9174 12.6674C13.6243 12.9604 13.2269 13.125 12.8125 13.125H10C9.5856 13.125 9.18817 12.9604 8.89515 12.6674C8.60212 12.3743 8.4375 11.9769 8.4375 11.5625V4.6875C8.4375 4.2731 8.60212 3.87567 8.89515 3.58265C9.18817 3.28962 9.5856 3.125 10 3.125H12.8125C13.2269 3.125 13.6243 3.28962 13.9174 3.58265C14.2104 3.87567 14.375 4.2731 14.375 4.6875ZM12.5 5H10.3125V11.25H12.5V5ZM7.1875 4.6875V14.6875C7.1875 15.1019 7.02288 15.4993 6.72985 15.7924C6.43683 16.0854 6.0394 16.25 5.625 16.25H2.8125C2.3981 16.25 2.00067 16.0854 1.70765 15.7924C1.41462 15.4993 1.25 15.1019 1.25 14.6875V4.6875C1.25 4.2731 1.41462 3.87567 1.70765 3.58265C2.00067 3.28962 2.3981 3.125 2.8125 3.125H5.625C6.0394 3.125 6.43683 3.28962 6.72985 3.58265C7.02288 3.87567 7.1875 4.2731 7.1875 4.6875ZM5.3125 5H3.125V14.375H5.3125V5Z" fill="#475569"/>
                                            </svg>
                                        </div>
                                        {/* Position 2 (Bottom Center) */}
                                        <div 
                                            onClick={() => setWidgetPosition('bottom-center')}
                                            style={{ flex: 1, padding: '10px', textAlign: 'center', borderRight: '1px solid #E2E8F0', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: widgetPosition === 'bottom-center' ? '#F1F5F9' : 'transparent' }}
                                        >
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.33866e-06 0.937499C1.3604e-06 0.688859 0.0987734 0.450402 0.274589 0.274586C0.450405 0.0987707 0.688861 -1.30576e-06 0.937501 -1.28402e-06L14.6875 -8.19589e-08C14.9361 -6.0222e-08 15.1746 0.098772 15.3504 0.274588C15.5262 0.450403 15.625 0.68886 15.625 0.9375C15.625 1.18614 15.5262 1.4246 15.3504 1.60041C15.1746 1.77623 14.9361 1.875 14.6875 1.875L0.937501 1.875C0.688861 1.875 0.450404 1.77623 0.274589 1.60041C0.0987733 1.4246 1.31692e-06 1.18614 1.33866e-06 0.937499ZM7.1875 4.6875L7.1875 11.5625C7.1875 11.9769 7.02288 12.3743 6.72985 12.6674C6.43683 12.9604 6.0394 13.125 5.625 13.125L2.8125 13.125C2.3981 13.125 2.00067 12.9604 1.70765 12.6674C1.41462 12.3743 1.25 11.9769 1.25 11.5625L1.25 4.6875C1.25 4.2731 1.41462 3.87567 1.70765 3.58264C2.00067 3.28962 2.3981 3.125 2.8125 3.125L5.625 3.125C6.0394 3.125 6.43683 3.28962 6.72986 3.58264C7.02288 3.87567 7.1875 4.2731 7.1875 4.6875ZM5.3125 5L3.125 5L3.125 11.25L5.3125 11.25L5.3125 5ZM14.375 4.6875L14.375 14.6875C14.375 15.1019 14.2104 15.4993 13.9174 15.7924C13.6243 16.0854 13.2269 16.25 12.8125 16.25L10 16.25C9.5856 16.25 9.18817 16.0854 8.89515 15.7924C8.60212 15.4993 8.4375 15.1019 8.4375 14.6875L8.4375 4.6875C8.4375 4.2731 8.60212 3.87567 8.89515 3.58264C9.18817 3.28962 9.5856 3.125 10 3.125L12.8125 3.125C13.2269 3.125 13.6243 3.28962 13.9174 3.58265C14.2104 3.87567 14.375 4.2731 14.375 4.6875ZM12.5 5L10.3125 5L10.3125 14.375L12.5 14.375L12.5 5Z" fill="#475569"/>
                                            </svg>
                                        </div>
                                        {/* Position 3 (Bottom Right) */}
                                        <div 
                                            onClick={() => setWidgetPosition('bottom-right')}
                                            style={{ flex: 1, padding: '10px', textAlign: 'center', borderRight: '1px solid #E2E8F0', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: widgetPosition === 'bottom-right' ? '#F1F5F9' : 'transparent' }}
                                        >
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.875 0.9375V14.6875C1.875 14.9361 1.77623 15.1746 1.60041 15.3504C1.4246 15.5262 1.18614 15.625 0.9375 15.625C0.68886 15.625 0.450403 15.5262 0.274587 15.3504C0.0987721 15.1746 0 14.9361 0 14.6875V0.9375C0 0.68886 0.0987721 0.450403 0.274587 0.274587C0.450403 0.0987721 0.68886 0 0.9375 0C1.18614 0 1.4246 0.0987721 1.60041 0.274587C1.77623 0.450403 1.875 0.68886 1.875 0.9375ZM3.125 5.625V2.8125C3.125 2.3981 3.28962 2.00067 3.58265 1.70765C3.87567 1.41462 4.2731 1.25 4.6875 1.25H14.5625C14.9769 1.25 15.3743 1.41462 15.6674 1.70765C15.9604 2.00067 16.125 2.3981 16.125 2.8125V5.625C16.125 6.0394 15.9604 6.43683 15.6674 6.72985C15.3743 7.02288 14.9769 7.1875 14.5625 7.1875H4.6875C4.2731 7.1875 3.87567 7.02288 3.58265 6.72985C3.28962 6.43683 3.125 6.0394 3.125 5.625ZM5 5.3125H14.25V3.125H5V5.3125ZM13.25 10V12.8125C13.25 13.2269 13.0854 13.6243 12.7924 13.9174C12.4993 14.2104 12.1019 14.375 11.6875 14.375H4.6875C4.2731 14.375 3.87567 14.2104 3.58265 13.9174C3.28962 13.6243 3.125 13.2269 3.125 12.8125V10C3.125 9.5856 3.28962 9.18817 3.58265 8.89515C3.87567 8.60212 4.2731 8.4375 4.6875 8.4375H11.6875C12.1019 8.4375 12.4993 8.60212 12.7924 8.89515C13.0854 9.18817 13.25 9.5856 13.25 10ZM11.375 10.3125H5V12.5H11.375V10.3125Z" fill="#475569"/>
                                            </svg>
                                        </div>
                                        {/* Position 4 (Middle Right) */}
                                        <div 
                                            onClick={() => setWidgetPosition('middle-right')}
                                            style={{ flex: 1, padding: '10px', textAlign: 'center', backgroundColor: widgetPosition === 'middle-right' ? '#F1F5F9' : 'transparent', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        >
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.125 0.9375V14.6875C16.125 14.9361 16.0262 15.1746 15.8504 15.3504C15.6746 15.5262 15.4361 15.625 15.1875 15.625C14.9389 15.625 14.7004 15.5262 14.5246 15.3504C14.3488 15.1746 14.25 14.9361 14.25 14.6875V0.9375C14.25 0.68886 14.3488 0.450403 14.5246 0.274587C14.7004 0.0987721 14.9389 0 15.1875 0C15.4361 0 15.6746 0.0987721 15.8504 0.274587C16.0262 0.450403 16.125 0.68886 16.125 0.9375ZM13 2.8125V5.625C13 6.0394 12.8354 6.43683 12.5424 6.72985C12.2493 7.02288 11.8519 7.1875 11.4375 7.1875H1.5625C1.1481 7.1875 0.750671 7.02288 0.457646 6.72985C0.16462 6.43683 0 6.0394 0 5.625V2.8125C0 2.3981 0.16462 2.00067 0.457646 1.70765C0.750671 1.41462 1.1481 1.25 1.5625 1.25H11.4375C11.8519 1.25 12.2493 1.41462 12.5424 1.70765C12.8354 2.00067 13 2.3981 13 2.8125ZM11.125 3.125H1.875V5.3125H11.125V3.125ZM13 10V12.8125C13 13.2269 12.8354 13.6243 12.5424 13.9174C12.2493 14.2104 11.8519 14.375 11.4375 14.375H4.4375C4.0231 14.375 3.62567 14.2104 3.33265 13.9174C3.03962 13.6243 2.875 13.2269 2.875 12.8125V10C2.875 9.5856 3.03962 9.18817 3.33265 8.89515C3.62567 8.60212 4.0231 8.4375 4.4375 8.4375H11.4375C11.8519 8.4375 12.2493 8.60212 12.5424 8.89515C12.8354 9.18817 13 9.5856 13 10ZM11.125 10.3125H4.75V12.5H11.125V10.3125Z" fill="#475569"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '20px', position: 'relative' }}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Button Color</label>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {/* Multi-color (Gradient) */}
                                        <div 
                                            onClick={() => {
                                                setButtonColor('linear-gradient(90deg, #FF8651 0%, #FF5430 100%)');
                                                setIsGradient(true);
                                            }}
                                            style={{ 
                                                width: '28px', height: '28px', borderRadius: '50%', 
                                                background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)', 
                                                cursor: 'pointer',
                                                border: isGradient ? '2px solid #0F172A' : 'none',
                                                padding: '2px'
                                            }}
                                        ></div>

                                        {/* Selection Circles */}
                                        {['#0F172A', '#22C55E', '#F59E0B', '#EF4444', '#3B82F6', '#A855F7'].map(color => (
                                            <div 
                                                key={color} 
                                                onClick={() => {
                                                    setButtonColor(color);
                                                    setIsGradient(false);
                                                }}
                                                style={{ 
                                                    width: '28px', height: '28px', borderRadius: '50%', 
                                                    backgroundColor: color, 
                                                    cursor: 'pointer',
                                                    border: !isGradient && buttonColor === color ? '2px solid #0F172A' : 'none',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                }}
                                            >
                                                {!isGradient && buttonColor === color && (
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <ChatWidget buttonColor={buttonColor} isGradient={isGradient} className="chat-widget-placement" widgetPosition={widgetPosition} />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Avatar</label>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: isGradient ? '#3B82F6' : buttonColor, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.77489 2.32141L0.846342 7.84706C0.295475 8.57854 -0.00080443 9.45938 1.96134e-05 10.3632V18.5501C-0.00276819 19.4511 0.2917 20.3295 0.840889 21.0587C1.39008 21.7879 2.16556 22.33 3.05531 22.6067L6.9659 23.8031C7.56669 23.9876 8.20208 24.0434 8.82757 23.9664C9.45305 23.8894 10.0535 23.6815 10.5869 23.3574L20.4868 19.0563L4.77489 2.32141Z" fill="black"/>
                                            <path d="M9.40387 21.3865C6.42042 21.3865 3.89941 19.026 3.89941 16.2351V5.15137C3.9006 3.78587 4.46382 2.47663 5.46547 1.51088C6.46712 0.54512 7.82539 0.00171857 9.24224 0H18.655C20.0721 0.0017175 21.4306 0.54497 22.4326 1.51066C23.4346 2.47636 23.9983 3.78567 24.0001 5.15137V14.2231C23.9983 15.5886 23.4345 16.8976 22.4325 17.8629C21.4304 18.8283 20.0719 19.3711 18.655 19.3722H9.40387V21.3865Z" fill="black"/>
                                            <path d="M9.24266 2.32141C8.46466 2.32313 7.71906 2.62188 7.16914 3.15228C6.61921 3.68267 6.30978 4.40151 6.30859 5.15132V16.2351C6.30859 17.7127 7.70043 19.013 9.31001 19.0606V17.0507H18.6555C19.4333 17.0496 20.1789 16.7513 20.7289 16.2212C21.2788 15.6912 21.5883 14.9726 21.5895 14.223V5.15132C21.5889 4.40134 21.2797 3.68216 20.7296 3.15164C20.1796 2.62112 19.4337 2.32256 18.6555 2.32141H9.24266Z" fill="white"/>
                                            <path d="M12.4186 5.93665H10.3398V10.3784H12.4186V5.93665Z" fill="black"/>
                                            <path d="M18.0876 5.93665H16.0088V10.3784H18.0876V5.93665Z" fill="black"/>
                                        </svg>
                                    </div>
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#E2E8F0', cursor: 'pointer' }}></div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Upload Custom Avatar</label>
                                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '4px 4px 4px 16px', backgroundColor: 'white' }}>
                                        <span style={{ fontSize: '13px', color: '#64748B', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{selectedFile}</span>
                                        <input 
                                            type="file" 
                                            ref={fileInputRef} 
                                            style={{ display: 'none' }} 
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files[0]) {
                                                    setSelectedFile(e.target.files[0].name);
                                                }
                                            }}
                                        />
                                        <button 
                                            onClick={() => fileInputRef.current?.click()}
                                            style={{ backgroundColor: isGradient ? 'black' : buttonColor, color: 'white', border: 'none', borderRadius: '16px', padding: '6px 16px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease' }}
                                        >
                                            Browse
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Behavior Section */}
                        <div 
                            onClick={() => setBehaviorOpen(!behaviorOpen)}
                            style={{ backgroundColor: '#F8FAFC', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9', cursor: 'pointer', margin: '0 -23px' }}
                        >
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569', letterSpacing: '0.05em', paddingLeft: '23px' }}>BEHAVIOR</span>
                            <svg 
                                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                style={{ transform: behaviorOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.3s ease', marginRight: '23px' }}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>

                        {behaviorOpen && (
                            <div style={{ padding: '20px 0px' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Auto-open on Load</label>
                                    <div style={{ position: 'relative' }}>
                                        <select style={{ width: '100%', padding: '12px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', appearance: 'none', backgroundColor: 'white' }}>
                                            <option>No</option>
                                            <option>Yes</option>
                                        </select>
                                        <svg style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '32px' }}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Show Welcome Message</label>
                                    <div style={{ position: 'relative' }}>
                                        <select style={{ width: '100%', padding: '12px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', appearance: 'none', backgroundColor: 'white' }}>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                        <svg style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>

                        {/* Actions */}
                        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                            <button style={{
                                width: '100%',
                                padding: '14px',
                                borderRadius: '20px',
                                background: buttonColor,
                                color: 'white',
                                border: 'none',
                                fontSize: '14px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                cursor: 'pointer',
                                marginBottom: '12px',
                                boxShadow: isGradient ? '0 4px 12px rgba(255, 84, 48, 0.2)' : `0 4px 12px ${buttonColor}33`,
                                transition: 'all 0.3s ease'
                            }}>
                                Save Changes
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </button>

                            <button style={{
                                width: '100%',
                                padding: '14px',
                                borderRadius: '20px',
                                backgroundColor: 'white',
                                color: '#475569',
                                border: '1px solid #E2E8F0',
                                fontSize: '14px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                cursor: 'pointer'
                            }}>
                                Discard Changes
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right side - Dynamic Preview Area */}
                <div className="test-preview-area">


                    {targetUrl && (
                        <div style={{ 
                            flex: 1, 
                            backgroundColor: 'white', 
                            borderRadius: '32px', 
                            border: '1px solid #E2E8F0',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                            position: 'relative'
                        }}>
                            {/* Browser Top Bar Decoration */}
                            <div style={{ height: '40px', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '8px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F57' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28C840' }}></div>
                                <div style={{ 
                                    flex: 1, 
                                    backgroundColor: 'white', 
                                    borderRadius: '8px', 
                                    height: '24px', 
                                    margin: '0 20px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    padding: '0 12px',
                                    fontSize: '12px',
                                    color: '#64748B',
                                    border: '1px solid #E2E8F0'
                                }}>
                                    {targetUrl}
                                </div>
                            </div>
                            <iframe 
                                src={targetUrl} 
                                title="Website Preview" 
                                style={{ width: '100%', height: 'calc(100% - 40px)', border: 'none' }}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default TestWebsite;
