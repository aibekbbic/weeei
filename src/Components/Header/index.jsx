import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { SlPhone } from "react-icons/sl";
import styles from "./styles.module.scss";
import header_clouds from "../../images/header_clouds.png";
import header_stadium_1 from "../../images/header_stadium_1.png";
import header_stadium_2 from "../../images/header_stadium_2.jpeg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        {/* <PiMapPinSimpleAreaLight /> */}
        {/* <a href="+393509955046" className={styles.header_link}>
          <SlPhone />
        </a> */}
        <h1 className={styles.title}>
          Weeei Aibe
          <span className={styles.subtitle}>kits</span>
        </h1>
      </div>
      <img
        src={header_clouds}
        alt="header_clouds"
        className={styles.header_clouds}
      />
      <img
        src={header_stadium_1}
        alt="header_stadium_1"
        className={styles.header_stadium_1}
      />
      <img
        src={header_stadium_2}
        alt="header_stadium_2"
        className={styles.header_stadium_2}
      />
    </header>
  );
};

export default Header;
