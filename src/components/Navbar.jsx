import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { COLORS } from '../constants/colors';
import logo from '../assets/logo-no-background.svg';

// Navigation links
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Collaborators', to: '/collaborators' },
  { label: 'Research', to: '/research' },
  { label: 'Opportunities', to: '/opportunities' },
  { label: 'Telemedicine', to: '/telemedicine' },
  { label: 'Our Blog', href: 'https://downepal.blogspot.com/', external: true },
  { label: 'Contact Us', to: '/contact' },
];

// Desktop navigation menu
function DesktopNav() {
  const location = useLocation();

  return (
    <nav className="whitespace-nowrap hidden lg:flex items-center space-x-4">
      {navLinks.map(({ label, to, href, external }) => {
        const isActive = to && location.pathname === to;
        const baseClasses = 'relative group text-base transition-colors duration-200 py-1 px-1 rounded-md';

        return external ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
            style={{ color: COLORS.textLight }}
          >
            {label}
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-200"
              style={{ backgroundColor: COLORS.primary }}
            ></span>
          </a>
        ) : (
          <a
            key={label}
            href={to}
            className={baseClasses}
            style={{
              color: isActive ? COLORS.primary : COLORS.textLight,
              fontWeight: isActive ? '600' : '500',
            }}
          >
            {label}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
              style={{ backgroundColor: COLORS.primary }}
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
    <div
      className="lg:hidden absolute top-full left-0 right-0 z-50 border-t"
      style={{ backgroundColor: COLORS.background, borderColor: COLORS.border }}
    >
      <nav className="px-4 sm:px-6 py-4 sm:py-6 space-y-2">
        {navLinks.map(({ label, to, href, external }) => {
          const isActive = to && location.pathname === to;
          const baseClasses =
            'block w-full text-left px-4 py-2 sm:py-3 text-base font-medium rounded-lg transition-colors duration-200';

          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={baseClasses}
              style={{ color: COLORS.textLight }}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ) : (
            <a
              key={label}
              href={to}
              className={baseClasses}
              style={{ color: isActive ? COLORS.primary : COLORS.textLight }}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          );
        })}

        <div className="whitespace-nowrap pt-4 mt-4 border-t space-y-2" style={{ borderColor: '#E0E6ED' }}>
          <a
            href="https://example.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-colors duration-200"
            style={{ backgroundColor: COLORS.highlight, color: COLORS.textLight }}
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </a>
          <a
            href="/signin"
            className="block w-full text-center font-medium px-6 py-3 rounded-lg transition-colors duration-200 border"
            style={{
              backgroundColor: COLORS.textLight,
              borderColor: COLORS.textLight,
              color: COLORS.textDark,
            }}
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
    <header
      className="sticky top-0 z-30 w-full pt-0.5 sm:pt-1"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="w-full px-2 sm:px-4 lg:px-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 min-h-[48px] sm:min-h-[56px]">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-200"
                style={{ color: COLORS.textLight }}
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

            <a href="/" className="flex items-center text-nowrap">
              <img src={logo} alt="Logo" className="h-6 sm:h-8 md:h-10 w-auto p-1 my-1 mr-2" />
              <h1
                className="text-lg sm:text-l md:text-xl font-sans font-semibold tracking-tight mr-10"
                style={{
                  color: COLORS.textLight,
                  fontFamily:
                    'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                }}
              >
                Doctors On Wheels
              </h1>
            </a>

            <DesktopNav />
          </div>

          {/* Fixed desktop buttons: added flex-nowrap and whitespace-nowrap */}
          <div className="hidden lg:flex items-center gap-3 flex-nowrap">
            <a
              href="https://example.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold px-4 sm:px-5 py-2 pr-4 rounded-lg hover:opacity-90 transition-colors duration-200 whitespace-nowrap"
              style={{ backgroundColor: COLORS.highlight, color: COLORS.textLight }}
            >
              Donate Now
            </a>

            <a
              href="/signin"
              className="border font-sans font-medium px-4 py-1.5 rounded-lg hover:bg-white transition-colors duration-200 whitespace-nowrap"
              style={{
                color: COLORS.textLight,
                borderColor: '#E0E6ED',
              }}
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