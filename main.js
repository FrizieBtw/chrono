reinit = document.getElementById("reinit");
h = document.getElementById("h");
m = document.getElementById("m");
s = document.getElementById("s");
addH = document.getElementById("addH");
addM = document.getElementById("addM");
addS = document.getElementById("addS");
subH = document.getElementById("subH");
subM = document.getElementById("subM");
subS = document.getElementById("subS");
let heure = 0;
let minute = 1;
let seconde = 0;

reinit.addEventListener('click', () => {
    heure = 0;
    minute = 0;
    seconde = 0;
    reecrireTemps(h, heure)
    reecrireTemps(m, minute)
    reecrireTemps(s, seconde)
});

function addHeure() {
    heure += 1;
    if (heure == 100) {
        heure = 0;
    }
    reecrireTemps(h, heure)
}

addH.addEventListener('click', () => {
    addHeure();
});

function addMinute() {
    minute += 1;
    if (minute == 60) {
        minute = 0;
        addHeure();
    }
    reecrireTemps(m, minute)
}

addM.addEventListener('click', () => {
    addMinute();
});

function addSeconde() {
    seconde += 1;
    if (seconde == 60) {
        seconde = 0;
        addMinute();
    }
    reecrireTemps(s, seconde)
}

addS.addEventListener('click', () => {
    addSeconde();
});

function reecrireTemps(element, nvT) {
    aEcrire = "";
    if (nvT < 10) {
        aEcrire = "0"
    }
    aEcrire += nvT;
    element.innerHTML = aEcrire;
};