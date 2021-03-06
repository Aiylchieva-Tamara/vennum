import classes from "./Section2.module.css";
import img21 from "../../../images/section2-1.jpg";
import img22 from "../../../images/section2-2.jpg";

const Section2 = () => {
  return (
    <div className={classes.Section2}>
        <div className={classes.section}>

          <div  className={classes.img21} style={{ backgroundImage: `url(${img21})` }}>
            <div className={classes.section2div}>

               <h2>ТОП ЖЕЛЕЗО</h2>
              <h4>16 компьютера - Основной зал</h4>
            </div>
          </div>

          <div  className={classes.img22} style={{ backgroundImage: `url(${img22})` }}>
          <div className={classes.section2div}>
              <h2>Open -24/7</h2>
              <h4>Работает для вас без перерыва</h4>
            </div>
          </div>

         
        </div>
      
    </div>
  );
};

export default Section2;
