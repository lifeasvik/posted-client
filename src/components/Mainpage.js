import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import AppContext from "./Context";

export default class App extends React.Component {
  static contextType = AppContext;
  state = {
    login: "",
    password: ""
    // error: null
  };

  // static defaultProps = {
  //   onLoginSuccess: () => {}
  // };

  // handleSubmitJwtAuth = ev => {
  //   ev.preventDefault();
  //   this.setState({ error: null });
  //   const { user_name, password } = ev.target;

  //   AuthApiService.postLogin({
  //     user_name: user_name.value,
  //     password: password.value
  //   })
  //     .then(res => {
  //       user_name.value = "";
  //       password.value = "";
  //       TokenService.saveAuthToken(res.authToken);
  //       this.props.onLoginSuccess();
  //     })
  //     .catch(res => {
  //       this.setState({
  //         error: res.error
  //       });
  //     });
  // };

  // handleSubmitBasicAuth = ev => {
  //   ev.preventDefault()
  //   const { user_name, password } = ev.target

  //   console.log('login form submitted')
  //   console.log({ user_name, password })

  //   TokenService.saveAuthToken(
  //     TokenService.makeBasicAuthToken(user_name.value, password.value)
  //   )

  //   user_name.value = ''
  //   password.value = ''
  //   this.props.onLoginSuccess()
  // }

  loginHandler = e => {
    this.setState({ login: e.target.value });
  };

  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <main className="App">
        <div className="contentliner">
          <h1>Welcome to Posted</h1>
        </div>
        {/* form starts here to login */}
        <div className="splashcontainer">
          <div className="contentliner">Sign in</div>
          <form onSubmit={this.handleSubmitJwtAuth}>
            <div>
              <div className="contentliner">
                <h4>Login:</h4>
              </div>
              <input
                type="text"
                name="loginInput"
                required
                onChange={this.loginHandler}
                value={this.state.login}
              />
              <div className="contentliner">
                <h4>Password:</h4>
              </div>
              <input
                type="password"
                name="passwordInput"
                required
                onChange={this.passwordHandler}
                value={this.state.password}
              />
            </div>
            <div className="contentliner">
              {/* <input
                type="button"
                name="submitlogin"
                value="Button"
                onClick={() => this.handleButtonClick()}
              /> */}
              <Link to="/postcard">Submit</Link>
            </div>
          </form>
          {/* End submit form code */}
          <div className="signinsplash">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
        <div className="contentliner">
          <h1>Latest Postcards:</h1>
        </div>
        <div className="cardholder">
          {this.context.postcards.map(postcard => (
            <div
              className="postcard"
              style={{
                backgroundImage: `url(${postcard.image})`
              }}
            >
              <p className="postcardText">{postcard.text}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
