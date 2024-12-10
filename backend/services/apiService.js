const axios = require('axios');
const config = require('../config/config');

exports.fetchMarketData = async () => {
  const response = await axios.get(`${config.huobiBaseUrl}/market/history/kline?symbol=evmosusdt&period=1hour`);
  return response.data;
};
