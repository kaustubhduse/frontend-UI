import { motion } from 'framer-motion';

const SectionHeading = ({ 
  text, 
  className = '', 
  style = {}, 
  width,
  top,
  left,
  fontSize = '64px',
  ...props 
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`absolute font-clash font-semibold text-white capitalize max-md:!static max-md:!w-full max-md:!h-auto max-md:text-center max-md:mt-16 max-md:px-4 ${className}`}
      style={{
        width: width || 'auto',
        height: '64px',
        top: top,
        left: left,
        fontSize: fontSize,
        lineHeight: '100%',
        letterSpacing: '1px',
        verticalAlign: 'middle',
        zIndex: 30,
        ...style,
      }}
      {...props}
    >
      {text}
    </motion.h2>
  );
};

export default SectionHeading;
