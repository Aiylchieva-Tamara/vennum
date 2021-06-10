import classes from "./Toolbar.module.css";
import logo from "../../images/venum.png";

const Toolbar = () => {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.Toolbarcontainer}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo of the Music" />
        </div>

        <div className={classes.nav}>
          <ul>
            <li>
              <a href="#About">О нас</a>
            </li>
            <li>
              <a href="#jelezo" >Железо</a>
            </li>
            <li>
              <a href="#price">Цены</a>
            </li>
            <li>
              <a href="#games">Игры</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
