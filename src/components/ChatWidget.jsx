import React from 'react';

const ChatWidget = ({ buttonColor = '#3B82F6', isGradient = false }) => {
    return (
        <div style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            width: '395px',
            height: '731px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '20px',
            zIndex: 50,
            fontFamily: 'Inter, sans-serif'
        }}>
            {/* Widget Container */}
            <div style={{
                flex: 1,
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '24px',
                boxShadow: '0 12px 48px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid #F1F5F9'
            }}>
                {/* Header */}
                <div style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #F1F5F9'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {/* Avatar */}
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#3B82F6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.18326 1.54761L0.564228 5.23137C0.196983 5.71903 -0.000536287 6.30625 1.30756e-05 6.90881V12.3667C-0.00184546 12.9674 0.194467 13.553 0.560593 14.0391C0.926719 14.5253 1.4437 14.8867 2.03687 15.0711L4.64394 15.8687C5.04446 15.9917 5.46805 16.0289 5.88504 15.9776C6.30204 15.9263 6.70235 15.7877 7.05794 15.5716L13.6579 12.7042L3.18326 1.54761Z" fill="black"/>
                                <path d="M6.26925 14.2576C4.28028 14.2576 2.59961 12.684 2.59961 10.8234V3.43424C2.6004 2.52391 2.97588 1.65109 3.64365 1.00725C4.31141 0.363413 5.21693 0.00114571 6.16149 0H12.4367C13.3814 0.001145 14.2871 0.363314 14.9551 1.00711C15.6231 1.65091 15.9989 2.52378 16.0001 3.43424V9.48204C15.9989 10.3924 15.623 11.265 14.955 11.9086C14.2869 12.5522 13.3813 12.914 12.4367 12.9148H6.26925V14.2576Z" fill="black"/>
                                <path d="M6.16112 1.54761C5.64245 1.54875 5.14539 1.74792 4.77877 2.10152C4.41216 2.45512 4.20587 2.93434 4.20508 3.43421V10.8234C4.20508 11.8085 5.13297 12.6754 6.20602 12.7071V11.3671H12.4363C12.9549 11.3664 13.4519 11.1675 13.8186 10.8141C14.1852 10.4608 14.3916 9.98175 14.3924 9.48201V3.43421C14.392 2.93422 14.1858 2.45478 13.8191 2.1011C13.4524 1.74741 12.9551 1.54837 12.4363 1.54761H6.16112Z" fill="white"/>
                                <path d="M8.2794 3.95776H6.89355V6.91895H8.2794V3.95776Z" fill="black"/>
                                <path d="M12.0577 3.95776H10.6719V6.91895H12.0577V3.95776Z" fill="black"/>
                            </svg>
                        </div>
                        {/* Title */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '15px', fontWeight: 600, color: '#1E293B' }}>AI Assistant</span>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                        </div>
                    </div>
                    {/* Controls */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F8FAFC', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                        </button>
                        <button style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F8FAFC', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                    </div>
                </div>

                {/* Chat Content */}
                <div style={{ flex: 1, padding: '32px 24px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                    {/* Welcome Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'conic-gradient(from 90deg, rgba(252, 223, 209, 1) 0deg, rgba(224, 185, 253, 1) 126.346deg, rgba(187, 238, 255, 1) 249.231deg, rgba(255, 221, 100, 1) 360deg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px'
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 4v16"/><path d="M8 8v8"/><path d="M16 8v8"/><path d="M4 11v2"/><path d="M20 11v2"/>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Hi! I'm Fidato AI.</h3>
                        <p style={{ fontSize: '15px', color: '#475569', textAlign: 'center' }}>What can I help you with today?</p>
                    </div>

                    {/* Chat Bubbles */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* User Message */}
                        <div style={{ alignSelf: 'flex-end', backgroundColor: '#F8FAFC', padding: '16px 20px', borderRadius: '20px 20px 4px 20px', maxWidth: '85%' }}>
                            <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.5', margin: 0 }}>Can you explain the team collaboration features ?</p>
                            {/* Small pink sparkle */}
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="#EC4899" style={{ position: 'absolute', bottom: '-4px', left: '50%' }}>
                                <path d="M12 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z"/>
                            </svg>
                        </div>

                        {/* AI Message */}
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                backgroundColor: '#3B82F6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px'
                            }}>
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.18326 1.54761L0.564228 5.23137C0.196983 5.71903 -0.000536287 6.30625 1.30756e-05 6.90881V12.3667C-0.00184546 12.9674 0.194467 13.553 0.560593 14.0391C0.926719 14.5253 1.4437 14.8867 2.03687 15.0711L4.64394 15.8687C5.04446 15.9917 5.46805 16.0289 5.88504 15.9776C6.30204 15.9263 6.70235 15.7877 7.05794 15.5716L13.6579 12.7042L3.18326 1.54761Z" fill="black"/>
                                    <path d="M6.26925 14.2576C4.28028 14.2576 2.59961 12.684 2.59961 10.8234V3.43424C2.6004 2.52391 2.97588 1.65109 3.64365 1.00725C4.31141 0.363413 5.21693 0.00114571 6.16149 0H12.4367C13.3814 0.001145 14.2871 0.363314 14.9551 1.00711C15.6231 1.65091 15.9989 2.52378 16.0001 3.43424V9.48204C15.9989 10.3924 15.623 11.265 14.955 11.9086C14.2869 12.5522 13.3813 12.914 12.4367 12.9148H6.26925V14.2576Z" fill="black"/>
                                    <path d="M6.16112 1.54761C5.64245 1.54875 5.14539 1.74792 4.77877 2.10152C4.41216 2.45512 4.20587 2.93434 4.20508 3.43421V10.8234C4.20508 11.8085 5.13297 12.6754 6.20602 12.7071V11.3671H12.4363C12.9549 11.3664 13.4519 11.1675 13.8186 10.8141C14.1852 10.4608 14.3916 9.98175 14.3924 9.48201V3.43421C14.392 2.93422 14.1858 2.45478 13.8191 2.1011C13.4524 1.74741 12.9551 1.54837 12.4363 1.54761H6.16112Z" fill="white"/>
                                    <path d="M8.2794 3.95776H6.89355V6.91895H8.2794V3.95776Z" fill="black"/>
                                    <path d="M12.0577 3.95776H10.6719V6.91895H12.0577V3.95776Z" fill="black"/>
                                </svg>
                            </div>
                            <p style={{ fontSize: '14px', color: '#1E293B', lineHeight: '1.6', margin: 0 }}>
                                Absolutely! Our platform allows real-time collaboration with shared workspaces, live editing and instant notification
                            </p>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div style={{ padding: '0 24px 24px 24px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '32px',
                        padding: '6px 6px 6px 16px',
                        marginBottom: '16px'
                    }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Ask AI anything..." 
                            style={{ flex: 1, border: 'none', backgroundColor: 'transparent', padding: '0 12px', fontSize: '14px', color: '#1E293B', outline: 'none' }} 
                        />
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#paint0_linear_star)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_star" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF6B3D" />
                                        <stop offset="0.5" stopColor="#3B82F6" />
                                        <stop offset="1" stopColor="#10B981" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    
                    {/* Footer Legal */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '10px', color: '#94A3B8' }}>This chat is recorded. By chatting, you agree to the <a href="#" style={{ color: '#94A3B8', textDecoration: 'underline' }}>AI Terms.</a></span>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
                            <svg width="40" height="12" viewBox="0 0 30 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.69135 0.853027L0.299789 2.88391C0.104662 3.15276 -0.000284943 3.4765 6.9474e-06 3.80869V6.81767C-0.00098054 7.14882 0.103325 7.47169 0.297857 7.73969C0.492389 8.00769 0.767077 8.20695 1.08224 8.30862L2.46744 8.74834C2.68025 8.81616 2.90531 8.83666 3.12687 8.80836C3.34843 8.78007 3.56113 8.70366 3.75006 8.58453L7.25679 7.00372L1.69135 0.853027Z" fill="black"/>
                                <path d="M3.33063 7.86033C2.27384 7.86033 1.38086 6.99278 1.38086 5.96701V1.89332C1.38128 1.39145 1.58078 0.910255 1.93558 0.555303C2.29039 0.200352 2.77151 0.000631639 3.27338 0H6.60755C7.1095 0.000631245 7.5907 0.200297 7.94563 0.555226C8.30056 0.910154 8.50024 1.39138 8.50087 1.89332V5.22751C8.50024 5.72938 8.30053 6.21049 7.94558 6.56529C7.59063 6.92009 7.10942 7.11959 6.60755 7.12001H3.33063V7.86033Z" fill="black"/>
                                <path d="M3.27367 0.853027C2.99809 0.853658 2.73399 0.96346 2.53919 1.1584C2.3444 1.35334 2.2348 1.61754 2.23438 1.89312V5.96681C2.23438 6.50992 2.72739 6.98782 3.29753 7.00532V6.26659H6.60785C6.88335 6.26617 7.14746 6.15654 7.34227 5.96173C7.53709 5.76691 7.64672 5.50282 7.64714 5.22731V1.89312C7.64693 1.61748 7.53739 1.35315 7.34256 1.15817C7.14772 0.963182 6.88349 0.853448 6.60785 0.853027H3.27367Z" fill="white"/>
                                <path d="M4.39844 2.18201H3.66211V3.81453H4.39844V2.18201Z" fill="black"/>
                                <path d="M6.40626 2.18201H5.66992V3.81453H6.40626V2.18201Z" fill="black"/>
                                <path d="M28.2466 6.32568C27.9058 6.32568 27.6037 6.25018 27.3406 6.09918C27.0774 5.94386 26.8681 5.73677 26.7128 5.47791C26.5618 5.21473 26.4863 4.92136 26.4863 4.59778C26.4863 4.2742 26.5618 3.98298 26.7128 3.72412C26.8681 3.46094 27.0774 3.25385 27.3406 3.10285C27.6037 2.94753 27.9058 2.86987 28.2466 2.86987C28.5831 2.86987 28.883 2.94753 29.1461 3.10285C29.4093 3.25385 29.6164 3.45878 29.7674 3.71765C29.9227 3.97651 30.0004 4.26989 30.0004 4.59778C30.0004 4.92136 29.9227 5.21473 29.7674 5.47791C29.6164 5.73677 29.4093 5.94386 29.1461 6.09918C28.883 6.25018 28.5831 6.32568 28.2466 6.32568ZM28.2466 5.69147C28.4494 5.69147 28.6263 5.64401 28.7773 5.5491C28.9283 5.44987 29.0447 5.31828 29.1267 5.15433C29.2087 4.99039 29.2497 4.80487 29.2497 4.59778C29.2497 4.395 29.2087 4.21164 29.1267 4.0477C29.0447 3.87944 28.9283 3.74785 28.7773 3.65293C28.6263 3.5537 28.4494 3.50409 28.2466 3.50409C28.0395 3.50409 27.8605 3.5537 27.7095 3.65293C27.5628 3.74785 27.4463 3.87728 27.36 4.04122C27.278 4.20517 27.237 4.39069 27.237 4.59778C27.237 4.80055 27.278 4.98607 27.36 5.15433C27.4463 5.31828 27.5628 5.44987 27.7095 5.5491C27.8605 5.64401 28.0395 5.69147 28.2466 5.69147Z" fill="black"/>
                                <path d="M25.2598 6.24787C24.9664 6.24787 24.7356 6.16374 24.5674 5.99548C24.4034 5.82722 24.3215 5.59856 24.3215 5.30949V2.11902H25.0592V5.27714C25.0592 5.37637 25.0894 5.45834 25.1498 5.52306C25.2102 5.58346 25.29 5.61366 25.3893 5.61366H26.0817V6.24787H25.2598ZM23.752 3.58159V2.94738H26.0882V3.58159H23.752Z" fill="black"/>
                                <path d="M21.3076 6.32568C20.9926 6.32568 20.7208 6.24802 20.4921 6.09271C20.2635 5.93739 20.0866 5.7303 19.9615 5.47144C19.8407 5.20826 19.7803 4.9192 19.7803 4.60425C19.7803 4.27636 19.8493 3.98298 19.9874 3.72412C20.1297 3.46094 20.3304 3.25385 20.5892 3.10285C20.8524 2.94753 21.1652 2.86987 21.5276 2.86987C21.8857 2.86987 22.1898 2.94753 22.4401 3.10285C22.6946 3.25385 22.8888 3.46094 23.0225 3.72412C23.1606 3.98298 23.2296 4.27204 23.2296 4.59131V6.24802H22.4854V5.63323H22.4724C22.4077 5.75403 22.3236 5.86836 22.22 5.97622C22.1165 6.07976 21.9892 6.16389 21.8382 6.22861C21.6872 6.29333 21.5103 6.32568 21.3076 6.32568ZM21.5082 5.69147C21.7023 5.69147 21.8706 5.64401 22.013 5.5491C22.1596 5.44987 22.2718 5.31828 22.3495 5.15433C22.4315 4.98607 22.4724 4.7984 22.4724 4.59131C22.4724 4.38422 22.4336 4.20086 22.356 4.04122C22.2783 3.87728 22.1683 3.74785 22.0259 3.65293C21.8835 3.5537 21.7131 3.50409 21.5146 3.50409C21.3076 3.50409 21.1307 3.5537 20.984 3.65293C20.8373 3.74785 20.7251 3.87728 20.6475 4.04122C20.5698 4.20517 20.531 4.39069 20.531 4.59778C20.531 4.80055 20.5698 4.98607 20.6475 5.15433C20.7251 5.31828 20.8351 5.44987 20.9775 5.5491C21.1242 5.64401 21.3011 5.69147 21.5082 5.69147Z" fill="black"/>
                                <path d="M17.3874 6.32557C17.1243 6.32557 16.8848 6.28459 16.6691 6.20261C16.4577 6.11633 16.2765 5.99337 16.1255 5.83374C15.9788 5.6741 15.8645 5.48643 15.7825 5.27071C15.7048 5.05068 15.666 4.80907 15.666 4.5459C15.666 4.20938 15.7329 3.916 15.8666 3.66577C16.0047 3.41553 16.1945 3.22139 16.4361 3.08333C16.6777 2.94095 16.9539 2.86976 17.2645 2.86976C17.4198 2.86976 17.5665 2.89349 17.7046 2.94095C17.8426 2.98841 17.9677 3.05528 18.0799 3.14157C18.1921 3.22786 18.2827 3.32924 18.3517 3.44573H18.3582V1.52368H19.1024V4.55884C19.1024 4.92125 19.0291 5.2362 18.8824 5.50369C18.74 5.76686 18.5394 5.96964 18.2805 6.11201C18.026 6.25439 17.7283 6.32557 17.3874 6.32557ZM17.3874 5.69136C17.5773 5.69136 17.7434 5.64606 17.8858 5.55546C18.0324 5.46054 18.1468 5.33111 18.2288 5.16717C18.3107 5.00322 18.3517 4.81339 18.3517 4.59767C18.3517 4.38195 18.3107 4.19212 18.2288 4.02817C18.1468 3.86423 18.0324 3.73695 17.8858 3.64635C17.7434 3.55143 17.5751 3.50398 17.381 3.50398C17.1955 3.50398 17.0294 3.55143 16.8827 3.64635C16.736 3.74127 16.6216 3.8707 16.5397 4.03464C16.4577 4.19859 16.4167 4.38627 16.4167 4.59767C16.4167 4.81339 16.4577 5.00322 16.5397 5.16717C16.6216 5.33111 16.736 5.46054 16.8827 5.55546C17.0337 5.64606 17.2019 5.69136 17.3874 5.69136Z" fill="black"/>
                                <path d="M14.2174 6.24791V2.94742H14.9617V6.24791H14.2174ZM14.5863 2.48794C14.4569 2.48794 14.3447 2.44048 14.2498 2.34557C14.1549 2.25065 14.1074 2.13848 14.1074 2.00905C14.1074 1.87962 14.1549 1.76744 14.2498 1.67253C14.3447 1.57761 14.4569 1.53015 14.5863 1.53015C14.7201 1.53015 14.8322 1.57761 14.9228 1.67253C15.0178 1.76744 15.0652 1.87962 15.0652 2.00905C15.0652 2.13848 15.0178 2.25065 14.9228 2.34557C14.8322 2.44048 14.7201 2.48794 14.5863 2.48794Z" fill="black"/>
                                <path d="M10.6709 6.24811V2.96703C10.6709 2.72974 10.727 2.51833 10.8392 2.33282C10.9513 2.14298 11.1002 1.99414 11.2857 1.88628C11.4755 1.7741 11.6891 1.71802 11.9264 1.71802H13.5443V2.39753H12.0105C11.8466 2.39753 11.7107 2.45362 11.6028 2.56579C11.4993 2.67365 11.4475 2.8074 11.4475 2.96703V3.79539H13.3178V4.4749H11.4475V6.24811H10.6709Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#3B82F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4)',
                border: '4px solid #DBEAFE',
                cursor: 'pointer',
                flexShrink: 0
            }}>
                <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.18326 1.54761L0.564228 5.23137C0.196983 5.71903 -0.000536287 6.30625 1.30756e-05 6.90881V12.3667C-0.00184546 12.9674 0.194467 13.553 0.560593 14.0391C0.926719 14.5253 1.4437 14.8867 2.03687 15.0711L4.64394 15.8687C5.04446 15.9917 5.46805 16.0289 5.88504 15.9776C6.30204 15.9263 6.70235 15.7877 7.05794 15.5716L13.6579 12.7042L3.18326 1.54761Z" fill="black"/>
                    <path d="M6.26925 14.2576C4.28028 14.2576 2.59961 12.684 2.59961 10.8234V3.43424C2.6004 2.52391 2.97588 1.65109 3.64365 1.00725C4.31141 0.363413 5.21693 0.00114571 6.16149 0H12.4367C13.3814 0.001145 14.2871 0.363314 14.9551 1.00711C15.6231 1.65091 15.9989 2.52378 16.0001 3.43424V9.48204C15.9989 10.3924 15.623 11.265 14.955 11.9086C14.2869 12.5522 13.3813 12.914 12.4367 12.9148H6.26925V14.2576Z" fill="black"/>
                    <path d="M6.16112 1.54761C5.64245 1.54875 5.14539 1.74792 4.77877 2.10152C4.41216 2.45512 4.20587 2.93434 4.20508 3.43421V10.8234C4.20508 11.8085 5.13297 12.6754 6.20602 12.7071V11.3671H12.4363C12.9549 11.3664 13.4519 11.1675 13.8186 10.8141C14.1852 10.4608 14.3916 9.98175 14.3924 9.48201V3.43421C14.392 2.93422 14.1858 2.45478 13.8191 2.1011C13.4524 1.74741 12.9551 1.54837 12.4363 1.54761H6.16112Z" fill="white"/>
                    <path d="M8.2794 3.95776H6.89355V6.91895H8.2794V3.95776Z" fill="black"/>
                    <path d="M12.0577 3.95776H10.6719V6.91895H12.0577V3.95776Z" fill="black"/>
                </svg>
            </div>
        </div>
    );
};

export default ChatWidget;
