var express = require('express');
var fs = require('fs');
var router = express.Router();
var request = require("superagent");

router.get('/', async (req, res) => {
  const result = await request
    .get("http://localhost:3000/back");
    res.send(result.body);
});

module.exports = router;
