var React = require("react");

{
  /*  Builds the header for the app the background image is added using css  */
}
class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className='logo'>Prandium</div>
      </div>
    );
  }
}

module.exports = Header;
