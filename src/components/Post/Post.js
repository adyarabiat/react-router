import React from "react";

import styles from "./Post.module.css";

const post = (props) => {
  // console.log(props);
  return (
    <article className={styles.Post} onClick={props.click}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default post;
