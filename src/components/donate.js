import React from "react";
import styles from "../styling/donate.module.scss";
import wall from "../media/donate-button.png";
import logo from "../media/logo.png";

const Donate = () => {
    return (
      <div className={styles.container}>
        <img src = {wall} alt = 'wallpaper'/>
        <div className={styles.donateContainer}>
          <div className={styles.text}> 
           <p> Your support is vital if we are to make a lasting difference to animals' lives. Your gift today - whatever sum you choose to give - will help us save animals from
                suffering and give them the expert treatment and care they need. </p>
          <p>Since 1999, we’ve invested millions in adoption and medical care programs, spay and neuter services, pet cancer research and numerous other lifesaving initiatives—always investing wisely in organizations with the most lifesaving impact. In partnership with animal welfare organizations and 1,500 Petco stores across the country,
               we help bring pets together with loving families every day.</p>
               <p>By donating in Petco store and on petco.com, adopting, volunteering and fostering your support makes it possible for us to celebrate 20 years of saving animal lives. Thank you for sharing our passion for animals and
                    believing that together we can, and will, create a lifesaving nation.</p>
              
          </div>
          <div className = {styles.but}>
            <button >
            <a>DONATE</a></button>
            <img width = '400px' src = {logo} alt = 'logo'/>
          </div>

        </div>
      </div>
    );
  };
export default Donate;
  
