
// import { motion } from 'framer-motion'; // Removed unused import
import Button from './common/Button';
import SectionHeading from './common/SectionHeading';
import NFTCard from './common/NFTCard';

const TrendingNFTs = () => {
  return (
    <>
      {/* Trending Section Heading */}
      <SectionHeading 
        text="Trending this week"
        top="2145px"
        left="120px"
      />

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

      <NFTCard 
        name="Ferhat Deniz"
        collection="Golden Flower"
        price="2.3 ETH"
        imageSrc="/rect-1.png"
        top="2330px"
        left="764px"
        delay={0.2}
      />

      {/* NFT Card 2 */}

      <NFTCard 
        name="Polina Kondrashova"
        collection="Golden Flower"
        price="2.3 ETH"
        imageSrc="/rect-2.png"
        top="2926px"
        left="762px"
        delay={0.3}
      />

      {/* NFT Card 3 */}

      <NFTCard 
        name="Erick Butler"
        collection="Golden Flower"
        price="2.3 ETH"
        imageSrc="/rect-3.png"
        top="3522px"
        left="760px"
        delay={0.4}
      />

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

      <NFTCard 
        name="Sebastian"
        collection="Golden Flower"
        price="2.3 ETH"
        imageSrc="/rect-4.png"
        top="2480px"
        left="121px"
        delay={0.2}
      />

      {/* NFT Card 5 */}

      <NFTCard 
        name="Javier Miranda"
        collection="Golden Flower"
        price="2.3 ETH"
        imageSrc="/rect-5.png"
        top="3076px"
        left="119px"
        delay={0.3}
      />

      {/* NFT Card 6 */}

      <NFTCard 
        name="Milad Fakurian"
        collection="Golden Flower"
        price="2.3 ETH"
        imageSrc="/rect-6.png"
        top="3672px"
        left="117px"
        delay={0.4}
      />

      {/* Explore More Button */}
      <Button
        className="absolute font-clash font-semibold flex items-center justify-center max-md:!static max-md:mx-auto max-md:mt-8"
        style={{
          width: '192px',
          height: '54px',
          top: '4133px',
          left: '1128px',
          fontSize: '16px',
          lineHeight: '150%',
          letterSpacing: '0.2px',
          textAlign: 'center',
          color: '#000000',
        }}
        animationProps={{
           initial: { opacity: 0, scale: 0.9 },
           whileInView: { opacity: 1, scale: 1 },
           viewport: { once: true },
           transition: { duration: 0.5 }
        }}
      >
        <span>Explore More</span>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px' }}>
          <img src="/arrow-image.png" alt="Arrow" style={{ width: '12px', height: '12px', maxWidth: 'none' }} />
        </div>
      </Button>

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
