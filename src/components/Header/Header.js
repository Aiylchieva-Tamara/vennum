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
              <li><img src={phone} alt="Logo of the Music"/><a>+996700001681</a></li>
              <li><img src={map} alt="Logo of the Music"/><a> Кафе "Дениз" 2 этаж</a></li>
              <li><a><img src={inst} alt="Logo of the Music"/></a></li>
              </ul>
          </div>
          <div className={classes.ridhtparth}>

          </div>
        </div>
      </div>
  );
}

export default Header;