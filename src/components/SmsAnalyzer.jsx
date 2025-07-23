import React, { useState } from "react";
import logo from "../assets/logo.png";

const SmsAnalyzer = () => {
  const [sms, setSms] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      const response = await fetch('https://sms-analyzer-devayani.free.beeceptor.com/sms-analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sms })
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("API error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', backgroundColor: '#1e293b', color: 'white', borderRadius: '12px' }}>
      <img src={logo} alt="Logo" style={{ width: '60px', marginBottom: '10px' }} />
      <h1 style={{ color: '#22d3ee' }}>Trikshana Tech</h1>
      <h2>SMS ANALYSIS MODEL</h2>

      <div style={{ marginTop: '20px' }}>
        <h3>Description:</h3>
        <p>
          The Trikshana Tech SMS Model is designed to intelligently classify and analyze incoming SMS data.
          It helps businesses filter and understand messages by identifying <b>category</b>, <b>type</b>, and <b>mode</b>.
        </p>

        <h3 style={{ color: 'orange' }}>⚠️ Note:</h3>
        <p>This model is currently under development. Results may not be accurate.</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <textarea
          rows="5"
          placeholder="Type your SMS here..."
          value={sms}
          onChange={(e) => setSms(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
        ></textarea>
        <button
          onClick={handleAnalyze}
          style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px' }}
        >
          🔍 Analyze SMS
        </button>
      </div>

      {result && (
        <div style={{ marginTop: '20px', backgroundColor: '#334155', padding: '15px', borderRadius: '8px' }}>
          <h4>🔍 Analysis Result:</h4>
          <p><b>Category:</b> {result.category}</p>
          <p><b>Type:</b> {result.type}</p>
          <p><b>Mode:</b> {result.mode}</p>
        </div>
      )}
    </div>
  );
};

export default SmsAnalyzer;