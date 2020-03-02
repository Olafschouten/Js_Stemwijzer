var vraag = 0;
var answers = {};
var count = 1;

const partiesSize = 5;

eens.style.display = "none";
oneens.style.display = "none";
geen.style.display = "none";
terug.style.display = "none";
slaover.style.display = "none";
partiesButton.style.display = "none";
partiesButton1.style.display = "none";

function startVoting() {
    start.style.display = "none";
    stemwijzer.style.display = "none";
    title.style.display = "none";
    eens.style.display = "inline-block";
    oneens.style.display = "inline-block";
    geen.style.display = "inline-block";
    slaover.style.display = "inline-block";
    partiesButton.style.display = "inline-block";
    partiesButton1.style.display = "inline-block";
    loadQuestion(vraag);
    loadPartiesOpinions();
    loadParties();
}

function loadQuestion(question) {
    collEens.innerText = "";
    collOneens.innerText = "";
    collGeen.innerText = "";
    if (vraag >= 1) {
        terug.style.display = "inline-block";
    } else if (vraag <= 1) {
        terug.style.display = "none";
    }
    partiesOpinionDiv.setAttribute("style", "display: none;");
    titel.innerText = count + '. ' + subjects[question]['title'];
    stelling.innerText = subjects[question]['statement'];
}

function vote(voting) {
    answers[vraag] = voting;
    vraag++;
    count++;
    loadQuestion(vraag);
    loadPartiesOpinions();
}

function back() {
    if (vraag > 0) {
        vraag--;
        count--;
        loadQuestion(vraag);
        loadPartiesOpinions();
    }
}

function toggle() {
    if (partiesOpinionDiv.style.display === "none") {
        partiesOpinionDiv.style.display = "block";
        showParties.style.display = "none";
    } else {
        partiesOpinionDiv.style.display = "none";
    }
}

function toggleParties() {
    if (showParties.style.display === "none") {
        showParties.style.display = "block";
        partiesOpinionDiv.style.display = "none";
    } else {
        showParties.style.display = "none";
    }
}

function loadPartiesOpinions() {
    collEens.innerText = "Eens";
    collOneens.innerText = "Oneens";
    collGeen.innerText = "Geen van beide";
    subjects[vraag]['parties'].forEach(function (value, key) {
            addButton = document.createElement('button');
            addDiv = document.createElement('div');
            addP = document.createElement('p');

            addButton.innerText = value['name'];
            addP.innerText = value['opinion'];


            if ('pro' === value['position']) {
                collumn = collEens;
            } else if ('contra' === value['position']) {
                collumn = collOneens;
            } else if ('none' === value['position']) {
                collumn = collGeen;
            }
            collumn.appendChild(addButton).setAttribute("class", "accordion");
            var test = collumn.appendChild(addDiv);
            test.setAttribute("class", "panel");
            test.setAttribute("style", "display: none;");
            addDiv.appendChild(addP);
        }
    );
}

function loadParties() {
    addDiv = document.createElement('div');
    addDiv.setAttribute("id", "showParties");

    var i = 0;
    parties.forEach(function () {
            if (parties[i]['size'] >= partiesSize) {
                partyName = document.createElement('h5');
                partyLong = document.createElement('p');

                partyName.innerText = parties[i]['name'];

                if (parties[i]['long']) {
                    partyLong.innerText = parties[i]['long'];
                }

                container.appendChild(addDiv);
                addDiv.appendChild(partyName);
                addDiv.appendChild(partyLong);
                i++;
            }
        }
    );

    showParties.style.display = "none";
}


























