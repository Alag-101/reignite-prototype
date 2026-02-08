export default function Session() {
  function interrupt() {
    const echoState = {
      goal: "Evaluate AI-generated strategy",
      reasoning: "Assess feasibility before refining constraints",
      lastAction: "Reviewed AI recommendations",
      nextStep: "Modify constraints and continue evaluation"
    }

    localStorage.setItem("reignite_state", JSON.stringify(echoState))
    window.location.href = "/resume"
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h2>Active Work Session</h2>

      <p>Step 2 of 5</p>
      <p>Evaluating AI-generated output.</p>

      <button onClick={interrupt}>
        Simulate Interruption
      </button>
    </div>
  )
}
