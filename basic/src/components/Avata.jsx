import React from "react";
import styles from "./profile.module.css";
const Avata = ({ img, isNew }) => {
  return (
    <div className={styles.img_box}>
      {" "}
      <img src={img} className={styles.img} />
      {isNew && <span className={styles.new}>new</span>}
    </div>
  );
};

export default Avata;
