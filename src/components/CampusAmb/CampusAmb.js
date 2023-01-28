import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./CampusAmb.module.css";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { motion } from "framer-motion/dist/framer-motion";

import { Handles } from "../HomePage/PlinthHandlesSection/Handles";
import Contact from "./Contacts/Contact";

const CampusAmb = ({auth,setAuth}) => {
  const [section, setSection] = useState("about");
  const [val, setVal] = useState("A part  time opportunity for the students to cater a large crowd in various fields like programming, gaming, MUN etc.  The program provides occassions for networking and building connections. ");
  const handleView = (e) => {
    const { id } = e.target;
    if (id === "contact") {
      setVal(<Contact />);
      setSection("contact");
      console.log("contact")
    } else if (id === "about") {
      setVal("A part  time opportunity for the students to cater a large crowd in various fields like programming, gaming, MUN etc.  The program provides occassions for networking and building connections. ");
      setSection("about");

    } else if (id === "structure") {
      setVal("A volunteer role to spread information and schedule of Plinth and its events to the masses belonging to universities other than the LNMIIT. Required participation for availing benefits must be 12.");
      setSection("structure");

    } else if (id === "timeline") {
      setVal("Registration Deadline: 15th January 2023");
      setSection("timeline");

    } else if (id === "prizes") {
      setVal("Free pronite passes, a certificate for adding in the CV, Plinth customised goodies. Note: All concessions and certificates are subject to the participation you bring. Required participation for availing benefits must be 12.");
      setSection("prizes");
    }
  };

  //Particle Bg
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 12,
    },
    imgInitial: {
      opacity: 0
    },
    imgAnimate: {
      opacity: 1
    },
    contentInitial: {
      opacity: 0,
      y: "-100%"
    },
    contentAnimate: {
      opacity: 1,
      y: 0
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 38,
      y: mousePosition.y - 40,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    card: {
      height: 90,
      width: 90,
      x: mousePosition.x - 43,
      y: mousePosition.y - 45,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    card2: {
      height: 46,
      width: 46,
      x: mousePosition.x - 21,
      y: mousePosition.y - 23,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    btn: {
      height: 40,
      width: 40,
      x: mousePosition.x - 18,
      y: mousePosition.y - 20,
      backgroundColor: "white",
      //   borderWidth: '2px',
      mixBlendMode: "difference"
    },
    handlebefore: {
      opacity: 0
    },
    handleafter: {
      opacity: 1
    },
  };
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const btnEnter = () => setCursorVariant("btn");
  const cardEnter = () => setCursorVariant("card");
  // const card2Enter = ()=> setCursorVariant("card2");
  const textLeave = () => setCursorVariant("default");

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

  const isDesktop = window.screen.width > 600;
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
          type: 'tween', stiffness: 10000 ,bounce:0
          // type: 'tween',ease: [0.17, 0.67, 0.83, 0.67] 
        }}
      />}
      <div className={styles.explore_body}>
        <div className={styles.explore}>

        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className={`${styles.explore_heading} ${styles.none}`}>Campus Ambassador Program</div>

          <motion.div variants={variants}
            initial="imgInitial"
            animate="imgAnimate"
            transition={{
              duration: 1.5,
              delay: 0
            }} className={styles.imgdiv}>
            <div className={styles.imgCon}>
              <LazyLoadImage
                className={styles.explore_image}
                onMouseEnter={cardEnter} onMouseLeave={textLeave}
                src="./images/campamb.jpg"
                // src = "./images/events/astronomy/astrohunt/poster.jpg"
                alt="Campus Ambassador Program Poster"
                effect="blur"
                height="100%"
                width="100%"
                placeholderSrc="./Images/dark-bg-preloader2.jpg"
              />
            </div>
          </motion.div>

          <motion.div variants={variants}
            initial="contentInitial"
            animate="contentAnimate"
            transition={{
              duration: 1,
              delay: 0
            }} className={styles.explore_content}>
            <div onMouseEnter={textEnter} onMouseLeave={textLeave} className={`${styles.explore_heading} ${styles.notnone}`}>Campus Ambassador Program</div>
            <div className={styles.explore_details}>
              <div onMouseEnter={btnEnter} onMouseLeave={textLeave} className={styles.explore_navbar}>
                <div
                  className={section === "about" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
                  style={{ border: 0 }}
                  onClick={(e) => handleView(e)}
                  id="about"
                >
                  About
                </div>
                <div
                  className={section === "structure" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
                  onClick={(e) => handleView(e)}
                  id="structure"
                >
                  Structure
                </div>
                <div
                  className={section === "prizes" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
                  onClick={(e) => handleView(e)}
                  id="prizes"
                >
                  Prizes
                </div>
                <div
                  className={section === "timeline" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
                  onClick={(e) => handleView(e)}
                  id="timeline"
                >
                  Timeline
                </div>
                <div
                  className={section === "contact" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
                  onClick={(e) => handleView(e)}
                  id="contact"
                >
                  Contacts
                </div>
              </div>
              <div className={styles.explore_description}><div onMouseEnter={btnEnter} onMouseLeave={textLeave}>{val}</div></div>
            </div>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf22WYYU0_e9R-GnHkv8XN4FBVdeXinJDSjj-li9Q-wjcAEHA/viewform" target="_blank" rel="noopener noreferrer">
              <button
                className={styles.event_register_button}
                onMouseEnter={btnEnter} onMouseLeave={textLeave}
              >
                Register
              </button>
            </a>
          </motion.div >
        </div>

        <motion.div onMouseEnter={btnEnter} onMouseLeave={textLeave} variants={variants}
          initial="handlebefore"
          animate="handleafter"
          transition={{
            duration: "1",
            delay: "0.5"
          }}>
          <Handles />
        </motion.div>

        { isDesktop&& <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 500,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 3,
                },
                image: {
                  src: "",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.7,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 4,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 64.09640098708464,
                color: "#ffffff",
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 85.20998174071826,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: {
                  distance: 170,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
          }}
        />}

      </div>
    </>
  );
};

export default CampusAmb;
