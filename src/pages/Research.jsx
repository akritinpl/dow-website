import { COLORS } from '../constants/colors';
import { motion } from 'framer-motion';

function Research() {
  return(
    <main className="min-h-screen w-full flex flex-col items-center justify-start" style={{ background: COLORS.pageBackground }}>
      <section className="w-full max-w-6xl mx-auto pt-16 pb-8 px-8 md:px-10 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: COLORS.primary }}>
            Research
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: COLORS.textDark }}>
            Promoting clinical research and innovative healthcare solutions to advance medical knowledge and improve patient care.
          </p>
        </div>

        {/* Announcement Full-Width Band */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-10 sm:py-14 mb-10"
          style={{
            backgroundColor: '#e8e2d6',
            boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.04), inset 0 -1px 0 rgba(0,0,0,0.04)'
          }}
        >
          <div className="max-w-6xl mx-auto px-8 md:px-10 lg:px-12">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border shadow p-6 sm:p-8"
              style={{ borderColor: COLORS.border }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: COLORS.primary }}></div>

              <div className="flex items-start gap-3 mb-2">
                <span role="img" aria-label="globe" className="text-2xl">🌍</span>
                <h3 className="text-2xl md:text-3xl font-bold leading-snug" style={{ color: COLORS.primary }}>
                  Taking Nepal’s Research to the Global Stage
                </h3>
                <span role="img" aria-label="globe" className="text-2xl">🌍</span>
              </div>

              <div className="h-px my-4" style={{ backgroundColor: COLORS.border }}></div>

              <div className="space-y-4" style={{ color: COLORS.textDark }}>
                <p>We are excited to share that our recently published paper</p>
                <p className="text-lg md:text-xl font-semibold">
                  “Assessment of Mothers’ Knowledge and Practices Regarding Oral Rehydration Solution in Sindhuli District, Nepal”
                </p>
                <p>
                  has opened doors to three prestigious international conferences in Paris, Dubai, and Budapest, all expenses covered. One of our collaborators will proudly represent Doctors on Wheels, presenting this impactful research to a global audience and highlighting how community-centered studies from rural Nepal can inform public health strategies worldwide.
                </p>
                <p>
                  This journey from fieldwork in Sindhuli to speaking at world forums shows the power of research rooted in real challenges and driven by a vision for healthier futures.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium border" style={{ backgroundColor: '#ffffff', color: COLORS.primary, borderColor: COLORS.border }}>✈ Paris</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium border" style={{ backgroundColor: '#ffffff', color: COLORS.primary, borderColor: COLORS.border }}>✈ Dubai</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium border" style={{ backgroundColor: '#ffffff', color: COLORS.primary, borderColor: COLORS.border }}>✈ Budapest</span>
                </div>

                <div className="pt-5">
                  <a
                    href="https://lnkd.in/eRtHeYi7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold shadow-sm transition-colors duration-200"
                    style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                  >
                    📖 Read the full paper
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div className="w-full max-w-6xl mx-auto px-8 md:px-10 lg:px-12 pb-16">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary, fontFamily: 'Lora' }}>
              Publications
            </h3>
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
          </div>

          <div className="space-y-8">
            {/* Publication 1 - Dengue Case Report */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 md:p-8 border hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: COLORS.border }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}15` }}>
                  <svg className="w-6 h-6" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>
                    DOW's First Case Report in Elsevier - Unique Dengue Case
                  </h4>
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                    Excited to publish DOW's first case report in Elsevier - a unique case of a Dengue patient. Great work by Dr Bikash Khadka and the team at Nepal Mediciti Hospital.
                  </p>
                  <a
                    href="http://www.sciencedirect.com/science/article/pii/S2214250924000726"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                  >
                    Read Publication
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Publication 2 - Fiberoptic Intubation */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 md:p-8 border hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: COLORS.border }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}15` }}>
                  <svg className="w-6 h-6" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>
                    Failure of Fiberoptic Intubation Case Report
                  </h4>
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                    We recently published a case report on failure of Fiberoptic Intubation - which is the gold standard technique during difficult airway management. An interesting read. All credit to Dr Bikash Khadka, Dr Kushal Pradhan and team from Nepal Mediciti.
                  </p>
                  <a
                    href="https://onlinelibrary.wiley.com/doi/10.1002/ccr3.9696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                  >
                    Read Publication
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Publication 3 - Another Case Study */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 md:p-8 border hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: COLORS.border }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.primary}15` }}>
                  <svg className="w-6 h-6" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>
                      BRASH Syndrome - Case Study Published
                  </h4>
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                    Another case study published! Thanks to Dr Bikash Khadka and the team at Nepal Mediciti.
                  </p>
                  <a
                    href="https://onlinelibrary.wiley.com/doi/full/10.1002/ccr3.9693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                  >
                    Read Publication
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Research;