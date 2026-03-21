const leagues = {
  premier: ["Man City", "Arsenal", "Liverpool", "Chelsea", "Man United"],
  
  laliga: ["Real Madrid", "Barcelona", "Atletico Madrid"],
  
  bundesliga: ["Bayern Munich", "Dortmund", "RB Leipzig"],
  
  seriea: ["Juventus", "AC Milan", "Inter Milan", "Napoli"],
  
  ligue1: ["PSG", "Marseille", "Lyon"],
  
  belgium: ["Club Brugge", "Anderlecht", "Genk"],
  
  czech: ["Sparta Prague", "Slavia Prague", "Viktoria Plzen"],
  
  russia: ["Zenit", "CSKA Moscow", "Spartak Moscow"],
  
  portugal: ["Benfica", "Porto", "Sporting CP"]
};

function showLeague() {
  const league = document.getElementById("leagueSelect").value;
  const result = document.getElementById("result");

  if (leagues[league]) {
    result.innerHTML = "<h3>Teams:</h3>" + 
      leagues[league].map(team => `<p>${team}</p>`).join("");
  } else {
    result.innerHTML = "Please select a league";
  }
}
