import React, { useState, useEffect, useRef } from "react";
import styles from "./Events.module.css";
import { motion, useScroll, useSpring } from "framer-motion/dist/framer-motion";

import { ReactComponent as Base } from "./main.svg";

import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Filter from "./Filter/Filter/Filter";

import { Handles } from "../HomePage/PlinthHandlesSection/Handles";

function Events({auth,setAuth}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  //Particle Bg
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  gsap.registerPlugin(CSSPlugin);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    def: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 12,
    },
    normal: {
      x: "-100%",
      opacity: 0,
    },
    normal1: {
      x: "100%",
      opacity: 0,
    },
    later: {
      x: 0,
      opacity: 0.85,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 58,
      y: mousePosition.y - 60,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    diamond: {
      height: 70,
      width: 70,
      x: mousePosition.x - 33,
      y: mousePosition.y - 35,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    inview: {
      opacity: 1,
    },
    notinview: {
      opacity: 0,
    },
    btn: {
      height: 40,
      width: 40,
      x: mousePosition.x - 18,
      y: mousePosition.y - 20,
      backgroundColor: "white",
      //   borderWidth: '2px',
      mixBlendMode: "difference",
    },
    handle: {
      height: 50,
      width: 50,
      x: mousePosition.x - 23,
      y: mousePosition.y - 25,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    handlebefore: {
      opacity: 0,
    },
    handleafter: {
      opacity: 1,
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
  };
  const [cursorVariant, setCursorVariant] = useState("def");
  const textEnter = () => setCursorVariant("text");
  const handleEnter = () => setCursorVariant("handle");
  const diamondEnter = () => setCursorVariant("diamond");
  const textLeave = () => setCursorVariant("def");
  const btnEnter = () => setCursorVariant("btn");

  // const btnEnter = () => setCursorVariant("btn");

  let item3 = useRef(null);
  const [tl] = useState(new TimelineLite({ paused: false }));

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    tl.fromTo(
      item3,
      1,
      { opacity: 0, y: "-100%", ease: Power3.easeOut },
      { opacity: 1, y: 0, ease: Power3.easeOut }
    );

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
          x: { delay: 0},
          y: { delay: 0},
          type: 'tween', stiffness: 1000000 ,bounce:0
        }}
      />}
      <div className={styles.body}>


        <div ref={ref} className={styles.maindiv}>
          <div className={styles.animDiv}>
            <div className={styles.baseDiv}>
              <div
                ref={(el) => {
                  item3 = el;
                }}
                className={styles.base2Div}
              >
                <div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className={`${styles.title}`}
                >
                  <motion.div
                    variants={variants}
                    initial="normal"
                    whileInView="later"
                    transition={{
                      duration: "1",
                    }}
                    viewport={{ once: false, amount: 0.6, delay: "0.2" }}
                  >
                    <p className={styles.leftTitle}>EVENTS</p>
                  </motion.div>
                </div>
                <Base className={styles.base} />
              </div>
            </div>
          </div>

          <div className={styles.outer}>
            <Filter btnEnter={btnEnter} auth = {auth} textLeave={textLeave}/>
          </div>

          <motion.div className="progress" style={{ scaleX }} />
        </div>

        <motion.div className={styles.handle}
          onMouseEnter={handleEnter}
          onMouseLeave={textLeave}
          variants={variants}
          initial="handlebefore"
          animate="handleafter"
          transition={{
            duration: "1",
            delay: "1.5",
          }}
        >
          <Handles />

        </motion.div>

      { isDesktop&&<Particles
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
          fpsLimit: 120,
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
        }}
      />}
      </div>
    </>
  );
}

export default Events;
