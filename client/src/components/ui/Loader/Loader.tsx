import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className={styles.circleBorder}>
        <div className={styles.circleCore}></div>
      </div>
    </div>
  );
};

export default Loader;
