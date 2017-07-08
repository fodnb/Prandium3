import React from "react";
import { deleteMeals } from "../utils/helpers";

export const Day = props => {
  const handleClick = () => {
    let day = props.day;
    let user = props.user.data["0"].userID;
    console.log("DAY:", day);
    console.log("USER:", user);
    deleteMeals(user, day);
  };

  return (
    <div className="panel" id="day-wrapper">
      <div className="day-name">
        {props.day}
      </div>

      <div className="meals">
        <div className="lunch">
          {props.meal}
          {/*  <button className="">Delete Meal</button>*/}
        </div>
      </div>

      <img className="meal-img" alt="Image of meal" src={props.image} />
      <button onClick={handleClick}>Update Meals</button>
      <button>Delete Meals</button>
    </div>
  );
};

export default Day;
