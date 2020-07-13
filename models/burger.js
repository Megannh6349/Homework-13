// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Add functions
var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;