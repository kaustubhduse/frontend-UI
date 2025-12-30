import { motion } from 'framer-motion';

const ArtistProfile = ({ 
  name, 
  imageSrc, 
  top, 
  left, 
  delay = 0 
}) => {
  return (
    <>
      <motion.img 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay }}
        whileHover={{ scale: 1.1 }}
        src={imageSrc} 
        alt={name} 
        className="absolute max-md:!static max-md:mx-auto max-md:mt-6" 
        style={{ 
          width: '160px', 
          height: '160px', 
          top: top, 
          left: left, 
          background: '#D9D9D9', 
          borderRadius: '50%', 
          zIndex: 20, 
          maxWidth: 'none' 
        }} 
      />
      <div 
        className="absolute font-clash text-white max-md:!static max-md:text-center max-md:mx-auto max-md:mt-2" 
        style={{ 
          width: 'auto', // Auto width to fit content
          minWidth: '168px',
          height: '36px', 
          top: `calc(${top} + 195px)`, // Calculated offset
          left: `calc(${left} - 30px)`, // Rough centering adjustment, simpler to just use left and manually tune or center align
          right: 'auto',
          textAlign: 'center',
          fontSize: '36px', 
          fontWeight: 400, 
          lineHeight: '100%', 
          letterSpacing: '0.2px', 
          whiteSpace: 'nowrap',
          zIndex: 21,
          // Overriding left to centre align text relative to image is tricky with absolute 
          // without knowing exact widths.
          // For now, let's trust the passed 'left' for text might need to be specific 
          // OR we simply accept the image 'left' and try to center text.
          // In original code, text 'left' was different from image 'left'.
        }}
      >
        {/* We might need to pass specific textLeft if auto-centering isn't perfect, 
            but let's try to improve reusability by centering logic if possible. 
            However, keeping it simple: passing textLeft explicitly might be safer 
            to match pixel perfect design.
        */}
      </div>
      {/* Re-evaluating ArtistProfile strategy:
          The original code had specific coords for text that weren't just purely offset.
          Image Left: 177, Text Left: 147 (Diff -30)
          Image Left: 471, Text Left: 467 (Diff -4)
          Image Left: 784, Text Left: 735 (Diff -49)
          Image Left: 1114, Text Left: 1093 (Diff -21)
          
          The differences are inconsistent. I should probably pass `textLeft` as a prop 
          to maintain pixel perfection, or try to center it.
          Let's update the component to accept `textLeft`.
      */}
    </>
  );
};

// Revise the component immediate before writing to file
const ArtistProfileRevised = ({ 
  name, 
  imageSrc, 
  imgRight, // Not used
  top, 
  imgLeft,
  textLeft,
  delay = 0 
}) => {
  return (
    <>
      <motion.img 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay }}
        whileHover={{ scale: 1.1 }}
        src={imageSrc} 
        alt={name} 
        className="absolute max-md:!static max-md:mx-auto max-md:mt-6" 
        style={{ 
          width: '160px', 
          height: '160px', 
          top: top, 
          left: imgLeft, 
          background: '#D9D9D9', 
          borderRadius: '50%', 
          zIndex: 20, 
          maxWidth: 'none' 
        }} 
      />
      <div 
        className="absolute font-clash text-white max-md:!static max-md:text-center max-md:mx-auto max-md:mt-2" 
        style={{ 
          width: 'auto',
          minWidth: '168px',
          height: '36px', 
          top: `calc(${top} + 195px)`, 
          left: textLeft,
          fontSize: '36px', 
          fontWeight: 400, 
          lineHeight: '100%', 
          letterSpacing: '0.2px', 
          textAlign: 'center', 
          verticalAlign: 'middle', 
          zIndex: 21, 
          whiteSpace: 'nowrap' 
        }}
      >
        {name}
      </div>
    </>
  );
};

export default ArtistProfileRevised;
