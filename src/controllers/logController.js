const Log = require("../models/logModel");

const createLog = async (req, res) => {
    try {
        const logBody = req.body;
        console.log(logBody, typeof logBody)
        if (!logBody) {
            return res
                .status(400)
                .json({ error: "Log not available in the request!" });
        }
        const log = new Log({...logBody});
        await log.save();
        console.log(log)
        return res.status(200).json({ "new log created: ": log });
    } catch (err) {
        return res.status(400).send(err);
    }
};

const getLogs = async (req, res) => {
    let logs = [];
    try {
        logs = await Log.find();

        res.status(200).json({ Logs: logs });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    createLog,
    getLogs,
};
