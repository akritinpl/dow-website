import { COLORS } from '../constants/colors';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const features = [
  {
    image: '/images/CommunityInvolvement.jpg', 
    title: 'Community Outreach',
    text: 'Bringing healthcare and awareness to rural and underserved communities'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /><path d="M8 12h8" strokeWidth="2" /></svg>
    ),
    image: '/images/telehealth.jpg', 
    title: 'Telemedicine',
    text: 'Leveraging technology to connect patients and doctors across distances'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><path d="M12 4v16m8-8H4" strokeWidth="2" /></svg>
    ),
    image: '/images/research.jpeg', 
    title: 'Research & Innovation',
    text: 'Promoting clinical research and innovative healthcare solutions'
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start relative" style={{ background: COLORS.background, position: 'relative' }}>
      {/* Hero Section - No Card, Just Centered Content */}
      <section className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 text-center">
        {/* Background images with overlay - only for hero section */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Background image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: `url('/images/bg.jpg')`,
            opacity: 0.15
          }}></div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50"></div>
          
          {/* Subtle background accent */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-highlight/8 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-6 relative z-10"
          style={{ color: COLORS.textLight, fontFamily: 'Lora' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          On the Move, For the Community!
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-2xl mb-2 mt-5 max-w-3xl mx-auto leading-relaxed relative z-10"
          style={{ color: '#9CA3AF', opacity: 0.9, fontFamily: 'Lora, serif', fontWeight: '700' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Bridging local impact with global collaboration         
          </motion.p>
        <motion.p
        className="text-l md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed relative z-10"
        style={{ color: '#9CA3AF', opacity: 0.9, fontFamily: 'Lora, serif', fontWeight: '200' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        >
        Empowering Nepali communities through mobile healthcare, telemedicine, and research-driven innovation        
        </motion.p>
        
        <motion.a
          href="/about#mission"
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
      <div className="w-full pt-16" style={{ background: "rgb(230, 225, 210)" }}>
        <motion.section
          className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title and Cards Container */}
          <div className="mb-12">
            {/* Title Section */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: COLORS.primary, fontFamily: 'Lora' }}
              >
                Our Work
              </h2>
              <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: COLORS.primary }}></div>
            </motion.div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="flex flex-col items-center text-center cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.04 }}
                onClick={() => {
                  const routes = ['/opportunities', '/telemedicine', '/research'];
                  navigate(routes[i]);
                }}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden w-full transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg mb-4">
                  <div className="h-56 sm:h-64 md:h-72 w-full overflow-hidden relative">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-100"
                    />
                  </div>
                </div>

                {/* Text Content Below Card */}
                <div className="px-2">
                  <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.primary }}>{f.title}</h3>
                  <p className="text-gray-700 text-base" style={{ fontFamily: 'Lora, serif' }}>{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Past Projects Section */}
      <div className="w-full py-16" style={{backgroundColor: COLORS.pageBackground}}>
        <motion.section
          className="relative z-10 w-full max-w-5xl mx-auto px-4"
          initial={{ opacity: 1, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title Section */}
          <div className="mb-12">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: COLORS.primary, fontFamily: 'Lora' }}
              >
                Past Projects
              </h2>
              <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: COLORS.primary }}></div>
            </motion.div>
          </div>

          {/* Health and Sanitation Awareness Campaigns */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8" style={{ color: COLORS.primary }}>
              Health and Sanitation Awareness Campaigns
            </h3>
            <div className="space-y-12">
              {/* HASAC 2012 - Barahatwa */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>1st HASAC 2012 - Barahatwa, Sarlahi</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Health and Sanitation Awareness Campaign conducted from August 26-27, 2012 in Barahatwa, Sarlahi
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/HASAC-${num}.png`}
                        alt={`HASAC 2012 Barahatwa ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">2012</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Sarlahi</span>
                </div>
              </motion.div>

              {/* HASAC 2012 - Waling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>HASAC 2012 - Waling</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Health and Sanitation Awareness Campaign conducted from August 28-29, 2012 in Waling
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[1, 2].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/Waling-${num}.png`}
                        alt={`Waling 2012 ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">2012</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Waling</span>
                </div>
              </motion.div>

              {/* HASAC 2013 - Maya Universe Academy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>HASAC 2013 - Maya Universe Academy</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Health and Sanitation Awareness Campaign conducted at Maya Universe Academy, Chisapani, Tanahu
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/Maya-${num}.png`}
                        alt={`Maya Universe Academy ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">2013</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Tanahu</span>
                </div>
              </motion.div>

              {/* HASAC 2017 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>4th HASAC 2017 - Multiple Schools</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Over 600 lab tests and routine body checkups conducted at Pushpasadan H. School, Kirtipur. Agreement signed with 5 schools including St. Xavier's Godavari, St. Xavier's Jawalakhel, and Laboratory High School
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[0, 1, 2].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/2017-${num}.png`}
                        alt={`HASAC 2017 ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">2017</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Kathmandu</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Health Camps */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8" style={{ color: COLORS.primary }}>
              Health Camps
            </h3>
            <div className="space-y-12">
              {/* Earthquake Relief 2015 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>Earthquake Relief Camp 2015</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Three-day health camp at Sindhupalchok providing emergency medical assistance following the devastating earthquake
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/Rahat-${num}.png`}
                        alt={`Earthquake Relief ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">2015</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Relief</span>
                </div>
              </motion.div>

              {/* Maya Universe Academy Health Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>Maya Universe Academy Health Camp</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Comprehensive health services including blood grouping, deworming, BMI, nutritional status assessment, and health science classes
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/Mayav2-${num}.png`}
                        alt={`Maya Health Camp ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Tanahu</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Students</span>
                </div>
              </motion.div>

              {/* Rohingya Health Camp */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>Rohingya Refugee Health Camp 2017</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Wave 2 health camp (Oct 29-31, 2017) at Cox Bazar, partnering with Médecins Sans Frontières and Jamjam Welfare Foundation
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/Ro-${num}.png`}
                        alt={`Rohingya Camp ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">2017</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Bangladesh</span>
                </div>
              </motion.div>

              {/* GAA Health Camp Maya */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>GAA Health Camp - Maya School</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Led by Dr. Shirish KC with Godavari Alumni Association, providing blood grouping, BMI, ENT checkups, general medicine, orthopedics, and psychological counseling
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/GAA-${num}.png`}
                        alt={`GAA Health Camp ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Tanahu</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">GAA</span>
                </div>
              </motion.div>

              {/* Kist Medical College Camp */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>Community Health Camp - Godavari</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Doctors from KIST Medical College represented DOW in the community health camp at Maan Daanda of Godavari, conducted by Nepal Jesuit Society
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[1, 2].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/KIST-${num}.png`}
                        alt={`KIST Camp ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Godavari</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Community</span>
                </div>
              </motion.div>

              {/* Syalbas Health Camp */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>Syalbas Health Camp - Syangja</h4>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  Over 500 patients checked with ultrasonography and ECG facilities available. Telemedicine unit installed at Pidikhola Swastha Chowki
                </p>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="h-48 sm:h-56 md:h-64 bg-gradient-to-br overflow-hidden rounded-lg" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={`/images/TeleSyangja-${num}.png`}
                        alt={`Syangja Camp ${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Syangja</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Telemedicine</span>
                </div>
              </motion.div>
            </div>
          </div>

        </motion.section>
      </div>
    </main>
  );
}

export default Home;