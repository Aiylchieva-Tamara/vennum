import classes from "./Club.module.css";

const Club = () => {
 
  return (
    <div className={classes.Club}>
     <h4>Кибер клуб</h4>
     <h2>WHO PLAY?</h2>
     <div className={classes.big}>
         <div className={classes.small}>
             <span className={classes.pricetext}> Noob</span>
             <span className={classes.price}>30сом</span>
         </div>
         <p>Играем 1 час</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Solo</span>
             <span className={classes.price}>70сом</span>
         </div>
         <p>Играем 3 часа</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Solo</span>
             <span className={classes.price}>100сом</span>
         </div>
         <p>Играем 5 часов</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext} >Case "Night city"</span>
             <span className={classes.price}>120сом</span>
         </div>
         <p>Играем с 21:00 - 08:00</p>
     </div>

     

       </div>
  );
}

export default Club;