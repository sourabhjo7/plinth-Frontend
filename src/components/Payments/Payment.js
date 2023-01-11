import React, { useState, useEffect, useRef } from "react";
import styles from "./Payment.module.css";
import qr from './qr.png'
import { useForm } from "react-hook-form";
import {payment} from './data.js'
function Payment() {
    const [section, setSection] = useState("robowar");
    const [val, setVal] = useState(payment[0].robowar);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        mode: "onChange",
      });
    const handleView = (e) => {
        const { id } = e.target;
        // console.log(e.target.id);
        if (id === "robowar") {
            console.log(payment[0])
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

      };

    return (
        <div className={styles.payments}>
            <div
                className={`${styles.heading}`}
            >
                Payments
            </div>
            <div className={`${styles.explore_heading} ${styles.notnone}`}>{payment[0].name}</div>
            <div className={styles.payDets}>
            <div>
                {payment[0].basic.map((valuee,index)=>(
                    <p className={styles.text}>{valuee}</p>
                ))}
                </div>
            <div className={styles.explore_details}>
           
                <div  className={styles.explore_navbar}>
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
                <div className={styles.explore_description}>{val.map((value,index)=>(
                    <p className={styles.text}>{value}</p>
                ))}</div>
            </div>
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


                    <div className={styles.input}>Amount to Pay:445</div>
                    <input
                        className={`${styles.input}`}
                        placeholder="UPI ID used for payment"
                        type="text"
                        {...register("userUpiId", {
                            required: "This field is required",
                            pattern: {
                                value: /[a-z0-9]*@[a-z]*/,
                                message: "Invalid upi id",
                            },
                        })}
                    />
                    {errors.userUpiId && (
                        <p className={`${styles.p}`}>{errors.userUpiId.message}</p>
                    )}
                    <div className={styles.qrDiv}>
                        <img src={qr} className={styles.qrImg}/>
                    </div>
                    <div className={styles.input}>Upi ID to pay to : 123@paytm</div>
                    <input
                    className={`${styles.input}`} type="file" {...register("file", {
                        required: "This Field is required",
                    })} />

                    {errors.file && (
                        <p className={`${styles.p}`}>{errors.file.message}</p>
                    )}
      <input
         
            type="submit"
            value="Submit"
            className={`${styles.btn}`}
          />
                </div>

            </form>
        </div >
    )
}

export default Payment
