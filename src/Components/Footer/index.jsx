import styles from "./styles.module.scss";

const Footer = () => {
  const footerDate = () => {
    let date = new Date().getFullYear();
    return date;
  };

  return (
    <div className={styles.footer}>
      <small>Weeei Aibe kits</small>
      <small>{footerDate()}</small>
    </div>
  );
};

export default Footer;
