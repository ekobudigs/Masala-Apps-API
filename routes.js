const SummarizeController = require('./app');
const router = require('express').Router();

router.post('/summarize', SummarizeController.addSummarize);

module.exports = router;