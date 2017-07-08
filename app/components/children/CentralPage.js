const React = require('react');
import MainFood from './MainFood';
const Userform = require('./Userform');


class CentralPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hasMeals: false
        };
    }

    componentDidMount(){
        console.log("in central CentralPage");
        console.log(this.props.userInfo);
    }
    // <MealsCalendar getMyMeal={ this.props.getMyMeal } meal={ this.props.meal } show={ this.props.show } hideModal={ this.props.hideModal } /> : <DaySelection user={this.props.user}
    // meal={this.state.meal} show={this.state.show} hideModal={this.hideModal}
    render() {
         
        return (
            <div className='central-page'>
              {(this.props.user.length != 21) ? 
              <MainFood 
              setUser={this.props.setUser}
              userMeals={this.props.userMeals} 
              getMyMeal={ this.props.getMyMeal } 
              day={this.props.day}
              meal={ this.props.meal } 
              img={this.props.img}
              instructions={this.props.instructions}
              ingredients={this.props.ingredients}
              show={ this.props.show } 
              hideModal={ this.props.hideModal } 
              user={this.props.user} 
              setUserMeals={this.props.setUserMeals}
              /> : 
              <Userform 
              setUser={this.props.setUser}
              setUserInfo={this.props.setUserInfo} 
              user={this.props.user} 
              />  }
            </div>
        )
    }

}

export default CentralPage;

