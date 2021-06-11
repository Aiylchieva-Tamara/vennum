import classes from "./Section3.module.css";
import img1 from "../../../images/section33.jpg";

const Section3 = () => {
  return (
      <div id="About" className={classes.img} style={{ backgroundImage: `url(${img1})` }}>
        <div className={classes.Section3contaner}>
          <div className={classes.rooter}>
            <h4>О компьютерном клубе</h4>
            <h2 >OUR MISSION</h2>
            <p>
              Venum – это уютный компьютерный клуб, оборудованный всем
              необходимым для качественной и атмосферной онлайн-игры. К нам в
              киберклуб приходят ценители активного киберспортивного и
              виртуального отдыха, а также для того, чтоб найти
              единомышленников. Благодаря производительным компьютером вы можете
              поиграть в любую новинку или состязаться с мощным
              онлайн-противником без подвисания компьютера и «глюков».
            </p>
             <div className={classes.button}>
             <button >забронировать<br/><a href="tel:+996700001681">+996700001681</a></button>
             </div>
          </div>
        </div>
      </div>
  );
};

export default Section3;
