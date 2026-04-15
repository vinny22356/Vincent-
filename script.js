const leagues = {
  premier: [
    "Manchester City","Arsenal","Liverpool","Chelsea","Manchester United",
    "Tottenham","Newcastle","Aston Villa","West Ham","Brighton"
  ],

  laliga: [
    "Real Madrid","Barcelona","Atletico Madrid","Sevilla","Valencia",
    "Villarreal","Real Sociedad","Betis"
  ],

  seriea: [
    "Inter","AC Milan","Juventus","Napoli","Roma","Lazio","Atalanta"
  ],

  bundesliga: [
    "Bayern Munich","Dortmund","RB Leipzig","Leverkusen","Frankfurt"
  ],

  portugal: [
    "Benfica","Porto","Sporting CP","Braga"
  ],

  belgium: [
    "Club Brugge","Genk","Anderlecht","Antwerp"
  ],

  russia: [
    "Zenit","CSKA Moscow","Spartak Moscow","Lokomotiv Moscow"
  ]
};

let selected = [];

const container = document.getElementById("teams");
const leagueSelect = document.getElementById("leagueSelect");

function loadTeams() {
  container.innerHTML = "";
  selected = [];

  const teams = leagues[leagueSelect.value];

  teams.forEach(team => {
    const btn = document.createElement("button");
    btn.innerText = team;

    btn.onclick = () => {
      if (selected.length < 2 && !selected.includes(team)) {
        selected.push(team);
        btn.style.background = "green";
      }

      if (selected.length === 2) {
        window.location.href =
          `match.html?team1=${selected[0]}&team2=${selected[1]}`;
      }
    };

    container.appendChild(btn);
  });
}

leagueSelect.onchange = loadTeams;

loadTeams();
