import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twitterMessage: ""
    };
  }

  tweetChangeHandler = (e) => {
    // e.persist();
    this.setState({twitterMessage: e.target.value})
  }

  render() {
    let charLeft = this.props.maxChars - this.state.twitterMessage.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.tweetChangeHandler(e)} value={this.state.twitterMessage}/>
        <p>Characters left: {charLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
