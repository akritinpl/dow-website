import { COLORS } from '../constants/colors';
import { motion } from 'framer-motion';
import { Heart, Receipt, CheckCircle } from 'lucide-react';

function Donate() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center"
      style={{ backgroundColor: COLORS.pageBackground }}
    >
      {/* HERO */}
      <section className="relative w-full h-[320px] md:h-[360px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${COLORS.background} 0%, #003366 50%, ${COLORS.background} 100%)` }}></div>
        <div className="absolute inset-0 bg-[url('/images/Unsplash_background.jpg')] opacity-10 bg-cover bg-center"></div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Make a Difference Today
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Your generous support helps us deliver essential medical care to underserved communities across Nepal.
          </p>
        </motion.div>
      </section>

      {/* PAYMENT METHODS SECTION */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 -mt-8 md:-mt-12 relative z-10">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-0 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-30 blur-3xl -z-10" style={{ background: `radial-gradient(circle, ${COLORS.primary}40, transparent)` }}></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-20 blur-3xl -z-10" style={{ background: `radial-gradient(circle, ${COLORS.background}30, transparent)` }}></div>

        <motion.div
          className="max-w-7xl mx-auto relative"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* PAYMENT METHODS */}
          <div className="relative flex flex-col items-center mt-5">
            <div className="mb-12 md:mb-16 text-left max-w-3xl">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold" style={{ color: COLORS.primary}}>
                Choose your preferred payment method:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl w-full">
              {/* ZELLE */}
              <motion.div
                className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{ borderColor: COLORS.primary + '30' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6, borderColor: COLORS.primary, scale: 1.02 }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full" style={{ backgroundColor: COLORS.primary }}></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5 rounded-tr-full" style={{ backgroundColor: COLORS.background }}></div>

                <div className="relative">
                  <div className="mb-6">
                    <h4 className="text-3xl font-bold mb-2" style={{ color: '#6D1ED4' }}>
                      Zelle
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: COLORS.textDark, opacity: 0.7 }}>
                      Quick and secure bank transfer
                    </p>
                  </div>

                  <div className="relative rounded-xl p-5 border-2 group-hover:border-opacity-100 transition-all" style={{ backgroundColor: COLORS.pageBackground + 'f0', borderColor: COLORS.primary + '20' }}>
                    <div className="absolute -top-2 left-4 px-2 text-xs font-medium" style={{ backgroundColor: COLORS.pageBackground, color: COLORS.primary }}>
                      Send to
                    </div>
                    <p className="font-bold text-lg select-all break-all mt-1" style={{ color: COLORS.primary }}>
                      example@email.com
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* PAYPAL */}
              <motion.div
                className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{ borderColor: COLORS.background + '20' }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6, borderColor: COLORS.background, scale: 1.02 }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-32 h-32 opacity-5 rounded-br-full" style={{ backgroundColor: COLORS.background }}></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 rounded-tl-full" style={{ backgroundColor: COLORS.primary }}></div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 bg-white rounded-xl p-3 shadow-md border-2" style={{ borderColor: COLORS.background + '20' }}>
                      <a
                        href="https://www.paypal.com/in/webapps/mpp/paypal-popup"
                        title="How PayPal Works"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://www.paypal.com/in/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700');
                        }}
                      >
                        <img
                          src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png"
                          alt="PayPal Logo"
                          className="w-20 h-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-1" style={{ color: COLORS.textDark }}>
                        PayPal
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: COLORS.textDark, opacity: 0.7 }}>
                        Donate via PayPal globally
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-xl p-5 border-2 group-hover:border-opacity-100 transition-all" style={{ backgroundColor: COLORS.pageBackground + 'f0', borderColor: COLORS.background + '15' }}>
                    <div className="absolute -top-2 left-4 px-2 text-xs font-medium" style={{ backgroundColor: COLORS.pageBackground, color: COLORS.primary }}>
                      Visit link
                    </div>
                    <a
                      href="https://paypal.me/DoctorsOnWheels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-lg hover:underline select-all break-all inline-flex items-center gap-2 mt-1"
                      style={{ color: COLORS.primary }}
                    >
                      paypal.me/DoctorsOnWheels
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* DIVIDER */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <hr className="border-t-2" style={{ borderColor: COLORS.primary + '30' }} />
        </div>
      </div>

      {/* IMPACT STORY SECTION */}
      <section className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 overflow-hidden">
        {/* Large background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-10 blur-3xl" style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent)` }}></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-10 blur-3xl" style={{ background: `radial-gradient(circle, ${COLORS.background}, transparent)` }}></div>

        <motion.div
          className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl shadow-2xl border-2 p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${COLORS.white} 0%, ${COLORS.pageBackground}80 50%, ${COLORS.white} 100%)`,
            borderColor: COLORS.primary + '30'
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.primary} 0, ${COLORS.primary} 2px, transparent 0, transparent 50%)`, backgroundSize: '20px 20px' }}></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: COLORS.highlight + '20', color: COLORS.highlight }}>
                Your Impact
              </div>

              <h3
                className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
                style={{ color: COLORS.primary }}
              >
                Transforming Lives in Remote Nepal
              </h3>

              <p
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{ color: COLORS.textDark }}
              >
                In remote regions of Nepal, families often walk for hours—sometimes days—to reach the nearest medical clinic. Your donation helps us bring essential healthcare directly to these underserved communities.
              </p>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: 'Mobile medical clinics reaching remote villages' },
                  { icon: CheckCircle, text: 'Emergency and acute care services' },
                  { icon: CheckCircle, text: 'Telemedicine consultations and diagnostics' },
                  { icon: CheckCircle, text: 'Free medications and essential medical supplies' },
                  { icon: CheckCircle, text: 'Training programs for local health volunteers' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5" style={{ color: '#22c55e' }} />
                    </div>
                    <p className="text-base" style={{ color: COLORS.textDark }}>
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2 relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl border-2 opacity-30" style={{ borderColor: COLORS.primary }}></div>
              <div className="absolute -inset-2 rounded-3xl border opacity-20" style={{ borderColor: COLORS.primary }}></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4" style={{ background: `linear-gradient(135deg, ${COLORS.background}40, ${COLORS.primary}40)`, borderColor: COLORS.white }}>
                <img
                  src="/images/contact_nepal.jpg"
                  alt="Healthcare in Nepal"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${COLORS.background}40 0%, transparent 50%)` }}></div>
              </div>

              {/* Decorative floating elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: COLORS.primary }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: COLORS.background }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.25, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 pb-12 md:pb-20">
        {/* Floating background elements */}
        <div className="absolute top-10 left-4 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full opacity-20 blur-2xl" style={{ background: `radial-gradient(circle, ${COLORS.highlight}, transparent)` }}></div>
        <div className="absolute bottom-10 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full opacity-15 blur-2xl" style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent)` }}></div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {/* Heart Icon - Centered on mobile, left on larger screens */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-8 sm:left-8 sm:top-0 sm:translate-x-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl shadow-xl"
              style={{ background: `linear-gradient(135deg, ${COLORS.highlight}, ${COLORS.highlight}dd)` }}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white fill-white" />
            </motion.div>

            {/* Centered Content */}
            <div className="text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-0">
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6"
                style={{ color: COLORS.primary }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Thank You for Your Support!
              </motion.h3>

              <motion.p
                className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8"
                style={{ color: COLORS.textDark }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Every donation, no matter the size, makes a meaningful difference in providing healthcare access to underserved communities. Together, we're saving lives and building healthier futures.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Donate;
