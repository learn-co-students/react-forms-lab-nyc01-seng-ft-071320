import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    } else {
      console.log("%c All Fields Must Be Filled Out", 'color: red')
    }
    
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;



/*
1. add properties username and password to state
2. add attributes onChange={this.handleInputChange} and value={this.state.username/password} to both input tags
3. define handleInputChange
    pass event
    use this.setState({
      [event.target.name]: event.target.value
    })
4. add submitHandler definition
    pass event
    event.preventDefault()
    make a call to this.props.handleLogin() -- do I invoke it? I suppose I do
5. add onSubmit={this.submitHandler} to form tag
6. inspect page to see if the handleLogin console.log happens

use this.props.handleLogin with onSubmit handler definitiion
*/