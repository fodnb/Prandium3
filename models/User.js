var mongoose = require("mongoose");
   var uniqueValidator = require('mongoose-unique-validator');

    var Schema = mongoose.Schema;

      var MealSchema = new Schema({
        UserName: {
          type: String
        },

        userID: {
          type: String,
          // unique: true

        },
        preferences: {

        	type:String,


        },
        restrictions:{

        	type: Array,

        },
        userEmail: {
          type: String,
          // unique: true

        },
        meals: {
          type: Array
        },

        mealsForTheWeek: {
          type: Array
        },
        date: {
          type: Date
        }

      });

      // MealSchema.plugin(uniqueValidator);


    var userMeals = mongoose.model("userMeals", MealSchema);

module.exports = userMeals 