import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    //this.props.maxChars is a prop
    this.state = {
      name: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        {this.props.maxChars - this.state.name.length} characters left
      </div>
    );
  }
}

export default TwitterMessage;
