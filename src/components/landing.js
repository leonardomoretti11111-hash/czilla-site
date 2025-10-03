export default function Landing({ onEnter }) {
  return (
    <div className="landing" style={{ textAlign: "center", padding: "4rem" }}>
      <h1>🦖 CZILLA</h1>
      <p>When CZ tweets, CZILLA roars.</p>
      <p>Burns, airdrops, and chaos unleashed on-chain.</p>
      <button onClick={onEnter}>Enter App</button>
    </div>
  );
}
