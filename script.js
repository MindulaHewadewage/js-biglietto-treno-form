// Prendo elementi Form
const passengerName = document.getElementById('name');
const tripLenght = document.getElementById('kms');
const userAge = document.getElementById('age');
const cancelButton = document.getElementById('cancel');
const continueButton = document.getElementById('continue');

// Prendo elementi biglietto
const ticketSection = document.getElementById('ticket-section')
const nameElement = document.getElementById('name-element');
const rateElement = document.getElementById('rate');
const coachElement = document.getElementById('coach');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');

// Aggancio l'event listener al bottone
continueButton.addEventListener('click' , function(){
    // Recupero i valori del form
    const nameValue = passengerName.value.trim();
    const kmsValue = tripLenght.value;
    const ageValue = userAge.value;

    console.log(nameValue, kmsValue, ageValue);

    // validazione

    if(!nameValue || isNaN(kmsValue)){
        return;
    }


    // calcolo del prezzo in base ai kms
    let rateName = 'Tariffa Ordinaria'
    let price = 0.21 * kmsValue;


    // verifico se devo applicare sconti
    if (ageValue === 'under'){
        price *= 0.8;
        rateName = 'Tariffa Giovani'
    } else if (ageValue === 'over'){
        price *= 0.6;
        rateName = 'tariffa anziani';
    }


    // arrotondo a due decimali
    price = '€' + price.toFixed(2);
    console.log(price);


    // carrozza
    const coach = '9';
    const pnr = '98229';

    // riempio tutti i punti coi valori corretti
    nameElement.inner = nameValue; 
    rateElement.innerText = rateName; 
    coachElement.innerText = coach; 
    pnrElement.innerText = pnr; 
    priceElement.innerText = price; 


    // mostro il biglietto(rimuovo d-none)
    ticketSection.classList.remove('d-none');
})








