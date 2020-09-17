import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  //create the function that will handle changes
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //create another function that will handle logins
  // handleLogin is a prop function being passed from the parent

  loginHandler = event => {
    event.preventDefault()

    //if theres a username & password, then render the handleLogin prop function
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    } else {
      window.alert("Fill out both fields or else!...")
    }
  }

  render() {
    return (
      // include the onSubmit within the opening portion of the form
      <form onSubmit={this.loginHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
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
