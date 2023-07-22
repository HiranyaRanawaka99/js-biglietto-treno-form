
// Variabili form
const userName = document.getElementById('user-name');
const distance = document.getElementById('distance');
const age = document.getElementById('age');
const btnGenerate = document.getElementById('btn-generate');
const btnCancel = document.getElementById('btn-cancel');

// Variabili ticket
let ticketContainer = document.getElementById('ticket')
const myName = document.getElementById('my-name');
const ticketType = document.getElementById('ticket-type');
const coach = document.getElementById('coach');
const ticketNumber =document.getElementById('ticket-number');
const finalPrice = document.getElementById('final-price');


// EVENT LISTENER 

//Quando clicco sul bottone 'Genera', vedo i valori in console

btnGenerate.addEventListener('click', function () {
    const userNameValue = userName.value;
    console.log(userNameValue);

    const distanceValue = parseInt(distance.value);
    console.log(distanceValue);

    const ageValue = age.value;

//Calcolo il prezzo del biglietto 
const ticketFare = 0.21;
let ticketPrice = ticketFare * distanceValue;

// Calcolo il prezzo del biglietto applicando lo sconto 

if (ageValue == 'kid') {
    (ticketPrice -((ticketPrice*20)/100));
} else if (ageValue == 'old') {
    (ticketPrice -((ticketPrice*40)/100));
} else {
      ticketPrice;
}

/*  Metodo migliore per calcore lo sconto
if (ageValue == 'kid') {
   ticketPrice *= 0.8;
 } else if (ageValue == 'old') {
   ticketPrice *= 0.6;
 }
*/
console.log(age.value);
console.log (ticketPrice);

  //Valido gli input
  if (isNaN(distanceValue) || !userNameValue) {
    alert ('Inserisci i tuoi dati correttamente!')
  } else {
// Riporto il nome del passeggero e prezzo finale nella pagina web 
myName.innerHTML = userNameValue
finalPrice.innerHTML = ticketPrice.toFixed(2);

// Offerta biglietto
if (ageValue == 'kid') {
  ticketType.innerHTML = 'Sconto 20%';
 } else if (ageValue == 'old') {
  ticketType.innerHTML = 'Sconto 40%'
 } else {
  ticketType.innerHTML = 'Biglietto standard'
 }

 //Numero carrozza
coach.innerHTML= Math.floor(Math.random()*8)+1;

//Codice biglietto
ticketNumber.innerHTML= Math.floor(Math.random()*5000)+2500;

// Mostriamo il biglietto solo quando verrà generato il biglieto
ticketContainer.classList.remove('d-none');
console.log(ticketContainer)

}
});



