const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const tradingRoutes = require('./routes/tradingRoutes');

app.use(express.json());
app.use('/api', tradingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
