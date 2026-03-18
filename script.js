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
  let aiMessage = "";

  if (totalGoals > 2.5) {
    bestPick = "🔥 Over 2.5";
    safeBet = "⚽ BTTS";
    avoid = "❌ Under 2.5";
    aiMessage = "High attacking potential detected. Expect goals from both sides.";
  } else {
    bestPick = "🧊 Under 2.5";
    safeBet = "⚽ BTTS (Risky)";
    avoid = "❌ Over 2.5";
    aiMessage = "Low goal probability. Defensive structure likely to dominate.";
  }

  const resultText = `
🤖 AI BETTING ANALYSIS

${aiMessage}

🎯 BEST PICK: ${bestPick}
💰 SAFE BET: ${safeBet}
⚠️ AVOID: ${avoid}

📊 Confidence: ${confidence}%
`;

  document.getElementById("result").innerText = resultText;
}


// COPY RESULT
function copyResult() {
  const text = document.getElementById("result").innerText;

  if (!text) {
    alert("No result to copy!");
    return;
  }

  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
}


// SHARE (WhatsApp)
function shareResult() {
  const text = document.getElementById("result").innerText;

  if (!text) {
    alert("No result to share!");
    return;
  }

  const encodedText = encodeURIComponent(text);
  window.open("https://wa.me/?text=" + encodedText, "_blank");
}
