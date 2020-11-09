var express = require('express');
var multer = require('multer');
var router = express.Router();

const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename (req, file, cb) {
        cb(null, file.originalname)
  }
})

const upload = multer({ storage })

router.get('/', function (req, res, next) {
  res.render('upload', { title: 'Upload' });
});

router.post('/', upload.single('imageupload'), function (req, res) {
  res.redirect('/');
});

module.exports = router;