import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state.message)
  }

  countChars = (value) => {
    return <span>{this.props.maxChars - value.length} remaining characters left</span>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler} />
        <br></br>
        {this.countChars(this.state.message)}
      </div>
    );
  }
}

export default TwitterMessage;
