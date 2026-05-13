import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiGrid, 
  FiMessageSquare, 
  FiDatabase, 
  FiBarChart2, 
  FiUsers, 
  FiLayout, 
  FiCreditCard, 
  FiSettings,
  FiPlus
} from 'react-icons/fi';

const Dashboard = () => {
  const navigate = useNavigate();

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
          <SidebarSection title="MAIN">
            <SidebarItem icon={<FiGrid />} label="Overview" active />
            <SidebarItem icon={<FiLayout />} label="My Chatbots" />
            <SidebarItem icon={<FiMessageSquare />} label="Conversations" />
            <SidebarItem icon={<FiDatabase />} label="Knowledge Base" />
          </SidebarSection>

          <SidebarSection title="INSIGHTS" style={{ marginTop: '32px' }}>
            <SidebarItem icon={<FiBarChart2 />} label="Analytics" />
            <SidebarItem icon={<FiUsers />} label="Leads" />
          </SidebarSection>

          <SidebarSection title="ACCOUNT" style={{ marginTop: '32px' }}>
            <SidebarItem icon={<FiLayout />} label="Customization" />
            <SidebarItem icon={<FiCreditCard />} label="Plan & Billing" />
            <SidebarItem icon={<FiSettings />} label="Settings" />
          </SidebarSection>
        </div>

        {/* Upgrade Card (Fixed at bottom) */}
        <div className="dashboard-upgrade-card" style={{ padding: '24px 16px 0 16px', flexShrink: 0 }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Growth Plan</div>
            <div style={{ fontSize: '12px', color: '#FF6B3D', marginTop: '6px', fontWeight: 600 }}>312 / 500 sessions used</div>
            <button style={{ width: '100%', marginTop: '16px', background: '#FF6B3D', color: 'white', border: 'none', borderRadius: '10px', padding: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s ease' }}>
              Upgrade to Pro
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        {/* Top Bar */}
        <header style={{ height: '80px', background: 'white', borderBottom: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', position: 'sticky', top: 0, zIndex: 10 }}>
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#111827' }}>Welcome Rohan Chandra</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s ease' }}>
              <FiPlus /> New Chatbot
            </button>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FF6B3D', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '15px' }}>
              RC
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div style={{ padding: '40px', overflowY: 'auto' }}>
          {/* Stats Grid */}
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          {/* Middle Row */}
          <div className="middle-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {/* My Chatbots */}
            <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
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
            <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
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
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
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
        @media (max-width: 1200px) {
          .dashboard-root main {
            padding: 24px !important;
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
          header {
            padding: 0 20px !important;
            height: 70px !important;
          }
          h2 {
            font-size: 16px !important;
          }
        }
        @media (max-width: 480px) {
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

const SidebarSection = ({ title, children, style }) => (
  <div style={{ padding: '0 12px', ...style }}>
    <div className="sidebar-section-title" style={{ fontSize: '11px', fontWeight: 900, color: '#9CA3AF', padding: '0 12px', marginBottom: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{title}</div>
    {children}
  </div>
);

const SidebarItem = ({ icon, label, active }) => (
  <div style={{ 
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
    justifyContent: 'flex-start'
  }}
  className="sidebar-item"
  onMouseEnter={(e) => { if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#111827'; } }}
  onMouseLeave={(e) => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4B5563'; } }}
  >
    <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>
    <span className="sidebar-label" style={{ fontSize: '14.5px', fontWeight: active ? 800 : 700, whiteSpace: 'nowrap' }}>{label}</span>
  </div>
);

const StatCard = ({ label, value, trend, positive, subtitle }) => (
  <div style={{ background: '#F3F2EA', borderRadius: '20px', padding: '28px', flex: 1, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
    <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 700, marginBottom: '10px' }}>{label}</div>
    <div style={{ fontSize: '36px', fontWeight: 900, color: '#111827', marginBottom: '14px', letterSpacing: '-0.02em' }}>{value}</div>
    {trend ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: positive ? '#10B981' : '#EF4444' }}>
        <span style={{ fontSize: '16px' }}>{positive ? '↑' : '↓'}</span> {trend}
      </div>
    ) : (
      <div style={{ fontSize: '14px', color: '#6B7280', fontWeight: 600 }}>{subtitle}</div>
    )}
  </div>
);

export default Dashboard;
