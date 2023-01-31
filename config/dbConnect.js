const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log("Database Connection Successful");
  } catch (error) {
    console.log("Database Connection Error");
  }
};

module.exports = dbConnect;
