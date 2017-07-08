import React from 'react';
import MealsCalendar from './MealsCalendar';
import DaySelection from './DaySelection';


class MainFood extends React.Component {
    constructor() {
        super();
        this.state = {
            hasMeals: false
        }
        this.thisHasMeals = this.thisHasMeals.bind(this);

    }

    thisHasMeals(meals){
    	this.setState({
    		hasMeals: meals
    	})
    }

    render() {
         
        return (
            <div className='central-page'>
              { this.props.user.data[0] ? 
              <MealsCalendar 

              user={this.props.user}
              userMeals={this.props.userMeals}  
              getMyMeal={ this.props.getMyMeal }
              day={this.props.day} 
              meal={ this.props.meal } 
              img={this.props.img}
              instructions={this.props.instructions}
              ingredients={this.props.ingredients}
              show={ this.props.show } 
              hideModal={ this.props.hideModal }

              /> : 
              <DaySelection 
              user={this.props.user} 
              thisHasMeals={this.thisHasMeals} 
              setUserMeals={this.props.setUserMeals}
              setUser={this.props.setUser}
              /> }
            </div>
        )
    }

}

export default MainFood;
