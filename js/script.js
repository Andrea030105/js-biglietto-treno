let eta = parseInt(prompt("Inserisci la tua età"));
let km = parseInt(prompt("Inserisci i chilometri da percorrere"));
let prezzo = km * 0.21;
let sconto;


if (eta <= 18) {

    sconto = prezzo * 20 / 100;
    prezzo = prezzo - sconto;
    document.getElementById("prezzo").innerHTML = `${"sei minorenne, 20% di sconto"} ${prezzo.toFixed(2)}`;
    console.log("sei minorenne, 20% di sconto " + prezzo.toFixed(2));

} else if (eta > 65) {

    sconto = prezzo * 40 / 100;
    prezzo = prezzo - sconto;
    document.getElementById("prezzo").innerHTML = `${"sei over 65, 40% di sconto"} ${prezzo.toFixed(2)}`;
    console.log("sei over 65, 40% di sconto " + prezzo.toFixed(2));

} else {

    document.getElementById("prezzo").innerHTML = `${"Il tuo prezzo è"} ${prezzo.toFixed(2)}`;

    console.log("prezzo pieno " + prezzo.toFixed(2));

}

