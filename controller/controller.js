// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var unirest = require("unirest");
const yelp = require("yelp-fusion");
const _ = require("lodash");
const clientId = "pbRwg0shy1Zy_gUqWLpiYQ";
const clientSecret =
  "499HGjfOQVwIUWD9ys11menFEA8Ytu77zNrjRCVJ0qYHUQTdpfqdDKNaR7QDYNPy";
const cors = require("cors");
var unirest = require("unirest");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var session = require("express-session");
var CurrentUser = {};

// // Require History Schema
var userMeals = require("../models/User.js");

module.exports = function(app) {
  app.post("/user/days", (req, res) => {
    console.log("got here");

    var userID = req.body.googleId;

    console.log(userID);

    var days = req.body.days; //and array of objects

    userMeals.find({ userID: userID }).exec(function(err, results) {
      var mealProperty = results[0].meals;

      for (i = 0; i < days.length; i++) {
        days[i].meal = mealProperty[i];
        days[i].mealInstructions = [];
        days[i].ingredientImages = [];
      }

      console.log(days[0].mealInstructions);
      console.log(days[0].ingredientImages);

      for (j = 0; j < days.length; j++) {
        console.log("working in first loop");

        for (t = 0; t < days[j].meal.extendedIngredients.length; t++) {
          console.log("working in second loop");

          days[j].mealInstructions.push(
            days[j].meal.extendedIngredients[t].originalString
          );
          days[j].ingredientImages.push(
            days[j].meal.extendedIngredients[t].image
          );
        }
      }

      userMeals
        .update({ userID: userID }, { $set: { mealsForTheWeek: days } })
        .then(function(doc) {
          console.log(doc);
        });

      // Initiate shuffle
      var shuffledMeals = _.shuffle(mealProperty);

      userMeals
        .update({ userID: userID }, { $set: { meals: shuffledMeals } })
        .then(function(doc) {
          console.log("about to send days");

          //send the entire object
          userMeals.find({ userID: userID }).exec(function(err, results) {
            res.send(results);
          });
        });
    });
  });

  // routes for removing meals

  app.post("/delete/", function(req, res) {

    console.log("got to the delete command");
    
    var userID = req.body.user;

    console.log(userID);

    var dayChange = req.body.day;

    console.log(dayChange);

    userMeals.find({ userID: userID }).exec(function(err, results) {
      console.log("switching meals");
      var mealProperty = results[0].meals;
      console.log(mealProperty);
      var randomNumber = Math.floor(Math.random() * 50);
      console.log(mealProperty[randomNumber]);
      userMeals
        .findOne(
          { dayChange },
          { $set: { meal: mealProperty[randomNumber] } },
          { new: true }
        )
        .then(function(doc) {
          userMeals.find({ userID: userID }).exec(function(err, results) {
            res.send(results);
          });
        });
    });
  });

  // routes for updating user information
  app.put("/api/:id/user_info", (req, res) => {
    let user_id = req.params.id;
    let infoToUpdate = req.body;

    res.send(`${user_id} has just updated some user information!`);
    console.log(`${user_id} has just updated some user information!`);
  });

  //receiving things from form

  app.post("/", function(req, res) {
    var userID = req.body.restrictions.user;

    var userName = req.body.restrictions.login;

    var userEmail = req.body.restrictions.email;

    var password = req.body.restrictions.password;

    var preferences = req.body.restrictions.preference;

    var restriction = req.body.restrictions.restriction;

    var modifiedRestrictions = restriction.join("+");

    // console.log(modifiedRestrictions);

    // end of gathering info, commencing api query

    // These code snippets use an open-source library. http://unirest.io/nodejs
    var string1 =
      "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=50&tags=";
    var string2 = preferences.toLowerCase();
    console.log(string2);
    var string3 = string1.concat(string2 + "+");
    var string4 = string3.concat(modifiedRestrictions);
    console.log(string4);
    unirest
      .get(string4)
      .header(
        "X-Mashape-Key",
        "RdXEu67LNZmshdxsrbAGe3gh9fAKp1VdlhxjsnnRI93ldi2bTU"
      )
      .header("Accept", "application/json")
      .end(function(result) {
        var mealPlanArray = [];

        for (i = 0; i < 7; i++) {
          mealPlanArray.push(result.body.recipes[i]);
        }

        userMeals.create(
          {
            userName: userName,
            userID: userID,
            userEmail: userEmail,
            password: password,
            meals: mealPlanArray,
            preferences: preferences,
            restrictions: restriction,
            days: [],
            date: Date.now()
          },
          function(err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log("saved your meals");
              res.send(data);
            }
          }
        );
      });
  });

  //beginning of yelp code

  app.get("/yelp", function(req, res) {
    console.log("in/yelpget");
    // console.log("-------------------------")
    // console.log("this is in get yelp" + req.body);
    // console.log("-------------------------")
    // console.log("Start of the yelp response");
    console.log(req.query.zipcode);
    console.log(req.query.type);
    // Yelp response

    const searchRequest = {
      term: req.query.type,
      location: req.query.zipcode
    };

    yelp
      .accessToken(clientId, clientSecret)
      .then(response => {
        const client = yelp.client(response.jsonBody.access_token);

        client.search(searchRequest).then(response => {
          const firstResult = response.jsonBody.businesses[0];
          const prettyJson = JSON.stringify(firstResult, null, 4);
          // console.log(prettyJson);
          res.send(firstResult);
          // console.log("End of the Yelp Response");
        });
      })
      .catch(e => {
        console.log(e);
      });
  });
};
