import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@nextui-org/react";
const Home: NextPage = () => {
  return (
    <div>
      <div>CawCaw</div>
      <Button>Sign in</Button>
    </div>
  );
};

export default Home;
