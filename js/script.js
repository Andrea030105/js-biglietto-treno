let eta = parseInt(prompt("Inserisci la tua età"));
let km = parseInt(prompt("Inserisci i chilometri da percorrere"));


if (eta <= 18) {

    let prezzo = (0.21 * km * 0.8).toFixed(2)
    document.getElementById("prezzo").innerHTML = `${"sei minorenne, 20% di sconto"} ${prezzo}`;
    console.log("sei minorenne, 20% di sconto " + prezzo.toFixed(2));

} else if (eta > 65) {

    let prezzo = (0.21 * km * 0.6).toFixed(2)
    document.getElementById("prezzo").innerHTML = `${"sei over 65, 40% di sconto"} ${prezzo}`;
    console.log("sei over 65, 40% di sconto " + prezzo.toFixed(2));

} else {

    document.getElementById("prezzo").innerHTML = `${"Il tuo prezzo è"} ${prezzo.toFixed(2)}`;

    console.log("prezzo pieno " + prezzo.toFixed(2));

}

