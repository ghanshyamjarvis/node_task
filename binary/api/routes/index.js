var express = require ('express');
var router =express.Router();
 var hotel = require('../controller/hotel.controller')

router
  .route("/")
  .get(hotel.Homepage)



module.exports = router;
