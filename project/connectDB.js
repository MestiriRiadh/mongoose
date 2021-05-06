const mongoose = require("mongoose");

const connectDB = () => {
  let db_url =
    "mongodb+srv://riadh:riadh123@cluster0.gpdbi.mongodb.net/riadh?retryWrites=true&w=majority";
  mongoose.connect(
    db_url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        throw err;
      }
      console.log("Database is Connected");
    }
  );
};
module.exports = connectDB;
