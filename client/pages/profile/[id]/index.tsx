import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/home.module.scss";
import { Button, StyledUserName } from "@nextui-org/react";
import Navbar from "../../../components/Navbar";
import Feed from "../../../components/Feed";
import Sidebar from "../../../components/Sidebar";
import NavbarBottom from "../../../components/NavbarBottom";
import NavbarTop from "../../../components/Navbartop";
import CreatePost from "../../../components/CreatePost";
import UserProfile from "../../../components/UserProfile";
import FeedContent from "../../../components/FeedContent";
import FeedHome from "../../../components/FeedHome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FeedProfile from "../../../components/FeedProfile";
const Profile: NextPage = () => {
  const router = useRouter();
  const [ids, setIds]: any = useState();
  useEffect(() => {
    if (!router.isReady) return;
    // codes using router.query
    const { id } = router.query;
    console.log(id);
    setIds(id);
  }, [router.isReady]);

  const [profile, setProfile]: any = useState();
  useEffect(() => {
    const resFn = async () => {
      const res = await fetch(`http://localhost:3001/profile/${ids}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const response = await res.json();
      console.log(response);
      setProfile(response);
    };
    resFn();
  }, [ids]);

  return (
    <div className={styles.layout}>
      <NavbarTop></NavbarTop>
      <Navbar></Navbar>
      <div className={styles.layouts}>
        {profile && <UserProfile profile={profile}></UserProfile>}
        {profile && <FeedProfile childData={profile.posts}></FeedProfile>}
      </div>
      <Sidebar></Sidebar>
      <NavbarBottom></NavbarBottom>
    </div>
  );
};

export default Profile;
