require("dotenv").config();

const connectDB = require("./db/connect");
const Olympic = require("./models/Olympic");

const olympicJson = require("./olympic.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Olympic.deleteMany();
    await Olympic.create(olympicJson);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
