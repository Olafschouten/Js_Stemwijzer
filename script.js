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
    partiesButton.onclick = function() { showPartiesOpinion() };
    loadQuestion(vraag);
}

function loadQuestion(question) {
    collEens.innerText = "";
    collOneens.innerText = "";
    collGeen.innerText = "";
    collEens.innerText = "Eens";
    collOneens.innerText = "Oneens";
    collGeen.innerText = "Geen van beide";
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
    partiesButton.removeAttribute("onclick");
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

function countEens() {
    answers.forEach(eens => console.log(eens));
}

function loadResults() {

}