const path = require('path')
const express = require('express')
const router = express.Router();
const multer  = require('multer')
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' })

// Define the path to the 'images' directory inside 'public/example/' of the frontend project
const uploadDirectory = path.join(__dirname, '../Ecommerce-web-MERN-Project/public/example/images');

// Ensure that the 'images' directory exists
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory); // Save files to the defined directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});


// Handle POST request to upload files
app.post('/upload', upload.fields([
    { name: 'featuredImage', maxCount: 1 },
    { name: 'subImage1', maxCount: 1 },
    { name: 'subImage2', maxCount: 1 },
    { name: 'subImage3', maxCount: 1 }
]), (req, res) => {
    // Check for files in req.files
    const uploadedFiles = req.files;
    const filePaths = {};

    Object.keys(uploadedFiles).forEach(key => {
        filePaths[`${key}Path`] = `/example/images/${uploadedFiles[key][0].filename}`;
    });

    if (Object.keys(filePaths).length === 0) {
        return res.status(400).send('No files uploaded.');
    }

    // Log file details
    console.log('Files uploaded:', uploadedFiles);

    // Respond with paths of the uploaded files
    res.status(200).json({ message: 'Files uploaded successfully!', filePaths });
});

// Serve the uploaded files
app.use('/example/images', express.static(uploadDirectory));