const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  company: { type: String },
  postedAt: { type: String },
  location: { type: String },
  role: { type: String },
  level: { type: String },
  contract: { type: String },
  position: { type: String },
  language: { type: String },
});

const jobModel = new mongoose.model("job", jobSchema);
module.exports = jobModel;

// "company": "Ellette",
// 		"postedAt": "2021-03-30",
// 		"city": "Gangtok",
// 		"location": "American Samoa",
// 		"role": "Frontend",
// 		"level": "Junior",
// 		"contract": "Full Time",
// 		"position": " Backend Developer",
// 		"language": "Java"
