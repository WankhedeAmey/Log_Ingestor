#!/usr/bin/env node

const { program } = require("commander");
const connectDB = require("../config/db");
const Log = require("../models/logModel");
const mongoose = require("mongoose");

program
    .version("1.0.0")
    .description("CLI tool for querying logs")
    .option("-l, --level <level>", "filter by log level")
    .option("-m, --message <message>", "filter by message")
    .option("-r, --resourceId <resourceId>", "filter by resourceId")
    .option("-s, --start <start>", "filter by start timestamp")
    .option("-e, --end <end>", "filter by end timestamp")
    .option("-tr, --traceId <traceId>", "filter by traceId")
    .option("-si, --spanId <spanId>", "filter by spanId")
    .option("-c, --commit <commit>", "filter by commit")
    .option(
        "-p, --parentResourceId <parentResourceId>",
        "filter by metadata.parentResourceId"
    );

program.parse(process.argv);

const options = program.opts();

const buildQuery = (options) => {
    const query = {};
    if (options.level) query.level = options.level;
    if (options.message) query.message = new RegExp(options.message, "i"); // Case-insensitive regex search
    if (options.resourceId) query.resourceId = options.resourceId;
    if (options.start || options.end) {
        query.timestamp = {};
        if (options.start) query.timestamp.$gte = new Date(options.start);
        if (options.end) query.timestamp.$lte = new Date(options.end);
    }
    if (options.traceId) query.traceId = options.traceId;
    if (options.spanId) query.spanId = options.spanId;
    if (options.commit) query.commit = options.commit;
    if (options.parentResourceId)
        query["metadata.parentResourceId"] = options.parentResourceId;
    return query;
};

const queryLogs = async () => {
    await connectDB();

    const query = buildQuery(options);
    // console.log("Query:", query);

    try {
        const logs = await Log.find(query);
        console.log("Logs Found:", logs);
    } catch (error) {
        console.error("Error querying logs:", error);
    } finally {
        mongoose.connection.close();
    }
};

queryLogs();