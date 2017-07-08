import React from "react";

// import function which uses axios to send days
import { sendDays } from "../utils/helpers";
const helpers = require("./../utils/helpers");

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.toggleCheck(this.props.label);
    const checked = this.state.isChecked;
    if (!checked) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
    }
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleChange}
          />
          {this.props.label}
        </label>
      </div>
    );
  }
}

class DaySelection extends React.Component {
  componentWillMount() {
    this.selectedCheckboxes = [];
  }

  constructor() {
    super();
    this.state = {
      warning: ''
   }

    const selectedCheckboxes = [];
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  toggleCheckbox(label) {
    if (this.selectedCheckboxes.includes(label)) {
      let index = this.selectedCheckboxes.indexOf(label);
      this.selectedCheckboxes.splice(index, 1);
    } else {
      this.selectedCheckboxes.push(label);
    }
  }

  componentDidMount() {
    console.log("-------------");
    console.log("user in daysselection");
    console.log(this.props.user);

    console.log("-------------");
  }

  createCheckbox(label) {
    return (
      <Checkbox label={label} key={label} toggleCheck={this.toggleCheckbox} />
    );
  }

  createCheckboxes() {
    return week.map(day => {
      return this.createCheckbox(day);
    });
  }

  handleSubmitForm(event) {
    event.preventDefault();
    // let user = this.props.user_id;

    let daysSelected = [];

    // make selected days into objects
    this.selectedCheckboxes.forEach(day => daysSelected.push({ day: day }));
    console.log("Days Selected:", daysSelected);

    //  send days using axios calls

    if(daysSelected[0]){
    helpers.sendDays(this.props.user.data.userID, daysSelected).then(
      function(data) {
        console.log(data);
        // this.props.setUserMeals(data);
        this.props.setUser(data);
      }.bind(this)
    );
    this.props.thisHasMeals("true");
  } else {
     this.setState({
       warning: "Please select days to continue"
    })
  }
}

  render() {
    return (
      <div className="day-selection">
        <h1 className="primary-text">On What Days Do You Want Meals?</h1>
        <h3>Check the boxes below</h3>
        <h3>{this.state.warning}</h3>
        <form onSubmit={this.handleSubmitForm}>
          {this.createCheckboxes()}
          <input className="days-btn" value="Get Meal Plan" type="submit" />
        </form>
      </div>
    );
  }
}

export default DaySelection;
