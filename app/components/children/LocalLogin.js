// THIS COMPONENT IS FOR A LOCAL SIGNUP OPTION, TAKES IN USER INFO AND SENDS TO SERVER VIA AXIOS

const React = require("react");
const helpers = require("./../utils/helpers.js");

class LocalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      loggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    {
      /*}  // this takes in a paramater of the event and upon change changes the state upon the user input */
    }

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var user = this.state.login;
    var pw = this.state.password;

    helpers.getLocal(user, pw).then(
      function(result) {
        console.log("---------------");
        console.log(result.data);
        console.log("---------------");
        var login = result.data;
        this.props.setUser(results.data.Googleid);
        this.setState({
          loggedIn: login
        });
        console.log(this.state.loggedIn);
        // this.props.userLogin(this.state.loggedIn);
      }.bind(this)
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="local-login">
        <div id="loginTitle">Log In:</div>
        <input
          value={this.state.login}
          placeholder="username"
          type="text"
          className="form-control"
          id="login"
          name="login"
          onChange={this.handleChange}
          required
        />
        <br />
        <input
          value={this.state.password}
          placeholder="password"
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={this.handleChange}
          required
        />
        <br />
        <input value="Sign In" className="sign-in-btn" type="submit" />
        <br />
      </form>
    );
  }
}

module.exports = LocalLogin;
