import React from "react";
import styles from "./Team.module.css";
import Section from "../Section/Section";

import { useState, useEffect ,useRef} from "react";
import { motion } from "framer-motion/dist/framer-motion";

import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from 'gsap/CSSPlugin'

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import Filter from "./Filter/Filter/Filter";

import { Handles } from "../../HomePage/PlinthHandlesSection/Handles";

import {teams} from './data';

function Team() {
  gsap.registerPlugin(CSSPlugin);

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

  let item5 = useRef(null);
  const [tl4] = useState(new TimelineLite({ paused: false }));


  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 12,
    },
    init: {
      opacity:0
    },
    later: {
      opacity:1
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 38,
      y: mousePosition.y - 40,
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
  };
  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const handleEnter = ()=> setCursorVariant("handle");

  useEffect(() => {
    // console.log(item);
    setCursorVariant("default"); //remove this line
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    tl4.fromTo(item5, 1, { opacity: 0, x:"100%" , ease: Power3.easeOut } ,{ opacity: 0.9,y:"-55px",x:0,z:30, ease: Power3.easeOut }).delay(1);

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
      }}
      
      className={styles.outerBg}>
        <header onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.header}>Our Team</header>
        <div className={styles.outer}>
          {teams.map((section) => {
            return (
              <Section className={styles.section}
                name={section.team}
                leads={section.leads}
                members={section.members}
                handleEnter={handleEnter}
                textLeave={textLeave}
              />
            );
          })}
        </div>
        <div className={styles.footer}>
          <div className={styles.gdscLogo}>
            <img src="./Images/plinth.png" alt="" />
          </div>
          <p onMouseEnter={handleEnter}
          onMouseLeave={textLeave}>Designed and Developed by Plinth, LNMIIT</p>
        </div>
      <div
            className={`${styles.handle}`}
            ref={(el) => {
              item5 = el;
            }}
            onMouseEnter={handleEnter} onMouseLeave={textLeave}
          >
            <Handles />
      </div> 
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

    </>
  );
}

export default Team;

