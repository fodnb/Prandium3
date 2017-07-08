import React from 'react';
import Yelpresults from './Yelpresults';
import Yelpsearch from './Yelpsearch';

{/* this component is going to choose which of the 2 other yelp components we will render
  yelpresults if there is current search criteria,
  yelpsearch if there is no current search criteria or we reset

  */}
class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    zipcode: '',
    term: '',
    restaurantInfo: []
    }
  {/*  here we bind all functions we will be using to this so we can use them  */}
   this.handleSubmit = this.handleSubmit.bind(this);
   this.resetSubmit = this.resetSubmit.bind(this);
   this.set = this.set.bind(this);
 {/*  ************might not need this function not being called anywhere***************** */}
  }


  handleSubmit(zipcode, term){
  {/* this function will take in two paramaters and set state for zipcode and the search term to the state  */}

  event.preventDefault();
  console.log('I love react....');
  this.setState({
  zipcode: zipcode, term: term
  })
}



	set(info){
  {/* this is currenlty not in use this was going to hold the restaurants info and pass it back to this component this may come out of the program it was being passed to 
  yelpsearch  */}
	console.log("in setRestaurantInfo");	
	this.setState({restaurantInfo: info})
	
	}


resetSubmit(zipcode, term){
  {/*  here we're passing a function where we can reset the state to undefined and get the state back to null so we can render the search page again. 
this may not be needed and I'll look into taking this out */}
	event.preventDefault();
	this.setState({
	zipcode: zipcode, term: term
		})
	}

  render() {
    return (
        <div>
     {/*  here is where the magic happens,  if there is an instance of zipcode and not undefined then we will render the yelpresults page and pass it props
          else we will render the search page and pass it props */}
        {this.state.zipcode ? <Yelpresults term={this.state.term} zipcode={this.state.zipcode} onSubmit={this.resetSubmit} restaurantInfo={this.state.restaurantInfo} /> : <Yelpsearch onSubmit={this.handleSubmit} set={this.set} /> }
        </div>
    )
  }

}

module.exports = Yelp;