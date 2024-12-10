import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TradeSignal from '../components/TradeSignal';

const Dashboard = () => {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const fetchSignals = async () => {
      const response = await axios.get('/api/trade-signals');
      setSignals(response.data);
    };
    fetchSignals();
  }, []);

  return (
    <div className="Dashboard">
      <h1>Trade Signals</h1>
      {signals.map((signal, index) => (
        <TradeSignal key={index} signal={signal} />
      ))}
    </div>
  );
};

export default Dashboard;
