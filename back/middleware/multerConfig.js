const multer = require('multer');
const {storage} = require('../cloudinary/index')
const upload = multer({storage});

module.exports = upload.array("images");

module.exports = upload.array("profileImg")

//Local

// const MIME_TYPES = {
//     'image/jpg': 'jpg',
//     'image/jpeg': 'jpg',
//     'image/png': 'png'
// };  

// let storage = multer.diskStorage({
//     destination: function(req,file,callback){
//         callback(null,'image')
//     },
//     filename:function(req,file,callback){
//         //const name = file.fieldname.split(' ').join('_');
//         //const extension = MIME_TYPES[file.mimetype];
//         //callback(null, name + Date.now() + '.' + extension);
//         callback(null,file.fieldname+"_"+Date.now()+"_"+file.originalname)
//         console.log(file)
//     },
// });