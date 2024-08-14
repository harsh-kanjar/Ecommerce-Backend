const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
  name: {
    type: String,
    require: true
  },
  description: String,
  richDescription: String,
  image: {
    type: String,
    require: true,
  },
  images: [{
    type: String
  }],
  brand: String,
  price: Number,
  category: String,
  countOfStock: {
    type: String,
    required: true
  },
  rating: Number,
  isFeatured: Number,
  category:{
    type:String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

// CREATING MODELS USING SCHEMA 
module.exports = mongoose.model('Product', ProductSchema);