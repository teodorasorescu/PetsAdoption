import React from "react";
import { Link } from "react-router-dom";
import styles from "../styling/footer.module.scss";
import logo from "./logo.png";
import {GrInstagram} from "react-icons/gr";
import {GrFacebook} from "react-icons/gr";
const Header = () => {
  return (
    <div className={styles.container}> 
        <div className="footer">
            <div className = "row">
                <div className="col">
                    <h4>Contact Us</h4>
                    <ul className= "list">
                        <li>Address: Embrace Foundation, 
                167/9 Moo 4, Soi Mai Khao 10,</li>
                        <li>Phone number: 04+ 757847343</li>
                    </ul>
            </div> 
      
      
      </div>
     
    </div>
    <div className = "row">
                <div className="col2">
                    <h4 style={{ margin: '.100vw' }}>Follow Us</h4>
                    
                    <button><GrInstagram padding = '3em' size='1.5rem'/></button>
    <button><GrFacebook size='1.5rem'/></button>
    <h5> #nopawsleftbehind</h5>
                    </div>
                    </div>
                    <div className = "row">
          <p className="col-sm">
              &copy;{new Date().getFullYear} Embrace Foundation. All Rights Reserver.
          </p>
      </div>
    
    </div> 
  );
};
export default Header;
