import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  messageHandler = (e) => {
    this.setState({ message: e.target.value})
  }

  render() {
    let charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} value={this.state.message} onChange={this.messageHandler}/>
        <h3>Characters Left: {charsLeft}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
