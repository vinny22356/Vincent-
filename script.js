function calculateBet() {
  const teamA = parseFloat(document.getElementById("teamA").value);
  const teamB = parseFloat(document.getElementById("teamB").value);

  if (isNaN(teamA) || isNaN(teamB)) {
    alert("Enter valid numbers!");
    return;
  }

  const totalGoals = teamA + teamB;

  let confidence = Math.min(100, (totalGoals / 4) * 100).toFixed(0);

  let bestPick = "";
  let safeBet = "";
  let avoid = "";

  if (totalGoals > 2.5) {
    bestPick = "🔥 Over 2.5";
    safeBet = "⚽ BTTS";
    avoid = "❌ Under 2.5";
  } else {
    bestPick = "🧊 Under 2.5";
    safeBet = "⚽ BTTS (Risky)";
    avoid = "❌ Over 2.5";
  }

  const resultText = `
🎯 BET SLIP

Best Pick: ${bestPick}
Safe Bet: ${safeBet}
Avoid: ${avoid}
Confidence: ${confidence}%
`;

  document.getElementById("result").innerText = resultText;
}

// COPY
function copyResult() {
  const text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

// SHARE
function shareResult() {
  const text = encodeURIComponent(document.getElementById("result").innerText);
  window.open("https://wa.me/?text=" + text, "_blank");
}
window.onload = displayHistory;
