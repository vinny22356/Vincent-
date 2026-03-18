// MAIN FUNCTION
function calculateBet() {
  const teamA = parseFloat(document.getElementById("teamA").value);
  const teamB = parseFloat(document.getElementById("teamB").value);

  if (isNaN(teamA) || isNaN(teamB)) {
    alert("Enter valid numbers!");
    return;
  }

  const totalGoals = teamA + teamB;

  // Score prediction
  const predictedA = Math.round(teamA);
  const predictedB = Math.round(teamB);

  // Win probability
  const winChanceA = Math.round((teamA / totalGoals) * 100);
  const winChanceB = 100 - winChanceA;

  // AI Logic
  let bestPick = "";
  let safeBet = "";
  let avoid = "";
  let aiMessage = "";

  if (totalGoals > 3) {
    bestPick = "🔥 Over 2.5 Goals";
    safeBet = "⚽ BTTS (Both Teams To Score)";
    avoid = "❌ Under 2.5";
    aiMessage = "High attacking potential detected. Expect goals from both sides.";
  } else if (totalGoals > 2) {
    bestPick = "⚡ Over 1.5 Goals";
    safeBet = "⚽ BTTS";
    avoid = "❌ 0-0 Correct Score";
    aiMessage = "Balanced game with moderate scoring chances.";
  } else {
    bestPick = "🧊 Under 2.5 Goals";
    safeBet = "🛡️ Double Chance";
    avoid = "❌ Over 3.5";
    aiMessage = "Low attacking output. Likely a defensive match.";
  }

  // Confidence
  const confidence = Math.min(100, (totalGoals / 4) * 100).toFixed(0);

  // Final Output
  const resultText = `
🤖 AI BETTING ANALYSIS

${aiMessage}

📊 Predicted Score: ${predictedA} - ${predictedB}

📈 Win Probability:
Team A: ${winChanceA}%
Team B: ${winChanceB}%

🎯 Best Pick: ${bestPick}
💰 Safe Bet: ${safeBet}
⚠️ Avoid: ${avoid}

📊 Confidence: ${confidence}%
`;

  document.getElementById("result").innerText = resultText;
}


// COPY FUNCTION
function copyResult() {
  const text = document.getElementById("result").innerText;

  if (!text) {
    alert("No result to copy!");
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => alert("Copied to clipboard! 📋"))
    .catch(() => alert("Copy failed"));
}


// SHARE FUNCTION
function shareResult() {
  const text = document.getElementById("result").innerText;

  if (!text) {
    alert("No result to share!");
    return;
  }

  if (navigator.share) {
    navigator.share({
      title: "AI Betting Prediction",
      text: text
    });
  } else {
    alert("Sharing not supported on this device");
  }
}
