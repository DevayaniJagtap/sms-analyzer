import React, { useState } from "react";
import logo from "./logo.png";


const SmsAnalyzer = () => {
  const [sms, setSms] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    // Basic keyword analysis
    let category = "General";
    let type = "Personal";
    let mode = "SMS";

    if (sms.toLowerCase().includes("otp")) category = "OTP";
    if (sms.toLowerCase().includes("account") || sms.toLowerCase().includes("bank")) category = "Banking";
    if (sms.toLowerCase().includes("offer") || sms.toLowerCase().includes("sale")) category = "Promotion";

    if (sms.toLowerCase().includes("your") || sms.toLowerCase().includes("system")) type = "System";

    if (sms.toLowerCase().includes("whatsapp")) mode = "WhatsApp";

    setResult({ category, type, mode });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 shadow-xl text-white font-sans mt-10">
      <div className="flex items-center gap-4 mb-5">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">Trikshana Tech</h1>
          <p className="text-sm text-gray-300">SMS ANALYSIS MODEL</p>
        </div>
      </div>

      <div className="text-justify text-gray-200 mb-6">
        <h3 className="font-semibold text-white mb-1">Description:</h3>
        <p>
          The Trikshana Tech SMS Model is designed to intelligently classify and analyze incoming SMS data.
          Using AI-driven categorization, it helps businesses filter, organize, and understand messages by identifying
          key information such as <b className="text-white">category</b>, <b className="text-white">type</b>, and <b className="text-white">mode</b>.
          This enables smarter decision-making and streamlined operations.
        </p>

        <h3 className="text-yellow-400 font-semibold mt-4">⚠️ Note:</h3>
        <p className="text-gray-300">
          This model is currently under development, so the results may not be fully accurate.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl text-white font-semibold mb-2">Try It Out!</h3>
        <label htmlFor="sms" className="text-sm text-gray-300">Enter your SMS content below 👇</label>
        <textarea
          id="sms"
          value={sms}
          onChange={(e) => setSms(e.target.value)}
          placeholder="Type your SMS here..."
          className="w-full h-32 p-4 mt-2 text-white bg-gray-800/70 border border-slate-700 rounded-xl resize-none focus:outline-none focus:border-sky-400"
        ></textarea>

        <button
          onClick={handleAnalyze}
          className="mt-4 px-5 py-2 text-white bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 hover:scale-105 transition-transform shadow-md"
        >
          🔍 Analyze SMS
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-gray-800/50 border border-gray-600 rounded-xl p-4">
          <h4 className="text-cyan-400 font-semibold mb-2">🔍 Analysis Result:</h4>
          <p><b>Category:</b> {result.category}</p>
          <p><b>Type:</b> {result.type}</p>
          <p><b>Mode:</b> {result.mode}</p>
        </div>
      )}

      <footer className="text-center text-sm text-slate-400 mt-10">
        © 2025 Trikshana Tech. All rights reserved.
      </footer>
    </div>
  );
};

export default SmsAnalyzer;
