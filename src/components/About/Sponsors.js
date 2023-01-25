import React, { useRef, useState } from "react";
// import SponsorCard from "./SponsorCard";
import styles from "./Sponsors.module.css";
const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <div className={`${styles.title}`}>Sponsors</div>
      <div className={styles.sponsor_type}>
        <div>Title Sponsor</div>
        <div className={`${styles.sponsor_logo}`}>
          <img
            src="./images/logo/huddle1.png"
            alt="huddle01cam"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
  
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>In collaboration with</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/flow.png"
            alt="flow"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>Ecosystem Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/tdl.png"
            alt="The Dapp List"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>NFT tech Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/komet.png"
            alt="Komet"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
        
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>Robotics Media Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/ri.png"
            alt="RI"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
         
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>Radio Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/fm.png"
            alt="94.3 My fm"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
         
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>Lighting Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/ch.png"
            alt="Color Home"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
    
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>Web3 Infrastructure Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/zv.webp"
            alt="Zeeve"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
    
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>Community Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/dw.png"
            alt="doodhwala"
            className={styles.sponsor_image}
          />
          <img
            src="./images/logo/webBharat.png"
            alt="WEB3 Bharat"
            className={styles.sponsor_image}
          />
          <img
            src="./images/logo/webp.png"
            alt="WEB3 Punjab"
            className={styles.sponsor_image}
          />
          <img
            src="./images/logo/tph.png"
            alt="The Product House"
            className={styles.sponsor_image}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
