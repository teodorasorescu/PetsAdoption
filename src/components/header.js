import React from "react";
import { Link } from "react-router-dom";
import styles from "../styling/header.module.scss";
import logo from "./logo2.png";
import {IconContext} from "react-icons";
import {MdFavoriteBorder} from "react-icons/md";
import {BsFillHouseDoorFill} from "react-icons/bs";
import {MdPets} from "react-icons/md";


const Header = () => {
  return (
    <IconContext.Provider value={{size:'1.5rem'}}>
        <div className={styles.container}>
            <img src={logo} alt="A dog" />
            <Link className={styles.link} to="/donate">
                Donate to Save a Pet
            </Link>
            <Link className={styles.link} to="/petcare">
               Pets Impact 
            </Link>
            <Link className={styles.link} to="/info">
                About Us
            </Link>
            <Link className={styles.link} to="/">
                <button><BsFillHouseDoorFill/></button> 
            </Link> 
            <Link className={styles.link} to="/pets">
                <button><MdPets/> </button>
            </Link>
            <Link className={styles.link} to="/favorites">
               <button><MdFavoriteBorder/> </button>
            </Link>
        </div>
    </IconContext.Provider>
  );
};
export default Header;
