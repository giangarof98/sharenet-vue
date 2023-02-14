const multer = require('multer');
const {storage} = require('../cloudinary/index')
const upload = multer({storage});

module.exports.multerPost = upload.array("images");

//module.exports.multerProfile = upload.array("profileImg")
