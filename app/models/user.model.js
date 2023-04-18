const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  books: [
    {
      bookId: {
        type: Schema.Types.ObjectId,
        ref: "books",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("users", UserSchema);
