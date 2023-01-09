import React, { useState, useEffect, useRef } from "react";
import styles from "./Login.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Handles } from "../HomePage/PlinthHandlesSection/Handles";
import axios from "axios";
import qs from "qs";
import { motion } from "framer-motion/dist/framer-motion";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";
import FlashMessage from "../FlashMessage/FlashMessage";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Login({ serverSystemUrl ,auth,setAuth}) {
  console.log("===>", serverSystemUrl);
  gsap.registerPlugin(CSSPlugin);
  let item1 = useRef(null);
  let item2 = useRef(null);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { name, id } = params;
  const [tl] = useState(new TimelineLite({ paused: false }));
  const [tl2] = useState(new TimelineLite({ paused: false }));
  const [flashMessage,setflashMessage]=useState(false);
  const [message,setMessage]=useState("logged in successfully!")
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async(data) => {
    console.log("--->", data);
    const res = await axios.post(
      `${serverSystemUrl}/auth/login`,
      data,
      { validateStatus: false, withCredentials: true }
    );
    setMessage(res.data.msg)
    if (res.status === 200) {
      console.log("logged as -",res.data.user.role);
      setMessage(res.data.msg)
      setflashMessage(!flashMessage);
      setTimeout(() => {
       setAuth(res.data.user.role);
       navigate("/competitions")  
      }, 2000);
    }
    else{
      navigate("/registration")
    }
    console.log("this is data of response ", res.data);

    // axios
    //   .post(`http://localhost:5000/auth/login`, qs.stringify(data), {
    //     withCredentials: true,
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //     //             if(response.data==="Succesfully registered" && response.status===200 ){

    //     // window.open(`http://localhost:3001/${name}/${id}/${localStorage.getItem('username')}/${localStorage.getItem('userid')}/t`,'_self')
    //     //             }
    //   });
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
    text: {
      height: 70,
      width: 70,
      x: mousePosition.x - 33,
      y: mousePosition.y - 35,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    subtext: {
      height: 36,
      width: 36,
      x: mousePosition.x - 16,
      y: mousePosition.y - 18,
      // backgroundColor : "white",
      borderWidth: "2px",
      // mixBlendMode : "difference"
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
    // init : {
    //     opacity : 0,
    //     x:"1000px",
    //     y:"50%"
    // },
    // later : {
    //     opacity : 1,
    //     x:"49.8vw",
    //     y:"90vh",
    //     z:2
    // },
    handlebefore: {
      opacity: 0,
    },
    handleafter: {
      opacity: 1,
    },
  };
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const subtextEnter = () => setCursorVariant("subtext");
  const btnEnter = () => setCursorVariant("btn");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    tl.fromTo(
      item1,
      1,
      { y: "-100%", opacity: 0, ease: Power3.easeOut },
      { y: 0, opacity: 1, ease: Power3.easeOut }
    );
    tl2
      .fromTo(
        item2,
        1,
        { opacity: 0, ease: Power3.easeOut },
        { opacity: 1, ease: Power3.easeOut }
      )
      .delay(0.5);
    // .fromTo(item3, 0.5, { opacity: 0 , ease: Power3.easeOut } ,{ opacity: 1, ease: Power3.easeOut });
    // .fromTo(item3, 0.5, { opacity: 0, ease: Power3.easeOut } ,{ opacity: 1, ease: Power3.easeOut });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const isDesktop = window.screen.width > 600;
  return (
    <div className={`${styles.background}`}>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          x: { delay: 0 },
          y: { delay: 0 },
        }}
      />
      {/* <div ref={(el) => {item3 = el;}} className={`${styles.Handles}`} onMouseEnter={btnEnter} onMouseLeave={textLeave}><Handles /></div> */}
      <motion.div
        onMouseEnter={btnEnter}
        onMouseLeave={textLeave}
        variants={variants}
        initial="handlebefore"
        animate="handleafter"
        transition={{
          duration: "1",
          delay: "0.5",
        }}
      >
        <Handles />
      </motion.div>
      {flashMessage?<FlashMessage message={message} />:null}
      <div
        ref={(el) => {
          item1 = el;
        }}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={`${styles.heading}`}
      >
        Login
      </div>
      <form
        ref={(el) => {
          item2 = el;
        }}
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.Form}`}
      >
        <div className={`${styles.Personal}`}>
          {/* <div onMouseEnter={btnEnter} onMouseLeave={textLeave} className={`${styles.h3}`}>Personal Information</div> */}
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Email*"
            type="text"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: -/^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                message: "Invalid Email address",
              },
            })}
          />
          {errors.email && (
            <p className={`${styles.p}`}>{errors.email.message}</p>
          )}
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Password*"
            type="password"
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 4,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className={`${styles.p}`}>{errors.password.message}</p>
          )}

          <input
            onMouseEnter={btnEnter}
            onMouseLeave={textLeave}
            type="submit"
            value="LOGIN"
            className={`${styles.btn}`}
          />
          <div className={styles.lower}>
            <a href="/registration" className={styles.a}>Don't have an account?</a>
            <a href="" className={styles.a}>Forgot Password?</a>
          </div>
        </div>
      </form>

      {isDesktop && (
        <Particles
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
        />
      )}
    </div>
  );
}
