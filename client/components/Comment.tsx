import { Card } from "@nextui-org/react";
import React from "react";
import styles from "../styles/comment.module.scss";

function Comment() {
  return (
    <div className={styles.commentSection}>
      <div className={styles.comment}>
        <Card css={{ backgroundColor: "$blue50" }} shadow={false}>
          <p>wow amazing post</p>
        </Card>
      </div>
      <div className={styles.comment}>
        <Card css={{ backgroundColor: "$blue50" }} shadow={false}>
          <p>wow amazing post</p>
        </Card>
      </div>
      <div className={styles.comment}>
        <Card css={{ backgroundColor: "$blue50" }} shadow={false}>
          <p>wow amazing post</p>
        </Card>
      </div>
      <div className={styles.comment}>
        <Card css={{ backgroundColor: "$blue50" }} shadow={false}>
          <p>wow amazing post</p>
        </Card>
      </div>
    </div>
  );
}

export default Comment;
