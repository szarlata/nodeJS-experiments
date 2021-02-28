const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// the name of this module is important - it will be pluralized and the database will be search for this name 
const blog = mongoose.model('Blog', blogSchema);
module.exports = blog;