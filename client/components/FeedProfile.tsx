import React, { useEffect, useState } from "react";
import styles from "../styles/feed.module.scss";
import CreatePost from "./CreatePost";
import Feed from "./Feed";
import FeedContent from "./FeedContent";

function FeedHome(props: any) {
  const [posts, setPosts]: any = useState([]);

  useEffect(() => {
    setPosts(props.childData);
  }, [props.childData]);
  return (
    <div className={styles.base}>
      <CreatePost></CreatePost>
      {posts &&
        posts.map((post: any) => {
          // eslint-disable-next-line react/jsx-key
          return <FeedContent data={post}></FeedContent>;
        })}
    </div>
  );
}

export default FeedHome;
