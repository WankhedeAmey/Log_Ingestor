const mongoose = require("mongoose")

const connectionURL = "mongodb+srv://wankhedeameyb:admin123@cluster0.kbirj.mongodb.net/logIngestorApp?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(connectionURL)
        console.log("Connected to MongoDB")
    } catch(error) {
        console.error("Connection Error to MongoDB: ", error);
        process.exit(1)
    }
}

module.exports = connectDB