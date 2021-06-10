import classes from "./Header.module.css";

const Header = () => {
  return (
      <div className={classes.Header}>
        <div className={classes.Headercontainer}>
          <div className={classes.leftparth}>
              <ul>
              <li>+7(977)1478842</li>
              <li>+7(966)3220805</li>
              <li>go@venum.kg</li>
              <li>Пон-Вост:24/7</li>
              </ul>
          </div>
          <div className={classes.ridhtparth}>

          </div>
        </div>
      </div>
  );
}

export default Header;