var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// our db models
var Pr = require("../models/pr.js");
var Course = require("../models/course.js");

/**
 * GET '/'
 * Default home route. Just relays a success message back.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/', function(req, res) {

  var jsonData = {
  	'name': 'itp-directory',
  	'api-status':'OK'
  }

  // respond with json data
  res.json(jsonData)
});

router.get('/add-person', function(req,res){

  res.render('add.html')

})

router.get('/directory', function(req,res){

  res.render('directory.html')

})


router.post('/api/create', function(req,res){

  console.log('!!!!!GOT HERE!!!!!!')
  console.log(req.body);

  var prObj = {
    name: req.body.name,
    itpYear: req.body.itpYear,
    interests: req.body.interests.split(','),
    link: req.body.link,
    imageUrl: req.body.imageUrl  
  }

  var pr = new Pr(prObj);

  pr.save(function(err,data){
    if(err){
      var error = {
        status: "ERROR",
        message: err
      }
      return res.json(err)
    }

    var jsonData = {
      status: "OK",
      pr: data
    }

    return res.json(jsonData);

  })

})


router.get('/api/get', function(req,res){

  Pr.find(function(err,data){

      if(err){
        var error = {
          status: "ERROR",
          message: err
        }
        return res.json(err)
      }

      var jsonData = {
        status: "OK",
        people: data
      }

      return res.json(jsonData);

  })

})

router.get('/api/delete/:id', function(req, res, next){

  var requestedId = req.param('id');

  // Mongoose method to remove, http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
  Pr.findByIdAndRemove(requestedId,function(err, data){
    if(err || data == null){
      var error = {status:'ERROR', message: 'Could not find the person to delete'};
      return res.json(error);
    }

    // otherwise, respond back with success
    var jsonData = {
      status: 'OK',
      message: 'Successfully deleted id ' + requestedId
    }

    res.json(jsonData);

  })

})





module.exports = router;







