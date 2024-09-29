import Cards from "../Cards";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Cards />
      </div>
    </div>
  );
};

export default Main;
