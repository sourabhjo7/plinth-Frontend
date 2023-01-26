import styles from "./Card.module.css";
import { Fragment, useState } from "react";
import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    if (props.link == "") {
      alert("Team Registrations Opening Soon!!");
    }
  };

  const [BtnText, setBtnText] = useState("Payment");
  const handleBtnClick = () => {
    setBtnText(<Fragment><p className={styles.typewriter}>Loading...</p></Fragment>);
  };


  const payment = () => {
    props.paymentHandler();
  }



  const handleClick = (e, name, key) => {
    navigate(`/${name}`);
  };
  return (
    <motion.div
      key={props.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.card}
    >
      <div className={styles.imgContainer}>
        <LazyLoadImage
          src={props.imgName == "" ? "./images/coming-soon.jpg" : props.imgName}
          alt=""
          effect="blur"
          placeholderSrc="./Images/dark-bg-preloader.jpg"
          height="100%"
          width="100%"
          className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.name} onMouseEnter={() => { props.btnEnter(); }} onMouseLeave={() => { props.textLeave(); }}>{props.name}</div>
        <div className={styles.tag}>
          <div className={styles.teamTag}>{props.participation}</div>
          <div className={`${styles.teamTag} ${styles.clubName}`}>
            {props.payment > 0 ? "Paid" : "Free"}</div>
        </div>
        <div className={styles.outerbtn}>
          <div className={styles.btn}>

            <button className={styles.regbtn} onClick={(e) => handleRegister(e)} onMouseEnter={() => { props.btnEnter(); }} onMouseLeave={() => { props.textLeave(); }}>
              {props.link == "" ? "Team Register" :
                <a href={props.link} target="_blank">Team Register </a>}
            </button>

            <button className={styles.expbtn} onClick={(e) => handleClick(e, props.name.toLowerCase().replaceAll(" ", "_"), props.id)} onMouseEnter={() => { props.btnEnter(); }} onMouseLeave={() => { props.textLeave(); }}>
              Explore
            </button>
          </div>


          {/* {props.payment > 0 ? (
            <button
              className={`${styles.expbtn}`}
              onClick={() => {
                handleBtnClick();
                setTimeout(() => { payment(); }, 1000)
              }}
              onMouseEnter={() => { props.btnEnter(); }} onMouseLeave={() => { props.textLeave(); }}
            >
              {BtnText}
            </button>
          ) : null} */}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
