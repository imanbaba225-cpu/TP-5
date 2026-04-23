function jouer() {
    let secret = Math.floor(Math.random()* 10) + 1;
    let n;
    let cpt = 0;

    do {
        n = Number(prompt("Entrez un nombre entre 1 et 10"));
        cpt++;

        if (n < secret) {
            document.getElementById("message").innerHTML= "Plus grand";
        } else if (n > secret) {
            document.getElementById("message").innerHTML= "Plus petit";
        } else {
            document.getElementById("message").innerHTML= "Bien joue";
        }
    } while (n != secret);

    document.getElementById("essais").innerHTML = "Nombre d'essais : " + cpt;
}