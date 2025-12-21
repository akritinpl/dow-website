import { COLORS } from '../constants/colors';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Telemedicine() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const handleLocationClick = (idx) => {
    setSelectedLocation(idx);
    // Scroll to the location card
    const locationCard = document.getElementById(`location-card-${idx}`);
    if (locationCard) {
      setTimeout(() => {
        locationCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const locations = [
    {
      name: 'Tukuche, Mustang',
      placeImage: '/images/T-place.jpg',
      locationImage: '/images/Tukuche.jpg',
      description: 'Located in the Dhawalagiri Zone of northern Nepal, Tukuche serves as a vital telemedicine hub for the local community.',
      region: 'Lower Mustang'
    },
    {
      name: 'Lo Manthang, Mustang',
      placeImage: '/images/L-place.jpg',
      locationImage: '/images/LoManthang.jpg',
      description: 'The ancient walled city of Lo Manthang, providing remote healthcare access to Upper Mustang residents.',
      region: 'Upper Mustang'
    },
    {
      name: 'Parbat',
      placeImage: '/images/P-place.jpeg',
      locationImage: '/images/Parbat.jpg',
      description: 'Serving the rural communities of Parbat district with accessible telemedicine services.',
      region: 'Gandaki Province'
    }
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start" style={{ background: COLORS.pageBackground }}>
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto pt-12 md:pt-16 pb-6 md:pb-8 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 px-2" style={{ color: COLORS.primary }}>
            Telemedicine
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2" style={{ color: COLORS.textDark }}>
            Leveraging technology to connect patients and doctors across distances, bringing quality healthcare to remote communities.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-12 md:pb-16">
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-12"
          style={{ border: `1px solid ${COLORS.border}` }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
            <div className="p-2 sm:p-3 rounded-lg" style={{ backgroundColor: `${COLORS.primary}15` }}>
              <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: COLORS.primary}}>
              What is Telemedicine?
            </h3>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
            <p className="text-base sm:text-lg">
              Telemedicine is the practice of caring for patients remotely when the provider and patient are not physically present with each other. It uses modern telecommunications technology to deliver healthcare services across distances, breaking down geographical barriers to medical care.
            </p>
            <p className="text-base sm:text-lg">
              Through telemedicine, patients in remote or underserved areas can consult with healthcare professionals via video calls, receive diagnoses, get prescriptions, and access specialist care that would otherwise be unavailable in their communities. This innovative approach is particularly crucial in mountainous regions like Nepal, where physical access to healthcare facilities can be challenging.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <svg className="w-5 h-5" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1" style={{ color: COLORS.primary }}>Accessible Care</h4>
                <p className="text-sm text-gray-600">Healthcare reaches the remotest communities</p>
              </div>
            </div>

            {/* Vertical divider - hidden on mobile */}
            <div className="hidden md:block relative">
              <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: COLORS.border }}></div>
              <div className="flex items-start gap-3 pl-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}20` }}>
                  <svg className="w-5 h-5" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: COLORS.primary }}>Time-Efficient</h4>
                  <p className="text-sm text-gray-600">Immediate consultations without travel</p>
                </div>
              </div>
            </div>

            {/* Mobile version without divider */}
            <div className="flex items-start gap-3 md:hidden">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <svg className="w-5 h-5" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1" style={{ color: COLORS.primary }}>Time-Efficient</h4>
                <p className="text-sm text-gray-600">Immediate consultations without travel</p>
              </div>
            </div>

            {/* Vertical divider - hidden on mobile */}
            <div className="hidden md:block relative">
              <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: COLORS.border }}></div>
              <div className="flex items-start gap-3 pl-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}20` }}>
                  <svg className="w-5 h-5" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: COLORS.primary }}>Specialist Access</h4>
                  <p className="text-sm text-gray-600">Connect with experts anywhere</p>
                </div>
              </div>
            </div>

            {/* Mobile version without divider */}
            <div className="flex items-start gap-3 md:hidden">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <svg className="w-5 h-5" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1" style={{ color: COLORS.primary }}>Specialist Access</h4>
                <p className="text-sm text-gray-600">Connect with experts anywhere</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Locations Section */}
      <section className="w-full py-12 md:py-16" style={{ backgroundColor: COLORS.white }}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2" style={{ color: COLORS.primary, fontFamily: 'Faustina' }}>
              Our Telemedicine Centers
            </h3>
            <p className="text-base sm:text-lg max-w-2xl mx-auto px-2" style={{ color: COLORS.textDark }}>
              We operate telemedicine services in three strategic locations across Nepal, serving communities in some of the most remote areas.
            </p>
            <div className="w-16 sm:w-20 h-1 mx-auto mt-4 md:mt-6 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
          </motion.div>

          {/* Map and Location Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Nepal Map Section */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-8"
              style={{ border: `2px solid ${COLORS.border}` }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center" style={{ color: COLORS.primary }}>
                Service Locations in Nepal
              </h4>

              {/* Placeholder for Nepal Map - Replace with actual map image */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br rounded-lg overflow-hidden mb-4" style={{ backgroundColor: `${COLORS.primary}10` }}>
                <img
                  src="/images/Nepal.png" 
                  alt="Nepal Map showing telemedicine locations"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="flex flex-col items-center justify-center h-full text-center p-8">
                        <svg class="w-24 h-24 mb-4" style="color: ${COLORS.primary}; opacity: 0.3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <p style="color: ${COLORS.textDark}; font-size: 0.9rem;">Nepal Map<br/><span style="font-size: 0.8rem; opacity: 0.7;">Add map image at /public/images/nepal-map.png</span></p>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Location Markers Legend */}
              <div className="space-y-2">
                {locations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLocationClick(idx)}
                    className="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-all duration-200"
                    style={{
                      backgroundColor: selectedLocation === idx ? `${COLORS.primary}20` : 'transparent',
                      border: `1px solid ${selectedLocation === idx ? COLORS.primary : COLORS.border}`
                    }}
                  >
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {idx + 1}
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base truncate" style={{ color: COLORS.primary }}>{loc.name}</p>
                      <p className="text-xs text-gray-600 truncate">{loc.region}</p>
                    </div>
                    {selectedLocation === idx && (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Location Details Section */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {locations.map((location, idx) => (
                <motion.div
                  key={idx}
                  id={`location-card-${idx}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  style={{
                    border: `2px solid ${selectedLocation === idx ? COLORS.primary : COLORS.border}`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  onClick={() => handleLocationClick(idx)}
                >
                  {/* Location Number Badge - Positioned absolutely */}
                  <div
                    className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg z-10"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {idx + 1}
                  </div>

                  {/* Images Grid - Two Images Side by Side */}
                  <div className="grid grid-cols-2 gap-1">
                    {/* Place Image */}
                    <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden relative bg-gradient-to-br" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={location.placeImage}
                        alt={`${location.name} - Place`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-full p-2">
                              <svg class="w-12 h-12 mb-1" style="color: ${COLORS.primary}; opacity: 0.3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              <p style="color: ${COLORS.textDark}; opacity: 0.6; font-size: 0.75rem; text-align: center;">Place Image</p>
                            </div>
                          `;
                        }}
                      />
                    </div>

                    {/* Location Image */}
                    <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden relative bg-gradient-to-br" style={{ backgroundColor: `${COLORS.primary}10` }}>
                      <img
                        src={location.locationImage}
                        alt={`${location.name} - Location`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-full p-2">
                              <svg class="w-12 h-12 mb-1" style="color: ${COLORS.primary}; opacity: 0.3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p style="color: ${COLORS.textDark}; opacity: 0.6; font-size: 0.75rem; text-align: center;">Location Image</p>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="p-4 sm:p-6">
                    <h4 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: COLORS.primary, fontFamily: 'Faustina' }}>
                      {location.name}
                    </h4>
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs sm:text-sm font-medium text-gray-600">{location.region}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                      {location.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16" style={{ backgroundColor: COLORS.pageBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-2" style={{ color: COLORS.primary, fontFamily: 'Faustina' }}>
              Expanding Healthcare Access
            </h3>
            <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-xl mx-auto px-3" style={{ color: COLORS.textDark }}>
              Our telemedicine initiative continues to grow, bringing quality healthcare to more communities across Nepal.
            </p>
            <motion.a
              href="/about"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg"
              style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
              whileHover={{ scale: 1.05, backgroundColor: COLORS.highlight }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Our Work
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Telemedicine;