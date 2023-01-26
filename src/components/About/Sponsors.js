import React, { useRef, useState } from "react";
// import SponsorCard from "./SponsorCard";
import styles from "./Sponsors.module.css";
const Sponsors = (props) => {
  return (
    <div className={styles.sponsors}>
      <div onMouseEnter={props.textEnter} onMouseLeave={props.textLeave} className={`${styles.title}`}>Sponsors</div>
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
        <div className={styles.text}>Development Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/saturn.png"
            alt="0xSaturn"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
    
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>Organizing Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/deepverse.png"
            alt="Deep verse"
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
          <img
            src="./images/logo/builder.png"
            alt="BuilderTribe"
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
        <div className={styles.text}>Web3 Gaming Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/trikon.png"
            alt="trikon"
            className={`${styles.sponsor_image} ${styles.blackbg}`}
          />
    
        </div>
      </div>
      <div className={styles.sponsor_type}>
        <div className={styles.text}>Curation and Management Partner</div>
        <div className={styles.sponsor_logo}>
          <img
            src="./images/logo/web3events.png"
            alt="web3events"
            className={`${styles.sponsor_image} ${styles.blackbg}`}
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
            src="./images/logo/chennai.png"
            alt="chennaiweb3Meetup"
            className={`${styles.sponsor_image} ${styles.blackbg}`}
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

        <div className={styles.sponsor_logo}>
        <img
            src="./images/logo/webBharat.png"
            alt="WEB3 Bharat"
            className={styles.sponsor_image}
          />        
          <img
            src="./images/logo/punedao.png"
            alt="puneDao"
            className={`${styles.sponsor_image} ${styles.blackbg}`}
          />
          <img
            src="./images/logo/web3meet.png"
            alt="web3meetup"
            className={styles.sponsor_image}
          />
          <img
            src="./images/logo/w3g.png"
            alt="W3G"
            className={styles.sponsor_image}
          />
        </div>

        <div className={styles.sponsor_logo}>
        <img
            src="./images/logo/wolf.png"
            alt="wolf"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
          <img
            src="./images/logo/polygon.png"
            alt="polygon"
            className={`${styles.sponsor_image} ${styles.whitebg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
