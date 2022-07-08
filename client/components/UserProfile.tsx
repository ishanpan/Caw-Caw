import React, { useState } from "react";
import styles from "../styles/userprofile.module.scss";
import Image from "next/image";
import { Avatar, Button } from "@nextui-org/react";
import FeedContent from "./FeedContent";
import Edit from "../public/cog-outline.svg";
import EditProfileModal from "./EditProfileModal";

function UserProfile() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    console.log("profile btn clicked");
  };
  return (
    <div className={styles.base}>
      <div className={styles.details}>
        <div>
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="xl"
          />
        </div>
        <div>Ishan Pandey</div>
        <div>@ishanpan</div>
        <div>The longer you live, more the suffering you endure.</div>
        <div className={styles.Btn}>
          <Button auto>Follow + </Button>
        </div>
      </div>

      <div className={styles.editBtn}>
        <Button onPress={() => handleClick()}>
          <Image src={Edit} alt="Profile settings"></Image>
        </Button>
      </div>

      <EditProfileModal setVisible={setOpen} visible={open}></EditProfileModal>
    </div>
  );
}

export default UserProfile;
