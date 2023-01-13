import React, { useState, useEffect, useRef } from "react";
import styles from "./Registration.module.css";
import { Country, City } from "country-state-city";
import { useForm } from "react-hook-form";
import { Handles } from "../HomePage/PlinthHandlesSection/Handles";
import axios from "axios";
import qs from "qs";
import { motion } from "framer-motion/dist/framer-motion";
import FlashMessage from '../FlashMessage/FlashMessage'
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Navigate, useNavigate } from "react-router-dom";

function Registration({ serverSystemUrl, auth, setAuth }) {
  const [accomodation,setAccomodation]=useState("no");
  const [flashMessage,setflashMessage]=useState(false);
  const [message,setMessage]=useState("logged in")
  const navigate=useNavigate();
  gsap.registerPlugin(CSSPlugin);
  let item1 = useRef(null);
  let item2 = useRef(null);
  // let item3 = useRef(null);
  const [tl] = useState(new TimelineLite({ paused: false }));
  const [tl2] = useState(new TimelineLite({ paused: false }));

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const [cities, setCities] = useState([
    {
      name: "City*",
      countryCode: "",
      stateCode: "",
      latitude: "",
      longitude: "",
    },
  ]);

  const country = Country.getAllCountries();
  const handleCountry = (tar) => {
    let obj = country.find((o) => o.name === tar);
    setCities(City.getCitiesOfCountry(obj.isoCode));
  };
  const onSubmit = async (data) => {
    console.log("--->", {...data,accomodation});

    
    
    const res = await axios.post(`${serverSystemUrl}/auth/register`, {data,accomodation}, {
      validateStatus: false,
      withCredentials: true,
    });
    if (res.status === 200) {
       
       setMessage(res.data.msg)
       setflashMessage(!flashMessage);
       console.log("registered as=====", res.data.user.role);
       setTimeout(() => {
        setAuth(res.data.user.role);
        navigate("/competitions")  
       }, 2000);
      
      // alert("")
    }
  };

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
        Registration
      </div>
      <form
        ref={(el) => {
          item2 = el;
        }}
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.Form}`}
      >
        <div className={`${styles.Personal}`}>
          <div
            onMouseEnter={btnEnter}
            onMouseLeave={textLeave}
            className={`${styles.h3}`}
          >
            Personal Information
          </div>
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Name*"
            {...register("fullName", {
              required: "This field is required",
              maxLength: {
                value: 50,
                message: "Max length is 50",
              },
            })}
          />
          {errors.fullName && (
            <p className={`${styles.p}`}>{errors.fullName.message}</p>
          )}
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Email*"
            type="text"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
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
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Phone*"
            type="text"
            {...register("phoneNo", {
              required: "This field is required",
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/,
                message: "Phone Number not valid",
              },
            })}
          />
          {errors.Phone && (
            <p className={`${styles.p}`}>{errors.Phone.message}</p>
          )}

          <select
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            {...register("country", {
              required: "This field is required",
            })}
            onChange={(e) => {
              handleCountry(e.target.value);
            }}
          >
            <option disabled selected value>
              Country*
            </option>
            {country.map((value, index) => (
              <option value={value.name} key={index}>
                {value.name}
              </option>
            ))}
          </select>
          <select
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            {...register("city", {
              required: "This field is required",
            })}
          >
            <option disabled selected value>
              City*
            </option>
            {cities.map((value, index) => (
              <option value={value.name} key={index}>
                {value.name}
              </option>
            ))}
          </select>
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Residential Address*"
            {...register("residentialAddress", {
              required: "This field is required",
            })}
          />
          {errors.ResidentialAddress && (
            <p className={`${styles.p}`}>{errors.ResidentialAddress.message}</p>
          )}
        </div>
        <div className={`${styles.Institute}`}>
          <div
            onMouseEnter={btnEnter}
            onMouseLeave={textLeave}
            className={`${styles.h3}`}
          >
            Institute Information
          </div>
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Institute Name*"
            {...register("instituteName", {
              required: "This field is required",
            })}
          />
          {errors.InstituteName && (
            <p className={`${styles.p}`}>{errors.InstituteName.message}</p>
          )}
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Institute Address*"
            {...register("intituteAddress", {
              required: "This field is required",
            })}
          />
          {errors.IntituteAddress && (
            <p className={`${styles.p}`}>{errors.IntituteAddress.message}</p>
          )}
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Institute Area Pincode*"
            {...register("instituteAreaPincode", {
              required: "This field is required",
            })}
          />
          {errors.InstitutePincode && (
            <p className={`${styles.p}`}>{errors.InstitutePincode.message}</p>
          )}
          <input
            onMouseEnter={subtextEnter}
            onMouseLeave={textLeave}
            className={`${styles.input}`}
            placeholder="Year of Study*"
            {...register("yearOfStudy", {
              required: "This field is required",
            })}
          />
          {errors.YearOfStudy && (
            <p className={`${styles.p}`}>{errors.YearOfStudy.message}</p>
          )}
          <div className={styles.acco}>
            <p className={styles.acco_title}>Need Accomodation?</p>
            <div onChange={e=>{setAccomodation(e.target.value)}} className={styles.acco_inner}>
              <input type="radio" id="yes" name="acco" onClick={(e)=>{
                setAccomodation("yes");
              }} value="yes" className={styles.radio} />
              <label htmlFor="yes" className={styles.radioLabel}> Yes</label>
              <input type="radio" id="no" name="acco" value="no" onClick={(e)=>{
                setAccomodation("no");
              }} className={styles.radio} />
              <label htmlFor="no" className={styles.radioLabel}>No</label>
            </div>
          </div>
          <input
            onMouseEnter={btnEnter}
            onMouseLeave={textLeave}
            type="submit"
            value="Register"
            className={`${styles.btn}`}
          />
        </div>
      </form>
    </div>
  );
}

export default Registration;
