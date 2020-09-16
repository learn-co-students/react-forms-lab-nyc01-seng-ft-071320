import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value
    }, console.log(this.state))
  }

  displayCharsLeft = () => {
    let charsLeft = this.props.maxChars - this.state.message.length
    console.log(charsLeft)
    return <span>{charsLeft}</span>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changeHandler} value={this.state.message} />
        {this.displayCharsLeft()}
      </div>
    );
  }
}

export default TwitterMessage;
