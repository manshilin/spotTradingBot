require('dotenv').config();

module.exports = {
    apiKey: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
    huobiBaseUrl: process.env.HUOBI_BASE_URL,
};
