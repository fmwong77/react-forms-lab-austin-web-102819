import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  // handleChange = event => {
  //   console.log([event.target.value]);

  //   this.setState({
  //     [event.target.name]: [event.target.value]
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.username);

    if (this.state.username.length > 0 && this.state.password.length > 0)
      this.props.handleLogin(this.state);
  };

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          if (this.state.username.length > 0 && this.state.password.length > 0)
            this.props.handleLogin(event);
        }}
      >
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={event => {
                this.setState({ username: event.target.value });
              }}
              value={this.state.username}
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
              onChange={event => {
                this.setState({ password: event.target.value });
              }}
              value={this.state.password}
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
