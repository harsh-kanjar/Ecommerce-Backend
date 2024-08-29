const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
// --------------------------DATABASE CONNECTION------------------------
connectToMongo();
// ---------------------------------------------------------------------

// -------------------------EXPRESS SERVER------------------------------
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// -------------NECESSARY TO USE req.body (Middleware)------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/example', express.static(path.join(__dirname, 'example')));
// --------------------------------------------
app.get("/", (req, res) => res.send("Express on Vercel"));
//---------------AVAILABLE ROUTES--------------
app.use('/api/v1/auth', require('./routes/auth.js'));
app.use('/api/v1/product', require('./routes/products.js'));
app.use('/api/v1/gallery', require('./routes/gallery.js'));
// ------------------------------------------------

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
});
