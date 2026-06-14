import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-navy font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-lg">MBA Partner</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Empowering MBA aspirants with structured learning, live projects,
              case competitions, and AI-powered mentorship from Old IIM graduates.
            </p>
            <div className="flex gap-4 mt-6">
              {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                <span key={social} className="text-gray-500 hover:text-gold cursor-pointer text-sm transition-colors">
                  {social}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">Platform</h4>
            <ul className="space-y-3">
              {['Offerings', 'Dashboard', 'AI Mentor', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link href={item === 'AI Mentor' ? '/dashboard' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} MBA Partner. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 hover:text-white text-xs cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-gray-500 hover:text-white text-xs cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
