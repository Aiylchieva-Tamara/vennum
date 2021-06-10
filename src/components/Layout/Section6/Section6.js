import classes from "./Section6.module.css";
import img1 from "../../../images/section6.jpg";
import games1 from "../../../images/games1.jpg";
import games2 from "../../../images/games2.jpg";
import games3 from "../../../images/games4.jpg";
import games4 from "../../../images/games3.jpg";
import games5 from "../../../images/games5.jpg";
import games6 from "../../../images/games6.jpg";
import games7 from "../../../images/games7.jpg";
import games8 from "../../../images/games8.jpg";
import games9 from "../../../images/games9.jpg";

const Section6 = () => {
  return (
    <div id="games">
      <section className={classes.Section6}>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className={classes.Text}>
            <div className={classes.games}>
              <div style={{ backgroundImage: `url(${games1})` }}>
                <div className={classes.gamestext}>
                  <h2>Dota 2</h2>
                  <h4>Играем на PC</h4>
                </div>
              </div>

              <div style={{ backgroundImage: `url(${games2})` }}>
                <div className={classes.gamestext}>
                  <h2>Pubg</h2>
                  <h4>Играем на PC</h4>
                </div>
              </div>

              <div style={{ backgroundImage: `url(${games3})` }}>
                <div className={classes.gamestext}>
                  <h2>GTA 5</h2>
                  <h4>Играем на PC/PS</h4>
                </div>
              </div>

              <div style={{ backgroundImage: `url(${games4})` }}>
                <div className={classes.gamestext}>
                  <h2>Fortnite</h2>
                  <h4>Играем на PC</h4>
                </div>
              </div>

              <div style={{ backgroundImage: `url(${games5})` }}>
                <div className={classes.gamestext}>
                  <h2>Overwatch</h2>
                  <h4>Играем на PC</h4>
                </div>
              </div>

              <div style={{ backgroundImage: `url(${games6})` }}>
                <div className={classes.gamestext}>
                  <h2>Warface</h2>
                  <h4>Играем на PC</h4>
                </div>
              </div>

              <div style={{ backgroundImage: `url(${games7})` }}>
                <div className={classes.gamestext}>
                  <h2>Mortal Kombat 11</h2>
                  <h4>Играем на PS4</h4>
                </div>
              </div>

              <div style={{ backgroundImage: `url(${games8})` }}>
                <div className={classes.gamestext}>
                  <h2>Apex</h2>
                  <h4>Играем на PC</h4>
                </div>
              </div>

              <div style={{ backgroundImage: `url(${games9})` }}>
                <div className={classes.gamestext}>
                  <h2>CS:GO</h2>
                  <h4>Играем на PC</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section6;
