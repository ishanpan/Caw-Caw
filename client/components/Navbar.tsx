import React from "react";
import styles from "../styles/navbar.module.scss";
import crowLogo from "../public/303906.svg";
import Image from "next/image";
import homeLogo from "../public/home-outline.svg";
import personLogo from "../public/person-outline.svg";
import logOut from "../public/log-out-outline.svg";
import moonLogo from "../public/moon-outline.svg";
import exploreLogo from "../public/earth-outline.svg";
import lightLogo from "../public/bulb-outline.svg";
import { Button } from "@nextui-org/react";
import Link from "next/link";
function Navbar() {
  return (
    <div className={styles.base}>
      <div className={styles.logo}>
        <Image src={crowLogo} alt="Crow Logo" />
      </div>
      <Link href="/">
        <div className={styles.sidebarLogoText}>
          <div className={styles.sidebarLogo}>
            <Image src={homeLogo} alt="Home"></Image>
          </div>
          <span>Home</span>
        </div>
      </Link>
      <Link href="/profile">
        <div className={styles.sidebarLogoText}>
          <div className={styles.sidebarLogo}>
            <Image src={personLogo} alt="Home"></Image>
          </div>
          <span>Profile</span>
        </div>
      </Link>
      <div className={styles.sidebarLogoText}>
        <div className={styles.sidebarLogo}>
          <Image src={exploreLogo} alt="Explore"></Image>
        </div>
        <span>Explore</span>
      </div>
      <div className={styles.sidebarLogoText}>
        <div className={styles.sidebarLogo}>
          <Image src={lightLogo} alt="Dark"></Image>
        </div>
        <span>Light Mode</span>
      </div>

      <div className={styles.sidebarLogoText}>
        <div className={styles.sidebarLogo}>
          <Image src={logOut} alt="Home"></Image>
        </div>
        <span>Log out</span>
      </div>
      <div className={styles.btn}>
        <Button color="gradient" rounded size="md">
          Caw +
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
