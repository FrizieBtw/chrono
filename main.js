play = document.getElementById("play");
reinit = document.getElementById("reinit");
pause = document.getElementById("pause");
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
let interval = null;

function addHeure() {
    heure += 1;
    if (heure == 100) {
        heure = 0;
    }
    reecrireTemps(h, heure)
}

function addMinute() {
    minute += 1;
    if (minute == 60) {
        minute = 0;
    }
    reecrireTemps(m, minute)
}

function addSeconde() {
    seconde += 1;
    if (seconde == 60) {
        seconde = 0;
    }
    reecrireTemps(s, seconde)
}

function subHeure() {
    heure -= 1;
    if (heure == -1) {
        heure = 99;
    }
    reecrireTemps(h, heure)
}

function subMinute() {
    minute -= 1;
    if (minute == -1) {
        minute = 59;
    }
    reecrireTemps(m, minute)
}

function subSeconde() {
    seconde -= 1;
    if (seconde == -1) {
        seconde = 59;
    }
    reecrireTemps(s, seconde)
}

reinit.addEventListener('click', () => {
    heure = 0;
    minute = 0;
    seconde = 0;
    reecrireTemps(h, heure)
    reecrireTemps(m, minute)
    reecrireTemps(s, seconde)
});

play.addEventListener('click', () => {
    if (heure != 0 || minute != 0 || seconde != 0) {
        play.style.display = "none";
        reinit.style.display = "none";
        pause.style.display = "flex";
        interval = setInterval(() => {
            if (seconde > 0) {
                seconde -= 1;
            } else {
                if (minute > 0) {
                    minute -= 1;
                    seconde = 59;
                } else {
                    if (heure > 0) {
                        heure -= 1;
                        minute = 59;
                        seconde = 59;
                    } else {
                        clearInterval(interval);
                        play.style.display = "flex";
                        reinit.style.display = "flex";
                        pause.style.display = "none";
                    }
                }
            }
            reecrireTemps(h, heure)
            reecrireTemps(m, minute)
            reecrireTemps(s, seconde)
        }, 1000);
    }
});

pause.addEventListener('click', () => {
    play.style.display = "flex";
    reinit.style.display = "flex";
    pause.style.display = "none";
    clearInterval(interval);
});

addH.addEventListener('click', () => {
    addHeure();
});

addM.addEventListener('click', () => {
    addMinute();
});

addS.addEventListener('click', () => {
    addSeconde();
});

subH.addEventListener('click', () => {
    subHeure();
});

subM.addEventListener('click', () => {
    subMinute();
});

subS.addEventListener('click', () => {
    subSeconde();
});

function reecrireTemps(element, nvT) {
    aEcrire = "";
    if (nvT < 10) {
        aEcrire = "0"
    }
    aEcrire += nvT;
    element.innerHTML = aEcrire;
};