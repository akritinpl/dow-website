import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
