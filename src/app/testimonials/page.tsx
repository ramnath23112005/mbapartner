'use client';

import { useState } from 'react';

const stories = [
  {
    name: 'Ananya K.',
    bg: 'IIM Indore',
    program: 'MBA 2024-26',
    image: 'AK',
    before: 'Scored 92%ile in CAT, unsure about interview prep',
    after: 'Converted IIM Indore, IIM Kozhikode & FMS',
    text: 'The structured interview prep and mock sessions with IIM alumni were incredible. The AI mentor helped me refine my answers daily. Without MBA Partner, I wouldn\'t have converted my dream B-school.',
    score: '99.6%ile',
    placement: 'McKinsey & Company',
    tags: ['CAT Prep', 'Interview', 'Mentorship'],
  },
  {
    name: 'Rohit S.',
    bg: 'IIM Kozhikode',
    program: 'MBA 2024-26',
    image: 'RS',
    before: 'Weak in case interviews, no consulting network',
    after: 'Cracked McKinsey with 4 case interview offers',
    text: 'The case competition prep was a game-changer. I practiced 50+ cases using their frameworks and got real-time feedback from mentors. The consulting prep module is worth its weight in gold.',
    score: '98.2%ile',
    placement: 'McKinsey & Company',
    tags: ['Consulting', 'Case Prep', 'Placement'],
  },
  {
    name: 'Sneha P.',
    bg: 'FMS Delhi',
    program: 'MBA 2024-26',
    image: 'SP',
    before: 'No clarity on specialization, average resume',
    after: 'Top marketer at FMS with 3 PPOs',
    text: 'From resume building to domain-specific prep, MBA Partner covered everything. The career path recommender helped me choose Marketing — best decision ever!',
    score: '97.8%ile',
    placement: 'Hindustan Unilever',
    tags: ['Marketing', 'Resume', 'Career Guidance'],
  },
  {
    name: 'Vikas M.',
    bg: 'IIM Calcutta',
    program: 'MBA 2024-26',
    image: 'VM',
    before: 'Finance novice, struggled with technical interviews',
    after: 'Placed at Goldman Sachs (IB Division)',
    text: 'The financial modeling projects and one-on-one mentorship from Rahul (IIM C alumnus) transformed my understanding. The mock interviews were brutally honest — exactly what I needed.',
    score: '99.1%ile',
    placement: 'Goldman Sachs',
    tags: ['Finance', 'IB', 'Mentorship'],
  },
];

export default function TestimonialsPage() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <div>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Student Outcomes</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real stories. Real results. See how MBA Partner transformed careers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Selector */}
          <div className="flex justify-center gap-3 mb-12">
            {stories.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  idx === active
                    ? 'bg-gold text-navy ring-4 ring-gold/30 scale-110'
                    : 'bg-white text-navy border border-gray-200 hover:border-gold'
                }`}
              >
                {s.image}
              </button>
            ))}
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 card-hover border border-gray-100">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-gold font-bold text-xl">{story.image}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy">{story.name}</h2>
                    <p className="text-gold font-medium">{story.bg}</p>
                    <p className="text-gray-400 text-sm">{story.program}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-500 bg-red-50 px-3 py-1 rounded-full">Before</span>
                    <span className="text-sm text-gray-600">{story.before}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">After</span>
                    <span className="text-sm text-gray-600 font-medium">{story.after}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{story.text}&rdquo;</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-navy/5 text-navy font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 bg-cream rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-gold mb-2">{story.score}</div>
                <div className="text-sm text-gray-500 mb-4">CAT Percentile</div>
                <div className="w-full h-px bg-gray-200 mb-4" />
                <div className="text-sm text-gray-500 mb-1">Placed at</div>
                <div className="text-lg font-semibold text-navy">{story.placement}</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '2000+', label: 'Students', sub: 'Trained & Mentored' },
              { value: '95%', label: 'Success', sub: 'Converted dream B-school' },
              { value: '₹35L+', label: 'Avg Package', sub: 'Top 25% of students' },
              { value: '50+', label: 'IIM Mentors', sub: 'From top B-schools' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-5 text-center card-hover border border-gray-100">
                <div className="text-2xl font-bold text-navy">{s.value}</div>
                <div className="text-gold text-sm font-medium">{s.label}</div>
                <div className="text-gray-400 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
