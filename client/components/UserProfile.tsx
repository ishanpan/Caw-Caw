import React from "react";
import styles from "../styles/userprofile.module.scss";
import Image from "next/image";
import { Avatar, Button } from "@nextui-org/react";
import FeedContent from "./FeedContent";
import Edit from "../public/cog-outline.svg";

function UserProfile() {
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
      </div>
      <div className={styles.editBtns}>
        <div className={styles.editBtn}>
          <Image src={Edit} alt="Profile settings"></Image>
        </div>
        <div className={styles.Btn}>
          <Button auto>Follow + </Button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
