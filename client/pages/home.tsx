import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Button } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <Navbar></Navbar>
      <Feed></Feed>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Home;
