import React from 'react';

{ /* importing helpers so we can use the functions in this component  */ }
var helpers = require("./../utils/helpers");


class Yelpsearch extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                zipcode: '',
                type: '',
                rI: []
            } 
            { /* binding these to the component  */ }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);

        }
       
        handleSubmit(event) {
            event.preventDefault();
            console.log(this.props);
            var zipcode = this.state.zipcode;
            var term = this.state.term;
            console.log(this.state); { /*   */ }
            helpers.postYelp(this.state.zipcode, this.state.type); { /* this.props.onSubmit is where we send zipcode and type back to the yelp component  */ }
            this.props.onSubmit(this.state.zipcode, this.state.type);



            { /*  I need to look into whether this is being called here anymore may need to take this out it seems to be redundant to what I have in yelp results  */ }
            helpers.getYelp(this.state.zipcode, this.state.type).then(function(data) {
                console.log('victory');
                console.log(data);
                this.setState({ rI: data })
            }.bind(this));

        } 



        handleChange(event) {
            { /* this is catching what the user is typeing and setting state to match user input  need handlesubmit to send the data at a certain point to   */ }
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });

            console.log(this.state);
        } 


          render() {


            return (
              <div className="container" id="rsContainer">
                <div> 

                </div>
              <div className='row'>
              {/*<Header /> Had header here now moving it to the Routes*/}
              <div className="panel panel-default" id='yelpForm'>
                <div className="panel-heading">
                  <h1 className="panel-title text-center"><strong>Search Local Restaurants</strong></h1>
                </div>
                <div className="panel-body text-center">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">

                    

                      <input
                          value={this.state.type}
                          placeholder="Find e.g. Italian, Mexican, Japanese"
                          type="text"
                          className="form-control text-center"
                          id="restaurantSearch"
                        name="type"
                        onChange={this.handleChange}
                        required
                      />


                      <input
                        value={this.state.zipcode}
                        placeholder="Near zipcode"
                        type="text"
                        className="form-control text-center"
                        id="restaurantSearch"
                        name="zipcode"
                        onChange={this.handleChange}
                        pattern="(\d{5}([\-]\d{4})?)"
                        required
                      />


                      

                          <input
                          id="yelpSubmit"
                          value="Submit"
                          className="btn"
                          type="submit"
                          />
                    </div>

                  </form>  
              </div>   
            </div>
          </div>
        </div>
               
    );
  }
}

module.exports = Yelpsearch;