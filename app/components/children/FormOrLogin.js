const React = require("react");
const helpers = require("./../utils/helpers.js");
const Yelp = require("./Yelp");
const MainLogin = require("./MainLogin");
const Userform = require("./Userform");
const GoogleLogin = require("./GoogleLogin");

{
  /*  this component builds out our login.  Pulls in the google login button and if user is not present in state will render the userform if not will ultimately sign into app  */
}
class FormOrLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      isLoggedIn: ""
    };

    // this.userLogin = this.userLogin.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  // userLogin(isLoggedIn){
  //     this.setState({
  //         isLoggedIn: isLoggedIn
  //     })
  // console.log("in form or login");

  // }

  componentWillUnmount() {}

  componentDidUpdate() {
    console.log("----------------");
    console.log("in form or login componentDidUpdate");
    console.log(this.state);
    console.log("----------------");
    console.log("this below should be false originally");
    console.log(this.state.isLoggedIn);
  }

  render() {
    return (
      <div>
        {!this.props.userInfo ? <Userform setUserInfo={this.props.setUserInfo} /> : <MainLogin setUser={this.props.setUser} /> }
      </div>
    );
  }
}

module.exports = FormOrLogin;
