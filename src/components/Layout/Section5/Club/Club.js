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
         <p>Играем 3 часов</p>
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

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Pro(Vip)</span>
             <span className={classes.price}>150p/200p</span>
         </div>
         <p>Играем один час в закрытый vip зоне клуба. 150р- для постоянных пользователей/ 200р- для гостей клуба.</p>
     </div>
     
     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Case "День"</span>
             <span className={classes.price}>400p</span>
         </div>
         <p>Играем с утра 11:00 - 17:00</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Case "Вечер"</span>
             <span className={classes.price}>400p</span>
         </div>
         <p>Играем с вечера 17:00 - 22:00</p>
     </div>

     

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Case "Сутки"</span>
             <span className={classes.price}>1400р​</span>
         </div>
         <p>Играем с утра и до утра)</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Lounge fight</span>
             <span className={classes.price}>300р/400р</span>
         </div>
         <p>Играем в PS 4 в нашей lounge zone. 1 час игры. Играет 4 человека за - 300р. Больше 4-х человек + 100р за плюс каждого.</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Cafe left corner</span>
             <span className={classes.price}>250р</span>
         </div>
         <p>Играем в PS4 в зоне кафе. 1 час игры. Зона для 2/3 человек</p>
     </div>

     <div className={classes.big}>
     <div className={classes.small}>
             <span className={classes.pricetext}>Cafe left corner</span>
             <span className={classes.price}>250р</span>
         </div>
         <p>Играем в PS4 в зоне кафе. 1 час игры. Зона для 2/3 человек</p>
     </div>

    </div>
  );
}

export default Club;