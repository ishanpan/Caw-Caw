import React from "react";
import styles from "../styles/createPost.module.scss";
import Image from "next/image";
import { Textarea, Button, css } from "@nextui-org/react";
import AttachIcon from "../public/images-outline.svg";
import { useState } from "react";
import { ReadStream } from "fs";

function CreatePost() {
  const textareaRef: any = React.useRef(null);
  const [selectedImage, setSelectedImage] = useState();

  const hello = () => {
    const image = async () => {
      const res = await fetch("http://localhost:3001/post/upload", {});
    };

    const post = async () => {
      const res = await fetch(
        "http://localhost:3001/post/",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            post_text: textareaRef.current.value,
            image_url: "abc",
          }),
        }
      );

      console.log(res);
    };
    post();
  };

  const handleImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <div className={styles.base}>
      <Textarea
        placeholder="What's on your mind?"
        minRows={10}
        cols={140}
        ref={textareaRef}
        bordered
        color="primary"
        // onChange={hello}
      ></Textarea>
      <div className={styles.btns}>
        {selectedImage && (
          <div className={styles.img}>
            <img
              alt="not fount"
              src={URL.createObjectURL(selectedImage)}
              style={{
                borderRadius: "0.25rem",
              }}
              width={"400"}
            />
          </div>
        )}

        <div className={styles.btnIcon}>
          <label>
            <Image src={AttachIcon} alt="attach"></Image>
            <input
              type="file"
              name="uploadedImage"
              onChange={(e) => {
                handleImage(e);
              }}
              style={{ display: "none" }}
            />
          </label>
        </div>
        <Button
          className={styles.btn}
          onPress={hello}
          size="md"
          rounded
          color="success"
        >
          Caw
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
