function calculer() {
    let nombre1 =prompt("Entrez le premier nombre:");
    let nombre2 = prompt("Entrez le deuxième nombre :");

    nombre1=Number(nombre1);
    nombre2=Number(nombre2);

    let somme= nombre1 +nombre2;
    let difference = nombre1- nombre2;
    let produit =nombre1 * nombre2;
    let quotient=nombre1 / nombre2;

    document.getElementById("resultat").innerHTML =
        "Somme: " + somme + "<br>" +
        "Difference: " + difference + "<br>" +
        "Produit: " + produit + "<br>" +
        "Quotient: " + quotient;
}
