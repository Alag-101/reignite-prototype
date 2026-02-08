export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      textAlign: "center"
    }}>
      <h1>🔥 Reignite</h1>
      <p>
        Reignite is a prototype platform designed to restart momentum —
        ideas, people, and systems that need a second spark.
      </p>

      <div style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px"
      }}>
        <h2>Prototype Status</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✅ Concept validated</li>
          <li>✅ Web prototype live</li>
          <li>🚧 Features coming soon</li>
        </ul>
      </div>
    </main>
  );
}
