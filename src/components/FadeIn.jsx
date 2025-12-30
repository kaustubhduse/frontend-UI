import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, direction = 'up', fullWidth = false, className = '', ...props }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
