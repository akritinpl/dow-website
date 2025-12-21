import { COLORS } from "../constants/colors";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <footer className="text-center py-8 mt-12 text-sm text-[--color-text]" style={{backgroundColor: COLORS.pageBackground}}>
    <div className="w-full px-4 mb-10" style={{ backgroundColor: COLORS.white, height: "2px" }}></div>      
    <div className="max-w-4xl mx-auto px-4">
        <Link to="/contact" className="text-lg font-semibold mb-4 text-[--color-primary] hover:text-[--color-secondary] transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:scale-105 transform">
          Contact Us
          <svg className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>

        <address className="not-italic space-y-2 text-[--color-text]">
          <p><strong>Address:</strong> Kathmandu, Bagmati Nepal 44600</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@downepal.com" target = "_blank" className="text-[--color-secondary] underline hover:text-yellow-700">
            info@downepal.com
            </a>
          </p>
        </address>
      </div>

      <div className="mt-6 flex justify-center gap-6 text-xl">
      <a
        href="https://www.facebook.com/downepal"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[--color-secondary] transition-transform hover:scale-110"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/dow.nepal/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[--color-secondary] transition-transform hover:scale-110"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/company/downepal/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[--color-secondary] transition-transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="mailto:info@downepal.com"
        target="_blank"
        className="hover:text-[--color-secondary] transition-transform hover:scale-110"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>
    </footer>
  );
}

export default Contact;