const mongoose = require("mongoose");
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 15,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 50,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.matchPasword=async function(enteredPassword){
//     return await bcrypt .compare(enteredPassword,this.password);
// } 

module.exports = mongoose.model("User", userSchema);
