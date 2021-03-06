import classes from "./Header.module.css";
import inst from "../../images/iconinst.png";
import phone from "../../images/phone.png";
import map from "../../images/map.png";


const Header = () => {
  return (
      <div className={classes.Header}>
        <div className={classes.Headercontainer}>
          <div className={classes.leftparth}>
              <ul>
              <li><img src={phone} alt="Logo of the Music"/><a  href="tel:+996700001681">+996700001681</a></li>
              <li><img src={map} alt="Logo of the Music"/><a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x38865be97576c22f:0xb61d323ddff08b41?utm_source=mstt_1&entry=gps"> Кафе "Дениз" 2 этаж</a></li>
              <li><a href="https://www.instagram.com/"><img src={inst} alt="Logo of the Music"/></a></li>
              </ul>
          </div>
          <div className={classes.ridhtparth}>

          </div>
        </div>
      </div>
  );
}

export default Header;