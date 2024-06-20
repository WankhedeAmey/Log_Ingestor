const mongoose = require("mongoose");

// {
// 	"level": "error",
// 	"message": "Failed to connect to DB",
//  "resourceId": "server-1234",
// 	"timestamp": "2023-09-15T08:00:00Z",
// 	"traceId": "abc-xyz-123",
//  "spanId": "span-456",
//  "commit": "5e5342f",
//  "metadata": {
//      "parentResourceId": "server-0987"
//   }
// }

//create a log schema
const logSchema = new mongoose.Schema({
    level: String,
    message: String,
    resourceId: String,
    timestamp: String,
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
        parentResourceId: String,
    },
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
