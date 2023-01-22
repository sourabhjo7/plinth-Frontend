import React from "react";
import { useState, useEffect } from "react";
import styles from "./CreateTeam.module.css";
// import { Country, City } from 'country-state-city';
import { useForm } from "react-hook-form";
import { Handles } from "../HomePage/PlinthHandlesSection/Handles";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { motion } from "framer-motion/dist/framer-motion";

function CreateTeam() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

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
    text:{
        height : 70,
        width : 70,
        x : mousePosition.x - 33,
        y : mousePosition.y - 35,
        backgroundColor : "white",
        mixBlendMode : "difference"
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
    init:{
        opacity:0,
    },
    later:{
        opacity:1,
    }
  };

  const [cursorVariant, setCursorVariant] = useState("default");
  const handleEnter = () => setCursorVariant("handle");
  const textLeave = () => setCursorVariant("default");
  const btnEnter = () => setCursorVariant("btn");
  const textEnter = () => setCursorVariant("text");

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
        }}
      />}
      <motion.div variants={variants}
                  initial="init"
                  animate="later"
                  transition={{
                    duration: "1",
                  }} className={`${styles.background}`}>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className={`${styles.heading}`}>CREATE TEAM</div>
        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.Form}`}>
          <div className={`${styles.Personal}`}>
            <input onMouseEnter={btnEnter} onMouseLeave={textLeave}
              className={`${styles.input}`}
              placeholder="Team Name*"
              {...register("teamName", {
                required: "This field is required",
                maxLength: {
                  value: 50,
                  message: "Max length is 50",
                },
              })}
            />
            {errors.teamName && (
              <p className={`${styles.p}`}>{errors.teamName.message}</p>
            )}
            <input onMouseEnter={btnEnter} onMouseLeave={textLeave}
              className={`${styles.input}`}
              placeholder="Email of Member 1"
              type="text"
              {...register("email1", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email1 && (
              <p className={`${styles.p}`}>{errors.email1.message}</p>
            )}

            <input onMouseEnter={btnEnter} onMouseLeave={textLeave}
              className={`${styles.input}`}
              placeholder="Email of Member 2"
              type="text"
              {...register("email2", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email2 && (
              <p className={`${styles.p}`}>{errors.email2.message}</p>
            )}

            <input onMouseEnter={btnEnter} onMouseLeave={textLeave}
              className={`${styles.input}`}
              placeholder="Email of Member 3"
              type="text"
              {...register("email3", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid Email address",
                },
              })}
            />
            {errors.email3 && (
              <p className={`${styles.p}`}>{errors.email3.message}</p>
            )}

            <div className={`${styles.buttonCont}`}>
              <button onMouseEnter={btnEnter} onMouseLeave={textLeave} className={`${styles.PaymentBtn}`}>Make Payment</button>
              <input onMouseEnter={btnEnter} onMouseLeave={textLeave}
                type="submit"
                value="Create Team"
                className={`${styles.TeamBtn}`}
              />
            </div>

            <motion.div
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
          </div>
        </form>
      </motion.div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 135,
              density: {
                enable: true,
                value_area: 1200,
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
      />
    </>
  );
}

export default CreateTeam;
