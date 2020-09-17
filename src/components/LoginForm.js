import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }
  //this.props.handleLogin

  changeHandler = (e) => {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  };

  loginHandler = (e) => {
    e.preventDefault();
    if (!(this.state.username === "" || this.state.password === "")) {
      this.props.handleLogin({
        username: this.state.username,
        password: this.state.password,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.loginHandler}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
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
