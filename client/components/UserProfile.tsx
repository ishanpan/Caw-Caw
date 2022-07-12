import React, { useEffect, useState } from "react";
import styles from "../styles/userprofile.module.scss";
import Image from "next/image";
import { Avatar, Button } from "@nextui-org/react";
import FeedContent from "./FeedContent";
import Edit from "../public/cog-outline.svg";
import EditProfileModal from "./EditProfileModal";

function UserProfile(props: any) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    console.log("profile btn clicked");
  };

  return (
    <div className={styles.base}>
      <div className={styles.details}>
        <div>
          <Avatar src={props.profile.image} size="xl" />
        </div>
        <div>{props.profile.name}</div>
        <div>@{props.profile.username}</div>
        <div>{props.profile.bio}</div>
        <div className={styles.Btn}>
          <Button auto>Follow + </Button>
        </div>
      </div>

      <div className={styles.editBtn}>
        <Button onPress={() => handleClick()}>
          <Image src={Edit} alt="Profile settings"></Image>
        </Button>
      </div>

      <EditProfileModal
        name={props.profile.name}
        username={props.profile.username}
        bio={props.profile.bio}
        setVisible={setOpen}
        visible={open}
      ></EditProfileModal>
    </div>
  );
}

export default UserProfile;
