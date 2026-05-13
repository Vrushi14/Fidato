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
    const [chatTitle, setChatTitle] = React.useState('');
    const [welcomeMessage, setWelcomeMessage] = React.useState('');
    const [autoOpen, setAutoOpen] = React.useState('No');
    const [showWelcome, setShowWelcome] = React.useState('Yes');
    const [activeAvatar, setActiveAvatar] = React.useState(0);
    const [customAvatars, setCustomAvatars] = React.useState({});
    const [isConfigOpen, setIsConfigOpen] = React.useState(true);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCustomAvatars(prev => ({
                    ...prev,
                    [activeAvatar > 0 ? activeAvatar : 1]: reader.result
                }));
                if (activeAvatar === 0) setActiveAvatar(1);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file.name);
        }
    };

    return (
        <div className="test-website-container" style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <header className="test-header">
                {/* Mobile Header */}
                <div className="test-header-mobile">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 600, fontSize: '18px', fontFamily: 'Archivo, sans-serif' }}>
                        <svg width="34" height="35" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
                            <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419" />
                            <path d="M19.6657 46.4072C13.4264 46.4072 8.1543 41.2853 8.1543 35.2291V11.1781C8.15678 8.21508 9.33463 5.37413 11.4294 3.2785C13.5241 1.18287 16.3647 0.00372918 19.3277 0H39.0126C41.9761 0.00372686 44.8171 1.18255 46.9126 3.27804C49.0081 5.37353 50.187 8.21465 50.1907 11.1781V30.8631C50.187 33.8261 49.0079 36.6666 46.9123 38.7613C44.8167 40.8561 41.9756 42.0339 39.0126 42.0364H19.6657V46.4072Z" fill="#F26419" />
                            <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="white" />
                            <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="black" />
                            <path d="M37.8258 12.8822H33.4785V22.5206H37.8258V12.8822Z" fill="black" />
                        </svg>
                        <span style={{ lineHeight: 1 }}>Fidato</span>
                    </div>
                    <div className="test-header-mobile-buttons">
                        <button onClick={() => navigate('/signup')} style={{ background: isGradient ? 'linear-gradient(90deg, #FF8651 0%, #FF5430 100%)' : buttonColor, color: 'white', border: 'none', borderRadius: '16px', padding: '6px 12px', fontSize: '12px', fontWeight: 600 }}>Create Account</button>
                        <button onClick={() => navigate('/')} style={{ background: 'transparent', color: 'white', border: 'none', fontSize: '12px', cursor: 'pointer' }}>Exit</button>
                    </div>
                </div>

                {/* Desktop Header */}
                <svg className="test-header-svg" width="1440" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_133_1036)">
                        <rect width="1440" height="64" fill="url(#paint0_linear_header)" />
                        <rect x="-0.5" y="-0.5" width="1441" height="65" stroke="black" />
                    </g>

                    {/* Create Account Button (Integrated) */}
                    <g transform="translate(1090, 14)" style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>
                        <rect width="180" height="36" rx="18" fill={isGradient ? "url(#paint0_linear_signup)" : buttonColor} />
                        <text x="90" y="18.5" fill="white" fontSize="14" fontFamily="Archivo, sans-serif" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: 500 }}>Create an Account</text>
                    </g>

                    {/* Exit Button Path */}
                    <g transform="translate(210, -3) scale(0.85)" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                        <path
                            d="M1317 42C1317 29.2975 1327.3 19 1340 19H1388C1400.7 19 1411 29.2975 1411 42C1411 54.7025 1400.7 65 1388 65H1340C1327.3 65 1317 54.7025 1317 42Z"
                            fill="#2C2C2C"
                        />
                        <text x="1378" y="42.5" fill="white" fontSize="16" fontFamily="Archivo, sans-serif" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: 500 }}>Exit</text>
                        <path d="M1344.5 47.75C1344.5 47.9489 1344.42 48.1397 1344.28 48.2803C1344.14 48.421 1343.95 48.5 1343.75 48.5H1339.75C1339.55 48.5 1339.36 48.421 1339.22 48.2803C1339.08 48.1397 1339 47.9489 1339 47.75V36.75C1339 36.5511 1339.08 36.3603 1339.22 36.2197C1339.36 36.079 1339.55 36 1339.75 36H1343.75C1343.95 36 1344.14 36.079 1344.28 36.2197C1344.42 36.3603 1344.5 36.5511 1344.5 36.75C1344.5 36.9489 1344.42 37.1397 1344.28 37.2803C1344.14 37.421 1343.95 37.5 1343.75 37.5H1340.5V47H1343.75C1343.95 47 1344.14 47.079 1344.28 47.2197C1344.42 47.3603 1344.5 47.5511 1344.5 47.75ZM1351.28 41.7194L1348.78 39.2194C1348.64 39.0785 1348.45 38.9993 1348.25 38.9993C1348.05 38.9993 1347.86 39.0785 1347.72 39.2194C1347.58 39.3603 1347.5 39.5514 1347.5 39.7506C1347.5 39.9499 1347.58 40.141 1347.72 40.2819L1348.94 41.5H1343.75C1343.55 41.5 1343.36 41.579 1343.22 41.7197C1343.08 41.8603 1343 42.0511 1343 42.25C1343 42.4489 1343.08 42.6397 1343.22 42.7803C1343.36 42.921 1343.55 43 1343.75 43H1348.94L1347.72 44.2194C1347.58 44.3603 1347.5 44.5514 1347.5 44.7506C1347.5 44.9499 1347.58 45.141 1347.72 45.2819C1347.86 45.4228 1348.05 45.5019 1348.25 45.5019C1348.45 45.5019 1348.64 45.4228 1348.78 45.2819L1351.28 42.7819C1351.35 42.7122 1351.41 42.6295 1351.44 42.5383C1351.48 42.4472 1351.5 42.3495 1351.5 42.2508C1351.5 42.2508 1351.48 42.152 1351.44 42.0543C1351.41 41.9631 1351.35 41.8719 1351.28 41.7194Z" fill="white" style={{ pointerEvents: 'none' }} />
                    </g>

                    <g transform="translate(20, 14)">
                        {/* Robot Icon */}
                        <svg width="34" height="35" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', flexShrink: 0 }}>
                            <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419" />
                            <path d="M19.6657 46.4072C13.4264 46.4072 8.1543 41.2853 8.1543 35.2291V11.1781C8.15678 8.21508 9.33463 5.37413 11.4294 3.2785C13.5241 1.18287 16.3647 0.00372918 19.3277 0H39.0126C41.9761 0.00372686 44.8171 1.18255 46.9126 3.27804C49.0081 5.37353 50.187 8.21465 50.1907 11.1781V30.8631C50.187 33.8261 49.0079 36.6666 46.9123 38.7613C44.8167 40.8561 41.9756 42.0339 39.0126 42.0364H19.6657V46.4072Z" fill="#F26419" />
                            <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="white" />
                            <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="black" />
                            <path d="M37.8258 12.8822H33.4785V22.5206H37.8258V12.8822Z" fill="black" />
                        </svg>

                        {/* Fidato Text */}
                        <g transform="translate(46, 3.5)">
                            <path d="M103.765 28.3503C101.753 28.3503 99.9696 27.9045 98.4159 27.013C96.8621 26.096 95.6267 24.8733 94.7097 23.345C93.8182 21.7912 93.3724 20.0591 93.3724 18.1487C93.3724 16.2383 93.8182 14.519 94.7097 12.9907C95.6267 11.4369 96.8621 10.2142 98.4159 9.32271C99.9696 8.40572 101.753 7.94723 103.765 7.94723C105.752 7.94723 107.522 8.40572 109.076 9.32271C110.63 10.2142 111.852 11.4241 112.744 12.9525C113.661 14.4808 114.119 16.2129 114.119 18.1487C114.119 20.0591 113.661 21.7912 112.744 23.345C111.852 24.8733 110.63 26.096 109.076 27.013C107.522 27.9045 105.752 28.3503 103.765 28.3503ZM103.765 24.6059C104.962 24.6059 106.006 24.3257 106.898 23.7653C107.79 23.1795 108.477 22.4026 108.961 21.4346C109.445 20.4667 109.687 19.3714 109.687 18.1487C109.687 16.9516 109.445 15.869 108.961 14.9011C108.477 13.9077 107.79 13.1308 106.898 12.5704C106.006 11.9845 104.962 11.6916 103.765 11.6916C102.542 11.6916 101.485 11.9845 100.594 12.5704C99.7277 13.1308 99.0399 13.8949 98.5305 14.8629C98.0465 15.8308 97.8045 16.9261 97.8045 18.1487C97.8045 19.3459 98.0465 20.4412 98.5305 21.4346C99.0399 22.4026 99.7277 23.1795 100.594 23.7653C101.485 24.3257 102.542 24.6059 103.765 24.6059Z" fill="white" />
                            <path d="M86.1308 27.8918C84.3987 27.8918 83.036 27.3951 82.0426 26.4017C81.0746 25.4082 80.5907 24.0582 80.5907 22.3516V3.51511H84.9464V22.1606C84.9464 22.7464 85.1247 23.2304 85.4813 23.6125C85.8379 23.9691 86.3091 24.1474 86.895 24.1474H90.9832V27.8918H86.1308ZM77.2284 12.1501V8.40572H91.0214V12.1501H77.2284Z" fill="white" />
                            <path d="M62.801 28.3503C60.9415 28.3503 59.3368 27.8918 57.9868 26.9748C56.6368 26.0578 55.5924 24.8351 54.8537 23.3068C54.1405 21.753 53.7839 20.0464 53.7839 18.187C53.7839 16.2511 54.1915 14.519 55.0066 12.9907C55.8472 11.4369 57.0316 10.2142 58.5599 9.32271C60.1137 8.40572 61.9604 7.94723 64.1001 7.94723C66.2142 7.94723 68.01 8.40572 69.4874 9.32271C70.9902 10.2142 72.1365 11.4369 72.9261 12.9907C73.7412 14.519 74.1487 16.2256 74.1487 18.1105V27.8918H69.7548V24.262H69.6784C69.2963 24.9752 68.7996 25.6502 68.1883 26.287C67.577 26.8984 66.8256 27.3951 65.934 27.7771C65.0425 28.1592 63.9982 28.3503 62.801 28.3503ZM63.9854 24.6059C65.1317 24.6059 66.1251 24.3257 66.9657 23.7653C67.8317 23.1795 68.494 22.4026 68.9525 21.4346C69.4364 20.4412 69.6784 19.3332 69.6784 18.1105C69.6784 16.8879 69.4492 15.8053 68.9907 14.8629C68.5322 13.8949 67.8826 13.1308 67.0421 12.5704C66.2015 11.9845 65.1954 11.6916 64.0236 11.6916C62.801 11.6916 61.7566 11.9845 60.8906 12.5704C60.0245 13.1308 59.3623 13.8949 58.9038 14.8629C58.4453 15.8308 58.216 16.9261 58.216 18.1487C58.216 19.3459 58.4453 20.4412 58.9038 21.4346C59.3623 22.4026 60.0118 23.1795 60.8524 23.7653C61.7184 24.3257 62.7628 24.6059 63.9854 24.6059Z" fill="white" />
                            <path d="M39.6568 28.3503C38.1031 28.3503 36.6894 28.1083 35.4158 27.6243C34.1676 27.1149 33.0978 26.3889 32.2063 25.4465C31.3402 24.504 30.6652 23.396 30.1813 22.1224C29.7228 20.8233 29.4935 19.3969 29.4935 17.8431C29.4935 15.8563 29.8883 14.1242 30.678 12.6468C31.4931 11.1694 32.6138 10.0232 34.0403 9.20811C35.4667 8.36753 37.0969 7.94725 38.9309 7.94725C39.8479 7.94725 40.7139 8.08734 41.529 8.36753C42.3441 8.64773 43.0828 9.04254 43.7451 9.55198C44.4074 10.0614 44.9423 10.66 45.3498 11.3478H45.388V0H49.7819V17.9195C49.7819 20.0592 49.3489 21.9186 48.4829 23.4979C47.6423 25.0517 46.4578 26.2488 44.9295 27.0894C43.4267 27.93 41.6691 28.3503 39.6568 28.3503ZM39.6568 24.6059C40.7776 24.6059 41.7583 24.3384 42.5988 23.8035C43.4649 23.2432 44.1399 22.479 44.6239 21.5111C45.1078 20.5431 45.3498 19.4224 45.3498 18.1488C45.3498 16.8752 45.1078 15.7544 44.6239 14.7865C44.1399 13.8185 43.4649 13.0671 42.5988 12.5322C41.7583 11.9718 40.7649 11.6916 39.6186 11.6916C38.5233 11.6916 37.5427 11.9718 36.6766 12.5322C35.8106 13.0926 35.1356 13.8567 34.6516 14.8247C34.1676 15.7926 33.9257 16.9006 33.9257 18.1488C33.9257 19.4224 34.1676 20.5431 34.6516 21.5111C35.1356 22.479 35.8106 23.2432 36.6766 23.8035C37.5681 24.3384 38.5615 24.6059 39.6568 24.6059Z" fill="white" />
                            <path d="M20.9377 27.8918V8.40574H25.3316V27.8918H20.9377ZM23.1155 5.69298C22.3513 5.69298 21.6891 5.41279 21.1287 4.8524C20.5683 4.29202 20.2881 3.62975 20.2881 2.86559C20.2881 2.10143 20.5683 1.43916 21.1287 0.87878C21.6891 0.318397 22.3513 0.0382042 23.1155 0.0382042C23.9051 0.0382042 24.5674 0.318397 25.1023 0.87878C25.6627 1.43916 25.9429 2.10143 25.9429 2.86559C25.9429 3.62975 25.6627 4.29202 25.1023 4.8524C24.5674 5.41279 23.9051 5.69298 23.1155 5.69298Z" fill="white" />
                            <path d="M0 27.8918V8.52035C0 7.11939 0.331135 5.87127 0.993406 4.77597C1.65568 3.65521 2.53446 2.77643 3.62975 2.13963C4.75052 1.47736 6.01138 1.14622 7.41234 1.14622H16.9643V5.15805H7.90904C6.94111 5.15805 6.13874 5.48919 5.50194 6.15146C4.89061 6.78826 4.58495 7.57789 4.58495 8.52035V13.411H15.627V17.4228H4.58495V27.8918H0Z" fill="white" />
                        </g>
                    </g>
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
                {/* Restore Config Button (Floating) */}
                {!isConfigOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setIsConfigOpen(true)}
                        style={{
                            position: 'fixed',
                            right: '40px',
                            top: '120px',
                            zIndex: 100,
                            backgroundColor: '#0F172A',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                            fontWeight: 600,
                            fontSize: '14px'
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        Configure Assistant
                    </motion.div>
                )}

                {/* Configuration Card with SVG Background */}
                <motion.div
                    className="config-card-container"
                    initial={false}
                    animate={{
                        x: isConfigOpen ? 0 : 400,
                        opacity: isConfigOpen ? 1 : 0,
                        pointerEvents: isConfigOpen ? 'auto' : 'none'
                    }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    style={{
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
                    }}
                >
                    {/* Content Layer */}
                    <div style={{ position: 'relative', zIndex: 1, padding: '32px 36px 40px 36px', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        {/* Header */}
                        <div style={{ paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '8px',
                                    backgroundColor: 'white', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.98568 5.03741L1.76995 17.0277C0.617924 18.615 -0.0016823 20.5263 4.10173e-05 22.4876V40.2525C-0.00578909 42.2077 0.610029 44.1139 1.75854 45.6961C2.90706 47.2784 4.52881 48.4548 6.38953 49.0551L14.5677 51.6512C15.8241 52.0516 17.1529 52.1726 18.461 52.0056C19.7691 51.8385 21.0248 51.3874 22.1403 50.684L42.8439 41.351L9.98568 5.03741Z" fill="#F26419" />
                                        <path d="M19.6662 46.4072C13.4269 46.4072 8.15479 41.2853 8.15479 35.2291V11.1781C8.15727 8.21508 9.33511 5.37413 11.4299 3.2785C13.5246 1.18287 16.3651 0.00372918 19.3282 0H39.0131C41.9765 0.00372686 44.8176 1.18255 46.9131 3.27804C49.0086 5.37353 50.1875 8.21465 50.1912 11.1781V30.8631C50.1875 33.8261 49.0084 36.6666 46.9128 38.7613C44.8172 40.8561 41.9761 42.0339 39.0131 42.0364H19.6662V46.4072Z" fill="#F26419" />
                                        <path d="M19.136 5C17.509 5.00372 15.9497 5.65199 14.7996 6.80292C13.6496 7.95385 13.0025 9.51368 13 11.1407V35.1917C13 38.3982 15.9107 41.2197 19.2768 41.323V36.9616H38.8209C40.4475 36.9591 42.0068 36.3118 43.1569 35.1616C44.3071 34.0115 44.9544 32.4523 44.9569 30.8257V11.1407C44.9556 9.5133 44.3089 7.95274 43.1586 6.80155C42.0083 5.65035 40.4483 5.00249 38.8209 5H19.136Z" fill="#E2E8F0" />
                                        <path d="M25.9713 12.8823H21.624V22.5206H25.9713V12.8823Z" fill="#1E293B" />
                                        <path d="M37.8253 12.8822H33.478V22.5206H37.8253V12.8822Z" fill="#1E293B" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#0F172A' }}>Configuration Chat AI</h3>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', color: '#94A3B8' }}>
                                <div
                                    onClick={() => alert('Opening Settings Menu...')}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '4px',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F1F5F9'; e.currentTarget.style.color = '#475569'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94A3B8'; }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                </div>
                                <div
                                    onClick={() => setIsConfigOpen(false)}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '4px',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FEE2E2'; e.currentTarget.style.color = '#EF4444'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94A3B8'; }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
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
                                        <textarea
                                            value={chatTitle}
                                            onChange={(e) => setChatTitle(e.target.value)}
                                            placeholder="Fidato AI"
                                            style={{
                                                width: '100%',
                                                height: '52px',
                                                padding: '16px 24px',
                                                borderRadius: '24px',
                                                border: '1px solid #E2E8F0',
                                                fontSize: '14px',
                                                outline: 'none',
                                                resize: 'none',
                                                fontFamily: 'Archivo, sans-serif',
                                                boxSizing: 'border-box'
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Welcome Message</label>
                                        <textarea
                                            value={welcomeMessage}
                                            onChange={(e) => setWelcomeMessage(e.target.value)}
                                            placeholder={"Hi! I'm Fidato AI.\nWhat can I help you with today?"}
                                            style={{
                                                width: '100%',
                                                height: '100px',
                                                padding: '16px 24px',
                                                borderRadius: '24px',
                                                border: '1px solid #E2E8F0',
                                                fontSize: '14px',
                                                outline: 'none',
                                                resize: 'none',
                                                fontFamily: 'Archivo, sans-serif',
                                                boxSizing: 'border-box'
                                            }}
                                        />
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
                                                    <path d="M15.625 0.9375C15.625 1.18614 15.5262 1.4246 15.3504 1.60041C15.1746 1.77623 14.9361 1.875 14.6875 1.875H0.9375C0.68886 1.875 0.450403 1.77623 0.274587 1.60041C0.0987721 1.4246 0 1.18614 0 0.9375C0 0.68886 0.0987721 0.450403 0.274587 0.274587C0.450403 0.0987721 0.68886 0 0.9375 0H14.6875C14.9361 0 15.1746 0.0987721 15.3504 0.274587C15.5262 0.450403 15.625 0.68886 15.625 0.9375ZM14.375 4.6875V11.5625C14.375 11.9769 14.2104 12.3743 13.9174 12.6674C13.6243 12.9604 13.2269 13.125 12.8125 13.125H10C9.5856 13.125 9.18817 12.9604 8.89515 12.6674C8.60212 12.3743 8.4375 11.9769 8.4375 11.5625V4.6875C8.4375 4.2731 8.60212 3.87567 8.89515 3.58265C9.18817 3.28962 9.5856 3.125 10 3.125H12.8125C13.2269 3.125 13.6243 3.28962 13.9174 3.58265C14.2104 3.87567 14.375 4.2731 14.375 4.6875ZM12.5 5H10.3125V11.25H12.5V5ZM7.1875 4.6875V14.6875C7.1875 15.1019 7.02288 15.4993 6.72985 15.7924C6.43683 16.0854 6.0394 16.25 5.625 16.25H2.8125C2.3981 16.25 2.00067 16.0854 1.70765 15.7924C1.41462 15.4993 1.25 15.1019 1.25 14.6875V4.6875C1.25 4.2731 1.41462 3.87567 1.70765 3.58265C2.00067 3.28962 2.3981 3.125 2.8125 3.125H5.625C6.0394 3.125 6.43683 3.28962 6.72985 3.58265C7.02288 3.87567 7.1875 4.2731 7.1875 4.6875ZM5.3125 5H3.125V14.375H5.3125V5Z" fill="#475569" />
                                                </svg>
                                            </div>
                                            {/* Position 2 (Bottom Center) */}
                                            <div
                                                onClick={() => setWidgetPosition('bottom-center')}
                                                style={{ flex: 1, padding: '10px', textAlign: 'center', borderRight: '1px solid #E2E8F0', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: widgetPosition === 'bottom-center' ? '#F1F5F9' : 'transparent' }}
                                            >
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.33866e-06 0.937499C1.3604e-06 0.688859 0.0987734 0.450402 0.274589 0.274586C0.450405 0.0987707 0.688861 -1.30576e-06 0.937501 -1.28402e-06L14.6875 -8.19589e-08C14.9361 -6.0222e-08 15.1746 0.098772 15.3504 0.274588C15.5262 0.450403 15.625 0.68886 15.625 0.9375C15.625 1.18614 15.5262 1.4246 15.3504 1.60041C15.1746 1.77623 14.9361 1.875 14.6875 1.875L0.937501 1.875C0.688861 1.875 0.450404 1.77623 0.274589 1.60041C0.0987733 1.4246 1.31692e-06 1.18614 1.33866e-06 0.937499ZM7.1875 4.6875L7.1875 11.5625C7.1875 11.9769 7.02288 12.3743 6.72985 12.6674C6.43683 12.9604 6.0394 13.125 5.625 13.125L2.8125 13.125C2.3981 13.125 2.00067 12.9604 1.70765 12.6674C1.41462 12.3743 1.25 11.9769 1.25 11.5625L1.25 4.6875C1.25 4.2731 1.41462 3.87567 1.70765 3.58264C2.00067 3.28962 2.3981 3.125 2.8125 3.125L5.625 3.125C6.0394 3.125 6.43683 3.28962 6.72986 3.58264C7.02288 3.87567 7.1875 4.2731 7.1875 4.6875ZM5.3125 5L3.125 5L3.125 11.25L5.3125 11.25L5.3125 5ZM14.375 4.6875L14.375 14.6875C14.375 15.1019 14.2104 15.4993 13.9174 15.7924C13.6243 16.0854 13.2269 16.25 12.8125 16.25L10 16.25C9.5856 16.25 9.18817 16.0854 8.89515 15.7924C8.60212 15.4993 8.4375 15.1019 8.4375 14.6875L8.4375 4.6875C8.4375 4.2731 8.60212 3.87567 8.89515 3.58264C9.18817 3.28962 9.5856 3.125 10 3.125L12.8125 3.125C13.2269 3.125 13.6243 3.28962 13.9174 3.58265C14.2104 3.87567 14.375 4.2731 14.375 4.6875ZM12.5 5L10.3125 5L10.3125 14.375L12.5 14.375L12.5 5Z" fill="#475569" />
                                                </svg>
                                            </div>
                                            {/* Position 3 (Bottom Right) */}
                                            <div
                                                onClick={() => setWidgetPosition('bottom-right')}
                                                style={{ flex: 1, padding: '10px', textAlign: 'center', borderRight: '1px solid #E2E8F0', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: widgetPosition === 'bottom-right' ? '#F1F5F9' : 'transparent' }}
                                            >
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.875 0.9375V14.6875C1.875 14.9361 1.77623 15.1746 1.60041 15.3504C1.4246 15.5262 1.18614 15.625 0.9375 15.625C0.68886 15.625 0.450403 15.5262 0.274587 15.3504C0.0987721 15.1746 0 14.9361 0 14.6875V0.9375C0 0.68886 0.0987721 0.450403 0.274587 0.274587C0.450403 0.0987721 0.68886 0 0.9375 0C1.18614 0 1.4246 0.0987721 1.60041 0.274587C1.77623 0.450403 1.875 0.68886 1.875 0.9375ZM3.125 5.625V2.8125C3.125 2.3981 3.28962 2.00067 3.58265 1.70765C3.87567 1.41462 4.2731 1.25 4.6875 1.25H14.5625C14.9769 1.25 15.3743 1.41462 15.6674 1.70765C15.9604 2.00067 16.125 2.3981 16.125 2.8125V5.625C16.125 6.0394 15.9604 6.43683 15.6674 6.72985C15.3743 7.02288 14.9769 7.1875 14.5625 7.1875H4.6875C4.2731 7.1875 3.87567 7.02288 3.58265 6.72985C3.28962 6.43683 3.125 6.0394 3.125 5.625ZM5 5.3125H14.25V3.125H5V5.3125ZM13.25 10V12.8125C13.25 13.2269 13.0854 13.6243 12.7924 13.9174C12.4993 14.2104 12.1019 14.375 11.6875 14.375H4.6875C4.2731 14.375 3.87567 14.2104 3.58265 13.9174C3.28962 13.6243 3.125 13.2269 3.125 12.8125V10C3.125 9.5856 3.28962 9.18817 3.58265 8.89515C3.87567 8.60212 4.2731 8.4375 4.6875 8.4375H11.6875C12.1019 8.4375 12.4993 8.60212 12.7924 8.89515C13.0854 9.18817 13.25 9.5856 13.25 10ZM11.375 10.3125H5V12.5H11.375V10.3125Z" fill="#475569" />
                                                </svg>
                                            </div>
                                            {/* Position 4 (Middle Right) */}
                                            <div
                                                onClick={() => setWidgetPosition('middle-right')}
                                                style={{ flex: 1, padding: '10px', textAlign: 'center', backgroundColor: widgetPosition === 'middle-right' ? '#F1F5F9' : 'transparent', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                            >
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.125 0.9375V14.6875C16.125 14.9361 16.0262 15.1746 15.8504 15.3504C15.6746 15.5262 15.4361 15.625 15.1875 15.625C14.9389 15.625 14.7004 15.5262 14.5246 15.3504C14.3488 15.1746 14.25 14.9361 14.25 14.6875V0.9375C14.25 0.68886 14.3488 0.450403 14.5246 0.274587C14.7004 0.0987721 14.9389 0 15.1875 0C15.4361 0 15.6746 0.0987721 15.8504 0.274587C16.0262 0.450403 16.125 0.68886 16.125 0.9375ZM13 2.8125V5.625C13 6.0394 12.8354 6.43683 12.5424 6.72985C12.2493 7.02288 11.8519 7.1875 11.4375 7.1875H1.5625C1.1481 7.1875 0.750671 7.02288 0.457646 6.72985C0.16462 6.43683 0 6.0394 0 5.625V2.8125C0 2.3981 0.16462 2.00067 0.457646 1.70765C0.750671 1.41462 1.1481 1.25 1.5625 1.25H11.4375C11.8519 1.25 12.2493 1.41462 12.5424 1.70765C12.8354 2.00067 13 2.3981 13 2.8125ZM11.125 3.125H1.875V5.3125H11.125V3.125ZM13 10V12.8125C13 13.2269 12.8354 13.6243 12.5424 13.9174C12.2493 14.2104 11.8519 14.375 11.4375 14.375H4.4375C4.0231 14.375 3.62567 14.2104 3.33265 13.9174C3.03962 13.6243 2.875 13.2269 2.875 12.8125V10C2.875 9.5856 3.03962 9.18817 3.33265 8.89515C3.62567 8.60212 4.0231 8.4375 4.4375 8.4375H11.4375C11.8519 8.4375 12.2493 8.60212 12.5424 8.89515C12.8354 9.18817 13 9.5856 13 10ZM11.125 10.3125H4.75V12.5H11.125V10.3125Z" fill="#475569" />
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
                                        <ChatWidget
                                            buttonColor={buttonColor}
                                            isGradient={isGradient}
                                            className="chat-widget-placement"
                                            widgetPosition={widgetPosition}
                                            title={chatTitle || 'Fidato AI'}
                                            welcomeMessage={welcomeMessage || "Hi! I'm Fidato AI.\nWhat can I help you with today?"}
                                            autoOpen={autoOpen === 'Yes'}
                                            showWelcome={showWelcome === 'Yes'}
                                            avatar={activeAvatar > 0 ? customAvatars[activeAvatar] : null}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Avatar</label>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            {/* Default Slot */}
                                            <div
                                                onClick={() => setActiveAvatar(0)}
                                                style={{
                                                    width: '40px', height: '40px', borderRadius: '50%',
                                                    backgroundColor: isGradient ? '#F26419' : buttonColor,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    cursor: 'pointer', transition: 'all 0.3s ease',
                                                    border: activeAvatar === 0 ? '2px solid #0F172A' : 'none',
                                                    boxSizing: 'border-box'
                                                }}
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.77489 2.32141L0.846342 7.84706C0.295475 8.57854 -0.00080443 9.45938 1.96134e-05 10.3632V18.5501C-0.00276819 19.4511 0.2917 20.3295 0.840889 21.0587C1.39008 21.7879 2.16556 22.33 3.05531 22.6067L6.9659 23.8031C7.56669 23.9876 8.20208 24.0434 8.82757 23.9664C9.45305 23.8894 10.0535 23.6815 10.5869 23.3574L20.4868 19.0563L4.77489 2.32141Z" fill="black" />
                                                    <path d="M9.40387 21.3865C6.42042 21.3865 3.89941 19.026 3.89941 16.2351V5.15137C3.9006 3.78587 4.46382 2.47663 5.46547 1.51088C6.46712 0.54512 7.82539 0.00171857 9.24224 0H18.655C20.0721 0.0017175 21.4306 0.54497 22.4326 1.51066C23.4346 2.47636 23.9983 3.78567 24.0001 5.15137V14.2231C23.9983 15.5886 23.4345 16.8976 22.4325 17.8629C21.4304 18.8283 20.0719 19.3711 18.655 19.3722H9.40387V21.3865Z" fill="black" />
                                                    <path d="M9.24266 2.32141C8.46466 2.32313 7.71906 2.62188 7.16914 3.15228C6.61921 3.68267 6.30978 4.40151 6.30859 5.15132V16.2351C6.30859 17.7127 7.70043 19.013 9.31001 19.0606V17.0507H18.6555C19.4333 17.0496 20.1789 16.7513 20.7289 16.2212C21.2788 15.6912 21.5883 14.9726 21.5895 14.223V5.15132C21.5889 4.40134 21.2797 3.68216 20.7296 3.15164C20.1796 2.62112 19.4337 2.32256 18.6555 2.32141H9.24266Z" fill="white" />
                                                    <path d="M12.4186 5.93665H10.3398V10.3784H12.4186V5.93665Z" fill="black" />
                                                    <path d="M18.0876 5.93665H16.0088V10.3784H18.0876V5.93665Z" fill="black" />
                                                </svg>
                                            </div>

                                            {[1, 2, 3, 4, 5].map((slotId) => (
                                                <div
                                                    key={slotId}
                                                    onClick={() => setActiveAvatar(slotId)}
                                                    style={{
                                                        width: '40px', height: '40px', borderRadius: '50%',
                                                        backgroundColor: '#F1F5F9', cursor: 'pointer',
                                                        border: activeAvatar === slotId ? '2px solid #0F172A' : '1px solid #E2E8F0',
                                                        transition: 'all 0.2s ease',
                                                        overflow: 'hidden',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        backgroundImage: customAvatars[slotId] ? `url(${customAvatars[slotId]})` : 'none',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        boxSizing: 'border-box'
                                                    }}
                                                >
                                                    {!customAvatars[slotId] && (
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    )}
                                                </div>
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
                                                onChange={handleFileChange}
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
                                            <select value={autoOpen} onChange={(e) => setAutoOpen(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', appearance: 'none', backgroundColor: 'white' }}>
                                                <option>No</option>
                                                <option>Yes</option>
                                            </select>
                                            <svg style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '32px' }}>
                                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Show Welcome Message</label>
                                        <div style={{ position: 'relative' }}>
                                            <select value={showWelcome} onChange={(e) => setShowWelcome(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none', appearance: 'none', backgroundColor: 'white' }}>
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
                            <button
                                onClick={() => alert('Changes saved successfully!')}
                                style={{
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

                            <button
                                onClick={() => {
                                    setChatTitle('');
                                    setWelcomeMessage('');
                                    setWidgetPosition('bottom-right');
                                    setButtonColor('linear-gradient(90deg, #FF8651 0%, #FF5430 100%)');
                                    setIsGradient(true);
                                    setAutoOpen('No');
                                    setShowWelcome('Yes');
                                    setActiveAvatar(0);
                                    setCustomAvatar(null);
                                    setSelectedFile('No file Chosen');
                                }}
                                style={{
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
                </motion.div>

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
