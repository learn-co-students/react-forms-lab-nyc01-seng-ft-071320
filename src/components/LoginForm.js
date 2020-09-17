import React from "react";

class LoginForm extends React.Component {

  changeHandler=(e)=> {
    if (e.target.id==='username'){
      this.setState({name: e.target.value})
    } else if (e.target.id === 'password'){
      this.setState({password: e.target.value})
    }
  }
  
  constructor() {
    super();
    
    this.state = {
      name: '',
      password: ''
    };
  }
  
  render() {
    console.log(this.state.name)
    return (
      <form onSubmit={(e)=> {
        e.preventDefault()
        if (this.state.name !== '' && this.state.password !== ''){
          this.props.handleLogin({username: this.state.name, password: this.state.password})
        this.setState({name: '', password:''})
        } else { console.log('empty')}
      }} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value ={this.state.name}
            onChange={this.changeHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} 
            onChange={this.changeHandler}/>
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
