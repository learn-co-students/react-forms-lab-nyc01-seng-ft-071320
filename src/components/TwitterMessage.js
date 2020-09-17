import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    //the state should except an empty message
    this.state = {message: ""};
  }

  //create a function that will track & render the change via the event
  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  //create a function that will show the remaining characters
  //"maxchars" is a prop inherited from the parent
  showChars = () => {
    let remainingChars = this.props.maxChars - this.state.message.length;
  return <div>{remainingChars}</div>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        {this.showChars()}
      </div>
    );
  }
}

export default TwitterMessage;
