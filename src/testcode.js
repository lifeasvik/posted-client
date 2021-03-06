
<Link to='/game'> Start Game </Link>

<Switch> <Route exact path={'/'} component={LoginPage} /> <Route path={'/loggedin'} component={LoggedIn} /> <Route path={'/register'} component={RegistrationPage} /> <Route path={'/game'} component={Game} /> <Route path={'/leaderboard'} component={LeaderBoard} /> </Switch>

import { Route, Switch } from 'react-router-dom'















export default class App extends React.Component {
  state = {
    login: "",
    password: ""
  };

  loginHandler = e => {
    this.setState({ login: e.target.value });
  };

  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <main className="App">
        <div>
          <h1>Welcome to Posted</h1>
        </div>
        <div>Sign in</div>

        {/* form starts here to login */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4>Login:</h4>
            <input
              type="text"
              name="loginInput"
              required
              onChange={this.loginHandler}
              value={this.state.login}
            />
            <h4>Password:</h4>
            <input
              type="password"
              name="passwordInput"
              required
              onChange={this.passwordHandler}
              value={this.state.password}
            />
          </div>
          <div>
            <input
              type="button"
              name="submitlogin"
              onClick={() => this.handleButtonClick()}
            />
            Submit
          </div>
        </form>
        {/* End submit form code */}

        <div>
          <h1>Latest Postcards:</h1>
        </div>
      </main>
    );
  }
}
