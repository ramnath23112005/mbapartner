'use client';

import { useState } from 'react';

type Tab = 'live-projects' | 'placement' | 'competitions' | 'resources' | 'mentorship';

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'live-projects', label: 'Live Projects', icon: '🚀' },
  { id: 'placement', label: 'Placement Prep', icon: '📋' },
  { id: 'competitions', label: 'Case Competitions', icon: '🏆' },
  { id: 'resources', label: 'Resource Repository', icon: '📚' },
  { id: 'mentorship', label: 'Mentorship', icon: '🎓' },
];

const content: Record<Tab, { items: { title: string; desc: string; tags: string[]; cta: string }[] }> = {
  'live-projects': {
    items: [
      { title: 'Marketing Strategy Sim', desc: 'Build a go-to-market strategy for a D2C brand. Real data, real decisions.', tags: ['Marketing', 'Strategy'], cta: 'Start Project' },
      { title: 'Financial Modeling Challenge', desc: 'Create a financial model for a Series-A startup. Revenue projections, unit economics.', tags: ['Finance', 'Analytics'], cta: 'Start Project' },
      { title: 'Consulting Case Sprint', desc: 'Solve a market entry case for a Fortune 500 company in 48 hours.', tags: ['Strategy', 'Consulting'], cta: 'Start Project' },
    ],
  },
  placement: {
    items: [
      { title: 'Resume Building Workshop', desc: 'Get your resume reviewed by IIM alumni. STAR format, ATS optimization.', tags: ['Resume', 'Personal Branding'], cta: 'Book Session' },
      { title: 'Mock Interview Series', desc: 'One-on-one mock interviews with personalized feedback and improvement plan.', tags: ['Interview', 'Feedback'], cta: 'Schedule Now' },
      { title: 'Group Discussion Practice', desc: 'Weekly GD sessions on current affairs with peer review and expert feedback.', tags: ['GD', 'Current Affairs'], cta: 'Join GD' },
    ],
  },
  competitions: {
    items: [
      { title: 'Case Crack League S3', desc: 'Compete with 500+ teams. Solve real business cases judged by industry experts.', tags: ['Live', 'Team'], cta: 'Register Now' },
      { title: 'Strategy Hackathon', desc: '48-hour solo challenge. Build a strategic roadmap for a given business problem.', tags: ['Solo', 'Strategy'], cta: 'Participate' },
      { title: 'Past Winners Showcase', desc: 'Learn from winning case presentations and frameworks used by previous champions.', tags: ['Showcase'], cta: 'View Gallery' },
    ],
  },
  resources: {
    items: [
      { title: 'Case Study Library', desc: '200+ case studies across consulting, marketing, finance, and operations.', tags: ['PDF', 'Frameworks'], cta: 'Browse Library' },
      { title: 'Interview Question Bank', desc: '1000+ real interview questions from top B-schools with model answers.', tags: ['Interview', 'Practice'], cta: 'Start Practicing' },
      { title: 'Framework Repository', desc: 'SWOT, 3C, 4P, Porter\'s Five Forces, BCG Matrix — explained with examples.', tags: ['Frameworks', 'Guides'], cta: 'Explore Frameworks' },
    ],
  },
  mentorship: {
    items: [
      { title: 'Arun Sharma', desc: 'IIM Ahmedabad | Ex-McKinsey. Expert in strategy consulting and case interview prep.', tags: ['Strategy', 'Consulting'], cta: 'Book Session' },
      { title: 'Priya Mehta', desc: 'IIM Bangalore | Ex-Unilever. Marketing leadership with 12+ years of brand management.', tags: ['Marketing', 'Branding'], cta: 'Book Session' },
      { title: 'Rahul Verma', desc: 'IIM Calcutta | Ex-Goldman Sachs. Finance expert specializing in investment banking prep.', tags: ['Finance', 'IB'], cta: 'Book Session' },
    ],
  },
};

export default function OfferingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('live-projects');

  return (
    <div>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Our Offerings</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A complete ecosystem designed to take you from aspirant to admit — all in one place.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content[activeTab].items.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 card-hover border border-gray-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-navy/5 text-navy font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="w-full py-2.5 rounded-xl gradient-btn text-navy font-medium text-sm">
                  {item.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
