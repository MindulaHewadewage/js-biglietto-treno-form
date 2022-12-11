// Prendo elementi Form
const passengerName = document.getElementById('name');
const tripLenght = document.getElementById('kms');
const userAge = document.getElementById('age');
const cancelButton = document.getElementById('cancel');
const continueButton = document.getElementById('continue');

// Prendo elementi biglietto
const ticketSection = document.getElementById('ticket')
const nameElement = document.getElementById('Element');
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

    // validazione

    if(!nameValue || isNaN(kmsValue)){
        return;
    }


    // calcolo del prezzo in base ai kms
    let rateName = 'Tariffa Ordinaria'
    let price = 0.21 * kmsValue;


    // verifico se devo applicare sconti
    if (ageValue === 'under'){
        price = 0.8;
        rateName = 'Tariffa Giovani'


    }
})







// arrotondo a due decimali

// svuoto i campi

// riempio tutti i punti coi valori corretti

// mostro il biglietto(rimuovo d-none)


