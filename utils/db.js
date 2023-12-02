const mongoose = require("mongoose");
// so we have to figure out if the mongoose is connected or not for that we make a async function
const connectToDB = async () => {
    // because of the connect method we use try catch
  try {
    // and if connection[0].ready state was true it return false
    // pay attention for connectionS name
    if (mongoose.connections[0].readyState) {
      return false;
    }

    // if its not we go and connect to mongodb
    await mongoose.connect("mongodb://127.0.0.1:27017/next-db");
    console.log("Connected! baby");
  } catch (err) {
    console.log("error is ===>", err);
  }
};


export default connectToDB;
