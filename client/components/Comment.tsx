import { Button, Card, Textarea } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import styles from "../styles/comment.module.scss";

function Comment(props: any) {
  const textareaRef: any = React.useRef(null);
  const [comments, SetComments] = useState([]);
  //fetch comments

  useEffect(() => {
    const commentsFn = async () => {
      const comm = await fetch(
        `http://localhost:3001/post/comment/${props.id}`
      );
      const commentJ = await comm.json();
      console.log(commentJ);
      SetComments(commentJ);
    };

    commentsFn();
  }, [props.reComments]);

  const submitComment = async () => {
    const res = await fetch("http://localhost:3001/post/comment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: `${props.id}`,
        text: textareaRef.current.value,
      }),
    });
    textareaRef.current.value = "";
    console.log(res);
  };

  return (
    <div className={styles.commentSection}>
      <div className={styles.replyComment}>
        <Textarea
          placeholder="Caw your reply"
          minRows={3}
          cols={130}
          ref={textareaRef}
          color="primary"
          bordered
        ></Textarea>

        <Button
          onPress={() => {
            submitComment();
          }}
          className={styles.btn}
          size="sm"
          rounded
        >
          Comment
        </Button>
      </div>

      {comments &&
        comments.map((data) => {
          return (
            <div key={data.id} className={styles.comment}>
              <Card css={{ backgroundColor: "$blue50" }} shadow={false}>
                <p>{data.description}</p>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default Comment;
