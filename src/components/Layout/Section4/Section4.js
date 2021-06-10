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
            <h3>AOC 24″ Gaming C24G1 144Hz</h3>
            <h3>AOC 24″ Gaming C27G2ZE 240Hz</h3>
          </div>

          <div>
            <h5>ВИДЕОКАРТА</h5>
            <h3>GeForce 2060RTX GigaByte 6Gb</h3>
          </div>

          <div>
            <h5>ПЕРИФЕРИЯ</h5>
            <h6>Мышка</h6>
            <h3>Razer Abyssus Essential</h3>
            <h3>Logitech g403</h3>

            <h6>Клавиатура</h6>
            <h3>Razer Cynosa Pro Bundle</h3>
            <h3>Logitech g403</h3>

            <h6>Наушники</h6>
            <h3>Hyperx cloud stinger</h3>
            <h3>Razer Kraken Essential</h3>
          </div>

          <div>
            <h5>ПРОЦЕССОР</h5>
            <h3>i5 – 8400 3.4 mhz</h3>
            <h3>i7 – 1070k 4.8 mhz</h3>
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
