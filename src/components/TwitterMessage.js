import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ""
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  remChars = () => {
    let charsLeft = this.props.maxChars - this.state.message.length
    let styleColor = 'black'
    if(charsLeft < 0){
      styleColor = 'red'
    }
    return (<p style={{color: `${styleColor}`}}>{charsLeft}</p>)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        {this.remChars()}
      </div>
    );
  }
}

export default TwitterMessage;



/*
1. add onChange and value attributes to input element
    set onChange={this.handleChange} in input
    set value={this.state.message}
2. add message property to state
3. define handleChange in TwitterMessage
    use this.setState({message: event.target.value})
4. define remChars and invoke it below input element
    returns remaining characters in an p tag
    let charsLeft = this.props.maxChars - this.state.message.length
    return <p>charsLeft</p>


*/