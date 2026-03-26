const leagues = {

  england: [
    "Arsenal","Aston Villa","Bournemouth","Brentford","Brighton",
    "Burnley","Chelsea","Crystal Palace","Everton","Fulham",
    "Liverpool","Luton Town","Manchester City","Manchester United",
    "Newcastle","Nottingham Forest","Sheffield United",
    "Tottenham","West Ham","Wolves"
  ],

  belgium: [
    "Anderlecht","Antwerp","Club Brugge","Genk","Gent",
    "Standard Liege","Charleroi","Mechelen","OH Leuven",
    "Kortrijk","Eupen","Westerlo","Cercle Brugge",
    "Sint-Truiden","Union SG","RWDM"
  ],

  spain: [
    "Real Madrid","Barcelona","Atletico Madrid","Athletic Bilbao",
    "Real Sociedad","Sevilla","Valencia","Villarreal",
    "Real Betis","Osasuna","Celta Vigo","Getafe",
    "Mallorca","Las Palmas","Girona","Alaves",
    "Cadiz","Granada","Rayo Vallecano","Espanyol"
  ],

  italy: [
    "Juventus","Inter Milan","AC Milan","Napoli","Roma",
    "Lazio","Atalanta","Fiorentina","Torino","Bologna",
    "Sassuolo","Udinese","Empoli","Salernitana",
    "Verona","Lecce","Cagliari","Genoa","Monza","Parma"
  ],

  portugal: [
    "Benfica","Porto","Sporting CP","Braga",
    "Boavista","Famalicao","Casa Pia","Estoril",
    "Rio Ave","Gil Vicente","Vizela","Arouca",
    "Chaves","Farense","Portimonense","Moreirense",
    "Vitoria Guimaraes","Nacional"
  ],

  russia: [
    "Zenit","CSKA Moscow","Spartak Moscow","Lokomotiv Moscow",
    "Dynamo Moscow","Krasnodar","Rubin Kazan","Rostov",
    "Akhmat Grozny","Ural","Khimki","Sochi",
    "Orenburg","Baltika","Fakel","Nizhny Novgorod"
  ],

  germany: [
    "Bayern Munich","Borussia Dortmund","RB Leipzig",
    "Bayer Leverkusen","Eintracht Frankfurt",
    "Wolfsburg","Borussia Monchengladbach",
    "Union Berlin","Freiburg","Hoffenheim",
    "Mainz","Augsburg","Werder Bremen",
    "Stuttgart","Bochum","Heidenheim","Darmstadt","Koln"
  ]

};

let selectedTeams = [];

function loadTeams() {
  const league = document.getElementById("leagueSelect").value;
  const teamsDiv = document.getElementById("teams");

  teamsDiv.innerHTML = "";
  selectedTeams = [];

  leagues[league].forEach(team => {
    const btn = document.createElement("button");
    btn.innerText = team;

    btn.onclick = () => selectTeam(team);

    teamsDiv.appendChild(btn);
  });
}

function selectTeam(team) {
  if (selectedTeams.length < 2) {
    selectedTeams.push(team);
  }

  if (selectedTeams.length === 2) {
    window.location.href =
      `match.html?team1=${selectedTeams[0]}&team2=${selectedTeams[1]}`;
  }
}

loadTeams();
