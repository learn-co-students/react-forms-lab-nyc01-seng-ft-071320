import React from "react";


class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }



  render() {
    let charLength = this.props.maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.tweet} name="message" id="message" />
        {charLength}
      </div>
    );
  }
}

export default TwitterMessage;
