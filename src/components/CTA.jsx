
import { motion } from 'framer-motion';
import Button from './common/Button';

const CTA = () => {
  return (
    <>
      {/* Gradient Ellipse - CTA Background */}
      <div
        className="absolute rounded-full max-md:hidden"
        style={{
          width: '654px',
          height: '981px',
          top: '4933px',
          left: '21px',
          background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)',
          backdropFilter: 'blur(260px)',
          WebkitBackdropFilter: 'blur(260px)',
          filter: 'blur(100px)',
          zIndex: 5,
        }}
      />

      {/* CTA Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="/cta-img.png"
        alt="CTA"
        className="absolute max-md:!static max-md:!w-[90%] max-md:!max-w-[360px] max-md:!h-auto max-md:mx-auto max-md:mt-8"
        style={{
          width: '550px',
          height: '550px',
          top: '4976px',
          left: '120px',
          borderRadius: '20px',
          zIndex: 30,
          maxWidth: 'none',
        }}
      />

      {/* CTA Section */}
      <div className="absolute font-clash font-semibold text-white capitalize max-md:!static max-md:!w-full max-md:!h-auto max-md:!text-[32px] max-md:!leading-tight max-md:text-center max-md:px-4 max-md:mt-6" style={{ width: '541px', height: '180px', top: '5077px', left: '779px', fontSize: '48px', lineHeight: '125%', letterSpacing: '1px', verticalAlign: 'middle', zIndex: 30 }}>
        Join the community and get the best NFT collection
      </div>

      <Button
        variant="gradient"
        className="absolute font-clash font-semibold text-white uppercase flex items-center justify-center max-md:!static max-md:mx-auto max-md:mt-8 max-md:mb-16"
        style={{
          width: '310px',
          height: '59px',
          top: '5307px',
          left: '779px',
          fontSize: '20px',
          lineHeight: '125%',
          letterSpacing: '6%',
          borderRadius: '10px',
        }}
        animationProps={{
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 }
        }}
      >
        Join Community
      </Button>
    </>
  );
};

export default CTA;
