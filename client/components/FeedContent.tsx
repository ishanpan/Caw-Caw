import Image from "next/image";
import React from "react";
import styles from "../styles/feedcontent.module.scss";
import dumb from "../public/dummypic.webp";
import { Avatar } from "@nextui-org/react";
import Upvote from "../public/arrow-up-outline.svg";
import Downvote from "../public/arrow-down-outline.svg";
import Recaw from "../public/repeat-outline.svg";
import Opinion from "../public/ear-outline.svg";

function FeedContent() {
  return (
    <div className={styles.base}>
      <div className={styles.profile}>
        <div className={styles.profile__image}>
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="lg"
          />
        </div>
        <div className={styles.profile__info}>
          <div className={styles.profile__name}>Gaurav</div>
          <div className={styles.profile__username}>@GK75</div>
        </div>
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        officiis veniam incidunt voluptates eum repellendus, veritatis ut dicta,
        debitis, eaque explicabo non facere amet odit fugit architecto numquam.
        Labore, beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        In suscipit, culpa, molestias hic vitae doloremque nam perspiciatis
        deleniti tenetur possimus explicabo laboriosam ut. Suscipit vel
        repellendus iste expedita dignissimos hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deserunt laudantium quas, eius temporibus
        et at illo? Quo vel, magni in iure mollitia temporibus adipisci ullam
        maiores eveniet cum similique eum.
      </div>
      <div className={styles.btns}>
        <div className={styles.btn}>
          <Image src={Upvote} alt="upvote"></Image>
        </div>
        <div className={styles.votes}>69</div>
        <div className={styles.btn}>
          <Image src={Downvote} alt="downvote"></Image>
        </div>
        <div className={styles.btn}>
          <Image src={Recaw} alt="Recaw"></Image>
        </div>
        <div className={styles.btn}>
          <Image src={Opinion} alt="Opinion"></Image>
        </div>
      </div>
    </div>
  );
}

export default FeedContent;
