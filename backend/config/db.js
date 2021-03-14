require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
	try{
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("MongoDB is CONNECTED")
	}catch (error){
		console.error("MongoDB is NOT connected!")
		process.exit(1);
	}
}

module.exports = connectDB;
