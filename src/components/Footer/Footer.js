import classes from "./Footer.module.css";
import star from "../../images/star.png";

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
          <ul>
              <li>5 минут от м. Щелковская</li>
              <li>Щелковское шоссе 79к1</li>
              <img src={star}/>
          </ul>
      </div>
      <div>
          <h6>CONNECT</h6>
          <p>8(977)1478842</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;