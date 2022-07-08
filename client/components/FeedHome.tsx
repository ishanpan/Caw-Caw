import React, { useEffect, useState } from "react";
import styles from "../styles/feed.module.scss";
import CreatePost from "./CreatePost";
import Feed from "./Feed";
import FeedContent from "./FeedContent";

function FeedHome() {
  const [posts, setPosts]: any = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchPost = await fetch("http://localhost:3001/post/");
      const res = await fetchPost.json();
      console.log(res);
      setPosts(res);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.base}>
      <CreatePost></CreatePost>
      {posts &&
        posts.map((post) => {
          return <FeedContent data={post}></FeedContent>;
        })}
    </div>
  );
}

export default FeedHome;
