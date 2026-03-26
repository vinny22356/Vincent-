const params = new URLSearchParams(window.location.search);
const team = params.get("name");

document.getElementById("teamName").innerText = team.toUpperCase();

const data = {
  sporting: {
    text: "High attacking potential detected.",
    best: "🔥 Over 2.5",
    safe: "⚽ BTTS",
    avoid: "❌ Under 2.5",
    confidence: "88%"
  },
  mancity: {
    text: "Elite attacking team.",
    best: "🔥 Over 2.5",
    safe: "⚽ Win",
    avoid: "❌ Under 2.5",
    confidence: "92%"
  }
};

const teamData = data[team];

if (teamData) {
  document.getElementById("analysisText").innerText = teamData.text;
  document.getElementById("bestPick").innerText = "🎯 BEST: " + teamData.best;
  document.getElementById("safeBet").innerText = "💰 SAFE: " + teamData.safe;
  document.getElementById("avoidBet").innerText = "⚠️ AVOID: " + teamData
