function createGame(player1, hour, player2){
    return `
    <li>
    <img src="assets/img/icon-${player1}.png" alt= "Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="assets/img/icon-${player2}.png" alt= "Bandeira do ${player2}"/>
    </li>
    `
}
let delay = -0.4;

function createCard(date, day, games){
    delay = delay + 0.4;
    return`
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML = 
createCard("02/12", "Sábado", createGame("Corinthians", "17:00", "Palmeiras"))+
createCard("02/12", "Domingo", createGame("inter", "17:00", "bota"))+
createCard("03/12", "Domingo", createGame("vasco", "16:00", "atletico"))+
createCard("03/12", "Domingo", createGame("santos", "16:00", "bahia"))+
createCard("03/12", "Domingo", createGame("sp", "18:30", "gremio"))+
createCard("04/12", "Segunda", createGame("cruzeiro", "19:00", "flamengo"))