import classes from "./Copy.module.css";

const Copy = () => {
 
  return (
    <div className={classes.Copy}>
     <h4>Копицентр</h4>
     <h2>LET'S WORK?</h2>
     <div className={classes.big}>
         <div className={classes.small}>
             <span className={classes.pricetext}>1 Час работы за компом</span>
             <span className={classes.price}>100р</span>
         </div>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Печать одного листа</span>
             <span className={classes.price}>15р</span>
         </div>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Цветная печать</span>
             <span className={classes.price}>25р</span>
         </div>
     </div>

     
     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Полноцветная печать</span>
             <span className={classes.price}>70р</span>
         </div>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Скан одного листа</span>
             <span className={classes.price}>35р</span>
         </div>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext} >Ксерокопия одного листа</span>
             <span className={classes.price}>20р</span>
         </div>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Запись на флешку</span>
             <span className={classes.price}>50р</span>
         </div>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Отправка на EMAIL</span>
             <span className={classes.price}>30P</span>
         </div>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Помощь админа</span>
             <span className={classes.price}>300p</span>
         </div>
     </div>


    </div>
  );
}

export default Copy;