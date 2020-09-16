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
    this.setState({ [e.target.name]: e.target.value })
  }

  submbitHandler = (e) => {
    let username = this.state.username
    let password = this.state.password
    if (username && password) {
      this.props.handleLogin({ username, password })
    }
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submbitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.changeHandler} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.changeHandler} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form >
    );
  }
}

export default LoginForm;
