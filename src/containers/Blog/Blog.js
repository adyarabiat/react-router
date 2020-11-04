import React, { Component } from "react";
// import axios from "axios";
// npm install --save axios
import axiosInstance from "../../axiosInstance";
// import react-router AND react-router-dom
// npm install --save react-router react-router-dom

import styles from "./Blog.module.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    Error: false,
  };

  // Remeber componentDidMount will run just one time
  componentDidMount() {
    console.log("componentDidMount");
    axiosInstance
      .get("/posts")
      .then((respons) => {
        // I fetched all the data Already but I want just first 4
        const posts = respons.data.slice(0, 4);
        // Then I will edit and to the data that I have fethced from the server by taking a copy of it then add author to it
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Ady",
          };
        });

        this.setState({ posts: updatedPosts });
        // console.log(respons.data);
      })
      .catch((err) => {
        // console.log(err);
        this.setState({ Error: true });
      });
  }

  postClicked = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let post;
    if (this.state.Error) {
      post = <p>Something Went Wrong!!!</p>;
    } else {
      post = this.state.posts.map((post) => {
        return (
          <Post
            title={post.title}
            key={post.id}
            author={post.author}
            click={() => this.postClicked(post.id)}
          />
        );
      });
    }

    return (
      <div className={styles.Blog}>
        <header>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-post">New Psot</a>
            </li>
          </ul>
        </header>
        <section className={styles.Posts}>{post}</section>
      </div>
    );
  }
}

export default Blog;
