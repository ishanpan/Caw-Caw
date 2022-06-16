import React from "react";
import styles from "../styles/feed.module.scss";
import CreatePost from "./CreatePost";
import FeedContent from "./FeedContent";

function FeedHome() {
  return (
    <div className={styles.base}>
      <CreatePost></CreatePost>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
    </div>
  );
}

export default FeedHome;
