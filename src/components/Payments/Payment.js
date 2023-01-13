import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./Payment.module.css";
import qr from './qr.jpeg'
import { events } from '../Competitions/data'
import { motion } from "framer-motion/dist/framer-motion";
import { useForm } from "react-hook-form";
import { payment } from './data.js'
import axios from "axios";
import FlashMessage from "../FlashMessage/FlashMessage";
function Payment(props) {
  const user_id = props.userid
  const navigate = useNavigate()
  const { eventname, id } = useParams();
  const reqEvent = events.filter((event) => event.id === id)
  const [flashMessage, setflashMessage] = useState(false);
  const [message, setMessage] = useState("")
  // console.log(props.accomodation)
  let paid = reqEvent[0].payment;
  const [section, setSection] = useState("robowar");
  const [val, setVal] = useState(payment[0].robowar);
  const {
    register, setError,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const handleView = (e) => {
    const { id } = e.target;
    // console.log(e.target.id);
    if (id === "robowar") {

      setVal(payment[0].robowar);
      setSection("robowar");

    } else if (id === "sharktank") {
      setVal(payment[0].sharktank);
      setSection("sharktank");

    } else if (id === "mun") {
      setVal(payment[0].mun);
      setSection("mun");

    } else if (id === "jaipurCubeOpen") {
      setVal(payment[0].jaipurCubeOpen);
      setSection("jaipurCubeOpen");
    }
  };
  const onSubmit = async (data) => {

    const file = data.file[0];
    if (!file) {
      setError("file", {
        type: "file",
        message: "Upload screenshot"
      });
      return;
    }
    if (file.type != "image/png" && file.type != "image/jpg") {
      setError("file", {
        type: "file",
        message: "Only image is valid"
      });
      return;
    }
    const formData = new FormData();
    formData.append("file", data.file[0])
    formData.append("paid", paid);
    formData.append("upiId", data.upiId);
    formData.append("referal", data.referal);

    // data.push({paid:'500'})

    const res = await axios.post(`${props.url}/${eventname}/${user_id}`, formData, {
      validateStatus: false,
      withCredentials: true,
    });
    if (res.status === 200) {

      setMessage(res.data.msg)
      setflashMessage(!flashMessage);
      //  console.log("registered as=====", res.data.user.role);
      setTimeout(() => {
        // setAuth(res.data.user.role);
        navigate("/competitions")
      }, 3000);
    };
  }

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
      opacity: 0
    },
    later: {
      opacity: 1
    },
  };

  const [cursorVariant, setCursorVariant] = useState("def");
  const textEnter = () => setCursorVariant("text");
  //   const handleEnter = () => setCursorVariant("handle");
  //   const diamondEnter = () => setCursorVariant("diamond");
  const textLeave = () => setCursorVariant("def");
  //   const btnEnter = () => setCursorVariant("btn");

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

  return (<>
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        x: { delay: 0 },
        y: { delay: 0 },
        type: 'tween', stiffness: 10000, bounce: 0
      }}
    />
    {flashMessage ? <FlashMessage message={message} /> : null}
    <div className={styles.payments}>
      <div
        className={`${styles.heading}`}
        onMouseEnter={textEnter} onMouseLeave={textLeave}
      >
        Payments
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.Form}`}
      >
        <div className={`${styles.Personal}`}>
          <div
            className={`${styles.h3}`}
          >
            Payments Information
          </div>


          <div className={`${styles.pay}`}>Amount to Pay:{paid}</div>
          <input
            className={`${styles.input}`}
            placeholder="UPI ID used for payment"
            type="text"
            {...register("upiId", {
              required: "This field is required",
              pattern: {
                value: /[a-z0-9]*@[a-z]*/,
                message: "Invalid upi id",
              },
            })}
          />
          {errors.upiId && (
            <p className={`${styles.p}`}>{errors.upiId.message}</p>
          )}
          <input
            className={`${styles.input}`}
            placeholder="Referral Code(from CA)"
            type="text"
            {...register("referal", {
              pattern: {
                defaultValue: "null",
                value: /^[a-zA-Z0-9]*$/,
                message: "Invalid Referral Code",
              },
            })}
          />
          {errors.referal && (
            <p className={`${styles.p}`}>{errors.referal.message}</p>
          )}
          <div className={styles.qrDiv}>
            <div className={styles.input}>QR code for payment </div>
            <img src={qr} className={styles.qrImg} />
          </div>
          <div className={styles.input}>Upi ID to pay to : 7015824452@paytm</div>
          <input
            className={`${styles.input}`} type="file" {...register("file", {
              required: "Please upload payment screenshot",
            })} />
          <label className={styles.label} for="file">Payment Screenshot</label>

          {errors.file && (
            <p className={`${styles.p}`}>{errors.file.message}</p>
          )}
          <input

            type="submit"
            value="Confirm Payment"
            className={`${styles.btn}`}
          />
        </div>

      </form>

      <div className={`${styles.explore_heading} ${styles.notnone}`}>{payment[0].name}</div>
      <div className={styles.payDets}>
        <div>
          {payment[0].basic.map((valuee, index) => (
            <p className={styles.text}>{valuee}</p>
          ))}
        </div>
        <div className={styles.explore_details}>

          <div className={styles.explore_navbar}>
            <div
              className={section === "robowar" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
              style={{ border: 0 }}
              onClick={(e) => handleView(e)}
              id="robowar"
            >
              Robo War
            </div>
            <div
              className={section === "sharktank" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
              onClick={(e) => handleView(e)}
              id="sharktank"
            >
              Shark Tank
            </div>
            <div
              className={section === "mun" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
              onClick={(e) => handleView(e)}
              id="mun"
            >
              MUN
            </div>
            <div
              className={section === "jaipurCubeOpen" ? `${styles.explore_navoptions} ${styles.active}` : `${styles.explore_navoptions}`}
              onClick={(e) => handleView(e)}
              id="jaipurCubeOpen"
            >
              Jaipur Cube Open
            </div>

          </div>
          <div className={styles.explore_description}>{val.map((value, index) => (
            <p className={styles.text}>{value}</p>
          ))}</div>
        </div>
      </div>
    </div >
  </>
  )
}

export default Payment
