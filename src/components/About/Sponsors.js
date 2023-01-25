import React, { useRef, useState } from "react";
// import SponsorCard from "./SponsorCard";
import styles from "./Sponsors.module.css";
const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <div className={`${styles.title}`}>Sponsors</div>
      <div className={styles.sponsor_type}>
        <div>Title Sponsor</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/dapp.jpg"
            alt="huddle01cam"
            className={styles.sponsor_image}
          />
  
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div>In collaboration with</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/dapp.jpg"
            alt="flow"
            className={styles.sponsor_image}
          />
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div>Ecosystem Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/dapp.jpg"
            alt="The Dapp List"
            className={styles.sponsor_image}
          />
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div>NFT tech Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/dapp.jpg"
            alt="Komet"
            className={styles.sponsor_image}
          />
        
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div>Robotics Media Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/dapp.jpg"
            alt="RI"
            className={styles.sponsor_image}
          />
         
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div>Radio Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/dapp.jpg"
            alt="94.3 My fm"
            className={styles.sponsor_image}
          />
         
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div>Lighting Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/dapp.jpg"
            alt="Color Home"
            className={styles.sponsor_image}
          />
    
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div>Community Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/dapp.jpg"
            alt="doodhwala"
            className={styles.sponsor_image}
          />
          <img
            src="./images/dapp.jpg"
            alt="WEB3 Bharat"
            className={styles.sponsor_image}
          />
          <img
            src="./images/dapp.jpg"
            alt="WEB3 Punjab"
            className={styles.sponsor_image}
          />
          <img
            src="./images/dapp.jpg"
            alt="The Product House"
            className={styles.sponsor_image}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
