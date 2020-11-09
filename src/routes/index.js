var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', (req, res) => {
  fs.readdir("public/uploads", (err, files) => {
    res.send(Object.values(files));
  });
});

module.exports = router;
