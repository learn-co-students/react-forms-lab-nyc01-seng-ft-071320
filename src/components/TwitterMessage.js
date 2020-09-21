import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ""
  }

  changeHandler=e=>{
    this.setState({ message: e.target.value})
  }

  render() {
    let charNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.changeHandler} type="text" name="message" id="message" />
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;
