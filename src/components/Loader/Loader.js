import React from 'react'
import styles from "./Loader.module.css"
const Loader = () => {
  return (
    <>
    <div className={styles.loader_body}>
    <div className={styles.spinner_container}>
  
</div>
    <img src="./images/plinth.jpg" alt='Please-wait' className={styles.loader_plinth_img}></img>


    </div>
    </>
  )
}

export default Loader