import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'white', // 'white' or 'gradient'
  className = '', 
  style = {}, 
  animationProps = {},
  onClick,
  ...props 
}) => {
  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: 600,
    zIndex: 30,
    ...style,
  };

  const defaultAnimation = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.5 },
    ...animationProps
  };

  const isGradient = variant === 'gradient';

  return (
    <motion.button
      className={`${className} ${isGradient ? 'text-white' : 'text-black'}`}
      style={{
        ...baseStyles,
        background: isGradient 
          ? 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)' 
          : '#FFFFFF',
      }}
      onClick={onClick}
      {...defaultAnimation}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
