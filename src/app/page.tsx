'use client';

import Link from 'next/link';
import { useState } from 'react';

const features = [
  {
    icon: '🚀',
    title: 'Live Projects',
    desc: 'Real business case simulations with Marketing, Finance & Strategy domains.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: '📋',
    title: 'Placement Preparation',
    desc: 'Resume building, mock interviews, group discussions & more.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: '🏆',
    title: 'Case Competitions',
    desc: 'Participate in live competitions & learn from past winners.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: '🤖',
    title: 'AI MBA Mentor',
    desc: 'Get instant guidance on careers, cases, resumes & interviews.',
    color: 'bg-purple-50 text-purple-600',
  },
];

const mentors = [
  {
    name: 'Arun Sharma',
    bg: 'IIM Ahmedabad',
    expertise: 'Strategy & Consulting',
    image: 'AS',
  },
  {
    name: 'Priya Mehta',
    bg: 'IIM Bangalore',
    expertise: 'Marketing & Branding',
    image: 'PM',
  },
  {
    name: 'Rahul Verma',
    bg: 'IIM Calcutta',
    expertise: 'Finance & Analytics',
    image: 'RV',
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ananya K.',
      role: 'IIM Indore ',
      text: 'The live projects and mentorship helped me crack my dream B-school. The AI mentor was a game-changer for my interview prep!',
      score: '99.6%ile',
    },
    {
      name: 'Rohit S.',
      role: 'IIM Kozhikode ',
      text: 'Case competition prep and structured resources made all the difference. Got placed at McKinsey thanks to the interview prep module.',
      score: '98.2%ile',
    },
    {
      name: 'Sneha P.',
      role: 'FMS Delhi ',
      text: 'From resume building to mock GDs, everything was top-notch. The AI mentor gave me instant feedback that improved my answers.',
      score: '97.8%ile',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-sm font-medium">2,000+ Students Trained</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Crack Top B-Schools with{' '}
                <span className="gradient-text">Old IIM Mentors</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
                Live Projects · Case Prep · Placements · AI Mentor — everything you need to ace your MBA journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/offerings"
                  className="gradient-btn text-navy font-semibold px-8 py-3.5 rounded-xl text-center"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/dashboard"
                  className="border border-gray-500 text-white px-8 py-3.5 rounded-xl text-center font-medium hover:bg-white/5 transition-colors"
                >
                  Talk to AI Mentor 🤖
                </Link>
              </div>
              <div className="flex gap-8 mt-10">
                {[
                  { num: '2000+', label: 'Students' },
                  { num: '50+', label: 'IIM Mentors' },
                  { num: '95%', label: 'Success Rate' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-gold">{stat.num}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-center animate-float">
              <div className="relative">
                <div className="w-72 h-96 rounded-2xl bg-gradient-to-b from-gold/20 to-navy-light/20 border border-white/10 backdrop-blur-sm p-8 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold/30 flex items-center justify-center mb-4">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <span className="text-gold font-semibold text-lg">MBA Mentor AI</span>
                  <span className="text-gray-400 text-sm text-center mt-2">Ask me anything about your MBA journey</span>
                  <div className="mt-6 flex gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Career</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Cases</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A complete ecosystem designed with inputs from Old IIM alumni to maximize your B-school chances.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 card-hover border border-gray-100">
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center text-xl mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Learn from the Best
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our mentors come from India&apos;s top B-schools with years of industry experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-6 card-hover border border-gray-100 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gold font-bold text-xl">{m.image}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy">{m.name}</h3>
                <p className="text-gold text-sm font-medium">{m.bg}</p>
                <p className="text-gray-500 text-sm mt-1">{m.expertise}</p>
                <button className="mt-4 w-full py-2 rounded-xl border border-navy text-navy text-sm font-medium hover:bg-navy hover:text-white transition-all">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Student Success Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real transformations from real students who trusted MBA Partner.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                {testimonials.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      idx === activeTestimonial
                        ? 'bg-gold text-navy ring-2 ring-gold'
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    {t.name.split(' ')[0][0]}
                  </button>
                ))}
              </div>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                &ldquo;{testimonials[activeTestimonial].text}&rdquo;
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
                <span className="text-gold font-bold text-lg">{testimonials[activeTestimonial].score}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Start Your MBA Journey Today
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Join 2000+ students who have transformed their careers with structured mentorship and AI-powered guidance.
          </p>
          <Link
            href="/dashboard"
            className="gradient-btn text-navy font-semibold px-10 py-4 rounded-xl text-lg inline-block"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
