// var models = require('../models');
var db = require('../db');

module.exports = {
  get: function (req, res) {
    db.users.findAll().then(function(results) {
      res.json(results);
    });
  },
  post: function (req, res) {
    db.users.findOrCreate({where: {username: req.body.username}})
      .spread(function(user, created) {
        res.json(created);
      });
  }
};
