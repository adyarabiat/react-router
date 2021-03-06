import React, { Component } from "react";
import axios from "axios";

import styles from "./FullPost.module.css";
// Now here after we select the post we want to fetch data onUpdate , it is on update becouse the component is here from the begining but we want to fethc data once we select that id ,so it is update
class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  // it will run once we update the DOM so that is why it the perfect place to use it for http request
  componentDidMount() {
    this.LoadData();
  }

  // We use this so when we click on the post then we click on diffrent one we should update the dom
  componentDidUpdate() {
    this.LoadData();
  }

  LoadData = () => {
    // we use if here becouse we want it to run when we select id and not when the id is null
    if (this.props.match.params.id) {
      // then here we check if
      // 1.there is no loadedPost which is the first time we
      // 2.we do have it after the first time AND it's ID is deffrent than this.props.id which is the current or the one we already did

      // We add  +this.props.match.params.id this + means we convert the string to a number by adding this
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        axios.get(`/posts/${this.props.match.params.id}`).then((response) => {
          const post = response.data;
          this.setState({ loadedPost: post });
        });
      }
    }
  };

  deletePost = () => {
    axios.delete(`/posts/${this.props.match.params.id}`).then((res) => {
      console.log(res);
    });
  };

  render() {
    // console.log(this.props);
    // first we retrun post with value of this NOTHING HAPPEN YET!
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    // then here we check if we select id
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    // then here we check if the selectedId has a data and it is null
    // quick note null its the same as false
    if (this.state.loadedPost) {
      post = (
        <div className={styles.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className={styles.Edit}>
            <button onClick={this.deletePost} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
