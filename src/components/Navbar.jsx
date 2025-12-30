
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-md:flex max-md:justify-between max-md:items-center max-md:!w-full max-md:px-8 max-md:pt-8 relative z-50">
          {/* Logo */}
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src="/union.png" 
            alt="Logo"
            className="absolute max-md:!static"
            style={{
              width: '36px',
              height: '30.57px',
              top: '44.55px',
              left: '120px',
              zIndex: 50,
            }}
          />

          {/* Hamburger Menu Icon (Visible only on mobile) */}
          <div 
            className="hidden max-md:block z-50 cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M3 12h18M3 6h18M3 18h18" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
      </div>

      {/* Navigation Overlay (Mobile: shown when isOpen is true. Desktop: always shown as inline links) */}
      <div 
        className={`absolute flex items-center max-md:!fixed max-md:!top-0 max-md:!left-0 max-md:!w-full max-md:!h-full max-md:!bg-black max-md:!bg-opacity-95 max-md:!flex-col max-md:!justify-center max-md:!items-center max-md:!gap-8 max-md:z-40 transition-transform duration-300 ${isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}`}
        style={{ width: '269px', height: '18px', top: '60px', left: '829px', gap: '50px', zIndex: 50 }}
      >
        {/* Close Button (Mobile Only) */}
        <div 
          className="absolute top-8 right-8 cursor-pointer max-md:block hidden"
          onClick={() => setIsOpen(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <motion.span 
          whileHover={{ scale: 1.1, color: '#DDD' }}
          className="font-clash font-regular text-white" 
          style={{ fontSize: '16px', lineHeight: '18px', cursor: 'pointer' }}
        >
          About us
        </motion.span>
        <motion.span 
          whileHover={{ scale: 1.1, color: '#DDD' }}
          className="font-clash font-regular text-white" 
          style={{ fontSize: '16px', lineHeight: '18px', letterSpacing: '0.2px', cursor: 'pointer', textShadow: '0px 4px 4px #00000040' }}
        >
          Store
        </motion.span>
        <motion.span 
          whileHover={{ scale: 1.1, color: '#DDD' }}
          className="font-clash font-regular text-white" 
          style={{ fontSize: '16px', lineHeight: '18px', letterSpacing: '0.2px', cursor: 'pointer' }}
        >
          Games
        </motion.span>

        {/* Connect Wallet Button (Moved inside overlay for mobile) */}
        <button
          className="font-clash font-semibold text-black max-md:!block hidden" // Mobile only button in menu
          style={{
            width: '172px',
            height: '48px',
            background: '#FFFFFF',
            borderRadius: '4px',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{ display: 'block' }}>Connect Wallet</span>
        </button>
      </div>

      {/* Connect Wallet Button (Desktop Only) */}
      <Button
        className="absolute flex items-center justify-center font-clash font-semibold max-md:hidden"
        style={{
          width: '172px',
          height: '48px',
          top: '45px',
          left: '1148px',
          fontSize: '16px',
          lineHeight: '18px',
          letterSpacing: '0.2px',
          textAlign: 'center',
          color: '#000000',
          zIndex: 50,
        }}
        animationProps={{
           initial: { opacity: 0, x: 20 },
           animate: { opacity: 1, x: 0 },
           transition: { duration: 0.5, delay: 0.2 }
        }}
      >
        <span>Connect Wallet</span>
      </Button>
    </>
  );
};

export default Navbar;
