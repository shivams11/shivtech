const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(`mongodb+srv://shivam:shivamsaner@cluster0.yzfu4lx.mongodb.net/shivtech`);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
