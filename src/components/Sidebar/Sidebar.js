import React, { useEffect, useState, useRef } from "react";
import "./Sidebar.css";
import { useLocation } from "react-router-dom";

import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";

import { HiOutlineHome } from "react-icons/hi";
import { FiAward } from "react-icons/fi";
import { BiBookAlt } from "react-icons/bi";
// import {FiPhone} from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { HiOutlineStar } from "react-icons/hi";
import { FiMic } from "react-icons/fi";
import axios from "axios";

const imgSrc = require("./plinth.png");

export default function Sidebar({auth,setAuth,serverSystemUrl}) {
  const location = useLocation();

  gsap.registerPlugin(CSSPlugin);
  let item = useRef(null);
  const [tl] = useState(new TimelineLite({ paused: false }));

  // console.log(isRootRoute);
  useEffect(() => {
    if (location.pathname === "/") {
      tl.fromTo(
        item,
        2,
        { x: "-200px", ease: Power3.easeOut },
        { x: "0", opacity: 1, ease: Power3.easeOut }
      ).delay(3);
    } else {
      tl.fromTo(
        item,
        2,
        { x: "-200px", ease: Power3.easeOut },
        { x: "0", opacity: 1, ease: Power3.easeOut }
      );
    }
  }, []);

   const onLoginHandler = () =>{
      if(auth==="false"){
        window.location="/login";
      }
      else{
        axios.get(`${serverSystemUrl}/auth/logout`,{validateStatus: false,
          withCredentials: true}).then((res)=>{
          if(res.status===200){
          setAuth("false");
          window.location="/";  
          console.log(res.data.msg);
          }
        })
      }
   }

  return (
    <div>
      <div className="area" />
      <nav
        className="main-menu"
        ref={(el) => {
          item = el;
        }}
      >
        <div className="top-header">
          <a href="/">
            <img src={imgSrc} className="image-plinth fa" alt="img" />
            <span
              className="nav-text plinth-text"
              style={{
                fontWeight: "bolder",
                marginRight: "3",
                left: "10%",
              }}
            >
              Plinth'23
            </span>
          </a>
        </div>

        <ul>
          <li>
            <a className="anchor" href="/">
              <div className="fa fa-2x">
                <HiOutlineHome size={25} />
              </div>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/aboutus">
              {/* <i className="fa fa-book fa-2x" /> */}
              <div className="fa fa-2x">
                <BiBookAlt size={25} />
              </div>
              <span className="nav-text">About Us</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/competitions">
              {/* <i className="fa fa-medal fa-2x" /> */}
              <div className="fa fa-2x">
                <FiAward size={25} />
              </div>
              <span className="nav-text">Competitions</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/lnm_hacks">
              <div className="fa fa-2x">
                <svg
                  className="lnmhackslogo"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="8"
                    width="16"
                    height="16"
                    rx="3"
                    stroke="white"
                    stroke-width="4"
                  />
                  <path
                    d="M27 8H37C38.6569 8 40 9.34315 40 11V21C40 22.6569 38.6569 24 37 24H27C25.3431 24 24 22.6569 24 21V11C24 9.34315 25.3431 8 27 8Z"
                    stroke="white"
                    stroke-width="4"
                  />
                  <path
                    d="M43 8H53C54.6569 8 56 9.34315 56 11V21C56 22.6569 54.6569 24 53 24H43C41.3431 24 40 22.6569 40 21V11C40 9.34315 41.3431 8 43 8Z"
                    stroke="white"
                    stroke-width="4"
                  />
                  <path
                    d="M27 24H37C38.6569 24 40 25.3431 40 27V37C40 38.6569 38.6569 40 37 40H27C25.3431 40 24 38.6569 24 37V27C24 25.3431 25.3431 24 27 24Z"
                    stroke="white"
                    stroke-width="4"
                  />
                  <path
                    d="M43 24H53C54.6569 24 56 25.3431 56 27V37C56 38.6569 54.6569 40 53 40H43C41.3431 40 40 38.6569 40 37V27C40 25.3431 41.3431 24 43 24Z"
                    stroke="white"
                    stroke-width="4"
                  />
                  <path
                    d="M43 40H53C54.6569 40 56 41.3431 56 43V53C56 54.6569 54.6569 56 53 56H43C41.3431 56 40 54.6569 40 53V43C40 41.3431 41.3431 40 43 40Z"
                    stroke="white"
                    stroke-width="4"
                  />
                </svg>
              </div>
              <span className="nav-text">LNM Hacks</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/campus_ambassador">
              {/* <i className="fa fa-phone fa-2x" /> */}
              <div className="fa fa-2x">
                <FiMic size={25} />
              </div>
              <span className="nav-text">Ambassador</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/ourteam">
              {/* <i className="fa fa-phone fa-2x" /> */}
              <div className="fa fa-2x">
                <AiOutlineTeam size={25} />
              </div>
              <span className="nav-text">Our Team</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>

            <button className="anchor" href="/login" onClick = {onLoginHandler}>
              {/* <i className="fa fa-sign-in fa-2x" /> */}
              <div className="fa fa-2x">
                <FiLogIn size={25} />
              </div>
              <span className="nav-text">{(auth === "false")?"Login":"Logout"}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
