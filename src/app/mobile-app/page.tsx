'use client';

import { useState } from 'react';

type Screen = 'home' | 'learn' | 'cases' | 'ai' | 'profile';

const screens: Record<Screen, { title: string; content: React.ReactNode }> = {
  home: {
    title: 'Home',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="text-gold font-bold text-sm">M</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">MBA Partner</div>
            <div className="text-[10px] text-gray-400">Your learning journey</div>
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-xs text-gray-400 mb-1">Continue where you left off</div>
          <div className="text-sm font-medium text-white mb-2">Marketing Strategy — Case Study #2</div>
          <div className="w-full h-1.5 bg-white/10 rounded-full">
            <div className="w-3/5 h-full bg-gold rounded-full" />
          </div>
          <div className="text-[10px] text-gray-400 mt-1">60% complete</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Live Projects', icon: '🚀', color: 'bg-blue-500/20 text-blue-400' },
            { label: 'Prep Tools', icon: '📋', color: 'bg-emerald-500/20 text-emerald-400' },
            { label: 'Competitions', icon: '🏆', color: 'bg-amber-500/20 text-amber-400' },
            { label: 'Resources', icon: '📚', color: 'bg-purple-500/20 text-purple-400' },
          ].map((item) => (
            <div key={item.label} className={`rounded-xl p-3 ${item.color} text-center`}>
              <div className="text-lg mb-1">{item.icon}</div>
              <div className="text-[10px] font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  learn: {
    title: 'Learn',
    content: (
      <div className="space-y-3">
        {[
          { title: 'Marketing 101', pro: '45%', tag: 'Core' },
          { title: 'Financial Modeling', pro: '20%', tag: 'Advanced' },
          { title: 'Strategy Consulting', pro: '70%', tag: 'Core' },
          { title: 'Interview Preparation', pro: '30%', tag: 'Prep' },
        ].map((course) => (
          <div key={course.title} className="bg-white/5 rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="text-sm font-medium text-white">{course.title}</div>
                <span className="text-[10px] text-gray-500">{course.tag}</span>
              </div>
              <span className="text-xs text-gold">{course.pro}</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full">
              <div className="h-full bg-gold rounded-full" style={{ width: course.pro }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  cases: {
    title: 'Cases',
    content: (
      <div className="space-y-3">
        {[
          { title: 'Market Entry Strategy', type: 'Solo', time: '2 hrs', status: 'Available' },
          { title: 'Profitability Analysis', type: 'Team', time: '4 hrs', status: 'Live Now' },
          { title: 'Pricing Strategy', type: 'Solo', time: '1 hr', status: 'Available' },
          { title: 'Growth Strategy Sprint', type: 'Team', time: '8 hrs', status: 'Upcoming' },
        ].map((c) => (
          <div key={c.title} className="bg-white/5 rounded-xl p-3 flex justify-between items-center">
            <div>
              <div className="text-sm font-medium text-white">{c.title}</div>
              <div className="text-[10px] text-gray-400">{c.type} · {c.time}</div>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-full ${
              c.status === 'Live Now' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-gray-400'
            }`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  ai: {
    title: 'AI Mentor',
    content: (
      <div className="flex flex-col h-full">
        <div className="flex-1 space-y-3 mb-4">
          <div className="bg-gold/10 rounded-xl p-3 max-w-[85%]">
            <p className="text-xs text-gray-300 leading-relaxed">
              Hi! I&apos;m your MBA Mentor AI. How can I help you today?
            </p>
          </div>
          <div className="bg-navy-light rounded-xl p-3 max-w-[85%] ml-auto">
            <p className="text-xs text-white">What specialization should I choose based on my profile?</p>
          </div>
          <div className="bg-gold/10 rounded-xl p-3 max-w-[85%]">
            <p className="text-xs text-gray-300 leading-relaxed">
              Based on your interest in analytics and strategy, I&apos;d recommend Consulting or Finance. Want me to walk you through the pros and cons?
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 bg-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-gold/30"
            value=""
            readOnly
          />
          <button className="gradient-btn text-navy p-2 rounded-xl text-xs font-medium">Send</button>
        </div>
      </div>
    ),
  },
  profile: {
    title: 'Profile',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="text-gold font-bold text-lg">RG</span>
          </div>
          <div>
            <div className="text-base font-semibold text-white">Ramnath G K</div>
            <div className="text-xs text-gray-400">MBA Aspirant</div>
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-sm text-white font-medium mb-2">Stats</div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'Courses', value: '3' },
              { label: 'Cases', value: '12' },
              { label: 'Points', value: '1.2K' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold text-gold">{s.value}</div>
                <div className="text-[10px] text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {['Bookmarks', 'Certificates', 'Settings', 'Help'].map((item) => (
          <div key={item} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
            <span className="text-sm text-white">{item}</span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    ),
  },
};

const navItems: { id: Screen; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'learn', label: 'Learn', icon: '📖' },
  { id: 'cases', label: 'Cases', icon: '🏆' },
  { id: 'ai', label: 'AI Mentor', icon: '🤖' },
  { id: 'profile', label: 'Profile', icon: '👤' },
];

export default function MobileAppPage() {
  const [screen, setScreen] = useState<Screen>('home');

  return (
    <div>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Mobile App</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take MBA Partner on the go. Learn, practice, and get AI mentorship anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="w-[300px] h-[600px] bg-navy-dark rounded-[3rem] border-4 border-gray-700 shadow-2xl overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
                {/* Screen */}
                <div className="h-full pt-8 pb-16 px-4 flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-4 py-2">
                    {screens[screen].content}
                  </div>
                </div>
                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-navy-dark border-t border-white/10 px-2 py-1">
                  <div className="flex justify-around">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setScreen(item.id)}
                        className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
                          screen === item.id ? 'text-gold' : 'text-gray-500'
                        }`}
                      >
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-[10px] mt-0.5">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">App Features</h2>
                <p className="text-gray-500">
                  Everything from the web platform, optimized for mobile.
                </p>
              </div>
              {[
                { icon: '📱', title: 'Mobile-First UI', desc: 'Native-feeling interface optimized for on-the-go learning' },
                { icon: '🔔', title: 'Push Notifications', desc: 'Never miss deadlines, live cases, or mentor sessions' },
                { icon: '📥', title: 'Offline Access', desc: 'Download resources and case studies for offline reading' },
                { icon: '💬', title: 'Quick AI Chat', desc: 'One-tap access to MBA Mentor AI from anywhere' },
                { icon: '📊', title: 'Progress Sync', desc: 'Seamless progress tracking across web and mobile' },
                { icon: '📅', title: 'Calendar Integration', desc: 'Sync deadlines and sessions with your calendar' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 text-lg">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy">{f.title}</h3>
                    <p className="text-xs text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 pt-4">
                <span className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-xs font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  App Store
                </span>
                <span className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-xs font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3v18h18V3H3zm15 5h-2.42v3.33H18v2.34h-2.42V17h-2.41v-3.33H10.5V17H8.08v-3.33H5.67v-2.34h2.41V8H8.08V5.67h2.42V9h2.67V5.67h2.41V8z"/></svg>
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
