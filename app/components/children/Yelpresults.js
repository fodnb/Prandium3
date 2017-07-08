var React = require("react");
var helpers = require('./../utils/helpers.js');

{ /* here is where setup our initial state that we will update with our results image has a default so when it's waiting for the update it's not blank  */ }
class Yelpresults extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                name: '',
                address: '',
                address2: '',
                phone: '',
                link: '',
                image: 'https://media2.giphy.com/media/12WHz2qK44JTq0/200.webp#7-grid1'
            }
            this.handleClick = this.handleClick.bind(this);
        }



        handleClick(event) {
            {/*  This is being used to clear the state in Yelp to zipcode and term to null, that way when this button is clicked 
             which is located underneath the results the app will bring you back to a search bar */}
            event.preventDefault();
            var zipcode = null;
            var term = null;
            console.log('clicked');
            this.props.onSubmit(zipcode, term);
        }

        componentDidUpdate() { console.log(this.state); }



        componentDidMount() {

            helpers.getYelp(this.props.zipcode, this.props.term).then(function(data) {
                console.log('victory');
                console.log(data);
                this.setState({
                    name: data.data.name,
                    address: data.data.location.display_address[0],
                    address2: data.data.location.display_address[1],
                    phone: data.data.display_phone,
                    link: data.data.url,
                    image: data.data.image_url
                })



            }.bind(this));

        }


        render(){

          return(


                <div className="container" id="yelpResults">
                    <h1>YOUR RESULTS </h1>

                    <div className="media">

                        <div className="media-left media-top">
                          <a href="#">
                            <img id='roundedimage' className="media-object" src={this.state.image} alt="Waiting" width="150" height="150" />
                          </a>
                        </div>

                        <div className="media-body">

                        <address> 
                        <a href={this.state.link}>{this.state.name}</a><br/>
                        {this.state.address}<br/>
                        {this.state.address2}<br/>
                        {this.state.phone}<br/>
                        </address>

                        </div>
                    </div>

                    <button
                    onClick={this.handleClick}
                    id="resetYelp"
                    className="btn btn-danger btn-lg"
                    >  
                    Reset
                    </button>  


                </div>

            )
        }



        }




        module.exports = Yelpresults;
