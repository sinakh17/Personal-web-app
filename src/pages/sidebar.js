import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import personalIMG from "../components/latari.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faHouse,
  faShoppingCart,
  faVial,
  faFile,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sidebar = (props) => {
  const [isOpen, setisOpen] = useState();
  const closeHandler = () => {
    setisOpen(false);
  };
  const handleStateChange = (state) => {
    setisOpen(state.isOpen);
  };
  return (
    <Menu isOpen={isOpen} onStateChange={(state) => handleStateChange(state)}>
      <div className="container">
        <div className="profile">
          <img src={personalIMG} alt="personal" />
          <span>سینا خلج</span>
        </div>
        <ul>
          <li>
            <NavLink
              onClick={closeHandler}
              to="/main"
              className={(navData) =>
                navData.isActive ? `active navlink` : "navLink"
              }
            >
              <FontAwesomeIcon icon={faHouse} className="font" />
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeHandler}
              to="/services"
              className={(navData) =>
                navData.isActive ? `active navlink` : "navLink"
              }
            >
              <FontAwesomeIcon icon={faShoppingCart} className="font" />
              خدمات
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeHandler}
              to="/samples"
              className={(navData) =>
                navData.isActive ? `active navlink` : "navLink"
              }
            >
              <FontAwesomeIcon icon={faVial} className="font" />
              نمونه کار ها
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeHandler}
              to="/cv"
              className={(navData) =>
                navData.isActive ? `active navlink` : "navLink"
              }
            >
              <FontAwesomeIcon icon={faFile} className="font" />
              رزومه
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeHandler}
              to="/rules"
              className={(navData) =>
                navData.isActive ? `active navlink` : "navLink"
              }
            >
              <FontAwesomeIcon icon={faScaleBalanced} className="font" />
              قوانین
            </NavLink>
          </li>
        </ul>
        <div className="footer">
          <a
            href="https://www.instagram.com/sinakhalaj651"
            target="_blank"
            rel="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="font" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="facebook">
            <FontAwesomeIcon icon={faFacebook} className="font" />
          </a>
          <a
            href="https://www.linkedin.com/in/sina-khalaj-190a92238/"
            target="_blank"
            rel="linkdin"
          >
            <FontAwesomeIcon icon={faLinkedin} className="font" />
          </a>
        </div>
      </div>
    </Menu>
  );
};

export default Sidebar;
