'use client';

import { useState } from 'react';

const enrolledPrograms = [
  { name: 'Marketing Strategy', progress: 75, next: 'Complete Case Study #2' },
  { name: 'Interview Prep', progress: 40, next: 'Mock Interview Session' },
  { name: 'Financial Modeling', progress: 15, next: 'Watch Module 1' },
];

const upcomingDeadlines = [
  { title: 'Case Crack League Submission', date: 'Jun 20, 2026', type: 'Competition' },
  { title: 'GD Practice Session', date: 'Jun 22, 2026', type: 'Workshop' },
  { title: 'Mentor Call - Arun Sharma', date: 'Jun 25, 2026', type: 'Mentorship' },
];

const savedResources = [
  { title: 'Consulting Frameworks PDF', type: 'PDF' },
  { title: 'Mock Interview Questions', type: 'Doc' },
  { title: 'Marketing Case Studies', type: 'Video' },
];

export default function DashboardPage() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy">Welcome back, Ramnath</h1>
            <p className="text-gray-500 mt-1">Here&apos;s your learning progress today.</p>
          </div>
          <button
            onClick={() => setShowChat(!showChat)}
            className="gradient-btn text-navy font-medium px-5 py-2.5 rounded-xl text-sm flex items-center gap-2"
          >
            <span>🤖</span>
            Ask AI Mentor
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Courses Enrolled', value: '3', change: '+1 this week' },
            { label: 'Completed', value: '42%', change: 'Avg. progress' },
            { label: 'Mentor Sessions', value: '5', change: 'This month' },
            { label: 'Case Points', value: '1,280', change: 'Top 15%' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="text-gray-500 text-xs mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-navy">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-navy mb-4">Your Programs</h2>
              <div className="space-y-5">
                {enrolledPrograms.map((program) => (
                  <div key={program.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-navy">{program.name}</span>
                      <span className="text-xs text-gray-500">{program.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500"
                        style={{ width: `${program.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1.5">
                      <span className="text-xs text-gray-400">Next: {program.next}</span>
                      <button className="text-xs text-gold font-medium hover:underline">Continue</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-navy mb-4">Upcoming Deadlines</h2>
              <div className="space-y-3">
                {upcomingDeadlines.map((d) => (
                  <div key={d.title} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <div>
                      <div className="text-sm font-medium text-navy">{d.title}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{d.date}</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-navy/5 text-navy font-medium">
                      {d.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Mentor Mini */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">MBA Mentor AI</h3>
                  <p className="text-gray-400 text-xs">Online</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                You should complete Case Study #2 this week to stay on track for your Marketing Strategy program.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Career Advice', 'Case Prep', 'Resume Help'].map((btn) => (
                  <span key={btn} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-gray-300 cursor-pointer hover:bg-white/20 transition-colors">
                    {btn}
                  </span>
                ))}
              </div>
            </div>

            {/* Saved Resources */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-navy mb-4">Saved Resources</h2>
              <div className="space-y-3">
                {savedResources.map((r) => (
                  <div key={r.title} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center text-xs font-bold text-navy">
                      {r.type === 'PDF' ? 'PDF' : r.type === 'Doc' ? 'DOC' : 'MP4'}
                    </div>
                    <span className="text-sm text-gray-700">{r.title}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-gold font-medium hover:underline">
                View All Resources
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-navy mb-3">Quick Actions</h2>
              <div className="space-y-2">
                {['Book Mentor Session', 'Join Live Case', 'Practice GD'].map((action) => (
                  <button key={action} className="w-full text-left px-4 py-2.5 rounded-xl bg-gray-50 text-sm text-gray-700 hover:bg-navy hover:text-white transition-colors">
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
