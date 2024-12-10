const apiService = require('./apiService');
const indicators = require('../models/indicators');

exports.getTradeSignals = async () => {
  const data = await apiService.fetchMarketData();
  const signals = indicators.calculateIndicators(data);
  return signals;
};
