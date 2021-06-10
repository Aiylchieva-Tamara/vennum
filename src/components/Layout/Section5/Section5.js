import classes from "./Section5.module.css";
import img1 from "../../../images/section5.jpg";
import Club from "./Club/Club";
import Cafe from "./Cafe/Cafe";
import Copy from "./Copy/Copy";

const Section5 = () => {
  return (
    <div id="price" className={classes.img} style={{ backgroundImage: `url(${img1})`}}>
     <div className={classes.section5} >
     <div>
        <Club />
      </div>
      <div>
        <Cafe />
      </div>
      <div>
        <Copy />
      </div>
     </div>
    </div>
  );
};

export default Section5;
