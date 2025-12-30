import { motion } from 'framer-motion';

const NFTCard = ({ 
  name, 
  collection, 
  price, 
  imageSrc, 
  top, 
  left, 
  delay = 0 
}) => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay }}
        whileHover={{ y: -10 }}
        className="absolute max-md:!static max-md:!w-[90%] max-md:mx-auto max-md:mt-8"
        style={{ top: top, left: left, width: '556px', zIndex: 21 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
          <div>
            <h3 className="font-clash text-white" style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>{name}</h3>
            <p className="font-clash text-white" style={{ fontSize: '14px', opacity: 0.7, margin: 0 }}>{collection}</p>
          </div>
          <span className="font-clash" style={{ fontSize: '18px', fontWeight: 600, background: 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{price}</span>
        </div>
      </motion.div>
      <img 
        src={imageSrc} 
        alt={name} 
        className="absolute max-md:!static max-md:!w-[90%] max-md:!h-auto max-md:mx-auto max-md:mt-2" 
        style={{ 
          width: '556px', 
          height: '450px', 
          top: `calc(${top} + 65px)`, 
          left: left, 
          maxWidth: 'none', 
          zIndex: 20 
        }} 
      />
    </>
  );
};

export default NFTCard;
