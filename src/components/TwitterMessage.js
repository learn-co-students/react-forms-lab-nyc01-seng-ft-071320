import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  clickHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    let messageNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.clickHandler} />
        <p>{messageNum}</p>
      </div>
    );
  }
}

export default TwitterMessage;
