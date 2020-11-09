import React, { Component, Suspense } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import styles from "./Blog.module.css";
import Posts from "../../containers/Blog/Posts/Posts";
// import NewPost from "../../containers/Blog/NewPost/NewPost";
const NewPost = React.lazy(() => {
  return import("../../containers/Blog/NewPost/NewPost");
});
class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className={styles.Blog}>
        <header>
          <ul>
            <li>
              <NavLink exact activeClassName={styles.active} to="/posts">
                Home
              </NavLink>
            </li>
            <li>
              {/* Now here the {{}} it is optional for hash and search for more advance route like to go to sepicific fregmant in the page */}
              <NavLink exact activeClassName={styles.active} to="/new-post">
                New Post
              </NavLink>
            </li>
          </ul>
        </header>

        {/* Now here we can use this to navigate between the pages by adding it like this as component this on this path ... but the problem here is we are reloading the page everytime we do this , But if we add link to="the path which /" for example it will not load so if i check the refresh will find it that it will not refresh  */}
        <Switch>
          {this.state.auth ? (
            <Route
              path="/new-post"
              render={() => (
                <Suspense fallback={<div>Loading....</div>}>
                  <NewPost />
                </Suspense>
              )}
            />
          ) : null}
          <Route path="/posts" component={Posts} />

          <Route render={() => <h1>Not Found!!</h1>} />
          {/* <Redirect from="/" to="posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
