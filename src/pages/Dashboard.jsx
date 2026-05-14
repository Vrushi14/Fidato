import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiGrid,
  FiPlus,
  FiX,
} from 'react-icons/fi';

const SidebarSection = ({ title, children, style }) => (
  <div style={{ padding: '0 12px', ...style }}>
    <div className="sidebar-section-title" style={{ fontSize: '11px', fontWeight: 900, color: '#9CA3AF', padding: '0 12px', marginBottom: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{title}</div>
    {children}
  </div>
);

const SidebarItem = ({ icon, label, active, onSelect }) => (
  <div
    role="button"
    tabIndex={0}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 14px',
      borderRadius: '12px',
      cursor: 'pointer',
      background: active ? 'white' : 'transparent',
      color: active ? '#FF6B3D' : '#4B5563',
      boxShadow: active ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none',
      marginBottom: '4px',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      justifyContent: 'flex-start',
    }}
    className="sidebar-item"
    onClick={() => onSelect?.()}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect?.(); } }}
    onMouseEnter={(e) => { if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#111827'; } }}
    onMouseLeave={(e) => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4B5563'; } }}
  >
    <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>
    <span className="sidebar-label" style={{ fontSize: '14.5px', fontWeight: active ? 800 : 700, whiteSpace: 'nowrap' }}>{label}</span>
  </div>
);

const DashboardUpgradeBlock = () => (
  <div style={{ background: 'white', borderRadius: '16px', padding: '20px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
    <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Growth Plan</div>
    <div style={{ fontSize: '12px', color: '#FF6B3D', marginTop: '6px', fontWeight: 600 }}>312 / 500 sessions used</div>
    <button
      type="button"
      style={{
        width: '100%',
        height: '35px',
        marginTop: '16px',
        background: '#FF6337',
        color: 'white',
        border: 'none',
        borderRadius: '111px',
        fontSize: '14px',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(255, 99, 55, 0.2)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#FF4D1A'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = '#FF6337'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      Upgrade to Pro
    </button>
  </div>
);

const DashboardSidebarNav = ({ onItemSelect }) => (
  <>
    <SidebarSection title="MAIN">
      <SidebarItem icon={<FiGrid />} label="Overview" active onSelect={onItemSelect} />
      <SidebarItem
        icon={(
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.26628 6.77562C4.26628 6.77562 5.14128 7.75072 6.59961 7.75072C8.05794 7.75072 8.93294 6.77562 8.93294 6.77562M8.43294 3.5253H8.43961M4.76628 3.5253H4.77294M3.26628 10.351V11.8692C3.26628 12.2156 3.26628 12.3888 3.3391 12.4777C3.40242 12.5551 3.49846 12.6001 3.59997 12.6C3.71669 12.5999 3.85539 12.4917 4.13278 12.2753L5.72308 11.0347C6.04795 10.7813 6.21039 10.6546 6.39127 10.5645C6.55174 10.4846 6.72256 10.4261 6.89909 10.3908C7.09806 10.351 7.30607 10.351 7.72211 10.351H9.39961C10.5197 10.351 11.0798 10.351 11.5076 10.1384C11.8839 9.95145 12.1899 9.65311 12.3816 9.28616C12.5996 8.86899 12.5996 8.32288 12.5996 7.23067V3.72032C12.5996 2.62811 12.5996 2.082 12.3816 1.66483C12.1899 1.29788 11.8839 0.999536 11.5076 0.812565C11.0798 0.600006 10.5197 0.600006 9.39961 0.600006H3.79961C2.6795 0.600006 2.11945 0.600006 1.69163 0.812565C1.3153 0.999536 1.00934 1.29788 0.817596 1.66483C0.599609 2.082 0.599609 2.62811 0.599609 3.72032V7.75072C0.599609 8.35526 0.599609 8.65754 0.667758 8.90554C0.852692 9.57853 1.39179 10.1042 2.08197 10.2845C2.3363 10.351 2.6463 10.351 3.26628 10.351ZM8.76628 3.5253C8.76628 3.70481 8.61704 3.85033 8.43294 3.85033C8.24885 3.85033 8.09961 3.70481 8.09961 3.5253C8.09961 3.34579 8.24885 3.20027 8.43294 3.20027C8.61704 3.20027 8.76628 3.34579 8.76628 3.5253ZM5.09961 3.5253C5.09961 3.70481 4.95037 3.85033 4.76628 3.85033C4.58218 3.85033 4.43294 3.70481 4.43294 3.5253C4.43294 3.34579 4.58218 3.20027 4.76628 3.20027C4.95037 3.20027 5.09961 3.34579 5.09961 3.5253Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        label="My Chatboat"
        onSelect={onItemSelect}
      />
      <SidebarItem
        icon={(
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.26628 4.17536H6.59961M3.26628 6.45059H8.59961M5.05544 10.351H9.39961C10.5197 10.351 11.0798 10.351 11.5076 10.1384C11.8839 9.95145 12.1899 9.65311 12.3816 9.28616C12.5996 8.86899 12.5996 8.32288 12.5996 7.23067V3.72032C12.5996 2.62811 12.5996 2.082 12.3816 1.66483C12.1899 1.29788 11.8839 0.999536 11.5076 0.812565C11.0798 0.600006 10.5197 0.600006 9.39961 0.600006H3.79961C2.6795 0.600006 2.11945 0.600006 1.69163 0.812565C1.3153 0.999536 1.00934 1.29788 0.817596 1.66483C0.599609 2.082 0.599609 2.62811 0.599609 3.72032V11.8692C0.599609 12.2156 0.599609 12.3888 0.672428 12.4777C0.735758 12.5551 0.831789 12.6001 0.933303 12.6C1.05003 12.5999 1.18872 12.4917 1.46611 12.2753L3.05642 11.0347C3.38129 10.7813 3.54372 10.6546 3.7246 10.5645C3.88508 10.4846 4.05589 10.4261 4.23242 10.3908C4.43139 10.351 4.63941 10.351 5.05544 10.351Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        label="Conversations"
        onSelect={onItemSelect}
      />
      <SidebarItem
        icon={(
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0489 8.85892C9.86563 9.06615 9.6733 9.27079 9.47218 9.4719C6.56364 12.3804 2.91971 13.4522 1.33323 11.8657C0.245583 10.7781 0.407334 8.72338 1.5538 6.60161M3.12542 4.36796C3.31615 4.15109 3.5168 3.93701 3.72704 3.72677C6.63558 0.818226 10.2795 -0.253519 11.866 1.33296C12.9544 2.42136 12.7917 4.47812 11.643 6.60145M9.47218 3.72676C12.3807 6.6353 13.4525 10.2792 11.866 11.8657C10.2795 13.4522 6.63558 12.3804 3.72704 9.4719C0.8185 6.56336 -0.253244 2.91943 1.33323 1.33296C2.91971 -0.253519 6.56364 0.818225 9.47218 3.72676ZM7.26259 6.58519C7.26259 6.95913 6.95945 7.26226 6.58552 7.26226C6.21158 7.26226 5.90844 6.95913 5.90844 6.58519C5.90844 6.21126 6.21158 5.90812 6.58552 5.90812C6.95945 5.90812 7.26259 6.21126 7.26259 6.58519Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        label="Knowledge Base"
        onSelect={onItemSelect}
      />
    </SidebarSection>

    <SidebarSection title="INSIGHTS" style={{ marginTop: '32px' }}>
      <SidebarItem
        icon={(
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.59961 3.26667H1.66628C1.29291 3.26667 1.10622 3.26667 0.963616 3.33934C0.838174 3.40325 0.736187 3.50524 0.672272 3.63068C0.599609 3.77329 0.599609 3.95997 0.599609 4.33334V11.5333C0.599609 11.9067 0.599609 12.0934 0.672272 12.236C0.736187 12.3614 0.838174 12.4634 0.963616 12.5273C1.10622 12.6 1.29291 12.6 1.66628 12.6H4.59961M4.59961 12.6H8.59961M4.59961 12.6L4.59961 1.66667C4.59961 1.2933 4.59961 1.10662 4.67227 0.964013C4.73619 0.838571 4.83817 0.736584 4.96362 0.672669C5.10622 0.600006 5.29291 0.600006 5.66628 0.600006L7.53294 0.600006C7.90631 0.600006 8.093 0.600006 8.2356 0.672668C8.36104 0.736584 8.46303 0.838571 8.52695 0.964012C8.59961 1.10662 8.59961 1.2933 8.59961 1.66667V12.6M8.59961 5.93334H11.5329C11.9063 5.93334 12.093 5.93334 12.2356 6.006C12.361 6.06992 12.463 6.1719 12.5269 6.29735C12.5996 6.43995 12.5996 6.62664 12.5996 7.00001V11.5333C12.5996 11.9067 12.5996 12.0934 12.5269 12.236C12.463 12.3614 12.361 12.4634 12.2356 12.5273C12.093 12.6 11.9063 12.6 11.5329 12.6H8.59961" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        label="Analytics"
        onSelect={onItemSelect}
      />
      <SidebarItem
        icon={(
          <svg width="18" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.31114 0.600037L0.97383 8.08153C0.725641 8.37453 0.601546 8.52103 0.59965 8.64476C0.598001 8.75232 0.64672 8.85465 0.731767 8.92226C0.829597 9.00004 1.02344 9.00004 1.41112 9.00004H6.59961L5.88808 14.6L12.2254 7.11854C12.4736 6.82554 12.5977 6.67904 12.5996 6.55531C12.6012 6.44775 12.5525 6.34542 12.4675 6.27781C12.3696 6.20004 12.1758 6.20004 11.7881 6.20004H6.59961L7.31114 0.600037Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        label="Leads"
        onSelect={onItemSelect}
      />
    </SidebarSection>

    <SidebarSection title="ACCOUNT" style={{ marginTop: '32px' }}>
      <SidebarItem
        icon={(
          <svg width="18" height="14" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.599609 2.52858L8.59961 2.52858M8.59961 2.52858C8.59961 3.5937 9.49504 4.45715 10.5996 4.45715C11.7042 4.45715 12.5996 3.5937 12.5996 2.52858C12.5996 1.46346 11.7042 0.600006 10.5996 0.600006C9.49504 0.600006 8.59961 1.46346 8.59961 2.52858ZM4.59961 7.67143L12.5996 7.67144M4.59961 7.67143C4.59961 8.73656 3.70418 9.60001 2.59961 9.60001C1.49504 9.60001 0.599609 8.73656 0.599609 7.67143C0.599609 6.60631 1.49504 5.74286 2.59961 5.74286C3.70418 5.74286 4.59961 6.60631 4.59961 7.67143Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        label="Customization"
        onSelect={onItemSelect}
      />
      <SidebarItem
        icon={(
          <svg width="18" height="13" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5996 3.45715H0.599609M0.59961 2.42858L0.599609 6.77143C0.599609 7.41149 0.599609 7.73152 0.730402 7.97599C0.84545 8.19104 1.02903 8.36587 1.25482 8.47544C1.51151 8.60001 1.84755 8.60001 2.51961 8.60001L10.6796 8.60001C11.3517 8.60001 11.6877 8.60001 11.9444 8.47544C12.1702 8.36587 12.3538 8.19104 12.4688 7.976C12.5996 7.73152 12.5996 7.4115 12.5996 6.77144V2.42858C12.5996 1.78852 12.5996 1.46849 12.4688 1.22402C12.3538 1.00898 12.1702 0.83414 11.9444 0.724571C11.6877 0.600007 11.3517 0.600007 10.6796 0.600007L2.51961 0.600006C1.84755 0.600006 1.51152 0.600006 1.25482 0.72457C1.02903 0.83414 0.84545 1.00897 0.730402 1.22402C0.59961 1.46849 0.59961 1.78852 0.59961 2.42858Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        label="Plan and Billing"
        onSelect={onItemSelect}
      />
      <SidebarItem
        icon={(
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.93294 12.6L1.93294 8.59998M1.93294 8.59998C2.66932 8.59998 3.26628 8.00302 3.26628 7.26664C3.26628 6.53026 2.66932 5.93331 1.93294 5.93331C1.19656 5.93331 0.599609 6.53026 0.599609 7.26664C0.599609 8.00302 1.19656 8.59998 1.93294 8.59998ZM1.93294 3.26664V0.599976M6.59961 12.6V8.59998M6.59961 3.26664V0.599976M6.59961 3.26664C5.86323 3.26664 5.26628 3.8636 5.26628 4.59998C5.26628 5.33636 5.86323 5.93331 6.59961 5.93331C7.33599 5.93331 7.93294 5.33636 7.93294 4.59998C7.93294 3.8636 7.33599 3.26664 6.59961 3.26664ZM11.2663 12.6V9.93331M11.2663 9.93331C12.0027 9.93331 12.5996 9.33636 12.5996 8.59998C12.5996 7.8636 12.0027 7.26664 11.2663 7.26664C10.5299 7.26664 9.93294 7.8636 9.93294 8.59998C9.93294 9.33636 10.5299 9.93331 11.2663 9.93331ZM11.2663 4.59998V0.599976" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        label="Settings"
        onSelect={onItemSelect}
      />
    </SidebarSection>
  </>
);

const StatCard = ({ label, value, trend, positive, subtitle }) => (
  <div className="dashboard-stat-card" style={{ background: '#F3F2EA', borderRadius: '20px', padding: '28px', flex: 1, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
    <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 700, marginBottom: '10px' }}>{label}</div>
    <div style={{ fontSize: '36px', fontWeight: 400, color: '#111827', marginBottom: '14px', letterSpacing: '0' }}>{value}</div>
    {trend ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: positive ? '#10B981' : '#EF4444' }}>
        <span style={{ fontSize: '16px' }}>{positive ? '↑' : '↓'}</span> {trend}
      </div>
    ) : (
      <div style={{ fontSize: '14px', color: '#6B7280', fontWeight: 600 }}>{subtitle}</div>
    )}
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!mobileNavOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMobileNavOpen(false); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileNavOpen]);

  const stats = [
    { label: 'Chat sessions (this month)', value: '312', trend: '18% vs last month', positive: true },
    { label: 'Leads captured', value: '47', trend: '9 new this week', positive: true },
    { label: 'Avg. response score', value: '94%', subtitle: 'Based on user ratings' },
    { label: 'Active Chatbots', value: '2', subtitle: '1 paused' },
  ];

  const chatbots = [
    { name: 'Support Bot', url: 'fidato.ai', status: 'Live', sessions: '214 Sessions', color: '#22C55E' },
    { name: 'Docs Helper', url: 'docs.fidato.ai', status: 'Live', sessions: '98 Sessions', color: '#22C55E' },
    { name: 'Sales Bot', url: 'landing.fidato.ai', status: 'Paused', sessions: '0 Sessions', color: '#94A3B8' },
  ];

  const conversations = [
    { initial: 'AK', name: 'Amit K.', time: '2 mins ago', message: 'What are your pricing and I also want to know...', active: true },
    { initial: 'SJ', name: 'Sara J.', time: '18 mins ago', message: 'How do I embed the chat bot to my website and...' },
    { initial: 'RP', name: 'Rohan P.', time: '1 hour ago', message: 'Can you handle Hindi language and Gujarati...' },
  ];

  const topQuestions = [
    { label: 'Pricing', value: 78 },
    { label: 'Embed', value: 56 },
    { label: 'Features', value: 46 },
    { label: 'Security', value: 32 },
    { label: 'Refunds', value: 19 },
  ];

  return (
    <div className="dashboard-root" style={{ display: 'flex', minHeight: '100vh', background: '#F9F9F9', fontFamily: 'Archivo, sans-serif' }}>
      {mobileNavOpen && (
        <>
          <button
            type="button"
            className="dashboard-mobile-backdrop"
            aria-label="Close menu"
            onClick={() => setMobileNavOpen(false)}
          />
          <div
            id="dashboard-mobile-nav"
            className="dashboard-mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Dashboard navigation"
          >
            <div className="dashboard-mobile-drawer-head">
              <button type="button" className="dashboard-mobile-drawer-logo" onClick={() => { navigate('/'); setMobileNavOpen(false); }} aria-label="Fidato home">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.77489 2.32141L0.846342 7.84706C0.295475 8.57854 -0.00080443 9.45938 1.96134e-05 10.3632V18.5501C-0.00276819 19.4511 0.2917 20.3295 0.840889 21.0587C1.39008 21.7879 2.16556 22.33 3.05531 22.6067L6.9659 23.8031C7.56669 23.9876 8.20208 24.0434 8.82757 23.9664C9.45305 23.8894 10.0535 23.6815 10.5869 23.3574L20.4868 19.0563L4.77489 2.32141Z" fill="#F26419" />
                  <path d="M9.40387 21.3865C6.42042 21.3865 3.89941 19.026 3.89941 16.2351V5.15137C3.9006 3.78587 4.46382 2.47663 5.46547 1.51088C6.46712 0.54512 7.82539 0.00171857 9.24224 0H18.655C20.0721 0.0017175 21.4306 0.54497 22.4326 1.51066C23.4346 2.47636 23.9983 3.78567 24.0001 5.15137V14.2231C23.9983 15.5886 23.4345 16.8976 22.4325 17.8629C21.4304 18.8283 20.0719 19.3711 18.655 19.3722H9.40387V21.3865Z" fill="#F26419" />
                  <path d="M9.24266 2.32141C8.46466 2.32313 7.71906 2.62188 7.16914 3.15228C6.61921 3.68267 6.30978 4.40151 6.30859 5.15132V16.2351C6.30859 17.7127 7.70043 19.013 9.31001 19.0606V17.0507H18.6555C19.4333 17.0496 20.1789 16.7513 20.7289 16.2212C21.2788 15.6912 21.5883 14.9726 21.5895 14.223V5.15132C21.5889 4.40134 21.2797 3.68216 20.7296 3.15164C20.1796 2.62112 19.4337 2.32256 18.6555 2.32141H9.24266Z" fill="white" />
                  <path d="M12.4186 5.93665H10.3398V10.3784H12.4186V5.93665Z" fill="black" />
                  <path d="M18.0876 5.93665H16.0088V10.3784H18.0876V5.93665Z" fill="black" />
                </svg>
                <span className="dashboard-mobile-drawer-title">Menu</span>
              </button>
              <button type="button" className="dashboard-mobile-drawer-close" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation">
                <FiX size={22} />
              </button>
            </div>
            <div className="dashboard-mobile-drawer-scroll">
              <DashboardSidebarNav onItemSelect={() => setMobileNavOpen(false)} />
            </div>
            <div className="dashboard-mobile-drawer-footer">
              <DashboardUpgradeBlock />
            </div>
          </div>
        </>
      )}
      {/* Sidebar */}
      <aside className="dashboard-sidebar" style={{ 
        width: '240px', 
        background: '#F5F4F0', 
        borderRight: '1px solid #E5E7EB', 
        display: 'flex', 
        flexDirection: 'column',
        padding: '24px 0',
        position: 'sticky',
        top: 0,
        height: '100vh'
      }}>
        {/* Logo */}
        <div 
          onClick={() => navigate('/')}
          style={{ padding: '0 24px 32px 24px', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, cursor: 'pointer' }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.77489 2.32141L0.846342 7.84706C0.295475 8.57854 -0.00080443 9.45938 1.96134e-05 10.3632V18.5501C-0.00276819 19.4511 0.2917 20.3295 0.840889 21.0587C1.39008 21.7879 2.16556 22.33 3.05531 22.6067L6.9659 23.8031C7.56669 23.9876 8.20208 24.0434 8.82757 23.9664C9.45305 23.8894 10.0535 23.6815 10.5869 23.3574L20.4868 19.0563L4.77489 2.32141Z" fill="#F26419"/>
            <path d="M9.40387 21.3865C6.42042 21.3865 3.89941 19.026 3.89941 16.2351V5.15137C3.9006 3.78587 4.46382 2.47663 5.46547 1.51088C6.46712 0.54512 7.82539 0.00171857 9.24224 0H18.655C20.0721 0.0017175 21.4306 0.54497 22.4326 1.51066C23.4346 2.47636 23.9983 3.78567 24.0001 5.15137V14.2231C23.9983 15.5886 23.4345 16.8976 22.4325 17.8629C21.4304 18.8283 20.0719 19.3711 18.655 19.3722H9.40387V21.3865Z" fill="#F26419"/>
            <path d="M9.24266 2.32141C8.46466 2.32313 7.71906 2.62188 7.16914 3.15228C6.61921 3.68267 6.30978 4.40151 6.30859 5.15132V16.2351C6.30859 17.7127 7.70043 19.013 9.31001 19.0606V17.0507H18.6555C19.4333 17.0496 20.1789 16.7513 20.7289 16.2212C21.2788 15.6912 21.5883 14.9726 21.5895 14.223V5.15132C21.5889 4.40134 21.2797 3.68216 20.7296 3.15164C20.1796 2.62112 19.4337 2.32256 18.6555 2.32141H9.24266Z" fill="white"/>
            <path d="M12.4186 5.93665H10.3398V10.3784H12.4186V5.93665Z" fill="black"/>
            <path d="M18.0876 5.93665H16.0088V10.3784H18.0876V5.93665Z" fill="black"/>
          </svg>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="100" height="24" viewBox="0 0 115 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M103.765 28.3503C101.753 28.3503 99.9696 27.9045 98.4159 27.013C96.8621 26.096 95.6267 24.8733 94.7097 23.345C93.8182 21.7912 93.3724 20.0591 93.3724 18.1487C93.3724 16.2383 93.8182 14.519 94.7097 12.9907C95.6267 11.4369 96.8621 10.2142 98.4159 9.32271C99.9696 8.40572 101.753 7.94723 103.765 7.94723C105.752 7.94723 107.522 8.40572 109.076 9.32271C110.63 10.2142 111.852 11.4241 112.744 12.9525C113.661 14.4808 114.119 16.2129 114.119 18.1487C114.119 20.0591 113.661 21.7912 112.744 23.345C111.852 24.8733 110.63 26.096 109.076 27.013C107.522 27.9045 105.752 28.3503 103.765 28.3503ZM103.765 24.6059C104.962 24.6059 106.006 24.3257 106.898 23.7653C107.79 23.1795 108.477 22.4026 108.961 21.4346C109.445 20.4667 109.687 19.3714 109.687 18.1487C109.687 16.9516 109.445 15.869 108.961 14.9011C108.477 13.9077 107.79 13.1308 106.898 12.5704C106.006 11.9845 104.962 11.6916 103.765 11.6916C102.542 11.6916 101.485 11.9845 100.594 12.5704C99.7277 13.1308 99.0399 13.8949 98.5305 14.8629C98.0465 15.8308 97.8045 16.9261 97.8045 18.1487C97.8045 19.3459 98.0465 20.4412 98.5305 21.4346C99.0399 22.4026 99.7277 23.1795 100.594 23.7653C101.485 24.3257 102.542 24.6059 103.765 24.6059Z" fill="#111827"/>
              <path d="M86.1308 27.8918C84.3987 27.8918 83.036 27.3951 82.0426 26.4017C81.0746 25.4082 80.5907 24.0582 80.5907 22.3516V3.51511H84.9464V22.1606C84.9464 22.7464 85.1247 23.2304 85.4813 23.6125C85.8379 23.9691 86.3091 24.1474 86.895 24.1474H90.9832V27.8918H86.1308ZM77.2284 12.1501V8.40572H91.0214V12.1501H77.2284Z" fill="#111827"/>
              <path d="M62.801 28.3503C60.9415 28.3503 59.3368 27.8918 57.9868 26.9748C56.6368 26.0578 55.5924 24.8351 54.8537 23.3068C54.1405 21.753 53.7839 20.0464 53.7839 18.187C53.7839 16.2511 54.1915 14.519 55.0066 12.9907C55.8472 11.4369 57.0316 10.2142 58.5599 9.32271C60.1137 8.40572 61.9604 7.94723 64.1001 7.94723C66.2142 7.94723 68.01 8.40572 69.4874 9.32271C70.9902 10.2142 72.1365 11.4369 72.9261 12.9907C73.7412 14.519 74.1487 16.2256 74.1487 18.1105V27.8918H69.7548V24.262H69.6784C69.2963 24.9752 68.7996 25.6502 68.1883 26.287C67.577 26.8984 66.8256 27.3951 65.934 27.7771C65.0425 28.1592 63.9982 28.3503 62.801 28.3503ZM63.9854 24.6059C65.1317 24.6059 66.1251 24.3257 66.9657 23.7653C67.8317 23.1795 68.494 22.4026 68.9525 21.4346C69.4364 20.4412 69.6784 19.3332 69.6784 18.1105C69.6784 16.8879 69.4492 15.8053 68.9907 14.8629C68.5322 13.8949 67.8826 13.1308 67.0421 12.5704C66.2015 11.9845 65.1954 11.6916 64.0236 11.6916C62.801 11.6916 61.7566 11.9845 60.8906 12.5704C60.0245 13.1308 59.3623 13.8949 58.9038 14.8629C58.4453 15.8308 58.216 16.9261 58.216 18.1487C58.216 19.3459 58.4453 20.4412 58.9038 21.4346C59.3623 22.4026 60.0118 23.1795 60.8524 23.7653C61.7184 24.3257 62.7628 24.6059 63.9854 24.6059Z" fill="#111827"/>
              <path d="M39.6568 28.3503C38.1031 28.3503 36.6894 28.1083 35.4158 27.6243C34.1676 27.1149 33.0978 26.3889 32.2063 25.4465C31.3402 24.504 30.6652 23.396 30.1813 22.1224C29.7228 20.8233 29.4935 19.3969 29.4935 17.8431C29.4935 15.8563 29.8883 14.1242 30.678 12.6468C31.4931 11.1694 32.6138 10.0232 34.0403 9.20811C35.4667 8.36753 37.0969 7.94725 38.9309 7.94725C39.8479 7.94725 40.7139 8.08734 41.529 8.36753C42.3441 8.64773 43.0828 9.04254 43.7451 9.55198C44.4074 10.0614 44.9423 10.66 45.3498 11.3478H45.388V0H49.7819V17.9195C49.7819 20.0592 49.3489 21.9186 48.4829 23.4979C47.6423 25.0517 46.4578 26.2488 44.9295 27.0894C43.4267 27.93 41.6691 28.3503 39.6568 28.3503ZM39.6568 24.6059C40.7776 24.6059 41.7583 24.3384 42.5988 23.8035C43.4649 23.2432 44.1399 22.479 44.6239 21.5111C45.1078 20.5431 45.3498 19.4224 45.3498 18.1488C45.3498 16.8752 45.1078 15.7544 44.6239 14.7865C44.1399 13.8185 43.4649 13.0671 42.5988 12.5322C41.7583 11.9718 40.7649 11.6916 39.6186 11.6916C38.5233 11.6916 37.5427 11.9718 36.6766 12.5322C35.8106 13.0926 35.1356 13.8567 34.6516 14.8247C34.1676 15.7926 33.9257 16.9006 33.9257 18.1488C33.9257 19.4224 34.1676 20.5431 34.6516 21.5111C35.1356 22.479 35.8106 23.2432 36.6766 23.8035C37.5681 24.3384 38.5615 24.6059 39.6568 24.6059Z" fill="#111827"/>
              <path d="M20.9377 27.8918V8.40574H25.3316V27.8918H20.9377ZM23.1155 5.69298C22.3513 5.69298 21.6891 5.41279 21.1287 4.8524C20.5683 4.29202 20.2881 3.62975 20.2881 2.86559C20.2881 2.10143 20.5683 1.43916 21.1287 0.87878C21.6891 0.318397 22.3513 0.0382042 23.1155 0.0382042C23.9051 0.0382042 24.5674 0.318397 25.1023 0.87878C25.6627 1.43916 25.9429 2.10143 25.9429 2.86559C25.9429 3.62975 25.6627 4.29202 25.1023 4.8524C24.5674 5.41279 23.9051 5.69298 23.1155 5.69298Z" fill="#111827"/>
              <path d="M0 27.8918V8.52035C0 7.11939 0.331135 5.87127 0.993406 4.77597C1.65568 3.65521 2.53446 2.77643 3.62975 2.13963C4.75052 1.47736 6.01138 1.14622 7.41234 1.14622H16.9643V5.15805H7.90904C6.94111 5.15805 6.13874 5.48919 5.50194 6.15146C4.89061 6.78826 4.58495 7.57789 4.58495 8.52035V13.411H15.627V17.4228H4.58495V27.8918H0Z" fill="#111827"/>
            </svg>
          </span>
        </div>

        {/* Sidebar Sections (Scrollable) */}
        <div style={{ flex: 1, padding: '0 12px', overflowY: 'auto', scrollbarWidth: 'none' }}>
          <DashboardSidebarNav />
        </div>

        {/* Upgrade Card (Fixed at bottom) */}
        <div className="dashboard-upgrade-card" style={{ padding: '24px 16px 0 16px', flexShrink: 0 }}>
          <DashboardUpgradeBlock />
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        {/* Top Bar */}
        <header className="dashboard-header">
          <h2 className="dashboard-header-title">Welcome Rohan Chandra</h2>
          <button type="button" className="dashboard-header-new-btn dashboard-header-new-inline">
            <FiPlus size={18} strokeWidth={2.5} /> New Chatbot
          </button>
          <button
            type="button"
            className="dashboard-header-avatar"
            aria-expanded={mobileNavOpen}
            aria-controls="dashboard-mobile-nav"
            aria-label="Open navigation menu"
            onClick={() => {
              if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
                setMobileNavOpen(true);
              }
            }}
          >
            RC
          </button>
          <button type="button" className="dashboard-header-new-btn dashboard-header-new-block">
            <FiPlus size={18} strokeWidth={2.5} /> New Chatbot
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content" style={{ overflowY: 'auto', flex: 1 }}>
          {/* Stats Grid */}
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          {/* Middle Row */}
          <div className="middle-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {/* My Chatbots */}
            <div className="dashboard-card" style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111827' }}>My chatbots</h3>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#FF6B3D', cursor: 'pointer' }}>View all</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {chatbots.map((bot, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '18px 0', borderTop: i > 0 ? '1px solid #F3F4F6' : 'none' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: bot.color, marginRight: '14px' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>{bot.name}</div>
                      <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{bot.url}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: bot.color, background: `${bot.color}15`, padding: '3px 10px', borderRadius: '6px', display: 'inline-block', textTransform: 'uppercase' }}>{bot.status}</div>
                      <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '6px', fontWeight: 500 }}>{bot.sessions}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Conversations */}
            <div className="dashboard-card" style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111827' }}>Recent conversations</h3>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#FF6B3D', cursor: 'pointer' }}>View all</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {conversations.map((conv, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', padding: '18px 0', borderTop: i > 0 ? '1px solid #F3F4F6' : 'none' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#4B5563', flexShrink: 0 }}>
                      {conv.initial}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>{conv.name}</span>
                        <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 500 }}>{conv.time}</span>
                      </div>
                      <div style={{ 
                        fontSize: '13px', 
                        color: '#6B7280', 
                        lineHeight: '1.5',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        maxWidth: '100%'
                      }}>
                        {conv.message}
                      </div>
                    </div>
                    {conv.active && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B3D', marginTop: '20px', flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row - Top Questions */}
          <div className="dashboard-card" style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111827' }}>Top Questions asked this month</h3>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#FF6B3D', cursor: 'pointer' }}>Full analytics</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {topQuestions.map((q, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '80px', fontSize: '14px', fontWeight: 700, color: '#4B5563' }}>{q.label}</div>
                  <div style={{ flex: 1, height: '12px', background: '#F3F4F6', borderRadius: '6px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(q.value / 80) * 100}%` }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                      style={{ height: '100%', background: '#FF6B3D', borderRadius: '6px' }}
                    />
                  </div>
                  <div style={{ width: '24px', fontSize: '14px', fontWeight: 700, color: '#4B5563', textAlign: 'right' }}>{q.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .dashboard-root, .dashboard-root * {
          font-family: 'Archivo', sans-serif !important;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          gap: 16px;
          height: 80px;
          background: white;
          border-bottom: 1px solid #E5E7EB;
          padding: 0 40px;
          position: sticky;
          top: 0;
          z-index: 10;
          flex-wrap: nowrap;
        }
        .dashboard-header-title {
          margin: 0;
          font-size: 19px;
          font-weight: 700;
          color: #111827;
          flex: 1;
          min-width: 0;
          line-height: 1.25;
        }
        .dashboard-header-new-btn {
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
          font-family: inherit;
          color: #111827;
          white-space: nowrap;
        }
        .dashboard-header-new-btn:hover {
          background: #F9FAFB;
          border-color: #D1D5DB;
        }
        .dashboard-header-new-block {
          display: none !important;
        }
        .dashboard-header-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #FF6B3D;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
          flex-shrink: 0;
          border: none;
          padding: 0;
          font-family: inherit;
          cursor: default;
          transition: filter 0.15s ease, transform 0.15s ease;
        }
        @media (max-width: 768px) {
          .dashboard-header-avatar {
            cursor: pointer;
          }
          .dashboard-header-avatar:hover {
            filter: brightness(1.06);
          }
          .dashboard-header-avatar:active {
            transform: scale(0.97);
          }
        }

        .dashboard-mobile-backdrop {
          position: fixed;
          inset: 0;
          z-index: 200;
          border: none;
          padding: 0;
          margin: 0;
          background: rgba(15, 23, 42, 0.45);
          cursor: pointer;
        }
        .dashboard-mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          height: 100dvh;
          width: min(320px, 88vw);
          z-index: 201;
          background: #F5F4F0;
          border-right: 1px solid #E5E7EB;
          display: flex;
          flex-direction: column;
          box-shadow: 8px 0 32px rgba(0, 0, 0, 0.12);
          animation: dashboardDrawerIn 0.22s ease-out;
        }
        @keyframes dashboardDrawerIn {
          from { transform: translateX(-100%); opacity: 0.96; }
          to { transform: translateX(0); opacity: 1; }
        }
        .dashboard-mobile-drawer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 16px 12px;
          border-bottom: 1px solid #E5E7EB;
          flex-shrink: 0;
          background: #F5F4F0;
        }
        .dashboard-mobile-drawer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 4px 0;
          color: #111827;
        }
        .dashboard-mobile-drawer-title {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .dashboard-mobile-drawer-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          background: white;
          color: #374151;
          cursor: pointer;
          padding: 0;
        }
        .dashboard-mobile-drawer-scroll {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding: 12px 0 20px;
          -webkit-overflow-scrolling: touch;
        }
        .dashboard-mobile-drawer-scroll .sidebar-section-title,
        .dashboard-mobile-drawer-scroll .sidebar-label {
          display: block !important;
        }
        .dashboard-mobile-drawer-scroll .sidebar-item {
          justify-content: flex-start !important;
          padding: 12px 14px !important;
        }
        .dashboard-mobile-drawer-footer {
          padding: 16px;
          border-top: 1px solid #E5E7EB;
          flex-shrink: 0;
          background: #F5F4F0;
        }

        .dashboard-content {
          padding: 40px;
          box-sizing: border-box;
        }
        @media (max-width: 1200px) {
          .dashboard-root main {
            padding: 24px !important;
          }
        }
        @media (max-width: 1024px) {
          .dashboard-content {
            padding: 32px 18px 36px;
          }
          .stats-grid,
          .middle-grid {
            width: 100%;
            max-width: 100%;
          }
          .dashboard-card,
          .dashboard-stat-card {
            width: 100%;
            max-width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }
        }
        @media (max-width: 768px) {
          .dashboard-content {
            padding: 24px 12px 32px;
          }
        }
        @media (max-width: 1100px) {
          .dashboard-sidebar {
            width: 80px !important;
            padding: 24px 8px !important;
          }
          .dashboard-sidebar .sidebar-label {
            display: none !important;
          }
          .dashboard-sidebar .dashboard-upgrade-card {
            display: none;
          }
          .sidebar-section-title {
            display: none;
          }
          .sidebar-item {
            justify-content: center !important;
            padding: 12px 0 !important;
          }
          .dashboard-sidebar svg:nth-child(2) {
             display: none !important;
          }
        }
        @media (max-width: 768px) {
          .dashboard-sidebar {
            display: none !important;
          }
          .dashboard-root main {
            padding: 16px !important;
          }
          .dashboard-header {
            flex-wrap: wrap;
            height: auto !important;
            min-height: 72px;
            padding: 12px 16px !important;
            gap: 10px 12px;
            align-items: center;
          }
          .dashboard-header-title {
            flex: 1 1 0;
            min-width: 0;
            font-size: 16px !important;
            line-height: 1.3;
          }
          .dashboard-header-avatar {
            margin-left: auto;
          }
          .dashboard-header-new-inline {
            display: none !important;
          }
          .dashboard-header-new-block {
            display: flex !important;
            flex: 1 0 100%;
            width: 100%;
            order: 10;
            margin-top: 2px;
          }
        }
        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .middle-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .dashboard-root {
          scrollbar-width: thin;
          scrollbar-color: #E5E7EB transparent;
        }
        .dashboard-root::-webkit-scrollbar {
          width: 6px;
        }
        .dashboard-root::-webkit-scrollbar-thumb {
          background-color: #E5E7EB;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
