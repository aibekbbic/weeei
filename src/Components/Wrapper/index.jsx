import { useState } from "react";
import { Context } from "../../Context/CardContext";
import data from "../../data/data";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import styles from "./styles.module.scss";

const Wrapper = () => {
  const elements = data.map((item) => {
    return item;
  });

  const [card, setCard] = useState(elements);

  return (
    <Context.Provider value={{ cardElements: card, setCardElements: setCard }}>
      <div className={styles.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default Wrapper;
