import React, { useState, useEffect, useRef } from "react";
import styles from "./Komet.module.css";
import { Handles } from "../HomePage/PlinthHandlesSection/Handles";

import { motion } from "framer-motion/dist/framer-motion";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Komet() {
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
    def: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 12,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 58,
      y: mousePosition.y - 60,
      backgroundColor: "white",
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
    init: {
      opacity:0
    },
    later: {
      opacity:1
    },
  };
  const [cursorVariant, setCursorVariant] = useState("def");
  const textEnter = () => setCursorVariant("text");
  const handleEnter = () => setCursorVariant("handle");
  const diamondEnter = () => setCursorVariant("diamond");
  const textLeave = () => setCursorVariant("def");
  const btnEnter = () => setCursorVariant("btn");

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

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          x: { delay: 0 },
          y: { delay: 0 },
          type: 'tween', stiffness: 10000 ,bounce:0
        }}
      />
      <motion.div 
      variants={variants}
      initial="init"
      whileInView="later"
      transition={{
        duration: "1",
      }} className={styles.body}>

        <div className={styles.maindiv}>
          <div className={styles.animDiv}>
            {/* <div onMouseEnter={textEnter} onMouseLeave={textLeave} className={`${styles.title}`}>KOMET</div> */}
            <div className={`${styles.imgdiv}`}>
              <img onMouseEnter={textEnter} onMouseLeave={textLeave} src="./images/Komet.png" className={`${styles.logo}`} alt="komet_logo"></img>
              <div onMouseEnter={btnEnter} onMouseLeave={textLeave} className={`${styles.title}`}>Get your NFT Ticket here</div>
            </div>
            <div className={`${styles.textdiv}`}>
              <div onMouseEnter={btnEnter} onMouseLeave={textLeave} className={`${styles.text}`}>
              Lorem ipsum dolor sit amet consectetur. Quam cras molestie consequat quis enim netus pharetra. Enim libero sed urna in. Faucibus justo tellus eget arcu. Turpis sed fermentum et risus cursus enim mauris suspendisse. 
<br />
Lorem at feugiat massa vitae sagittis at lectus ipsum. Suspendisse turpis laoreet natoque consectetur eget quisque quisque. Eget semper tempor sed tincidunt dolor purus arcu senectus et. Semper 
              </div>
            </div>

              <button
                className={styles.event_register_button}
                onMouseEnter={btnEnter} onMouseLeave={textLeave}
                onClick={()=>alert("Claim Ticket")}
              >
                Claim your Tickets!
              </button>

          </div>
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
      </motion.div>
    </>
  );
}

export default Komet;
