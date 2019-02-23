let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// define the User Model
let userModel = require("../models/m_user");
let User = userModel.User; // alias


module.exports.displayHomePage = (req, res, next) => {
    res.render("index", {
        title: "Home"
    });
};

module.exports.displayUserPage = (req, res, next) => {
    res.render("index", {
        title: "Clients",
      
    });
};