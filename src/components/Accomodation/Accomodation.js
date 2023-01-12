import React, { useState, useEffect, Fragment } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./Accomodation.module.css";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import FlashMessage from "../FlashMessage/FlashMessage";
import { motion } from "framer-motion/dist/framer-motion";

import { Handles } from "../HomePage/PlinthHandlesSection/Handles";
import Contact from "./Contacts/Contact";

const Accomodation = ({ auth }) => {
  const [section, setSection] = useState("about");
  const navigate=useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const [href,setHref]=useState('')
  const [flashMessage,setFlashMessage]=useState(false)
  const [val, setVal] = useState(<Fragment>
    <div style={{display:"flex",flexDirection:"column"}}>
    <div style={{alignSelf:"center",justifySelf:"center",margin:"auto auto",fontWeight:"bold"}}>Accomodation Passes also includes ProNite Passes.</div>
    Plinth has grown in stature in terms of its content, infrastructure, and logistics. Thanks to an overwhelming throng of such scale and a world-class technological show, mixed correctly with a tinge of enjoyment, our goal is a technical extravaganza. With such diversity, the hospitality of the guests is critical and makes up a top priority for organizers.
    <br></br><br />
    At Plinth, we are continually striving for everyone's satisfaction. We will leave no stone unturned in meeting the demands of secure housing away from home. Along with lodging for our participants, we have set up a cafeteria serving a range of cuisines to suit every appetite. We make every effort to make your stay pleasant and memorable.
    </div></Fragment>);
  const handleView = (e) => {
    const { id } = e.target;
    if (id === "contact") {
      setVal(<Contact />);
      setSection("contact");
    } else if (id === "about") {
      setVal(<Fragment>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{alignSelf:"center",justifySelf:"center",margin:"auto auto",fontWeight:"bold"}}>Accomodation Passes also includes ProNite Passes.</div>
        Plinth has grown in stature in terms of its content, infrastructure, and logistics. Thanks to an overwhelming throng of such scale and a world-class technological show, mixed correctly with a tinge of enjoyment, our goal is a technical extravaganza. With such diversity, the hospitality of the guests is critical and makes up a top priority for organizers.
        <br></br><br />
        At Plinth, we are continually striving for everyone's satisfaction. We will leave no stone unturned in meeting the demands of secure housing away from home. Along with lodging for our participants, we have set up a cafeteria serving a range of cuisines to suit every appetite. We make every effort to make your stay pleasant and memorable.
        </div></Fragment>);
      setSection("about");

    } else if (id === "policies") {
      setVal(<Fragment><b>Cancellation Policy</b>
        <br />
        There shall be no refunds for cancellation once the registration process has been done.
        <br />
        We thus request all attendees to carefully review their schedules before registration.
      </Fragment>);
      setSection("policies");

    } else if (id === "info") {
      setVal(<Fragment>
        <b>Accomodation Charges</b><br />
        Accommodation Charges Accommodation charges are INR 999 per candidate for 3 days. Maximum of 3 nights stay allowed (27th Jan 7 AM - 30th Jan 10 AM).
        It does not include a food facility. Guest can purchase their meals from the food court, cafeteria, or hostel messes at subsidized rates.
        <br /><br />
        <b>Timing</b><br />
        Check-in: 7:00 AM to 10:00 PM on your check-in date<br />
        Check-out: Anytime on or before your check-out date


      </Fragment>);
      setSection("info");

    } else if (id === "instructions") {
      setVal(<Fragment>
        <b>Instructions</b>
        <br />:- All guests carrying electronic items of any kind will have to declare them at the LNMIIT Jaipur main gate through a ‘Gate Pass’. The belongings will also be checked on the way out of LNMIIT Jaipur along with the ‘Gate Pass’, failing to do so will result in the belongings being impounded.
        <br /><br />:- All guests will be provided with mattresses and a blanket. Plinth will not provide a mattress cover or pillows. The guests are encouraged to arrange them independently (if required).
        <br /><br />:- Any commodities issued to the guests would have to be returned in sound condition to the organizers during check-out.
        <br /><br />:- Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their electronic/physical receipts of accommodation would be heavily fined and disqualified.
        <br /><br />:- Entry will be only through the 'Main Gate' of LNMIIT Jaipur. All other gates will be closed for entry.
        <br /><br />:- All guests are required to carry their valid government photo id proofs at all times. In addition, the student participants are also required to carry their valid College photo id card. Any guest failing to produce their id card will not be permitted inside the campus during Plinth 2022.
        <br /><br />:- Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus. Any other item if deemed unsafe will be prohibited. The decision of the Security and Plinth team will be final in case of any disputes.
        <br /><br />:- No outside vehicles will be allowed into the campus during the Plinth 2022."
        <br /><br />:- All guests are required to maintain the decorum and cleanliness of the campus and follow the rules of the campus at all times.
        <br /><br />:- Plinth 2023 and LNMIIT will not be responsible for any mishaps that occur throughout the duration of stay for Plinth 2023


      </Fragment>);
      setSection("instructions");
    }
  };
  const handleClick=()=>{
    if(isChecked){
      navigate('/login')
    }
    else{
      // console.log(flashMessage)
      setFlashMessage(!flashMessage)
    }
    // isChecked?:
    // isChecked?setHref('/login'):setHref('')
  }
  const handlePayment=()=>{
    if(isChecked){
      navigate(`/payments/accomodation/0`)
    }
    else{
      // console.log(flashMessage)
      setFlashMessage(!flashMessage)
    }
  }
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

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          x: { delay: 0 },
          y: { delay: 0 },
          type: 'tween', stiffness: 10000, bounce: 0
          // type: 'tween',ease: [0.17, 0.67, 0.83, 0.67] 
        }}
      />
      <div className={styles.explore_body}>
        <div className={styles.explore}>

          <div onMouseEnter={textEnter} onMouseLeave={textLeave} className={`${styles.explore_heading} ${styles.none}`}>Accomodation</div>

          {/* <motion.div variants={variants}
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
                src="./images/lnmhacksposter.jpeg"
                alt="LNM hacks Poster"
                effect="blur"
                height="100%"
                width="100%"
                placeholderSrc="./Images/dark-bg-preloader2.jpg"
              />
            </div>

            <a href="https://drive.google.com/file/d/128GmI_5PjP_C94mgr77mPYrvVkzCpKMs/view?usp=sharing"><button
                className={styles.event_register_button1}
                 onMouseEnter={btnEnter} onMouseLeave={textLeave}
              >
                Brochure
              </button></a>
          </motion.div> */}

          <motion.div variants={variants}
            initial="contentInitial"
            animate="contentAnimate"
            transition={{
              duration: 1,
              delay: 0
            }} className={styles.explore_content}>
            <div onMouseEnter={textEnter} onMouseLeave={textLeave} className={`${styles.explore_heading} ${styles.notnone}`}>Accomodation</div>
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
                  className={section === "policies" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
                  onClick={(e) => handleView(e)}
                  id="policies"
                >
                  Policies
                </div>
                <div
                  className={section === "instructions" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
                  onClick={(e) => handleView(e)}
                  id="instructions"
                >
                  Instructions
                </div>
                <div
                  className={section === "info" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
                  onClick={(e) => handleView(e)}
                  id="info"
                >
                  Info
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


            <div className={styles.checkboxWrapper} onclick={()=>{setIsChecked(!isChecked)}}>
              <label>
                <input type="checkbox"  onChange={() => setIsChecked((prev) => !prev)} />
                <span>I hereby agree to abide by the terms and conditions as provided.</span>
              </label>
            </div>
            {flashMessage?<FlashMessage message='Please check the Checkbox to continue'/>:null}
            {(auth==="false") &&
              <button
                className={styles.event_register_button}
                onMouseEnter={btnEnter} onMouseLeave={textLeave}
                onClick={()=>handleClick()}
              >
                Register Now!
              </button>}

            {(auth!=="false") && <a href=""  >
              <button
                className={styles.event_register_button}
                onMouseEnter={btnEnter} onMouseLeave={textLeave}
                onClick={()=>handlePayment()} 
              >
                Make Payment 
              </button></a>}

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

        {isDesktop && <Particles
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

export default Accomodation;
