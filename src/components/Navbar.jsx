import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// Navigation links
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Collaborators', to: '/collaborators' },
  { label: 'Research', to: '/research' },
  { label: 'Opportunities', to: '/opportunities' },
  { label: 'Telemedicine', to: '/telemedicine' },
  {
    label: 'Our Blog',
    href: 'https://downepal.blogspot.com/',
    external: true,
  },
];

// Desktop navigation menu
function DesktopNav() {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center space-x-5">
      {navLinks.map(({ label, to, href, external }) => {
        const isActive = to && location.pathname === to;

        const baseClasses =
          'relative group text-base font-medium transition-colors duration-200 py-1 px-1 rounded-md';
        const activeColor = 'text-[#C4904D] font-semibold';
        const inactiveColor =
          'text-slate-700 hover:text-[#C4904D] hover:bg-slate-100';

        return external ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${inactiveColor}`}
          >
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C4904D] group-hover:w-full transition-all duration-200"></span>
          </a>
        ) : (
          <a
            key={label}
            href={to}
            className={`${baseClasses} ${isActive ? activeColor : inactiveColor}`}
          >
            {label}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ${
                isActive
                  ? 'w-full bg-[#C4904D]'
                  : 'w-0 group-hover:w-full bg-[#C4904D]'
              }`}
            ></span>
          </a>
        );
      })}
    </nav>
  );
}

// Mobile navigation menu
function MobileNav({ isOpen, setIsOpen }) {
  const location = useLocation();
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 z-50">
      <nav className="px-4 sm:px-6 py-4 sm:py-6 space-y-2">
        {navLinks.map(({ label, to, href, external }) => {
          const isActive = to && location.pathname === to;

          const baseClasses =
            'block w-full text-left px-4 py-2 sm:py-3 text-base font-medium rounded-lg transition-colors duration-200';
          const activeColor = 'text-[#C4904D] bg-slate-100';
          const inactiveColor =
            'text-slate-700 hover:text-[#C4904D] hover:bg-slate-100';

          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClasses} ${inactiveColor}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ) : (
            <a
              key={label}
              href={to}
              className={`${baseClasses} ${isActive ? activeColor : inactiveColor}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          );
        })}

        {/* Donate and Sign In buttons (mobile only) */}
        <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
          <a
            href="https://example.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#40ACA3] text-white text-center font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </a>
          <a
            href="/signin"
            className="block w-full border border-slate-300 text-center text-slate-700 font-medium px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </a>
        </div>
      </nav>
    </div>
  );
}

// Navbar wrapper
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white pt-0.5 sm:pt-1 border-b border-slate-200">
      <div className="w-full px-2 sm:px-4 lg:px-3">

        {/* Main nav layout container */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 min-h-[48px] sm:min-h-[56px]">

          {/* Left: logo + nav pane with ideal spacing */}
          <div className="flex items-center gap-10 w-full lg:w-auto">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Logo */}
            <a href="/" className="flex items-center">
              <h1
                className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 tracking-tight"
                style={{
                  fontFamily:
                    'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                }}
              >
                Doctors On Wheels
              </h1>
            </a>

            {/* Desktop nav links (grouped with logo) */}
            <DesktopNav />
          </div>

          {/* Right: Donate + Sign In buttons (desktop only) */}
          <div className="hidden lg:flex items-center gap-3 pr-4">
            {/* Donate Now button */}
            <a
              href="https://example.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#40ACA3] text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:opacity-90 transition-colors duration-200"
            >
              Donate Now
            </a>

            {/* Sign In button (internal data entry) */}
            <a
              href="/signin"
              className="border border-slate-300 text-slate-700 font-medium px-4 py-1.5 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Navbar;
