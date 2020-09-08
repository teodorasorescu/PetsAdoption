import React from "react";
import styles from '../styling/pets.module.scss';
import { Link } from 'react-router-dom';
import Dog from '../media/dogs.jfif';
import Cat from '../media/cats.jpg';


const Pets = () => { 
  return(
   
    <div className={styles.container}>
    <div className={styles.dogsContainer}>
      <div className={styles.text}>
        <Link to='/dogs' style={{backgroundColor: '  rgba(238, 191, 121, 0.295)' }}>Dogs</Link>
      </div>
    </div>
    <div className={styles.catsContainer}>
      <div className={styles.text}>
        <Link to='/cats' style={{backgroundColor: ' rgba(238, 191, 121, 0.295)' }}>Cats</Link>
      </div>
    </div>
  </div>

    );
};
export default Pets;