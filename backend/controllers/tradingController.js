const tradingService = require('../services/tradingService');

exports.getTradeSignals = async (req, res) => {
  try {
    const signals = await tradingService.getTradeSignals();
    res.json(signals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
