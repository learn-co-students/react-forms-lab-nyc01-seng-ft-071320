import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleLastMesChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={e => this.handleLastMesChange(e)}
          value={this.state.message} />
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;
