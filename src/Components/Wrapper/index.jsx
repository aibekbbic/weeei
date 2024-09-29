import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import styles from "./styles.module.scss";

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Wrapper;
