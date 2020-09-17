import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "", 
      password: ""
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHander = (e) => {
    e.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin()
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHander}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.changeHandler} value={this.state.username} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.changeHandler} value={this.state.password} name="password" type="password" />
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
