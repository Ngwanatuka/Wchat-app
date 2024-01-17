const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  imageUrl: {
    type: String, // image link on cloud
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;
