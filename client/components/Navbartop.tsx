import React from "react";
import crowLogo from "../public/303906.svg";
import Image from "next/image";
import styles from "../styles/navbartop.module.scss";
function NavbarTop() {
  return (
    <div className={styles.base}>
      <div className={styles.logo}>
        <Image src={crowLogo} alt="Crow Logo" />
      </div>
    </div>
  );
}

export default NavbarTop;
