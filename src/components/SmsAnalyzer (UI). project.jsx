import React, { useState } from "react";

const SmsAnalyzer = () => {
  const [sms, setSms] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    const lowerSMS = sms.toLowerCase();
    let category = "General";
    let type = "Personal";
    let mode = "SMS";

    if (lowerSMS.includes("otp") || lowerSMS.includes("verification")) {
      category = "OTP";
      type = "System";
    } else if (lowerSMS.includes("account") || lowerSMS.includes("amount")) {
      category = "Banking";
      type = "System";
    } else if (lowerSMS.includes("sale") || lowerSMS.includes("offer") || lowerSMS.includes("discount")) {
      category = "Promotion";
      type = "Marketing";
    }

    if (lowerSMS.includes("whatsapp")) {
      mode = "WhatsApp";
    }

    setResult({ category, type, mode });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-2xl text-white mt-10">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="w-16" />
        <div>
          <h1 className="text-4xl font-bold text-cyan-400">Trikshana Tech</h1>
          <h2 className="text-xl text-gray-300">SMS ANALYSIS MODEL</h2>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-white mb-3">Try It Out!</h3>
        <label htmlFor="sms" className="text-white font-medium block mb-2">
          Enter your SMS content below 👇
        </label>
        <textarea
          id="sms"
          value={sms}
          onChange={(e) => setSms(e.target.value)}
          placeholder="Type your SMS here..."
          className="w-full h-40 p-4 text-white bg-gray-800/60 border border-slate-700 rounded-xl resize-none focus:outline-none focus:border-sky-400"
        ></textarea>
        <button
          onClick={handleAnalyze}
          className="mt-5 px-6 py-3 text-white bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 hover:scale-105 transition-transform shadow-md"
        >
          🔍 Analyze SMS
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-gray-800/50 p-5 rounded-xl border border-slate-600">
          <h4 className="text-lg font-semibold text-cyan-300 mb-2">🔍 Analysis Result:</h4>
          <p><b className="text-white">Category:</b> {result.category}</p>
          <p><b className="text-white">Type:</b> {result.type}</p>
          <p><b className="text-white">Mode:</b> {result.mode}</p>
        </div>
      )}

      <div className="text-center text-sm text-slate-400 mt-10">
        &copy; 2025 Trikshana Tech. All rights reserved.
      </div>
    </div>
  );
};

export default SmsAnalyzer;
