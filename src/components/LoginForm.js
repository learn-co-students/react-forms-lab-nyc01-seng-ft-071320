import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        if (this.state.username && this.state.password) {
          this.props.handleLogin(this.state)
        }
      }}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.inputHandler} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.inputHandler} />
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
