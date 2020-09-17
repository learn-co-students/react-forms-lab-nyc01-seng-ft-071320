import React from "react";

class TwitterMessage extends React.Component {

  changeHandler=(e)=> {
    this.setState( {message: e.target.value} )
  }

  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler} placeholder={this.state.message.length} />
        <span> Characters left: {(280 - this.state.message.length)} </span> 
      </div>
    );
  }
}

export default TwitterMessage;
