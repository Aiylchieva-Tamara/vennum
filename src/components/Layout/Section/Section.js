import classes from "./Section.module.css";
import img from "../../../images/kiber.jpg";

const Section1 = () => {
  return (
        <div className={classes.img} style={{ backgroundImage: `url(${img})` }}>
          <div className={classes.imgcontainer}>
            <div className={classes.imgcontainersm}>
              <h1>VENUM</h1>

              
            </div>
            <div className={classes.imgcontainerbig}>
              <h2>Welcome</h2>
            </div>
          </div>
    </div>
  );
};

export default Section1;
