var axios = require("axios");
import "whatwg-fetch";

var helper = {
  //this form is sending user credentials to sign up
  postForm(login, email, password, preference, restriction, user) {
    console.log("data to send to backend from the sign-up form", arguments);
    return axios.post(
      "/",
      {
        restrictions: {
          login: login,
          email: email,
          password: password,
          preference: preference,
          restriction: restriction,
          user: user
        }
      }
      // ).then((data) => console.log('WHAT YOU GET AFTER SENDING YOUR LOGIN INFO:',data)
    );
  },

  // ===========axios call to allow user to specify days (using checkboxes)=========
  //it receives an array of objects

  sendDays(user_id, days) {
    return axios
      .post(`/user/days`, { days: days, googleId: user_id })
      .then(data => {
        console.log("sending back days:", data);
        return data;
      });
  },


  deleteMeals(user, day) {
	  return axios.post('/delete/', {user: user, day: day})
	  .then(data=> {
		  console.log('meals to delete', data);
		  return data;
	  }); 
	},
  // ****************************************YELP API CALLS BELLOW*******************************************

  // this form is sending info for yelp search ****** this might not be needed  ***************
  postYelp(zipcode, restaurantType) {
    console.log("yelp");
    return axios.post("/yelp", {
      yelp: {
        zipcode: zipcode,
        restaurantType: restaurantType
      }
    });
  },

  // this function  passes into to the get route in the server for yelp to process
  getYelp(zipcode, restaurantType) {
    return axios
      .get("/yelp", {
        params: {
          zipcode: zipcode,
          type: restaurantType
        }
      })
      .then(function(result) {
        console.log(result);
        return result;
      });
  },
  // this is used to capture information from the google api and send it to /api/user
  getGoogle() {
    return axios.get("/api/user").then(function(result) {
      console.log(result);
      return result;
    });
  },
  getLocal(user, password) {
    return axios
      .post("/localuser", { user: user, password: password })
      .then(function(result) {
        console.log(result);
        return result;
      });
  }
};

module.exports = helper;
