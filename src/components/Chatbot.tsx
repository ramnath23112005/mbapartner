'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const quickReplies = [
  'Career Advice',
  'Case Prep',
  'Resume Help',
  'Interview Prep',
];

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content:
      "Hello! I'm your **MBA Mentor AI**. I can help you with:\n\n• Career guidance & specialization advice\n• Case study frameworks & prep\n• Resume & interview tips\n• Resource recommendations\n\nHow can I assist you today?",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const responses: Record<string, string> = {
        'career advice':
          "Based on your interests, here's my recommendation:\n\n**1. Marketing** – If you enjoy branding, consumer behavior, and strategy\n**2. Finance** – If you're analytical and enjoy numbers\n**3. Consulting** – If you love problem-solving across industries\n**4. Operations** – If you're into supply chain and logistics\n\n💡 *Pro Tip:* Talk to alumni from each domain before deciding.",
        'case prep':
          "Here's a structured approach to cracking case studies:\n\n**Step 1: Clarify** – Ask questions to understand the problem\n**Step 2: Structure** – Use frameworks (3C, 4P, SWOT, Porter's 5 Forces)\n**Step 3: Analyze** – Do calculations, think through implications\n**Step 4: Recommend** – Give a clear, actionable suggestion\n\n📚 *Recommended:* Practice 2 cases daily from our repository.",
        'resume help':
          "Here's my resume checklist:\n\n✅ **STAR Format** – Use Situation, Task, Action, Result\n✅ **Quantify Impact** – e.g., \"Increased sales by 30%\"\n✅ **One Page Only** – Recruiters spend 6 seconds scanning\n✅ **Keywords** – Match them with job descriptions\n✅ **Clean Design** – No fancy templates, use standard formats\n\nWant me to review a specific section?",
        'interview prep':
          "Here's your interview prep roadmap:\n\n**1. Tell me about yourself** – Prepare a 60-second pitch\n**2. Why MBA?** – Connect your past → MBA → future goals\n**3. Domain Knowledge** – Revise core concepts\n**4. Current Affairs** – Know top business news\n**5. HR Questions** – Practice \"strengths/weaknesses\" type questions\n\n🎯 *Pro tip:* Do 3 mock interviews before the real one.",
      };

      let response = '';
      const lower = content.toLowerCase();

      if (lower.includes('career') || lower.includes('specialization') || lower.includes('which') || lower.includes('choose')) {
        response = responses['career advice'];
      } else if (lower.includes('case') || lower.includes('framework') || lower.includes('study') || lower.includes('simulator')) {
        response = responses['case prep'];
      } else if (lower.includes('resume') || lower.includes('cv')) {
        response = responses['resume help'];
      } else if (lower.includes('interview') || lower.includes('gd') || lower.includes('group discussion') || lower.includes('mock')) {
        response = responses['interview prep'];
      } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        response = "Hello! 👋 Ready to accelerate your MBA journey. Ask me about career advice, case prep, resume tips, or interview prep!";
      } else {
        response =
          "Great question! Based on my training, here's what I'd recommend:\n\n" +
          "• **Explore our Offerings Page** for structured learning paths\n" +
          "• **Check the Dashboard** to track your progress\n" +
          "• **Book a mentor session** for personalized guidance\n\n" +
          "Could you be more specific so I can help you better? 😊";
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-btn text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 chatbot-enter overflow-hidden">
          <div className="bg-navy p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">MBA Mentor AI</h3>
                <p className="text-gray-400 text-xs">Online • Old IIM Mentor</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-navy text-white rounded-br-md'
                      : 'bg-white text-gray-800 shadow-sm rounded-bl-md border border-gray-100'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-gold hover:text-gold hover:bg-gold/5 transition-colors"
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                placeholder="Ask your MBA Mentor..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="gradient-btn text-white p-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
