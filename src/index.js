const express = require("express");
const bodyparser = require("body-parser");
const logRoutes = require("./routes/logRoutes");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

//connect to db
connectDB();

//use middleware and add routes
app.use(bodyparser.json());
app.use("/api", logRoutes); //add routes on the top of "/api"

//start server at 3000
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;
