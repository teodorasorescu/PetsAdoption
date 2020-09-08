import React from "react";
import styles from "../styling/home.module.scss";
import { Link } from "react-router-dom";
import home from "../media/home.jpg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.petsContainer}>
        <div className={styles.text}>   
         <h style={{backgroundColor: ' rgba(238, 191, 121, 0.295)' }}>The best things in life are rescued!</h>  
         <p style={{backgroundColor: ' rgba(238, 191, 121, 0.295)'}}>#nopawsleftbehind</p>    
        </div>
      </div>
    </div>
  );
};
export default Home;
