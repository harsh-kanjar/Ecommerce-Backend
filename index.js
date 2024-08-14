const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
// --------------------------DATABASE CONNECTION------------------------
connectToMongo();
// ---------------------------------------------------------------------


// -------------------------EXPRESS SERVER------------------------------
const app = express();
const port = 5000;
app.use(cors())

// -------------NECESSARY TO USE req.body (Middleware)------
app.use(express.json())

// --------------------------------------------

//---------------AVAILABLE ROUTES--------------
app.use('/api/v1/auth', require('./routes/auth.js'));
app.use('/api/v1/product', require('./routes/products.js'));
// -------------------------------------------------

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})