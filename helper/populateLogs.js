const mongoose = require("mongoose");
const faker = require("faker");
const Log = require("../src/models/logModel");
const connectDB = require("../src/config/db");

//generate logs
const generateLogs = (numLogs) => {
    const logs = [];

    for (let i = 0; i < numLogs; i++) {
        const log = new Log({
            level: faker.random.arrayElement([
                "info",
                "warning",
                "error",
                "debug",
            ]),
            message: faker.lorem.sentence(),
            resourceId: `resource-${faker.datatype.uuid()}`,
            timestamp: faker.date.between('2023-01-01T00:00:00Z', '2023-12-31T23:59:59Z'),
            traceId: faker.datatype.uuid(),
            spanId: `span-${faker.datatype.uuid()}`,
            commit: faker.git.commitSha(),
            metadata: {
                parentResourceId: `resource-${faker.datatype.uuid()}`,
            },
        });

        logs.push(log);
    }

    return logs;
};

//push logs to database
const populateDB = async (numLogs) => {
    await connectDB();

    const logs = generateLogs(numLogs);

    try {
        await Log.insertMany(logs);
        console.log(`${numLogs} logs added to the database.`);
    } catch (error) {
        console.error("Error inserting logs! ", error);
    } finally {
        mongoose.connection.close();
    }
};

populateDB(111);
