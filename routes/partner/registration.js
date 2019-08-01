const express = require('express');
const router = express.Router();
const partnerRegController=require("../../controllers/partner/profileController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/registration",partnerRegController.registration)

module.exports = router;
