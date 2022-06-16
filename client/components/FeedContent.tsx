import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/feedcontent.module.scss";
import { Avatar } from "@nextui-org/react";
import Upvote from "../public/arrow-up-outline.svg";
import Downvote from "../public/arrow-down-outline.svg";
import Recaw from "../public/repeat-outline.svg";
import Opinion from "../public/ear-outline.svg";
import Comment from "./Comment";

function FeedContent() {
  const [UpVote, setUpvote] = useState(0);
  const [DownVote, setDownvote] = useState(0);
  const [Cawwed, setCawwed] = useState(0);
  const [voteCount, setVoteCount] = useState(54);
  const [showComments, setShowComments] = useState(false);
  const Upvoted = () => {
    if (DownVote === 1) {
      setVoteCount((old) => old + 2);
    } else {
      setVoteCount((old) => old + 1);
    }
    setUpvote(1);
    setDownvote(0);
  };
  const Downvoted = () => {
    if (UpVote === 1) {
      setVoteCount((old) => old - 2);
    } else {
      setVoteCount((old) => old - 1);
    }
    setDownvote(1);
    setUpvote(0);
  };

  const cawwedFn = () => {
    setCawwed(1);
  };

  const showCommentsFn = () => {
    setShowComments((old) => !old);
  };
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
          <a href="#" className={styles.pseudoBtn}>
            <div className={styles.profile__name}>Gaurav</div>
          </a>
          <a className={styles.pseudoBtn} href="#">
            <div className={styles.profile__username}>@GK75</div>
          </a>
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
          <button
            className={`${
              UpVote === 1 ? styles.pseudoBtnUpvote : styles.pseudoBtn
            }`}
            onClick={() => Upvoted()}
          >
            <Image src={Upvote} alt="upvote"></Image>
          </button>
        </div>
        <div className={styles.votes}>{voteCount}</div>
        <div className={styles.btn}>
          <button
            className={`${
              DownVote === 1 ? styles.pseudoBtnDownvote : styles.pseudoBtn
            }`}
            onClick={() => Downvoted()}
          >
            <Image src={Downvote} alt="downvote"></Image>
          </button>
        </div>
        <div className={styles.btn}>
          <button
            className={`${
              Cawwed === 1 ? styles.pseudoBtnCaw : styles.pseudoBtn
            }`}
            onClick={() => cawwedFn()}
          >
            <Image src={Recaw} alt="Recaw"></Image>
          </button>
        </div>
        <div className={styles.btn}>
          <button className={styles.pseudoBtn} onClick={() => showCommentsFn()}>
            <Image src={Opinion} alt="Opinion"></Image>
          </button>
        </div>
      </div>
      {showComments && <Comment></Comment>}
    </div>
  );
}

export default FeedContent;
