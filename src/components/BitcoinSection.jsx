
import { motion } from 'framer-motion';

const BitcoinSection = () => {
  return (
    <>
      <div
        className="absolute rounded-full max-md:hidden"
        style={{
          width: '654px',
          height: '820px',
          top: '1164px',
          left: '116px',
          background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)',
          backdropFilter: 'blur(260px)',
          WebkitBackdropFilter: 'blur(260px)',
          filter: 'blur(100px)',
          zIndex: 5,
        }}
      />

      {/* Bitcoin Image */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="/bitcoin.png"
        alt="Bitcoin Art"
        className="absolute max-md:!static max-md:mx-auto max-md:!w-[90%] max-md:!h-auto max-md:mt-8"
        style={{
          width: '596px',
          height: '646px',
          top: '1234px',
          left: '121px',
          borderRadius: '20px',
          background: '#D9D9D9',
          zIndex: 10,
          maxWidth: 'none',
        }}
      />

      {/* Bitcoin Art Work Heading */}
      {/* Bitcoin Art Work Heading */}
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute font-clash text-white max-md:!static max-md:!w-full max-md:!h-auto max-md:text-center max-md:mt-4 max-md:text-[40px] max-md:px-4"
        style={{
          width: '335px',
          height: '180px',
          top: '1305px',
          left: '825px',
          fontSize: '72px',
          fontWeight: 500,
          lineHeight: '125%',
          letterSpacing: '0.2px',
          verticalAlign: 'middle',
          zIndex: 30,
        }}
      >
        Bitcoin Art Work
      </motion.h2>

      {/* Artist Credit */}
      {/* Artist Credit */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute font-clash text-white max-md:!static max-md:!w-full max-md:text-center max-md:mt-2"
        style={{
          width: '230px',
          height: '20px',
          top: '1505px',
          left: '825px',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '125%',
          letterSpacing: '0.2px',
          verticalAlign: 'middle',
          zIndex: 30,
        }}
      >
        Created by Jonathan Borba
      </motion.div>

      {/* Current Bid Section */}
      <div className="absolute max-md:!static max-md:mx-auto max-md:mt-6 max-md:!w-[144px] max-md:!h-[98px] max-md:relative" style={{ top: '1601px', left: '824px', width: '200px', height: '120px', zIndex: 30 }}>
        {/* Label */}
        <div className="absolute font-clash font-medium text-white max-md:static" style={{
          width: '93px',
          height: '20px',
          top: '0px',
          left: '1px',
          fontSize: '16px',
          lineHeight: '125%',
          letterSpacing: '0.2px'
        }}>
          Current Bid
        </div>

        {/* ETH Amount */}
        <div className="absolute font-clash font-medium text-white max-md:static" style={{
          width: 'auto',
          height: '45px',
          top: '35px',
          left: '1px',
          fontSize: '36px',
          lineHeight: '125%',
          letterSpacing: '0.2px',
          whiteSpace: 'nowrap'
        }}>
          1.09 ETH
        </div>

        {/* USD Amount */}
        <div className="absolute font-clash font-medium text-white max-md:static" style={{
          width: 'auto',
          height: '20px',
          top: '90px',
          left: '0px',
          fontSize: '16px',
          lineHeight: '125%',
          letterSpacing: '0.2px'
        }}>
          $1,835
        </div>
      </div>

      {/* Vertical Divider Line */}
      <div 
        className="absolute max-md:!hidden"
        style={{
          width: '0px',
          height: '100px',
          top: '1600px',
          left: '1018px',
          borderLeft: '2px solid #FFFFFF',
          zIndex: 30,
        }}
      />

      {/* View Art Work Button */}
      {/* View Art Work Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute font-clash font-semibold flex items-center justify-center max-md:!static max-md:mx-auto max-md:mt-6"
        style={{
          width: '203px',
          height: '54px',
          top: '1764px',
          left: '825px',
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
        <span>View Art Work</span>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/arrow-image.png" alt="Arrow" style={{ width: '12px', height: '12px', maxWidth: 'none' }} />
        </div>
      </motion.button>

      {/* Auction Timer Section */}
      <div className="absolute max-md:!static max-md:mx-auto max-md:mt-6 max-md:w-fit max-md:flex max-md:flex-col max-md:items-center" style={{ top: '1601px', left: '1068px', zIndex: 30 }}>
        <div className="font-clash text-white max-md:text-center max-md:mb-2" style={{ width: '150px', fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', whiteSpace: 'nowrap' }}>
          Auction Ends In
        </div>
        
        {/* Timer Digits */}
        <div className="absolute flex max-md:!static" style={{ top: '29px', left: '0px' }}>
          {/* Hours */}
          <div style={{ width: '41px', height: '69px', marginRight: '40px' }}>
            <div className="font-clash font-medium text-white" style={{ fontSize: '36px', lineHeight: '125%', letterSpacing: '0.2px' }}>18</div>
            <div className="font-clash text-white" style={{ fontSize: '14px', lineHeight: '125%', letterSpacing: '0.2px', opacity: 0.7 }}>Hours</div>
          </div>

          {/* Minutes */}
          <div style={{ width: '56px', height: '69px', marginRight: '40px' }}>
             <div className="font-clash font-medium text-white" style={{ fontSize: '36px', lineHeight: '125%', letterSpacing: '0.2px' }}>57</div>
             <div className="font-clash text-white" style={{ fontSize: '14px', lineHeight: '125%', letterSpacing: '0.2px', opacity: 0.7 }}>Minutes</div>
          </div>

          {/* Seconds */}
          <div style={{ width: '62px', height: '69px' }}>
             <div className="font-clash font-medium text-white" style={{ fontSize: '36px', lineHeight: '125%', letterSpacing: '0.2px' }}>14</div>
             <div className="font-clash text-white" style={{ fontSize: '14px', lineHeight: '125%', letterSpacing: '0.2px', opacity: 0.7 }}>Seconds</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BitcoinSection;
