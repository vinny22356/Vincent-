const leagues = {

  portugal: [
    { name: "Benfica", id: "benfica" },
    { name: "Porto", id: "porto" },
    { name: "Sporting CP", id: "sporting" },
    { name: "Braga", id: "braga" },
    { name: "Boavista", id: "boavista" }
  ],

  england: [
    { name: "Manchester City", id: "mancity" },
    { name: "Arsenal", id: "arsenal" },
    { name: "Liverpool", id: "liverpool" },
    { name: "Chelsea", id: "chelsea" }
  ],

  spain: [
    { name: "Real Madrid", id: "realmadrid" },
    { name: "Barcelona", id: "barcelona" },
    { name: "Atletico Madrid", id: "atletico" }
  ]

};

function loadTeams() {
  const league = document.getElementById("leagueSelect").value;
  const teamsDiv = document.getElementById("teams");

  teamsDiv.innerHTML = "";

  leagues[league].forEach(team => {
    const btn = document.createElement("button");
    btn.innerText = team.name;

    btn.onclick = () => {
      window.location.href = "team.html?name=" + team.id;
    };

    teamsDiv.appendChild(btn);
  });
}

// Load default league on start
loadTeams();
