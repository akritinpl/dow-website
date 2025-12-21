import { COLORS } from '../constants/colors';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Opportunities() {
  const [showContactForm, setShowContactForm] = useState(false);

  const opportunities = [
    {
      title: 'Volunteering',
      subtitle: 'Make a Difference in Your Community',
      categories: [
        {
          name: 'School Teaching',
          description: 'Share your knowledge and inspire the next generation through educational programs in rural schools.',
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        },
        {
          name: 'Farms & Small Industries',
          description: 'Support sustainable development and economic growth in rural communities through hands-on collaboration.',
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Internship & Externship',
      subtitle: 'Gain Practical Healthcare Experience',
      categories: [
        {
          name: 'Hospital Placements in Nepal',
          description: 'Immerse yourself in clinical practice at partner hospitals across Nepal, working alongside experienced healthcare professionals.',
          icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start" style={{ background: COLORS.pageBackground }}>
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto pt-16 pb-8 px-8 md:px-10 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: COLORS.primary }}>
            Opportunities
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: COLORS.textDark }}>
            Discover volunteer opportunities, observerships, and collaborative projects that make a difference in healthcare delivery.
          </p>
        </div>
      </section>

      {/* Opportunities Cards */}
      <section className="w-full max-w-6xl mx-auto px-8 md:px-10 lg:px-12 pb-20">
        <div className="space-y-12">
          {opportunities.map((opportunity, idx) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: COLORS.primary, fontFamily: 'Lora' }}>
                  {opportunity.title}
                </h3>
                <p className="text-lg" style={{ color: COLORS.textDark, opacity: 0.8 }}>
                  {opportunity.subtitle}
                </p>
                <div className="w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {opportunity.categories.map((category, catIdx) => (
                  <motion.div
                    key={category.name}
                    className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ border: `1px solid ${COLORS.border}` }}
                    initial={{ opacity: 0, x: catIdx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + catIdx * 0.1, duration: 0.5 }}
                  >
                    {/* Icon */}
                    <div className="mb-4 inline-flex p-3 rounded-lg" style={{ backgroundColor: `${COLORS.primary}15`, color: COLORS.primary }}>
                      {category.icon}
                    </div>

                    {/* Category Name */}
                    <h4 className="text-xl font-bold mb-3" style={{ color: COLORS.primary }}>
                      {category.name}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                      {category.description}
                    </p>

                    {/* Coming Soon Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: `${COLORS.highlight}20`, color: COLORS.primary }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Details Coming Soon
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Request More Info Section */}
      <section className="w-full py-16 relative overflow-hidden" style={{ backgroundColor: COLORS.background }}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full" style={{ backgroundColor: COLORS.highlight }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 md:px-10 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: COLORS.white, fontFamily: 'Lora' }}>
              Interested in Learning More?
            </h3>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: COLORS.textLight, opacity: 0.9 }}>
              Get in touch with us for detailed information about our programs, application requirements, and upcoming opportunities.
            </p>

            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
              whileHover={{ scale: 1.05, backgroundColor: COLORS.highlight }}
              whileTap={{ scale: 0.98 }}
            >
              Request More Information
            </motion.a>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{ color: COLORS.textLight }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Personalized Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Start Your Journey</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Opportunities;