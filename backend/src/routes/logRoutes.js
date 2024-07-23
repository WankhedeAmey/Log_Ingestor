const express = require("express");
const router = express.Router();
const {
    createLog,
    getLogs,
    filterLogs,
} = require("../controllers/logController");

router.get("/logs", getLogs);

router.post("/logs", createLog);

router.post("/logs/filterLogs", filterLogs);

module.exports = router;
