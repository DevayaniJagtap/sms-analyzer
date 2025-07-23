import React from 'react';
import ReactDOM from 'react-dom/client';
import SmsAnalyzer from './components/SmsAnalyzer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SmsAnalyzer />
  </React.StrictMode>
);