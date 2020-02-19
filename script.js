var vraag = 0;
var answers = {};
var count = 1;

eens.style.display = "none";
oneens.style.display = "none";
geen.style.display = "none";
terug.style.display = "none";
slaover.style.display = "none";
partiesButton.style.display = "none";

function startVoting() {
    start.style.display = "none";
    stemwijzer.style.display = "none";
    title.style.display = "none";
    eens.style.display = "inline-block";
    oneens.style.display = "inline-block";
    geen.style.display = "inline-block";
    terug.style.display = "inline-block";
    slaover.style.display = "inline-block";
    partiesButton.style.display = "inline-block";
    loadQuestion(vraag);
    loadPartiesOpinions();
}

function loadQuestion(question) {
    collEens.innerText = "";
    collOneens.innerText = "";
    collGeen.innerText = "";
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
    }
}

function countEens() {
    answers.forEach(eens => console.log(eens));
}

function toggle() {
    var x = document.getElementById("partiesOpinionDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
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