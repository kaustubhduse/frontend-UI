
import { motion } from 'framer-motion';

const PopularArtists = () => {
  return (
    <>
      {/* Popular Artists Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute font-clash font-semibold text-white capitalize max-md:!static max-md:!w-full max-md:!h-auto max-md:!text-[48px] max-md:text-center max-md:mt-16 max-md:px-4"
        style={{
          width: '497px',
          height: '64px',
          top: '4387px',
          left: '121px',
          fontSize: '64px',
          lineHeight: '100%',
          letterSpacing: '1px',
          verticalAlign: 'middle',
          zIndex: 30,
        }}
      >
        Popular Artists
      </motion.h2>

      {/* View all Artists Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute font-clash font-semibold flex items-center justify-center max-md:!static max-md:mx-auto max-md:mt-4"
        style={{
          width: '203px',
          height: '54px',
          top: '4392px',
          left: '1117px',
          background: '#FFFFFF',
          color: '#000000',
          borderRadius: '4px',
          padding: '15px 24px',
          gap: '10px',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '150%',
          letterSpacing: '0.2px',
          textAlign: 'center',
          verticalAlign: 'middle',
          border: 'none',
          cursor: 'pointer',
          zIndex: 30,
        }}
      >
        <span>View all Artists</span>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/arrow-image.png" alt="Arrow" style={{ width: '12px', height: '12px', maxWidth: 'none' }} />
        </div>
      </motion.button>

      {/* Top Artists Section */}
      
      {/* Artist 1: Ferhat Deniz */}
      <motion.img 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        src="/artist-1.png" alt="Ferhat Deniz" className="absolute max-md:!static max-md:mx-auto max-md:mt-8" style={{ width: '160px', height: '160px', top: '4545px', left: '177px', background: '#D9D9D9', borderRadius: '50%', zIndex: 20, maxWidth: 'none' }} 
      />
      <div className="absolute font-clash text-white max-md:!static max-md:text-center max-md:mx-auto max-md:mt-2" style={{ width: '220px', height: '36px', top: '4740px', left: '147px', fontSize: '36px', fontWeight: 400, zIndex: 21, textAlign: 'center', whiteSpace: 'nowrap' }}>
        Ferhat Deniz
      </div>

      {/* Artist 2: Sebastian */}
      <motion.img 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        src="/artist-2.png" alt="Sebastian" className="absolute max-md:!static max-md:mx-auto max-md:mt-6" style={{ width: '160px', height: '160px', top: '4545px', left: '471px', background: '#D9D9D9', borderRadius: '50%', zIndex: 20, maxWidth: 'none' }} 
      />
      <div className="absolute font-clash text-white max-md:!static max-md:text-center max-md:mx-auto max-md:mt-2" style={{ width: '168px', height: '36px', top: '4740px', left: '467px', fontSize: '36px', fontWeight: 400, lineHeight: '100%', letterSpacing: '0.2px', textAlign: 'center', verticalAlign: 'middle', zIndex: 21, whiteSpace: 'nowrap' }}>
        Sebastian
      </div>

      {/* Artist 3: Javier Miranda */}
      <motion.img 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        src="/artist-3.png" alt="Javier Miranda" className="absolute max-md:!static max-md:mx-auto max-md:mt-6" style={{ width: '160px', height: '160px', top: '4545px', left: '784px', background: '#D9D9D9', borderRadius: '50%', zIndex: 20, maxWidth: 'none' }} 
      />
      <div className="absolute font-clash text-white max-md:!static max-md:text-center max-md:mx-auto max-md:mt-2" style={{ width: '258px', height: '36px', top: '4740px', left: '735px', fontSize: '36px', fontWeight: 400, lineHeight: '100%', letterSpacing: '0.2px', textAlign: 'center', verticalAlign: 'middle', zIndex: 21, whiteSpace: 'nowrap' }}>
        Javier Miranda
      </div>

      {/* Artist 4: Erick Butler */}
      <motion.img 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        src="/artist-4.png" alt="Erick Butler" className="absolute max-md:!static max-md:mx-auto max-md:mt-6" style={{ width: '160px', height: '160px', top: '4545px', left: '1114px', background: '#D9D9D9', borderRadius: '50%', zIndex: 20, maxWidth: 'none' }} 
      />
      <div className="absolute font-clash text-white max-md:!static max-md:text-center max-md:mx-auto max-md:mt-2" style={{ width: '201px', height: '36px', top: '4740px', left: '1093px', fontSize: '36px', fontWeight: 400, lineHeight: '100%', letterSpacing: '0.2px', textAlign: 'center', verticalAlign: 'middle', zIndex: 21, whiteSpace: 'nowrap' }}>
        Erick Butler
      </div>
    </>
  );
};

export default PopularArtists;
