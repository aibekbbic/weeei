import styles from "./styles.module.scss";
import cloudsImage from "../../images/header_clouds.png.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <h1 className={styles.title}>
          Weeei Aibe
          <span className={styles.subtitle}>kits</span>
        </h1>
        {/* <img src={cloudsImage} alt="clouds" className={styles.header_image} /> */}
      </div>
    </div>
  );
};

export default Header;
