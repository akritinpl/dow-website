import { COLORS } from '../constants/colors';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={COLORS.primary}><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 12l2 2 4-4" strokeWidth="2" /></svg>
    ),
    title: 'Community Outreach',
    text: 'Bringing healthcare and awareness to rural and underserved communities.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={COLORS.primary}><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /><path d="M8 12h8" strokeWidth="2" /></svg>
    ),
    title: 'Telemedicine',
    text: 'Leveraging technology to connect patients and doctors across distances.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={COLORS.primary}><path d="M12 4v16m8-8H4" strokeWidth="2" /></svg>
    ),
    title: 'Research & Innovation',
    text: 'Promoting clinical research and innovative healthcare solutions.'
  }
];

function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start" style={{ background: COLORS.background, position: 'relative' }}>
      {/* Hero Section - No Card, Just Centered Content */}
      <section className="relative z-10 flex flex-col items-center justify-center w-full pt-16 pb-8 px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: COLORS.textLight, fontFamily: 'Faustina' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          On the Move, For the Community!
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
          style={{ color: COLORS.textLight, opacity: 0.92 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Empowering Nepal’s communities through mobile healthcare, telemedicine, and research-driven innovation.
        </motion.p>
        <motion.a
          href="#about"
          className="inline-block px-8 py-3 rounded-lg font-semibold text-base md:text-lg transition-colors duration-200 shadow-md relative"
          style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
          whileHover={{ scale: 1.06, backgroundColor: COLORS.highlight }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              `0 0 0 0 ${COLORS.primary}55`,
              `0 0 0 8px ${COLORS.primary}22`,
              `0 0 0 0 ${COLORS.primary}55`
            ]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          Learn More
        </motion.a>
        {/* Animated Scroll Down Indicator */}
        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <span className="text-xs text-gray-200 mb-1" style={{ letterSpacing: 2 }}>SCROLL</span>
          <motion.svg
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>
      </section>
      {/* Features Section */}
      <motion.section
        className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="bg-white rounded-xl shadow-md flex flex-col items-center p-6 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.primary }}>{f.title}</h3>
            <p className="text-gray-700 text-base" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{f.text}</p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}

export default Home;  
