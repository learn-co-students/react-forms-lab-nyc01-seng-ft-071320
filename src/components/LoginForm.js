import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  changeHandler=e=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler=e=>{
    e.preventDefault()
    
    if(!this.props.username || !this.props.password) {
      return this.props.handleLogin(this.state)
    } else {
      window.alert("Oopsie Dasy")
    }
  }

  render() {
    // console.log(this.state)
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input onChange={this.changeHandler}id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changeHandler} id="password" name="password" type="password" value={this.state.password} />
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
