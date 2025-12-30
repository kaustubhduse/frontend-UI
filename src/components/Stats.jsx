import FadeIn from './FadeIn';

const Stats = () => {
  return (
    <FadeIn delay={0.2} className="absolute max-md:!static max-md:flex max-md:flex-col max-md:items-center max-md:gap-8 max-md:mt-12 max-md:w-full" style={{ top: '812px', left: '120px', zIndex: 30 }}>
      <div style={{ position: 'absolute', left: '0px' }} className="max-md:!static max-md:text-center">
        <div className="font-clash font-semibold text-white" style={{ fontSize: '48px', lineHeight: '48px', letterSpacing: '0.2px' }}>32k+</div>
        <div className="font-clash text-white" style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', fontWeight: 400, marginTop: '5px' }}>Artwork</div>
      </div>
      <div style={{ position: 'absolute', left: '198px' }} className="max-md:!static max-md:text-center">
        <div className="font-clash font-semibold text-white" style={{ fontSize: '48px', lineHeight: '48px', letterSpacing: '0.2px' }}>20k+</div>
        <div className="font-clash text-white" style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', fontWeight: 400, marginTop: '5px' }}>Auctions</div>
      </div>
      <div style={{ position: 'absolute', left: '398px' }} className="max-md:!static max-md:text-center">
        <div className="font-clash font-semibold text-white" style={{ fontSize: '48px', lineHeight: '48px', letterSpacing: '0.2px' }}>12k+</div>
        <div className="font-clash text-white" style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '0.2px', fontWeight: 400, marginTop: '5px' }}>Artists</div>
      </div>
    </FadeIn>
  );
};

export default Stats;
