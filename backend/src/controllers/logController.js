const Log = require("../models/logModel");

const createLog = async (req, res) => {
    try {
        const logBody = req.body;
        if (!logBody) {
            return res
                .status(400)
                .json({ error: "Log not available in the request!" });
        }
        const log = new Log({ ...logBody });
        await log.save();
        return res.status(200).json({ "new log created: ": log });
    } catch (err) {
        return res.status(400).send(err);
    }
};

const getLogs = async (req, res) => {
    let logs = [];
    try {
        logs = await Log.find();

        res.status(200).json(logs);
    } catch (err) {
        res.status(400).send(err);
    }
};

const filterLogs = async (req, res) => {
    let filteredLogs = [];
    const query = req.body;
    try {
        filteredLogs = await Log.find(query);

        // console.log("filteredLogs: ", filteredLogs);

        res.status(200).json(filteredLogs);
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    createLog,
    getLogs,
    filterLogs
};
