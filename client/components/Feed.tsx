import React from "react";
import styles from "../styles/feed.module.scss";
import FeedContent from "./FeedContent";

function Feed() {
  return (
    <div className={styles.base}>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>

      <FeedContent></FeedContent>

      <FeedContent></FeedContent>
    </div>
  );
}

export default Feed;
