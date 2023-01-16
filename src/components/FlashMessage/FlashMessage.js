import React, { useState,useEffect } from 'react';
import './FlashMessage.css'
import {motion} from 'framer-motion/dist/framer-motion'
const FlashMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => clearTimeout(timeout);
  }, [message]);

  if (!visible) {
    return null;
  }

  return (
    <>
    <motion.div 
     animate={{y:['100vh','0vh']}}
     transition={{
         duration: 0.8
     }}
    className="flash-message">
        {message}
    </motion.div>

    </>
  );
};

export default FlashMessage;