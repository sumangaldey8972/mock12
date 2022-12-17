const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sd:sd@cluster0.hqqwx0s.mongodb.net/mock12"
  );
};

module.exports = connect;
