import classes from "./Cafe.module.css";

const Cafe = () => {
 
  return (
    <div className={classes.Cafe}>
     <h4>Интернет кафе</h4>
     <h2>WHAT TO DRINK</h2>
     <div className={classes.big}>
         <div className={classes.small}>
             <span className={classes.pricetext}>Американо</span>
             <span className={classes.price}>70р/90р</span>
         </div>
         <p>Объемы - 02/03 мл</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Кибер-Капучино</span>
             <span className={classes.price}>110/130р</span>
         </div>
         <p>Объемы - 02/03 мл</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Латте</span>
             <span className={classes.price}>130/150р</span>
         </div>
         <p>Объемы - 02/03 мл</p>
     </div>

     
     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Раф</span>
             <span className={classes.price}>210р</span>
         </div>
         <p>Объемы - 03 мл</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Какао</span>
             <span className={classes.price}>150р</span>
         </div>
         <p>Объем - 04 мл</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext} >Чай в ассортименте</span>
             <span className={classes.price}>50р</span>
         </div>
         <p>Пакетик чая</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Холодны напитки</span>
             <span className={classes.price}>150р/170р</span>
         </div>
         <p>Monster / Burn - 0,5 мл</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Холодны напитки</span>
             <span className={classes.price}>от 80р</span>
         </div>
         <p>Cola - 1л / 0,5</p>
     </div>

    

    </div>
  );
}

export default Cafe;