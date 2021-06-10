

import classes from "./Layout.module.css";
import Section1 from "./Section/Section";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";

const Layout = () => {
 
  return (
    <div className={classes.Layout}>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
    </div>
  );
}

export default Layout;