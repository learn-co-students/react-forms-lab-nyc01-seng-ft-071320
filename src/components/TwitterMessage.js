import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remainingNum: props.maxChars
    };
  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value,
      remainingNum: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler} />
        <span>{this.state.remainingNum} letter(s) left</span>
      </div>
    );
  }
}

export default TwitterMessage;
