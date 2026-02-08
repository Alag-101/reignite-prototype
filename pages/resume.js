export default function Resume() {
  let state = {}

  if (typeof window !== "undefined") {
    state = JSON.parse(localStorage.getItem("reignite_state")) || {}
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h2>Reignite Dashboard</h2>

      <p><strong>Goal:</strong> {state.goal}</p>
      <p><strong>Reasoning:</strong> {state.reasoning}</p>
      <p><strong>Last Action:</strong> {state.lastAction}</p>
      <p><strong>Recommended Next Step:</strong> {state.nextStep}</p>

      <p>Status: Recovered · Ready</p>

      <a href="/session">
        <button>Resume Work</button>
      </a>
    </div>
  )
}
