import React, { Component } from "react";
//  react-router AND react-router-dom
// npm install --save react-router react-router-dom
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
