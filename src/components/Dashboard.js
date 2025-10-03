import { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

const wheelData = [
  { option: "🎁 Airdrop" },
  { option: "🔥 Burn" }
];

export default function Dashboard() {
  const [tweets, setTweets] = useState([]);
  const [log, setLog] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  useEffect(() => {
    setTweets([
      { id: 1, text: "CZ: BUILD strong 💪", type: "tweet", multiplier: "1x" },
      { id: 2, text: "CZ: HODL forever 🔒", type: "reply", multiplier: "0.5x" }
    ]);
  }, []);

  const spinWheel = () => {
    const rand = Math.floor(Math.random() * wheelData.length);
    setPrizeNumber(rand);
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setLog(prev => [...prev, { reward: wheelData[rand].option, time: new Date().toLocaleTimeString() }]);
    }, 4000);
  };

  return (
    <div className="dashboard" style={{ padding: "2rem" }}>
      <h2>🦖 CZILLA Dashboard</h2>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginTop: "2rem" }}>
        
        {/* Tweets */}
        <div style={{ width: "30%", background: "#111", padding: "1rem", borderRadius: "10px" }}>
          <h3>📢 Tweets</h3>
          {tweets.map(t => (
            <div key={t.id} style={{ margin: "1rem 0", padding: "0.5rem", borderBottom: "1px solid #333" }}>
              <p>{t.text}</p>
              <small>{t.type} → Multiplier {t.multiplier}</small>
            </div>
          ))}
        </div>

        {/* Ruota */}
        <div style={{ width: "35%", textAlign: "center" }}>
          <h3>🎡 Wheel of Roar</h3>
          <Wheel
            mustStartSpinning={spinning}
            prizeNumber={prizeNumber}
            data={wheelData}
            backgroundColors={["#FFD700", "#000"]}
            textColors={["#000"]}
          />
          <button onClick={spinWheel}>Spin</button>
        </div>

        {/* Log */}
        <div style={{ width: "30%", background: "#111", padding: "1rem", borderRadius: "10px" }}>
          <h3>📜 Rewards Log</h3>
          {log.map((l, idx) => (
            <div key={idx} style={{ margin: "0.5rem 0" }}>
              <p>{l.reward}</p>
              <small>{l.time}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
