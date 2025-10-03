export default function Footer({ onNav }) {
  return (
    <footer>
      <nav>
        <button onClick={() => onNav("landing")}>Home</button>
        <button onClick={() => onNav("dashboard")}>Dashboard</button>
        <button onClick={() => onNav("appsoon")}>App</button>
      </nav>
      <p>Powered by CZ’s tweet 🦖</p>
      <div className="links">
        <a href="https://t.me/czilla" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://twitter.com/czilla" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}
