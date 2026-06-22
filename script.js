function startseite() {
    document.getElementById("startseite").style.display = "flex";

    const gruppen = [
        "gruppe-a",
        "gruppe-b",
        "gruppe-c",
        "gruppe-d",
        "gruppe-e",
        "gruppe-f",
        "gruppe-g",
        "gruppe-h",
        "gruppe-i",
        "gruppe-j",
        "gruppe-k",
        "gruppe-l"
    ];

    gruppen.forEach(function (gruppe) {
        document.getElementById(gruppe).style.display = "none";
    });

    document.querySelectorAll(".sidebar button").forEach(function (button) {
        button.classList.remove("aktiv");
    });
}

function zeigeGruppe(gruppeId, buttonId) {
    document.getElementById("startseite").style.display = "none";

    const gruppen = [
        "gruppe-a",
        "gruppe-b",
        "gruppe-c",
        "gruppe-d",
        "gruppe-e",
        "gruppe-f",
        "gruppe-g",
        "gruppe-h",
        "gruppe-i",
        "gruppe-j",
        "gruppe-k",
        "gruppe-l",
        "turnierbaum"
    ];

    gruppen.forEach(function (gruppe) {
        document.getElementById(gruppe).style.display = "none";
    });

    document.getElementById(gruppeId).style.display = "block";

    document.querySelectorAll(".sidebar button").forEach(function (button) {
        button.classList.remove("aktiv");
    });

    document.getElementById(buttonId).classList.add("aktiv");
}

document.getElementById("btn-a").onclick = function () {
    zeigeGruppe("gruppe-a", "btn-a");
};

document.getElementById("btn-b").onclick = function () {
    zeigeGruppe("gruppe-b", "btn-b");
};

document.getElementById("btn-c").onclick = function () {
    zeigeGruppe("gruppe-c", "btn-c");
};

document.getElementById("btn-d").onclick = function () {
    zeigeGruppe("gruppe-d", "btn-d");
};

document.getElementById("btn-e").onclick = function () {
    zeigeGruppe("gruppe-e", "btn-e");
};

document.getElementById("btn-f").onclick = function () {
    zeigeGruppe("gruppe-f", "btn-f");
};

document.getElementById("btn-g").onclick = function () {
    zeigeGruppe("gruppe-g", "btn-g");
};

document.getElementById("btn-h").onclick = function () {
    zeigeGruppe("gruppe-h", "btn-h");
};

document.getElementById("btn-i").onclick = function () {
    zeigeGruppe("gruppe-i", "btn-i");
};

document.getElementById("btn-j").onclick = function () {
    zeigeGruppe("gruppe-j", "btn-j");
};

document.getElementById("btn-k").onclick = function () {
    zeigeGruppe("gruppe-k", "btn-k");
};

document.getElementById("btn-l").onclick = function () {
    zeigeGruppe("gruppe-l", "btn-l");
};


startseite();

document.getElementById("deutschland-card").onclick = function () {

    this.classList.toggle("gedreht");
};

document.getElementById("bracket-card").onclick = function () {

    document.querySelector(".sidebar").style.display = "flex";

    document.getElementById("startseite").style.display = "none";

    document.getElementById("turnierbaum").style.display = "block";

    document.querySelectorAll(".gruppen-button").forEach(function(button) { button.style.display = "none"; });
};

document.getElementById("groups-card").onclick = function () {

    document.querySelector(".sidebar").style.display = "flex";

    document.getElementById("startseite").style.display = "none";

    document.getElementById("turnierbaum").style.display = "none";


    document.querySelectorAll(".gruppen-button").forEach(function(button) {
        button.style.display = "none";
    });
};

document.getElementById("home-btn").onclick = function () {

    document.querySelector(".sidebar").style.display = "none";

    document.getElementById("startseite").style.display = "flex";

    document.getElementById("turnierbaum").style.display = "none";

    document.querySelectorAll(".gruppen-button").forEach(function(button) { button.style.display = "block"; });

        const gruppen = [
            "gruppe-a",
            "gruppe-b",
            "gruppe-c",
            "gruppe-d",
            "gruppe-e",
            "gruppe-f",
            "gruppe-g",
            "gruppe-h",
            "gruppe-i",
            "gruppe-j",
            "gruppe-k",
            "gruppe-l"
        ];

        gruppen.forEach(function (gruppe) {
            document.getElementById(gruppe).style.display = "none";
        });

        document.querySelectorAll(".sidebar button").forEach(function (button) {
            button.classList.remove("aktiv");
        });
};

document.getElementById("btn-turnierbaum").onclick = function () {
    zeigeGruppe("turnierbaum", "btn-turnierbaum");
};

document.getElementById("gruppen-toggle").onclick = function () {
    document.querySelectorAll(".gruppen-button").forEach(function(button) {
        if (button.style.display === "block") {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }
    });
};