function test() {
    let score = 0;

    let a= prompt("Capital de la France ?");
    if (a == "Paris") {
        score++;
    }

    let b = prompt("2 + 2 =?");
    if (b == "4") {
        score++;
    }

    let c= prompt("Couleur du ciel ?");
    if (c == "bleu") {
        score++;
    }

    document.getElementById("resultat").innerHTML =
        "Score: " + score + "/3";
}