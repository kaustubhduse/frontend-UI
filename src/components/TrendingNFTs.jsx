
import { motion } from 'framer-motion';

const TrendingNFTs = () => {
  return (
    <>
      {/* Trending Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute font-clash font-semibold text-white capitalize max-md:!static max-md:!w-full max-md:!h-auto max-md:!text-[40px] max-md:!leading-tight max-md:text-center max-md:px-4 max-md:mt-16" style={{ width: '651px', height: '64px', top: '2145px', left: '120px', fontSize: '64px', lineHeight: '100%', letterSpacing: '1px', verticalAlign: 'middle', zIndex: 30 }}
      >
        Trending this week
      </motion.h2>

      {/* Gradient Ellipse - Top Right */}
      <div 
        className="absolute rounded-full max-md:hidden"
        style={{
          width: '654px',
          height: '1011px',
          top: '2209px',
          left: '994px',
          background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)',
          opacity: 0.75,
          backdropFilter: 'blur(260px)',
          WebkitBackdropFilter: 'blur(260px)',
          filter: 'blur(100px)',
          zIndex: 5,
        }}
      />

      {/* Description Text */}
      <p className="absolute font-clash text-white max-md:!static max-md:!w-full max-md:!h-auto max-md:text-center max-md:px-4 max-md:mt-4" style={{ width: '548px', height: '81px', top: '2229px', left: '120px', opacity: 0.8, fontSize: '18px', fontWeight: 400, lineHeight: '100%', letterSpacing: '1.6%', verticalAlign: 'middle', zIndex: 30 }}>
        Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* NFT Card 1 */}

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -10 }}
        className="absolute max-md:!static max-md:!w-[90%] max-md:mx-auto max-md:mt-8" style={{ top: '2330px', left: '764px', width: '556px', zIndex: 21 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
          <div>
            <h3 className="font-clash text-white" style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>Ferhat Deniz</h3>
            <p className="font-clash text-white" style={{ fontSize: '14px', opacity: 0.7, margin: 0 }}>Golden Flower</p>
          </div>
          <span className="font-clash" style={{ fontSize: '18px', fontWeight: 600, background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2.3 ETH</span>
        </div>
      </motion.div>
      <img src="/rect-1.png" alt="NFT 1" className="absolute max-md:!static max-md:!w-[90%] max-md:!h-auto max-md:mx-auto max-md:mt-2" style={{ width: '556px', height: '450px', top: '2395px', left: '764px', maxWidth: 'none', zIndex: 20 }} />

      {/* NFT Card 2 */}

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -10 }}
        className="absolute max-md:!static max-md:!w-[90%] max-md:mx-auto max-md:mt-8" style={{ top: '2926px', left: '762px', width: '556px', zIndex: 21 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
          <div>
            <h3 className="font-clash text-white" style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>Polina Kondrashova</h3>
            <p className="font-clash text-white" style={{ fontSize: '14px', opacity: 0.7, margin: 0 }}>Golden Flower</p>
          </div>
          <span className="font-clash" style={{ fontSize: '18px', fontWeight: 600, background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2.3 ETH</span>
        </div>
      </motion.div>
      <img src="/rect-2.png" alt="NFT 2" className="absolute max-md:!static max-md:!w-[90%] max-md:!h-auto max-md:mx-auto max-md:mt-2" style={{ width: '556px', height: '450px', top: '2991px', left: '762px', maxWidth: 'none', zIndex: 20 }} />

      {/* NFT Card 3 */}

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -10 }}
        className="absolute max-md:!static max-md:!w-[90%] max-md:mx-auto max-md:mt-8" style={{ top: '3522px', left: '760px', width: '556px', zIndex: 21 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
          <div>
            <h3 className="font-clash text-white" style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>Erick Butler</h3>
            <p className="font-clash text-white" style={{ fontSize: '14px', opacity: 0.7, margin: 0 }}>Golden Flower</p>
          </div>
          <span className="font-clash" style={{ fontSize: '18px', fontWeight: 600, background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2.3 ETH</span>
        </div>
      </motion.div>
      <img src="/rect-3.png" alt="NFT 3" className="absolute max-md:!static max-md:!w-[90%] max-md:!h-auto max-md:mx-auto max-md:mt-2" style={{ width: '556px', height: '450px', top: '3587px', left: '760px', maxWidth: 'none', zIndex: 20 }} />

      {/* Gradient Ellipse - Left Mid Page */}
      <div 
        className="absolute rounded-full max-md:hidden"
        style={{
          width: '886px',
          height: '1321px',
          top: '2762px',
          left: '-228px',
          background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)',
          opacity: 0.75,
          backdropFilter: 'blur(260px)',
          WebkitBackdropFilter: 'blur(260px)',
          filter: 'blur(100px)',
          zIndex: 5,
        }}
      />

      {/* NFT Card 4 */}

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -10 }}
        className="absolute max-md:!static max-md:!w-[90%] max-md:mx-auto max-md:mt-8" style={{ top: '2480px', left: '121px', width: '556px', zIndex: 21 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
          <div>
            <h3 className="font-clash text-white" style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>Sebastian</h3>
            <p className="font-clash text-white" style={{ fontSize: '14px', opacity: 0.7, margin: 0 }}>Golden Flower</p>
          </div>
          <span className="font-clash" style={{ fontSize: '18px', fontWeight: 600, background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2.3 ETH</span>
        </div>
      </motion.div>
      <img src="/rect-4.png" alt="NFT 4" className="absolute max-md:!static max-md:!w-[90%] max-md:!h-auto max-md:mx-auto max-md:mt-2" style={{ width: '556px', height: '450px', top: '2545px', left: '121px', maxWidth: 'none', zIndex: 20 }} />

      {/* NFT Card 5 */}

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -10 }}
        className="absolute max-md:!static max-md:!w-[90%] max-md:mx-auto max-md:mt-8" style={{ top: '3076px', left: '119px', width: '556px', zIndex: 21 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
          <div>
            <h3 className="font-clash text-white" style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>Javier Miranda</h3>
            <p className="font-clash text-white" style={{ fontSize: '14px', opacity: 0.7, margin: 0 }}>Golden Flower</p>
          </div>
          <span className="font-clash" style={{ fontSize: '18px', fontWeight: 600, background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2.3 ETH</span>
        </div>
      </motion.div>
      <img src="/rect-5.png" alt="NFT 5" className="absolute max-md:!static max-md:!w-[90%] max-md:!h-auto max-md:mx-auto max-md:mt-2" style={{ width: '556px', height: '450px', top: '3141px', left: '119px', maxWidth: 'none', zIndex: 20 }} />

      {/* NFT Card 6 */}

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -10 }}
        className="absolute max-md:!static max-md:!w-[90%] max-md:mx-auto max-md:mt-8" style={{ top: '3672px', left: '117px', width: '556px', zIndex: 21 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
          <div>
            <h3 className="font-clash text-white" style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>Milad Fakurian</h3>
            <p className="font-clash text-white" style={{ fontSize: '14px', opacity: 0.7, margin: 0 }}>Golden Flower</p>
          </div>
          <span className="font-clash" style={{ fontSize: '18px', fontWeight: 600, background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2.3 ETH</span>
        </div>
      </motion.div>
      <img src="/rect-6.png" alt="NFT 6" className="absolute max-md:!static max-md:!w-[90%] max-md:!h-auto max-md:mx-auto max-md:mt-2" style={{ width: '556px', height: '450px', top: '3737px', left: '117px', maxWidth: 'none', zIndex: 20 }} />

      {/* Explore More Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute font-clash font-semibold flex items-center justify-center max-md:!static max-md:mx-auto max-md:mt-8"
        style={{
          width: '192px',
          height: '54px',
          top: '4133px',
          left: '1128px',
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
          border: 'none',
          cursor: 'pointer',
          zIndex: 30,
        }}
      >
        <span>Explore More</span>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/arrow-image.png" alt="Arrow" style={{ width: '12px', height: '12px', maxWidth: 'none' }} />
        </div>
      </motion.button>

      {/* Gradient Ellipse - Mid Page */}
      <div 
        className="absolute rounded-full max-md:hidden"
        style={{
          width: '534px',
          height: '654px',
          top: '3737px',
          left: '980px',
          background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)',
          opacity: 0.75,
          backdropFilter: 'blur(260px)',
          WebkitBackdropFilter: 'blur(260px)',
          filter: 'blur(100px)',
          zIndex: 5,
        }}
      />
    </>
  );
};

export default TrendingNFTs;
