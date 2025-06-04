import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { COLORS } from '../constants/colors';

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
  {
    label: 'Contact Us', to: '/contact' },
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
        const activeColor = `text-[${COLORS.primary}] font-semibold`;
        const inactiveColor =
          `text-[${COLORS.textLight}] hover:text-[${COLORS.primary}] hover:bg-[${COLORS.border}]`;

        return external ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${inactiveColor}`}
          >
            {label}
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[${COLORS.primary}] group-hover:w-full transition-all duration-200`}></span>
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
                  ? `w-full bg-[${COLORS.primary}]`
                  : `w-0 group-hover:w-full bg-[${COLORS.primary}]`
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
    <div className={`lg:hidden absolute top-full left-0 right-0 bg-[${COLORS.background}] border-t border-[${COLORS.border}] z-50`}>
      <nav className="px-4 sm:px-6 py-4 sm:py-6 space-y-2">
        {navLinks.map(({ label, to, href, external }) => {
          const isActive = to && location.pathname === to;

          const baseClasses =
            'block w-full text-left px-4 py-2 sm:py-3 text-base font-medium rounded-lg transition-colors duration-200';
          const activeColor = `text-[${COLORS.primary}]`;
          const inactiveColor = `text-[${COLORS.textLight}]`;

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
            className={`block w-full bg-[${COLORS.highlight}] text-[${COLORS.textLight}] text-center font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-colors duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </a>
          <a
            href="/signin"
            className={`block w-full border border-[${COLORS.textLight}] text-center text-[${COLORS.textDark}] font-medium px-6 py-3 rounded-lg bg-[${COLORS.textLight}] transition-colors duration-200`}
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
    <header className={`sticky top-0 z-30 w-full bg-[${COLORS.background}] pt-0.5 sm:pt-1 border-b border-slate-200`}>
      <div className="w-full px-2 sm:px-4 lg:px-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 min-h-[48px] sm:min-h-[56px]">
          <div className="flex items-center gap-10 w-full lg:w-auto">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-lg text-[${COLORS.textLight}] hover:bg-[${COLORS.primary}] transition-colors duration-200`}
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

            <a href="/" className="flex items-center">
              <h1
                className={`text-lg sm:text-xl md:text-2xl font-semibold text-[${COLORS.textLight}] tracking-tight`}
                style={{
                  fontFamily:
                    'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                }}
              >
                Doctors On Wheels
              </h1>
            </a>

            <DesktopNav />
          </div>

          <div className="hidden lg:flex items-center gap-3 pr-4">
            <a
              href="https://example.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[${COLORS.highlight}] text-[${COLORS.textLight}] font-semibold px-4 sm:px-5 py-2 rounded-lg hover:opacity-90 transition-colors duration-200`}
            >
              Donate Now
            </a>

            <a
              href="/signin"
              className={`border border-slate-300 text-[${COLORS.textLight}] font-medium px-4 py-1.5 rounded-lg hover:bg-[${COLORS.textLight}] hover:text-[${COLORS.primary}] transition-colors duration-200`}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Navbar;