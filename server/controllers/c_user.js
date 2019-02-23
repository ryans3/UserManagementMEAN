let express = require('express');
let router = express.Router();

// create a reference to the db schema
let userModel = require('../models/m_user');

module.exports.displayUserList = (req, res, next) =>{
    userModel.find((err, userList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(userList);

            res.render('v_user/index', {
                title: 'Client List',
                userList: userList,
           
            });
            
        }
    });
}
module.exports.displayAddPage = (req, res, next) => {
    res.render('v_user/add', {
        title: 'Add New Client',
        
    });
}

module.exports.processAddPage = (req, res, next) => {

    let newUser = userModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });

    userModel.create(newUser, (err, userModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/user-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    userModel.findById(id, (err, userObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('v_user/edit', {
                title: 'Edit User',
                user: userObject,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });
}



module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedUser = userModel({
        "_id": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });

    userModel.update({_id: id}, updatedUser, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the user list
            res.redirect('/user-list');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    userModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/user-list');
        }
    });
}

