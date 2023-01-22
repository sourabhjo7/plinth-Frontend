import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import "../../fonts/Absolute_Xero/Absolute_Xero.ttf";
import List from "./List";
import List2 from "./List2";
import { motion } from "framer-motion/dist/framer-motion";
import axios from "axios";


function Admin({serverSystemUrl}) {
const [users,setUsers]=useState([]);
const [payments, setPayments] = useState([]);
const [count,setCount]=useState(0);
  useEffect(() => { 
    axios
    .get(`${serverSystemUrl}/auth/getallusers`, {
      validateStatus: false,
      withCredentials: true,
    })
    .then((response) => {
      if (response.status == 200) {
         setCount(response.data.count);
         setUsers((prev)=>{
          return [...response.data.users]
         })
        console.log("---",count );
      }
    });

    axios
    .get(`${serverSystemUrl}/auth/getallpendingpayments`, {
      validateStatus: false,
      withCredentials: true,
    })
    .then((response) => {
      if (response.status == 200) {
         setPayments((prev)=>{
          return [...response.data.pendingPayments]
         })
      }
    });

  }, [])



  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 12,
      borderColor:"red"
    },
  };
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const isMobile = window.screen.width <425;

  return (
    <>
      {!isMobile&&<motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          x: { delay: 0 },
          y: { delay: 0 },
        }}
      />}
      <div className={styles.maindiv}>
        <div className={`${styles.heading}`}>Admin Portal</div>
        <div className={styles.pages}>
          <List users={users}/>
        </div>
        <div className={styles.total}>
          <div className={styles.text}>Total Users : {count}</div>
        </div>
        <div className={`${styles.heading} ${styles.sub}`}>Payment Portal</div>
        <div className={styles.pages}>
          <List2 payments={payments} serverSystemUrl={serverSystemUrl}/>
        </div>
      </div>
    </>
  );
}

export default Admin;
