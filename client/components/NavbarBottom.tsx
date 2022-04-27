import React from "react";
import styles from "../styles/navbarbottom.module.scss";
import homeLogo from "../public/home-outline.svg";
import personLogo from "../public/person-outline.svg";
import logOut from "../public/log-out-outline.svg";
import lightLogo from "../public/bulb-outline.svg";
import Image from "next/image";

function NavbarBottom() {
  return (
    <div className={styles.base}>
      <div className={styles.sidebarLogo}>
        <Image src={homeLogo} alt="Home"></Image>
      </div>
      <div className={styles.sidebarLogo}>
        <Image src={personLogo} alt="Home"></Image>
      </div>
      <div className={styles.sidebarLogo}>
        <Image src={lightLogo} alt="Dark"></Image>
      </div>
      <div className={styles.sidebarLogo}>
        <Image src={logOut} alt="Home"></Image>
      </div>
    </div>
  );
}

export default NavbarBottom;
