import React from "react";
import styles from "../styles/createPost.module.scss";
import Image from "next/image";
import { Textarea, Button, css } from "@nextui-org/react";
import AttachIcon from "../public/images-outline.svg";
import { useState } from "react";

function CreatePost() {
  const textareaRef: any = React.useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const hello = () => {
    textareaRef.current.value = "";
  };

  return (
    <div className={styles.base}>
      <Textarea
        placeholder="What's on your mind?"
        minRows={10}
        cols={140}
        ref={textareaRef}
        // onChange={hello}
      ></Textarea>
      <div className={styles.btns}>
        {selectedImage && (
          <div className={styles.img}>
            <img
              alt="not fount"
              src={URL.createObjectURL(selectedImage)}
              style={{
                borderRadius: "0.5rem",
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
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
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
