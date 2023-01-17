import React, { useState,useEffect } from 'react';
import './FlashMessage.css'
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion'
const FlashMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => clearTimeout(timeout);
  }, [message]);


  const variants = {
    init : {
        opacity : 0,
        
    },
    later : {
        opacity : 1,
    },
  };

  return (<AnimatePresence mode="wait">
    {visible?<motion.div 
    key="flash-message"
    variants={variants}
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    exit={{ opacity: 0 }}
    transition={{
      duration: "0.5",
      delay:"0"
    }}
    className="flash-message">
        {message}
    </motion.div>:null}
    </AnimatePresence>
  );
};

export default FlashMessage;