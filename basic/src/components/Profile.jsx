import React from "react";
import styles from "./profile.module.css";
import Avata from "./Avata";
const Profile = ({ img, name, position, isNew }) => {
  return (
    <div className={styles.profile}>
      <Avata isNew={isNew} img={img}></Avata>
      <h1>{name}</h1>
      <span style={{ fontSize: "10px", color: "gray" }}>{position}</span>
    </div>
  );
};

export default Profile;
