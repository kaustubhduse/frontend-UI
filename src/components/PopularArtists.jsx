
// import { motion } from 'framer-motion'; // Removed unused import
import ArtistProfile from './common/ArtistProfile';
import Button from './common/Button';
import SectionHeading from './common/SectionHeading';

const PopularArtists = () => {
  return (
    <>
      {/* Popular Artists Heading */}
      <SectionHeading 
        text="Popular Artists"
        top="4387px"
        left="121px"
      />

      {/* View all Artists Button */}
      <Button
        className="absolute font-clash font-semibold flex items-center justify-center max-md:!static max-md:mx-auto max-md:mt-4"
        style={{
          width: '203px',
          height: '54px',
          top: '4392px',
          left: '1117px',
          fontSize: '16px',
          lineHeight: '150%',
          letterSpacing: '0.2px',
          textAlign: 'center',
          verticalAlign: 'middle',
          color: '#000000',
        }}
        animationProps={{
           initial: { opacity: 0, scale: 0.9 },
           whileInView: { opacity: 1, scale: 1 },
           viewport: { once: true },
           transition: { duration: 0.5, delay: 0.2 }
        }}
      >
        <span>View all Artists</span>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px' }}>
          <img src="/arrow-image.png" alt="Arrow" style={{ width: '12px', height: '12px', maxWidth: 'none' }} />
        </div>
      </Button>

      {/* Top Artists Section */}
      
      <ArtistProfile 
        name="Ferhat Deniz"
        imageSrc="/artist-1.png"
        top="4545px"
        imgLeft="177px"
        textLeft="147px"
        delay={0}
      />
      
      <ArtistProfile 
        name="Sebastian"
        imageSrc="/artist-2.png"
        top="4545px"
        imgLeft="471px"
        textLeft="467px"
        delay={0.1}
      />

      <ArtistProfile 
        name="Javier Miranda"
        imageSrc="/artist-3.png"
        top="4545px"
        imgLeft="784px"
        textLeft="735px"
        delay={0.2}
      />

      <ArtistProfile 
        name="Erick Butler"
        imageSrc="/artist-4.png"
        top="4545px"
        imgLeft="1114px"
        textLeft="1093px"
        delay={0.3}
      />
    </>
  );
};

export default PopularArtists;
