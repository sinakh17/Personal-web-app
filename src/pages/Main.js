import classes from "./Main.module.css";
import img from "./IMG_20220919_184812.jpg";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className={classes.container}>
      <img src={img} />
      <span>سلام!</span>
      <h3>سینا خلج هستم</h3>
      <p>
        برنامه نویس جونیور فرانت اند هستم.در زمینه های HTML5, CSS3, Bootstrap ,
        JavaScriptوReact تخصص دارم.برای طراحی سایت های شخصی, فروشگاهی و...
        خوشحال می شوم همراهیتان کنم!
      </p>
      <div className={classes.buttons}>
        <Link to="/contactme"> تماس با من </Link>
        <Link to="/info"> اطلاعات بیشتر </Link>
      </div>
    </div>
  );
};

export default Main;
