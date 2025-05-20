import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-[#1C1F33] whitespace-nowrap">Doctors on Wheels</h1>
        <nav className="mt-3 md:mt-0 flex flex-wrap gap-6">
          <Link className="text-[#C4904D] font-medium text-base hover:bg-[#F5F5F0] px-2 py-1 rounded transition" to="/">Home</Link>
          <Link className="text-[#C4904D] font-medium text-base hover:bg-[#F5F5F0] px-2 py-1 rounded transition" to="/about">About Us</Link>
          <Link className="text-[#C4904D] font-medium text-base hover:bg-[#F5F5F0] px-2 py-1 rounded transition" to="/collaborators">Collaborators</Link>
          <Link className="text-[#C4904D] font-medium text-base hover:bg-[#F5F5F0] px-2 py-1 rounded transition" to="/research">Research</Link>
          <Link className="text-[#C4904D] font-medium text-base hover:bg-[#F5F5F0] px-2 py-1 rounded transition" to="/opportunities">Opportunities</Link>
          <Link className="text-[#C4904D] font-medium text-base hover:bg-[#F5F5F0] px-2 py-1 rounded transition" to="/telemedicine">Telemedicine</Link>
          <a
            className="text-[#C4904D] font-medium text-base hover:bg-[#F5F5F0] px-2 py-1 rounded transition"
            href="https://downepal.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Blog
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
