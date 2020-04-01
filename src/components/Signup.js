import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
// import AuthApiService from "../../services/auth-api-service";

export default class Viewpostcard extends Component {
  state = {
    username: "",
    password: "",
    verifypass: "",
    error: null
  };
  // // static contextType = AppContext;
  // static defaultProps = {
  //   onRegistrationSuccess: () => {}
  // };

  // //add info here from thingful
  // handleSubmit = ev => {
  //   ev.preventDefault();
  //   const { user_name, password } = ev.target;

  //   this.setState({ error: null });
  //   AuthApiService.postUser({
  //     user_name: user_name.value,
  //     password: password.value
  //   })
  //     .then(user => {
  //       user_name.value = "";
  //       password.value = "";
  //       this.props.onRegistrationSuccess();
  //     })
  //     .catch(res => {
  //       this.setState({ error: res.error });
  //     });
  // };

  render() {
    return (
      <div className="signupbox">
        <div>
          <h4>Sign Up for an account</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div>
            <input
              type="verifypass"
              name="verifypass"
              placeholder="Retype Password"
              value={this.state.verifypass}
              onChange={e => this.setState({ verifypass: e.target.value })}
            />
          </div>
          <Link to="/">Submit</Link>
        </form>
      </div>
    );
  }
}
