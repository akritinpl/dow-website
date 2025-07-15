import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../constants/colors";

export const collaborators = [
  {
    name: "Dr. Bikash Khadka",
    role: "Lead Investigator – Critical Care",
    occupation: "Consultant Anesthesiologist",
    spotlight:
      "With a deep commitment to evidence‑based practice and equitable access to quality perioperative care, Dr. Khadka leads our critical care research initiatives with unmatched expertise and compassion.\nHe is passionate about mentoring young clinicians and fostering a collaborative research environment.\njhvhjkvbdgjfeiuhrjfderhuigfkjnjdsnfirbfgeiuhfiuerfwrbfkrfnjknckjsncwemfioerjfiuerhyuergtuyergbtyebvjdnvkajnirejiugerhigthreuyitgeribavnefpore",
    image: "/images/Dr.Bikash.png",
  },
  {
    name: "Dr. Purushottam Adhikari",
    role: "Lead Investigator - Mental Health",
    occupation: "Consultant Psychiatrist",
    spotlight: "Championing agile best‑practices and cross‑team collaboration.",
    image: "/images/Dr.Purushottam.png",
  },
  {
    name: "Dr. Deepak Sundar Shrestha",
    role: "Lead Investigator - Palliative Care",
    occupation: "Associate Professor - Internal Medicine and Palliative Care",
    spotlight: "Researching accessible design patterns for emerging markets.",
    image: "/images/Dr.Deepak.png",
  },
];

function CollaboratorCard({ collaborator, i }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      className="flex flex-col items-center p-0 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.04 }}
      style={{ perspective: 1000 }}
    >
      <motion.button
        type="button"
        onClick={() => setFlipped(!flipped)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="relative w-56 sm:w-64 aspect-[3/4] focus:outline-none [transform-style:preserve-3d] transform-gpu"
        style={{ boxShadow: '0 6px 24px 0 rgba(0,0,0,0.10)', borderRadius: '1rem' }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col overflow-hidden" style={{ borderRadius: '1rem' }}>
          {/* Image: 75% of card height */}
          <div className="relative flex-none h-[75%] overflow-hidden" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
            <img
              src={collaborator.image}
              alt={collaborator.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
            />
          </div>
          {/* Name + role: 25% of card height */}
          <div className="flex-auto h-[25%] flex flex-col justify-center items-center px-3 py-2 bg-white" style={{ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
            <h3 className="text-xs sm:text-sm font-semibold text-center leading-tight break-words" style={{ color: COLORS.primary }}>{collaborator.name}</h3>
            <p className="text-[10px] sm:text-xs text-center mt-1 break-words" style={{ color: COLORS.textDark }}>{collaborator.role}</p>
          </div>
        </div>
        {/* BACK */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-start p-4 bg-white overflow-y-auto overflow-x-hidden" style={{ borderRadius: '1rem', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          <img
            src={collaborator.image}
            alt={collaborator.name}
            className="w-20 h-20 object-cover rounded-full border-4 shadow-sm mb-3"
            style={{ borderColor: COLORS.primary, background: COLORS.pageBackground }}
          />
          <h3 className="text-base font-semibold mb-1" style={{ color: COLORS.textDark }}>{collaborator.name}</h3>
          <div className="text-xs font-semibold mb-3" style={{ color: COLORS.textDark, opacity: 0.8 }}>{collaborator.occupation}</div>
          <div className="w-full text-left break-words whitespace-pre-line pr-4">
            {collaborator.spotlight.split('\n').map((line, idx) => (
              <div key={idx} className="flex items-start mb-3 w-full">
                <span className="border-l-4 mr-3" style={{ borderColor: COLORS.primary, minHeight: '1.25rem' }}></span>
                <span
                  className="text-xs text-gray-800 w-full break-words whitespace-pre-line font-sans"
                  style={{
                    fontFamily: 'Inter, Roboto, Segoe UI, Helvetica Neue, Arial, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    lineHeight: 1.6,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

function Collaborators() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start" style={{ background: COLORS.pageBackground, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <section className="w-full max-w-5xl mx-auto pt-16 pb-8 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-4" style={{ color: COLORS.primary }}>
          Meet Our Collaborators
        </h2>
        <p className="text-center text-base md:text-lg mb-12 max-w-2xl mx-auto" style={{ color: COLORS.textDark, opacity: 0.85 }}>
          Our collaborators are dedicated professionals leading research and care in their respective fields. Their expertise and passion drive our mission forward.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {collaborators.map((c, i) => (
            <CollaboratorCard key={c.name} collaborator={c} i={i} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Collaborators;
