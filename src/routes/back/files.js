var express = require('express');
var multer = require('multer');
var fs = require('fs');
var router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename(req, file, cb) {
    cb(null, `${Math.random()}_${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage })

router.post('/', upload.single('imageupload'), (req, res) => {
  res.send(req.file.filename);  
});

router.get('/', (req, res) => {
  fs.readdir("public/uploads", (err, files) => {
    res.send(Object.values(files));
  });
});

router.delete('/', (req, res) => {
  try {
    fs.unlinkSync(`public/uploads/${req.query.filename}`);
    res.send("ok");
  } catch (e) {    
    if (e.code === 'ENOENT') {
      res.statusCode = 404;
    } else {
      res.statusCode = 500;
    }

    res.send("error");
  }
});

module.exports = router;