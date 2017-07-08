const React = require('react');


{/* currenlty not being used I was thinking of having this render when page was waiting on information from an api but not sure if that's the best idea anymore
instead when yelp is rendering I made the initial instance of the restaurants picture a gif from giphy. */}
class Waiting extends React.Component {

render(){

	<div className="container">
		{/* could not figure out how to get webpack to allow jpg files... will look more into this because having the images we want saved will be better for the future
		it will save us from having an instance where a picture is moved or changed from where we initially took it  */}
	<img src="public/images/download.jpg" height="200" width="200"/> 

	</div>

}


}

module.exports = Waiting;