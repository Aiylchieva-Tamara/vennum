import classes from "./Footer.module.css";
import star from "../../images/star.png";
import map from "../../images/map.png";
import phone from "../../images/phone.png";
import inst from "../../images/iconinst.png";

const Footer = () => {
 
  return (
    <div id="contact" className={classes.Footer}>
      <div className={classes.footerdiv}>
      <div>
          <h6>©2020 YOUPLAY24.RU</h6>
          <p>Используя функции портала, вы принимаете пользовательское соглашение и подтверждаете ознакомление с политикой конфиденциальности.</p>
      </div>

      <div>
          <h6>LOCATION</h6>
          <ul className={classes.footerdjjiv}>
              
              <li><img src={map} alt="Logo of the Music"/><a  href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x38865be97576c22f:0xb61d323ddff08b41?utm_source=mstt_1&entry=gps"> Ленком Майка, Кафе "Дениз" 2 этаж</a></li>
              <img src={star} alt="Logo of the Music" style={{ width: ` 150px`, height: ` 50px`}}/>
          </ul>
      </div>
      <div className={classes.footerdjjiv}>
          <h6>CONNECT</h6>
          <p><img src={phone} alt="Logo of the Music"/><a href="tel:+996700001681">+996700001681</a></p>
          <p><a href="https://www.instagram.com/"><img src={inst} alt="Logo of the Music"/></a></p>
      </div>
      </div>
    </div>
  );
}

export default Footer;