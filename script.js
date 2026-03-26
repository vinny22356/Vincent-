const params = new URLSearchParams(window.location.search);
const team = params.get("name");

document.getElementById("teamName").innerText = team.toUpperCase();

let data = {
  sporting: {
    text: "Strong attacking team with consistent scoring.",
    best: "🔥 Over 2.5",
    safe: "⚽ BTTS",
    avoid: "❌ Under 2.5",
    confidence: "85%"
  },

  benfica: {
    text: "High possession and goal chances.",
    best: "🔥 Over 1.5",
    safe: "⚽ Home Win",
    avoid: "❌ Under 1.5",
    confidence: "80%"
  },

  porto: {
    text: "Balanced defense and attack.",
    best: "🔥 Under 3.5",
    safe: "⚽ Double Chance",
    avoid: "❌ Over 3.5",
    confidence: "75%"
  }
};

let teamData = data[team];

if (teamData) {
  document.getElementById("analysisText").innerText = teamData.text;
  document.getElementById("bestPick").innerText = "🎯 BEST: " + teamData.best;
  document.getElementById("safeBet").innerText = "💰 SAFE: " + teamData.safe;
  document.getElementById("avoidBet").innerText = "⚠️ AVOID: " + teamData.avoid;
  document.getElementById("confidence").innerText = "📊 Confidence: " + teamData.confidence;
} else {
  document.getElementById("analysisText").innerText = "No data available.";
}

function goBack() {
  window.history.back();
}
