const express = require('express');
const router = express.Router();
const tradingController = require('../controllers/tradingController');

router.get('/trade-signals', tradingController.getTradeSignals);

module.exports = router;
