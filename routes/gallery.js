const path = require('path')
const express = require('express')
const router = express.Router();
const multer  = require('multer')

const upload = multer({ dest: 'uploads/' })

router.post('/upload', upload.single('featuredImage'),(req,res) => {
    console.log(req.body)
    console.log(req.file)
})