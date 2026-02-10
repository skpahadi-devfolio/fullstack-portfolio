import mongoose from "mongoose";


let conn = async() => {
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Mongodb is Connected");
} catch (error) {
  console.log("Connection failed", error);
}
}

export default conn;