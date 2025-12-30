import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      {/* Footer Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute rounded-full max-md:hidden"
        style={{
          width: '1159px',
          height: '995px',
          top: '5726px',
          left: '735px',
          background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)',
          backdropFilter: 'blur(0px)',
          filter: 'blur(100px)',
          zIndex: 5,
        }}
      />

      {/* Footer Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute max-md:!static max-md:!w-full max-md:!h-auto max-md:py-8 max-md:flex max-md:flex-col max-md:items-center" style={{ width: '100%', height: '278px', top: '5726px', left: '0px', background: 'linear-gradient(92.13deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.075) 100%)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', zIndex: 10 }}
      >
        
        {/* Top Row Container: Flexbox for perfect vertical alignment */}
        <div className="absolute flex items-center w-full max-md:hidden" style={{ top: '55px', paddingLeft: '120px', paddingRight: '120px', boxSizing: 'border-box' }}>
          
          {/* NFTme Logo */}
          <div className="font-clash font-semibold text-white" style={{ fontSize: '36px', lineHeight: '125%', letterSpacing: '0px', marginRight: 'auto' }}>
            NFTme
          </div>
        </div>

        {/* NFTme Logo - Centered vertically around 75px (Social center) */}
        <div className="absolute font-clash font-semibold text-white max-md:!static max-md:mx-auto max-md:mt-0" style={{ top: '53px', left: '120px', fontSize: '36px', lineHeight: '125%', letterSpacing: '0px' }}>
          NFTme
        </div>
        
        {/* Footer Links */}
        <div className="absolute flex text-white max-md:!static max-md:flex-col max-md:items-center max-md:gap-4 max-md:mt-6" style={{ top: '65px', left: '461px', gap: '75px' }}>
           <span className="font-clash" style={{ fontSize: '16px', lineHeight: '125%', fontWeight: 400, cursor: 'pointer' }}>Explore</span>
           <span className="font-clash" style={{ fontSize: '16px', lineHeight: '125%', fontWeight: 400, cursor: 'pointer' }}>Marketplace</span>
           <span className="font-clash" style={{ fontSize: '16px', lineHeight: '125%', fontWeight: 400, cursor: 'pointer' }}>Artists</span>
           <span className="font-clash" style={{ fontSize: '16px', lineHeight: '125%', fontWeight: 400, cursor: 'pointer' }}>Contact</span>
        </div>

        {/* Social Icons */}
        <img src="/social.png" alt="Social" className="absolute max-md:!static max-md:mx-auto max-md:mt-6" style={{ width: '180px', height: '40px', top: '55px', left: '1140px', maxWidth: 'none', cursor: 'pointer' }} />

        {/* Bottom Row - Single Line */}
        <div className="absolute flex items-center text-white max-md:!static max-md:flex-col max-md:items-center max-md:gap-2 max-md:mt-6 max-md:text-center max-md:whitespace-normal max-md:w-full max-md:px-4" style={{ top: '211px', left: '120px', gap: '15px', whiteSpace: 'nowrap' }}>
          <span className="font-clash" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '100%', cursor: 'pointer' }}>Privacy policy</span>
          <span className="font-clash font-medium max-md:hidden" style={{ fontSize: '16px', lineHeight: '26px' }}>|</span>
          <span className="font-clash font-medium" style={{ fontSize: '16px', lineHeight: '26px', width: '417px', textAlign: 'center' }}>Copyright @ Kartik Bansal 2022. All Rights Reserved.</span>
          <span className="font-clash font-medium max-md:hidden" style={{ fontSize: '16px', lineHeight: '26px' }}>|</span>
          <span className="font-clash" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '100%', cursor: 'pointer' }}>Terms of service</span>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
