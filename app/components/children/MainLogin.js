const React = require("react");
const GoogleLogin = require("./GoogleLogin");
const LocalLogin = require("./LocalLogin");

class MainLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // userLogin={this.props.userLogin}
    return (
      <div className="main-login">
        <LocalLogin setUser={this.props.setUser} />
			--or--
        <GoogleLogin setUser={this.props.setUser} />
        <div className="bk-img" />
      </div>
    );
  }
}

module.exports = MainLogin;
