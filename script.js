function calculateBet() {
  const teamA = parseFloat(document.getElementById("teamA").value);
  const teamB = parseFloat(document.getElementById("teamB").value);

  if (isNaN(teamA) || isNaN(teamB)) {
    alert("Enter valid numbers!");
    return;
  }

  const totalGoals = teamA + teamB;

  let over25 = totalGoals > 2.5 ? "YES 🔥" : "NO ❌";
  let under25 = totalGoals < 2.5 ? "YES 🧊" : "NO ❌";
  let btts = teamA > 0.8 && teamB > 0.8 ? "YES ⚽" : "NO ❌";

  let confidence = Math.min(100, (totalGoals / 4) * 100).toFixed(0);

  let risk = "High ⚠️";
  if (confidence > 70) risk = "Low ✅";
  else if (confidence > 50) risk = "Medium ⚖️";

  document.getElementById("result").innerHTML = `
    <p>Over 2.5: <strong>${over25}</strong></p>
    <p>Under 2.5: <strong>${under25}</strong></p>
    <p>BTTS: <strong>${btts}</strong></p>
    <p>Confidence: <strong>${confidence}%</strong></p>
    <p>Risk Level: <strong>${risk}</strong></p>
  `;

  // Save history
  let history = JSON.parse(localStorage.getItem("history")) || [];

  let newEntry = `
  Over 2.5: ${over25} | 
  BTTS: ${btts} | 
  Confidence: ${confidence}% | 
  Risk: ${risk}
  `;

  history.unshift(newEntry);
  localStorage.setItem("history", JSON.stringify(history));

  displayHistory();
}

function displayHistory() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  let historyDiv = document.getElementById("history");

  historyDiv.innerHTML = history
    .slice(0, 5)
    .map(item => `<p>${item}</p>`)
    .join("");
}

function shareResult() {
  const result = document.getElementById("result").innerText;
  const text = encodeURIComponent("My prediction:\n" + result);
  window.open("https://twitter.com/intent/tweet?text=" + text, "_blank");
}

function copyResult() {
  const result = document.getElementById("result").innerText;
  navigator.clipboard.writeText(result);
  alert("Copied to clipboard!");
}

window.onload = displayHistory;
