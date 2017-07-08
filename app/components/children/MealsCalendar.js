import React from "react";
import Day from "./Day.js";
import Yelp from "./Yelp";
// import ExpandedMeal from './ExpandedMeal';
const MyModal = require("./Modal");

class MealsCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      Sunday: "",
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: ""
    };

    this.createDay = this.createDay.bind(this);
  }

  createDay() {
    var week = this.props.user.data[0].mealsForTheWeek;
    console.log(week);
    return week.map((day, i) => {
      var ingredients = this.props.user.data[0].mealsForTheWeek[i].mealInstructions;
      console.log(ingredients);
      var ingredientsImg = this.props.user.data[0].mealsForTheWeek[i].ingredientImages;
      console.log(ingredientsImg);
     // conosole.log(my)
    
      console.log("------------------");

      return (
        <div
          key={i}
          className="col-sm-3"
          onClick={() =>
            this.props.getMyMeal(
              day.day,
              day.meal.title,
              day.meal.image,
              day.meal.instructions,
              ingredients
            )}
        >
          <Day
            user={this.props.user}
            key={i}
            day={day.day}
            meal={day.meal.title}
            image={day.meal.image}
            instructions={day.meal.instructions}
          />
        </div>
      );
    });
  }

  componentDidUpdate() {
    console.log(this.props.user);
  }

  render() {



    return (
      <div>
        <div>
          <MyModal
            day={this.props.day}
            meal={this.props.meal}
            img={this.props.img}
            instructions={this.props.instructions}
            ingredients={this.props.ingredients}
            show={this.props.show}
            hideModal={this.props.hideModal}
          />
        </div>
        <div className="calendar-wrapper">
          {this.createDay()}
        </div>
        <div />
        <div id="yelpInMeals">
          <Yelp />
        </div>
      </div>
    );
  }
}

export default MealsCalendar;
