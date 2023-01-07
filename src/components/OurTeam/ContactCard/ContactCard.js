import React from 'react';
import styles from './ContactCard.module.css';


import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FaLinkedinIn } from "react-icons/fa";
import {SiGmail } from "react-icons/si";
import {GrInstagram } from "react-icons/gr";


function ContactCard(props){
    return(
          <div className={styles.contact_card}>
            <div className={styles.image}>
                <LazyLoadImage 
                alt={props.details.name} 
                src={props.details.image} 
                effect = "blur"
                placeholderSrc="./images/profile-pic.png"
                height = "100%"
                width = "100%"
                className={styles.contact_card_img} />
            </div>

            <div className={styles.contact_details}>
              <div className={styles.name}>{props.details.name}</div>
              <span className={styles.designation}>{props.details.designation}</span>
              <span className={styles.phone}>{props.details.phone}</span>
            </div>
            <div className={styles.icons}>

              <a href={props.details.mail} classname={styles.icon}><SiGmail className={styles.iconTag}/></a>
              <a href={props.details.instagram} classname={styles.icon}><GrInstagram className={styles.iconTag}/></a>
              <a href={props.details.linkedin} classname={styles.icon}><FaLinkedinIn className={styles.iconTag}/></a>
            </div>
          </div>

    );
}

export default ContactCard;