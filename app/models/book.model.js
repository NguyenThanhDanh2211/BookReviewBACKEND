const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  image: [
    {
      type: String,
      required: true,
    },
  ],
  cmt: [
    {
      username: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

module.exports = mongoose.model("books", bookSchema);
