var vraag = 0;
var answers = {};

eens.style.display = "none";
oneens.style.display = "none";
geen.style.display = "none";
terug.style.display = "none";
partiesButton.style.display = "none";

function startVoting() {
    start.style.display = "none";
    stemwijzer.style.display = "none";
    title.style.display = "none";
    eens.style.display = "inline-block";
    oneens.style.display = "inline-block";
    geen.style.display = "inline-block";
    terug.style.display = "inline-block";
    partiesButton.style.display = "inline-block";
    loadQuestion(vraag);
}

function loadQuestion(question) {
    titel.innerText = subjects[question]['title'];
    stelling.innerText = subjects[question]['statement'];
}

function vote(voting) {
    answers[vraag] = voting;
    vraag++;
    loadQuestion(vraag);
}

function back() {
    if (vraag > 0) {
        vraag--;
        loadQuestion(vraag);
    }
}

function showPartiesOpinion() {
    subjects[vraag]['parties'].forEach(function (value, key) {
            partyName = document.createElement('H1');
            partyPosition = document.createElement('p');
            partyOpinion = document.createElement('p');
            partyName.innerText = value['name'];
            partyPosition.innerText = value['position'];
            partyOpinion.innerText = value['opinion'];

            partiesInfo.appendChild(partyName);
            partiesInfo.appendChild(partyPosition);
            partiesInfo.appendChild(partyOpinion);
        }
    );
}
