import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import img from "./img.webp";
import { GiCrossMark } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const Modal = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5500);

    return () => clearTimeout(timeout);
  }, []);

  const variants = {
    init: {
      opacity: 0,
    },
    later: {
      opacity: 1,
    },
  };
  const isMobile = window.screen.width < 425;

  return (
    <AnimatePresence mode="wait">
      {visible ? (
        <motion.div
          key="flash"
          variants={variants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: "0.5",
            delay: "0",
          }}
          className={styles.main}
        >
          {/* <div className={styles.text}>
            Modal
        </div> */}
          <div onClick={()=>{setVisible(false);}} className={styles.imgdiv}>
            <img className={styles.img} src={img} alt="Artist"></img>
            <div className={styles.crossdiv}>
              <GiCrossMark className={styles.cross} size={isMobile?16:24} />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
