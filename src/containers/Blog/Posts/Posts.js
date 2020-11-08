import React, { Component } from "react";
import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Post from "../../../components/Post/Post";
// import axios from "axios";
// npm install --save axios
import axiosInstance from "../../../axiosInstance";
import styles from "./Posts.module.css";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
  };

  // Remeber componentDidMount will run just one time
  componentDidMount() {
    // console.log(this.props);
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
        console.log(err);
      });
  }

  // When we click on the post we show it in the bottom BUT if we click on diffrent one the Dom not updating just the url update so we have to do componentDidUpdate
  componentDidUpdate() {}

  loaded = () => {};
  postClicked = (id) => {
    // this.setState({ selectedPostId: id });

    this.props.history.push(`/posts/${id}`);
  };

  render() {
    let post;
    if (this.state.Error) {
      post = <p>Something Went Wrong!!!</p>;
    } else {
      post = this.state.posts.map((post) => {
        return (
          // <Link to={`/${post.id}`} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            click={() => this.postClicked(post.id)}
            key={post.id}
          />
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className={styles.Posts}>{post}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
