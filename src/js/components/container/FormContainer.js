import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader/root'

import Input from "../presentational/Input";

class FormContainer extends Component {
  state = {
    seo_title: "Some title"
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { seo_title } = this.state;
    return (
        <div>
          <p>Testing webpack dev server and it works fine!</p>
          <form id="article-form">
            <Input
                text="Testing input"
                label="seo_title"
                type="text"
                id="seo_title"
                value={seo_title}
                handleChange={this.handleChange}
            />
          </form>
        </div>
    );
  }
}

export default hot(FormContainer);

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
