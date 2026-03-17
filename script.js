function calculateBet() {
  const teamA = parseFloat(document.getElementById("teamA").value);
  const teamB = parseFloat(document.getElementById("teamB").value);

  if (isNaN(teamA) || isNaN(teamB)) {
    alert("Enter valid numbers!");
    return;
  }

  const totalGoals = teamA + teamB;

  let over25 = totalGoals > 2.5 ? "YES 🔥" : "NO ❌";
  let btts = teamA > 0.8 && teamB > 0.8 ? "YES ⚽" : "NO ❌";
  let confidence = Math.min(100, (totalGoals / 4) * 100).toFixed(0);

  document.getElementById("result").innerHTML = `
    Over 2.5: ${over25} <br>
    BTTS: ${btts} <br>
    Confidence: ${confidence}%
  `;
}
