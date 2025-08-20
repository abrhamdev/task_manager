/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const LoadingAnimation = ({width,height}) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }} 
      className=" bg-transparent w-fit p-2"
    >
      <motion.div 
        variants={childVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }} 
        className="space-y-4"
      >
        <motion.div 
          variants={childVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }} 
          className={`w-${width} h-${height} border-2 border-t-transparent rounded-full border-blue-500 animate-spin`} 
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;