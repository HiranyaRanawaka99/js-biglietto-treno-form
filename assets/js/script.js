alert('Benvenuto su Boolean Treni!');

// Variabili 

let Km = prompt('Inserisci i KM da percorrere');

while (isNaN (Km)) {
    alert('Inserisci numero')
    Km = prompt('Inserisci i KM da percorrere'); 
} 

let eta = prompt('Quanti anni hai?');

while (isNaN (eta)) {
    alert ('Questo non è numero')
    eta = prompt('Quanti anni hai?');
}

const prezzoKm = Km * 0.21;


//Stampo in HTML

document.getElementById('km').innerHTML = Km;

document.getElementById('eta').innerHTML = eta;


if (eta < 18) {
    document.getElementById('sconto').innerHTML = (prezzoKm -((prezzoKm*20)/100)).toFixed(2) + '€.' 
    document.getElementById('sconto-20').innerHTML = 'Il tuo biglietto è scontato del 20%.'
} else if (eta > 65) {
    document.getElementById('sconto').innerHTML = (prezzoKm -((prezzoKm*40)/100)).toFixed(2) + '€.'
    document.getElementById('sconto-40').innerHTML = 'Il tuo biglietto è scontato del 40%.'
} else {
    document.getElementById('sconto').innerHTML =  prezzoKm.toFixed(2) + '€'
}


