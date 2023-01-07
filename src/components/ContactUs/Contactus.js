import React,{useEffect,useState,useRef} from "react";
import styles from "./Contactus.module.css";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaFacebookF, FaLinkedin , FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import {SiGmail } from "react-icons/si";
import {GrInstagram } from "react-icons/gr";
import { motion} from "framer-motion/dist/framer-motion";

import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from 'gsap/CSSPlugin'

import { Handles } from "../HomePage/PlinthHandlesSection/Handles";

const Contactus = () => {
  const items = [
    {
      name: "Gunit Varshney",
      image: "./images/gunitY19.jfif",
      designation: "Fest Head",
      phone: "+91 88755 10652",
      mail: "/",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
    },
    {
      name: "Raja Kumar Singh",
      image: "./images/rajaY19.jfif",
      designation: "Fest Head",
      phone: "+91 96803 72941",
      mail: "/",
      facebook: "/",
      instagram: "/",
      linkedin: "/",
    }
  ];

  gsap.registerPlugin(CSSPlugin);
  let item1 = useRef(null);
  let item5 = useRef(null);
  const [tl] = useState(new TimelineLite({ paused: false }));
  const [tl3] = useState(new TimelineLite({ paused: false }));

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });


  const textEnter = ()=> setCursorVariant("text");
  const cardEnter = ()=> setCursorVariant("card");
  const textLeave = ()=> setCursorVariant("default");

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 12,
    },
    contactInitial: {
      opacity:0,
      y:"3vh"
    },
    contactAnimate: {
      opacity:1,
      y:0
    },
    cardInitial: {
      opacity:0,
      x:"100%"
    },
    cardAnimate: {
      opacity:1,
      x:0
    },
    text:{
      height : 80,
      width : 80,
      x : mousePosition.x - 38,
      y : mousePosition.y - 40,
      backgroundColor : "violet",
      mixBlendMode : "difference"
    },
    card : {
      height : 46,
      width :46,
      x : mousePosition.x - 21,
      y : mousePosition.y - 23,
      backgroundColor : "white",
      mixBlendMode : "difference"
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

    tl.fromTo(item1, 4, { opacity: 0, ease: Power3.easeOut } ,{ opacity: 1, ease: Power3.easeOut });
    tl3.fromTo(item5, 1, { opacity: 0, x:"100%" , ease: Power3.easeOut } ,{ opacity: 0.8,y:"-55px",x:0, ease: Power3.easeOut }).delay(1.2);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
    <div className={styles.contact_body}>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          x: { delay: 0 },
          y: { delay: 0 },
        }}
      />
      <div className={styles.img_and_title}>
        <div ref={(el) => {item1 = el;}} className={styles.img_div}>
        <img
          src="./images/image-contact.svg"
          alt="plinth2k23"
          className={styles.image_contact}
        ></img>
        </div>
        <div className={styles.content_contact}>
          <motion.div variants={variants}
          initial="contactInitial"
          animate="contactAnimate"
          transition={{
            duration : 1,
            delay:0.5
        }} onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.heading_contact}>Our Team</motion.div>
          {items.map((item, index) => {
            return (
              <motion.div variants={variants}
              initial="cardInitial"
              animate="cardAnimate"
              transition={{
                duration : 1,
                delay:0.5
            }} key={index} style={{width:"fit-content"}}>
                <div className={styles.contact_card}>
                  <img
                    src={item.image}
                    alt=""
                    className={styles.contact_card_img}
                  />
                  <div onMouseEnter={cardEnter} onMouseLeave={textLeave} className={styles.contact_details}>
                    <div className={styles.name}>{item.name}</div>
                    <span className={styles.designation}>{item.designation}</span>
                    <span className={styles.phone}>{item.phone}</span>
                  </div>
                  <div onMouseEnter={cardEnter} onMouseLeave={textLeave} className={styles.icons}>
                    
                    <Link to={item.mail} classname={styles.icon} style={{color:"white"}}><SiGmail size={18}/></Link>
                    {/* <Link to={item.facebook} style={{color:"white"}}><FaFacebookF /></Link> */}
                    <Link to={item.instagram} classname={styles.icon} style={{color:"white"}}><GrInstagram size={18}/></Link>
                    <Link to={item.linkedin} classname={styles.icon} style={{color:"white"}}><FaLinkedinIn size={18}/></Link>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
          <div
            className={`${styles.Handles}`}
            ref={(el) => {
              item5 = el;
            }}
            onMouseEnter={cardEnter} onMouseLeave={textLeave}
          >
            <Handles />
          </div>
    </>
  );
};

export default Contactus;
