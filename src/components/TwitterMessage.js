import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  eventHandler = (e) => {
    this.setState({ 
      message: e.target.value 
    });
  }

  render() {
    console.log("Props", this.props.maxChars);
    let characters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.eventHandler}/>
        {characters}
      </div>
    );
  }
}

export default TwitterMessage;
