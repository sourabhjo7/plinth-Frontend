import React from "react";
import styles from './Handles.module.css'
import Youtube from './Images/Youtube.png'
import Instagram from './Images/Instagram.png'
import Facebook from './Images/Facebook.png'
import Twitter from './Images/Twitter.png'

export const Handles = () => {
    return (
        <div className={`${styles.HandleContainer}`}>
            <a href="https://youtube.com/c/PlinthLNMIITJaipur" target="_blank" rel="noopener noreferrer">
                <div className={[styles.Handles, styles.Youtube].join(' ')}>
                    <img src={Youtube} alt='' className={`${styles.yt}`} />
                </div>
            </a>

            <a href="https://instagram.com/plinth.lnmiit?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                <div className={`${styles.Handles}`} >
                    <img src={Instagram} alt='' className={`${styles.insta}`} />
                </div>
            </a>

            <a href="https://m.facebook.com/263440397092228/" target="_blank" rel="noopener noreferrer">
                <div className={`${styles.Handles}`}>
                    <img src={Facebook} alt='' className={`${styles.facebook}`} />
                </div>
            </a>

            <a href="https://twitter.com/PlinthLNMIIT?t=s1vNs-Gjo66SvllyVlBqEw&s=08" target="_blank" rel="noopener noreferrer">
                <div className={`${styles.Handles}`}>
                    <img src={Twitter} alt='' className={`${styles.twitter}`} />
                </div>
            </a>
        </div>
    );
}



