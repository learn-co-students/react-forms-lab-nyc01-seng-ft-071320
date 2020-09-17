import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {

      message: ""
    };
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value
    })
    
  }

  render() {
    let counter = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changeHandler} value={this.state.message} />
        {counter}
      </div>
    );
  }
}

export default TwitterMessage;
