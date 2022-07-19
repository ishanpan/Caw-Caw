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
import FeedHome from "../components/FeedHome";
const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <NavbarTop></NavbarTop>
      <Navbar></Navbar>
      <FeedHome></FeedHome>
      <Sidebar></Sidebar>
      <NavbarBottom></NavbarBottom>
    </div>
  );
};

export default Home;
