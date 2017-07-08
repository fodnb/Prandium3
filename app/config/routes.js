var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

const Nav = require('./../components/children/Nav');
const Header = require('./../components/children/Header');
const Form = require("./../components/children/Userform");
const Yelp = require('./../components/children/Yelp');



{/*  this is setting up the routes for our app/ we currently are not using this as of 6/27/17 this may change to inclue a link back to change preferences or user info
	 instead of main being used in reactDOM.render routes will be at the / route you will load login and so on but these routes are only availble via button click
	 there are ways to get this to change but I don't think we're that interested in it for this project
  */}


class Routes extends React.Component {
        render() {
                return (

					<Router>
					<div className="container">
					<Header />
					<Nav/>
					
					<Switch>
						<Route exact path='/' component={Login}/>
						<Route path='/header' component={Header}/>
						<Route path='/yelp' component={Form}/>

	 				</Switch>
					</div>

					</Router>	

			)
	}
}

module.exports = Routes;
