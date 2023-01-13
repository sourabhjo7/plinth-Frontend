import styles from "./Filter.module.css";
import React from 'react';
import Card from "../Card/Card";
import { useState , useEffect} from "react";
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import { clubs, events } from "../../data";

function Filter(props) {
  const [tag, setTag] = useState("Astronomy");

  useEffect(() => {
    if(window.localStorage.getItem('tag') === null) window.localStorage.setItem('tag',"Astronomy");
    setTag(window.localStorage.getItem('tag'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('tag', tag);
  }, [tag]);

  return (
    <div className={styles.outer}>
      <div className={styles.tags}>
        {clubs.map((club) => {
          return (
            <button onMouseEnter={()=>{props.btnEnter();}} onMouseLeave={()=>{props.textLeave();}}
              className={`${styles.tag} ${tag === club ? styles.active : null}`}
              onClick={() => setTag(club)}
            >
              {club}
            </button>
          );
        })}
      </div>
      
      <div className={styles.cards}>
        {events
          .filter((event) => event.club === tag)
          .map((filteredEvent, index) => (
            <AnimatePresence mode="wait" >
            <Card
              index={index}
              auth = {props.auth}
              key={filteredEvent.id}
              id={filteredEvent.id}
              name={filteredEvent.name}
              club={filteredEvent.club}
              participation={filteredEvent.participation}
              imgName={filteredEvent.imgName}
              btnEnter={props.btnEnter}
              textLeave={props.textLeave}
            />
            </AnimatePresence>
          ))}

      </div>
    </div>
  );
}

export default Filter;
