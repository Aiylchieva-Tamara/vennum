import classes from "./Section4.module.css";
import img1 from "../../../images/section4.jpg";

const Section4 = () => {
  return (
    <div id="jelezo">
      <div className={classes.Section4}>
        <div className={classes.imgcontaineer} >
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        </div>
        <div className={classes.text}>
          <h4>Top equipment</h4>
          <h2>Оборудование</h2>
          <p>
            Мощные и продуктивные игровые компьютеры Наш клуб предлагает ПК,
            различные девайсы и аксессуары, которые позволят вам прочувствовать
            любимые игры в совершенно новом формате и на максимальных
            настройках.
          </p>

          <div className={classes.bigger}>
          <div >
            <h5>МОНИТОРЫ</h5>
            <h3>27" 144 герц</h3>
          </div>

          <div>
            <h5>ВИДЕОКАРТА</h5>
            <h3>GTX 1060 4GB</h3>
          </div>

          <div>
            <h5>ПЕРИФЕРИЯ</h5>
            
            <h3>Девайсы от Bloody</h3>
          </div>

          <div>
            <h5>ПРОЦЕССОР</h5>
            <h3>i5 10-ПОКОЛЕНИЯ</h3>
          </div>

          <div>
            <h5>ОПЕРАТИВНАЯ ПАМЯТЬ</h5>
            <h3>16gb</h3>
          </div>

          <div>
            <h5>МЕБЕЛЬ</h5>
            <h3>Tesoro Zone Balance F710 Black TS-F710BK</h3>
            <h3>Dxracer OH/FE08/NR</h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
