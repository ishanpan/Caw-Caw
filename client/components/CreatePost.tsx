import React from "react";
import styles from "../styles/createPost.module.scss";
import Image from "next/image";
import { Textarea, Button, css } from "@nextui-org/react";
import AttachIcon from "../public/images-outline.svg";

function CreatePost() {
  return (
    <div className={styles.base}>
      <Textarea
        placeholder="What's on your mind?"
        minRows={10}
        cols={140}
      ></Textarea>
      <div className={styles.btns}>
        <div className={styles.btnIcon}>
          <Image src={AttachIcon} alt="attach"></Image>
        </div>
        <Button className={styles.btn} size="md" rounded color="success">
          Caw
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
