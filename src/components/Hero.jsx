import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div 
        className="absolute rounded-full max-md:hidden"
        style={{
          width: '654px',
          height: '820px',
          top: '127px',
          left: '718px',
          background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)',
          backdropFilter: 'blur(260px)',
          WebkitBackdropFilter: 'blur(260px)',
          filter: 'blur(100px)',
          zIndex: 5,
        }}
      />

      {/* Hero Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute font-clash font-semibold text-white capitalize max-md:!static max-md:!w-full max-md:!h-auto max-md:!text-[42px] max-md:!leading-tight max-md:text-center max-md:px-4 max-md:mt-12"
        style={{
          width: '588px',
          height: '270px',
          top: '220px',
          left: '120px',
          fontSize: '72px',
          lineHeight: '125%',
          letterSpacing: '0%',
          zIndex: 30,
        }}
      >
        Discover Rare Collections Of Art & NFT's
      </motion.h1>

      {/* Subtitle Text */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute font-clash text-white max-md:!static max-md:!w-full max-md:!h-auto max-md:text-center max-md:px-6 max-md:mt-6 max-md:text-base max-md:opacity-80"
        style={{
          width: '379px',
          height: '27px',
          top: '510px',
          left: '120px',
          opacity: 0.8,
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '100%',
          letterSpacing: '1.6%',
          verticalAlign: 'middle',
          zIndex: 30,
        }}
      >
        Create, Explore, & Collect Digital Art NFTs
      </motion.p>

      {/* Explore Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute font-clash font-semibold text-white uppercase flex items-center justify-center max-md:!static max-md:mx-auto max-md:mt-8 max-md:mb-12"
        style={{
          width: '224px',
          height: '59px',
          top: '593px',
          left: '120px',
          fontSize: '20px',
          lineHeight: '125%',
          letterSpacing: '0%',
          borderRadius: '10px',
          background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)',
          border: 'none',
          cursor: 'pointer',
          zIndex: 30,
          transform: 'skewX(-10deg)',
        }}
      >
        <span style={{ transform: 'skewX(10deg)' }}>Explore</span>
      </motion.button>

      {/* Hero Image Wrapper - Removed fixed height on mobile to let content dictate size */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute max-md:!static max-md:!w-full max-md:!h-auto max-md:!mb-12 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:relative max-md:mt-12" style={{ width: '545.03px', height: '653px', top: '198px', left: '775px', zIndex: 25 }}
      >
        <motion.img 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="/hero-img2.png" alt="NFT Art 2" className="absolute max-md:!static max-md:!w-[80%] max-md:!max-w-[320px] max-md:!h-auto max-md:!transform-none" style={{ width: '376.93px', height: '566.25px', top: '8.49px', left: '0px', zIndex: 1 }} 
        />
        <motion.img 
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          src="/hero-img1.png" alt="NFT Art 1" className="absolute max-md:!static max-md:!w-[80%] max-md:!max-w-[320px] max-md:!h-auto max-md:!mt-4 max-md:!transform-none" style={{ width: '376.93px', height: '566.25px', top: '0px', left: '168.09px', transform: 'rotate(0deg)', zIndex: 2 }} 
        />
      </motion.div>
    </>
  );
};

export default Hero;
