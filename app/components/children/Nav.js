var React = require("react");



{/* we currenlty are not using this component as of 6/27/17 this may change to allow user to click a link to their 
prefernces this is setting up links that the user can click on and see certain components in our page  
The active class will highlight the link that is active at the moment.  
Must use exact in front of root or any link that has similar name because it will default to / if not specified as must match exact*/}
var NavLink = require('react-router-dom').NavLink;

function Nav() {


	return (

		<ul className="nav">
		<li id="nav">
			<NavLink exact activeClassName='active' to='/'>Form</NavLink>
		</li>
		<li id="nav">
			<NavLink activeClassName='active' to='/header'>Header</NavLink>
		</li>
		<li id="nav">
			<NavLink activeClassName='active' to='/yelp'>Search</NavLink>
		</li>
		<li id="nav">
			<NavLink activeClassName='active' to='/restaurant'>Restaurant</NavLink>
		</li>
		<li id="nav">
			<NavLink activeClassName='active' to='/login'>Login</NavLink>
		</li>

		</ul>
		)


}

module.exports = Nav;