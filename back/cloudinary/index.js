const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.C_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.C_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'VNet',
        allowedFormats: ['jpeg','png','jpg']
    }
});

module.exports = {cloudinary, storage}
