import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import personalIMG from "./latari.jpg";
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
const Navigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <img src={personalIMG} alt="personal" />
        <span>سینا خلج</span>
      </div>
      <ul>
        <li>
          <NavLink
            to="/main"
            className={(navData) =>
              navData.isActive
                ? `${classes.active} ${classes.navLink}`
                : classes.navLink
            }
          >
            <FontAwesomeIcon icon={faHouse} className={classes.font} />
            صفحه اصلی
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={(navData) =>
              navData.isActive
                ? `${classes.active} ${classes.navLink}`
                : classes.navLink
            }
          >
            <FontAwesomeIcon icon={faShoppingCart} className={classes.font} />
            خدمات
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/samples"
            className={(navData) =>
              navData.isActive
                ? `${classes.active} ${classes.navLink}`
                : classes.navLink
            }
          >
            <FontAwesomeIcon icon={faVial} className={classes.font} />
            نمونه کار ها
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cv"
            className={(navData) =>
              navData.isActive
                ? `${classes.active} ${classes.navLink}`
                : classes.navLink
            }
          >
            <FontAwesomeIcon icon={faFile} className={classes.font} />
            رزومه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rules"
            className={(navData) =>
              navData.isActive
                ? `${classes.active} ${classes.navLink}`
                : classes.navLink
            }
          >
            <FontAwesomeIcon icon={faScaleBalanced} className={classes.font} />
            قوانین
          </NavLink>
        </li>
      </ul>
      <div className={classes.footer}>
        <a href="https://www.instagram.com/sinakhalaj651" target="_blank" rel="instagram">
          <FontAwesomeIcon icon={faInstagram} className={classes.font} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="facebook">
          <FontAwesomeIcon icon={faFacebook} className={classes.font} />
        </a>
        <a
          href="https://www.linkedin.com/in/sina-khalaj-190a92238/"
          target="_blank"
          rel="linkdin"
        >
          <FontAwesomeIcon icon={faLinkedin} className={classes.font} />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
