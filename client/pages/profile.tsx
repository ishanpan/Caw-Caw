import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Button } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import NavbarBottom from "../components/NavbarBottom";
import NavbarTop from "../components/Navbartop";
import CreatePost from "../components/CreatePost";
import UserProfile from "../components/UserProfile";
import FeedContent from "../components/FeedContent";
const Profile: NextPage = () => {
  return (
    <div className={styles.layout}>
      <NavbarTop></NavbarTop>
      <Navbar></Navbar>
      <div className={styles.layouts}>
        <UserProfile></UserProfile>
        <Feed></Feed>
      </div>
      <Sidebar></Sidebar>
      <NavbarBottom></NavbarBottom>
    </div>
  );
};

export default Profile;
