var vraag = 0;
var answers = {};
var count = 1;

var partiesName = [];
var partiesCounter = [];
var extraPoint = 0;

const partiesSize = 5;

eens.style.display = "none";
oneens.style.display = "none";
geen.style.display = "none";
terug.style.display = "none";
slaover.style.display = "none";
partiesButton.style.display = "none";
bigPartiesButton.style.display = "none";
secularPartiesButton.style.display = "none";
extra.style.display = "none";

function startVoting() {
    start.style.display = "none";
    stemwijzer.style.display = "none";
    title.style.display = "none";
    eens.style.display = "inline-block";
    oneens.style.display = "inline-block";
    geen.style.display = "inline-block";
    slaover.style.display = "inline-block";
    partiesButton.style.display = "inline-block";
    bigPartiesButton.style.display = "inline-block";
    secularPartiesButton.style.display = "inline-block";
    extra.style.display = "inline-block";
    loadQuestion(vraag);
    loadPartiesOpinions();
    loadBigParties();
    loadSecularParties();
    toggleAllParties('all');
    accordion();
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
    opinionParties.style.display = "none";
    bigParties.style.display = "none";
    secularParties.style.display = "none";
    titel.innerText = count + '. ' + subjects[question]['title'];
    stelling.innerText = subjects[question]['statement'];
}

function vote(voting) {
    if (count === 30) {
        titel.innerText = 'De test is over';
        stelling.innerText = 'Dit zijn je resultaten';
        terug.style.display = 'none';
        eens.style.display = 'none';
        oneens.style.display = 'none';
        geen.style.display = 'none';
        slaover.style.display = 'none';
        partiesButton.style.display = 'none';
        bigPartiesButton.style.display = 'none';
        secularPartiesButton.style.display = 'none';
        extra.style.display = 'none';
    } else {
        answers[vraag] = voting;
        vraag++;
        count++;
        loadQuestion(vraag);
        loadPartiesOpinions();
        questionCheck(voting);
    }
    accordion();
}

function back() {
    if (vraag > 0) {
        vraag--;
        count--;
        loadQuestion(vraag);
        loadPartiesOpinions();
    }
}

function toggleAllParties(button) {
    if (button === 'opinion') {
        opinionParties.style.display = "block";
        bigParties.style.display = "none";
        secularParties.style.display = "none";
    } else if (button === 'big') {
        opinionParties.style.display = "none";
        bigParties.style.display = "block";
        secularParties.style.display = "none";
    } else if (button === 'secular') {
        opinionParties.style.display = "none";
        bigParties.style.display = "none";
        secularParties.style.display = "block";
    } else if (button === 'all') {
        opinionParties.style.display = "none";
        bigParties.style.display = "none";
        secularParties.style.display = "none";
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

            if (partiesName.length <= 23) {
                partiesName.push(value['name']);
            }

            if ('pro' === value['position']) {
                collumn = collEens;
            } else if ('contra' === value['position']) {
                collumn = collOneens;
            } else if ('none' === value['position']) {
                collumn = collGeen;
            }
            collumn.appendChild(addButton).setAttribute("class", "accordion");
            var divContainer = collumn.appendChild(addDiv);
            divContainer.setAttribute("class", "panel");
            divContainer.setAttribute("style", "display: none;");
            addDiv.appendChild(addP);
        }
    );
}

function loadBigParties() {
    var i = 0;
    parties.forEach(function () {
            if (parties[i]['size'] >= partiesSize) {
                partyName = document.createElement('h5');
                partyLong = document.createElement('p');

                partyName.innerText = parties[i]['name'];

                if (parties[i]['long']) {
                    partyLong.innerText = parties[i]['long'];
                }

                bigParties.appendChild(partyName);
                bigParties.appendChild(partyLong);
                i++;
            }
        }
    );
}

function loadSecularParties() {
    var i = 0;
    parties.forEach(function () {
            if (parties[i]['secular'] === true) {
                partyName = document.createElement('h5');
                partyLong = document.createElement('p');

                partyName.innerText = parties[i]['name'];

                if (parties[i]['long']) {
                    partyLong.innerText = parties[i]['long'];
                }

                secularParties.appendChild(partyName);
                secularParties.appendChild(partyLong);
                i++;
            } else {
                i++;
            }
        }
    );
}

function extraWight() {
    if (extra.innerText === 'Extra gewicht op deze vraag?') {
        extra.innerText = 'Minder gewicht op deze vraag?';
        extraPoint = 1;
    } else {
        extra.innerText = 'Extra gewicht op deze vraag?';
        extraPoint = 0;
    }
}

function questionCheck(voting) {
    subjects[vraag]['parties'].forEach(function (value, key) {
            if (voting === 'eens') {
                if (value['position'] === 'pro') {
                    for (var i = 0; i < partiesName.length; i++) {
                        if (value['name'] === partiesName[i]) {
                            console.log(value['name']);

                            partiesCounter[i] = 1 + extraPoint;
                            console.log(partiesCounter[i]);
                        }
                    }
                }
            }
        }
    );
}