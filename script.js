// Prendo l'elemento in pagina
const passengerName = document.getElementById('passenger-name')
const tripLenght = document.getElementById('trip-lenght')
const userAge = document.getElementById('userAge')
const button = document.getElementById('button')

const priceMessage = 'Il totale del tuo biglietto è: ';
let discountMessage = 'Hai ricevuto uno sconto del ';

// // chiedo quanti km vuole percorrere e la sua età
// // const tripLenght = prompt('Quanti Km vuoi percorrere', 150);
// // const userAge = prompt('Quanti anni hai', 25);

// // validation
// if (isNaN(tripLenght)|| isNaN(userAge) || tripLenght <= 0 || userAge <= 0){
//     alert('i dati inseriti non sono corretti');
// }


// // Prezzo biglietto senza sconto
// let ticketPrice = tripLenght * 0.21;

// let discount = 0;

// // Verificare sconti
// if (userAge >=65) {
//     ticketPrice *= 0.6;
//     discount = "40%";

// } else if (userAge < 18) {
//     ticketPrice *= 0.8;
//     discount = "20%";
// }
// if (discount) {
//     let discountMessage = 'Hai ricevuto uno sconto del ' + discount;
//     const discountMessageElement = document.getElementById('discount-message');
//     discountMessageElement.innerText = discountMessage;

// }

// totalElement.innerText = priceMessage + '€' + ticketPrice.toFixed(2);

