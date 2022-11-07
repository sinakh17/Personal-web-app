import classes from "./Rules.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Rules = () => {
  return (
    <div className={classes.container}>
      کلیه حقوق مادی و معنوی این سایت متعلق به اینجانب سینا خلج می باشد و هرگونه
      کپی برداری و سو استفاده از آن پیگرد قانونی دارد.
      <FontAwesomeIcon icon={faCopyright} className={classes.font} />
    </div>
  );
};

export default Rules;
