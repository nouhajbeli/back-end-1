const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  name: {
    type: String
  },
  course: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "course"
  }],
  student: [
    {
      sid: mongoose.Schema.Types.ObjectId,
      ref: "student"
    }
  ]
});

const classModel = mongoose.model("class", classsSchema);

module.exports = classModel;
