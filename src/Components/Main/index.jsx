import Cards from "../Cards";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <Cards />
      </div>
    </main>
  );
};

export default Main;
