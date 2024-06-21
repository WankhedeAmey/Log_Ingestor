const express = require("express");
const router = express.Router();
const { createLog, getLogs } = require("../controllers/logController");

router.get("/logs", getLogs);

router.post("/logs", createLog);

module.exports = router;
