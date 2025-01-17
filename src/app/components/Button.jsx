"use client";
import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
  const handleButtonClick = () => {
    const redirectURL =
      "https://chrome.google.com/webstore/detail/hotstar-party/fbddilioagdlbcnhaenjmelhjhcliklj";
    window.open(redirectURL, "_blank");
  };

  return (
    <button className={styles.btn} onClick={handleButtonClick}>
      Add to Chrome
    </button>
  );
};

export default Button;
