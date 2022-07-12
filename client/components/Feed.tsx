import React, { useEffect, useState } from "react";
import styles from "../styles/feed.module.scss";
import CreatePost from "./CreatePost";
import FeedContent from "./FeedContent";

function Feed() {
  const [posts, setPosts]: any = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchPost = await fetch("http://localhost:3001/post/", {
        credentials: "same-origin",
      });

      const res = await fetchPost.json();
      console.log(res);
      setPosts(res);
    };

    fetchPosts();
  }, []);

  useEffect(() => {}, [posts]);

  return (
    <div className={styles.base}>
      {posts &&
        posts.map((data: any) => {
          // eslint-disable-next-line react/jsx-key
          return <FeedContent props={data}></FeedContent>;
        })}
    </div>
  );
}

export default Feed;
