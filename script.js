const leagues = {
  premier: [
    "Arsenal","Aston Villa","Bournemouth","Brentford","Brighton",
    "Burnley","Chelsea","Crystal Palace","Everton","Fulham",
    "Liverpool","Luton Town","Man City","Man United","Newcastle",
    "Nottingham Forest","Sheffield United","Tottenham","West Ham","Wolves"
  ],

  laliga: [
    "Alaves","Almeria","Athletic Bilbao","Atletico Madrid","Barcelona",
    "Cadiz","Celta Vigo","Getafe","Girona","Granada",
    "Las Palmas","Mallorca","Osasuna","Rayo Vallecano","Real Betis",
    "Real Madrid","Real Sociedad","Sevilla","Valencia","Villarreal"
  ],

  bundesliga: [
    "Bayern Munich","Dortmund","RB Leipzig","Bayer Leverkusen",
    "Eintracht Frankfurt","Union Berlin","Freiburg","Hoffenheim",
    "Werder Bremen","Wolfsburg","Mainz","Stuttgart",
    "Augsburg","Bochum","Heidenheim","Darmstadt","Koln","Monchengladbach"
  ],

  seriea: [
    "AC Milan","Inter Milan","Juventus","Napoli","Roma",
    "Lazio","Atalanta","Fiorentina","Bologna","Torino",
    "Genoa","Sassuolo","Udinese","Empoli","Cagliari",
    "Verona","Lecce","Salernitana","Monza","Frosinone"
  ],

  ligue1: [
    "PSG","Marseille","Lyon","Monaco","Lille",
    "Nice","Lens","Rennes","Strasbourg","Montpellier",
    "Nantes","Reims","Toulouse","Brest","Clermont",
    "Lorient","Metz","Le Havre"
  ],

  belgium: [
    "Club Brugge","Anderlecht","Genk","Antwerp","Gent",
    "Standard Liege","Charleroi","Mechelen","Westerlo","Kortrijk"
  ],

  czech: [
    "Sparta Prague","Slavia Prague","Viktoria Plzen",
    "Slovan Liberec","Banik Ostrava","Sigma Olomouc"
  ],

  russia: [
    "Zenit","CSKA Moscow","Spartak Moscow","Lokomotiv Moscow",
    "Dynamo Moscow","Krasnodar","Rostov","Rubin Kazan"
  ],

  portugal: [
    "Benfica","Porto","Sporting CP","Braga","Vitoria Guimaraes",
    "Boavista","Famalicao","Casa Pia","Estoril"
  ]
};

function showLeague() {
  const league = document.getElementById("leagueSelect").value;
  const result = document.getElementById("result");

  if (!league) {
    result.innerHTML = "";
    return;
  }

  result.innerHTML = leagues[league]
    .map(team => `<div class="team-card">${team}</div>`)
    .join("");
}
