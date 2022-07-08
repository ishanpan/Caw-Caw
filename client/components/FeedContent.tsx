import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/feedcontent.module.scss";
import { Avatar } from "@nextui-org/react";
import Upvote from "../public/arrow-up-outline.svg";
import Downvote from "../public/arrow-down-outline.svg";
import Recaw from "../public/repeat-outline.svg";
import Opinion from "../public/ear-outline.svg";
import Comment from "./Comment";

function FeedContent(props) {
  const [UpVote, setUpvote] = useState(0);
  const [DownVote, setDownvote] = useState(0);
  const [Cawwed, setCawwed] = useState(0);
  const [voteCount, setVoteCount] = useState(54);
  const [showComments, setShowComments] = useState(false);
  console.log("hello");

  const syncVote = async (voted: number) => {
    await fetch("http://localhost:3001/post/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: props.data.post_id,
        type: voted,
      }),
    });
  };

  const Upvoted = () => {
    if (DownVote === 1) {
      setVoteCount((old) => old + 2);
    } else {
      setVoteCount((old) => old + 1);
    }
    setUpvote(1);
    setDownvote(0);
    syncVote(0);
  };
  const Downvoted = () => {
    if (UpVote === 1) {
      setVoteCount((old) => old - 2);
    } else {
      setVoteCount((old) => old - 1);
    }
    setDownvote(1);
    setUpvote(0);
    syncVote(1);
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
          <Avatar src={props.data.image_id} size="lg" />
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
      <div className={styles.text}>{props.data.text}</div>
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
        <div className={styles.votes}>{props.data.votes}</div>
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
      {showComments && (
        <Comment reComments={showComments} id={props.data.post_id}></Comment>
      )}
    </div>
  );
}

export default FeedContent;
