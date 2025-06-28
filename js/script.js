const cardNumberInput = document.querySelector('.card-number-input'),
      cardHolderInput = document.querySelector('.card-holder-input'),
      cardMonhInput = document.querySelector('.month-input'),
      cardYearInput = document.querySelector('.year-input'),
      cardCvvInput = document.querySelector('.ccv-input'),
      cardNumberDisplay = document.querySelector('.card-number-presentation'),
      cardHolderDisplay = document.querySelector('.card-holder-presentation'),
      cardExpiryMonth = document.querySelector('.exp-month'),
      cardExpiryYear = document.querySelector('.exp-year'),
      cardCvvDisplay = document.querySelector('.ccv');
/*
// Function to update the card display
function updateCardDisplay() {
    cardNumberDisplay.innerHTML = cardNumberInput.value || '0000 0000 0000 0000';
    cardHolderDisplay.innerHTML = cardHolderInput.value || 'John Doe';
    cardExpiryDisplay.innerHTML = cardExpiryInput.value || 'MM/YY';
    cardCvvDisplay.textContent = cardCvvInput.value || '123';
}
// Event listeners for input changes
cardNumberInput.addEventListener('input', updateCardDisplay);
cardHolderInput.addEventListener('input', updateCardDisplay);
cardExpiryInput.addEventListener('input', updateCardDisplay);
cardCvvInput.addEventListener('input', updateCardDisplay);
// Initial display update
updateCardDisplay();
// Function to flip the card
/* * This function toggles the 'flipped' class on the card element,
 * which triggers the CSS transition to flip the card.
 * * The 'flipped' class is added when the card is flipped to show the back side,
function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}
*/
/*
// Function to update the card display
function updateCardDisplay() {
    cardNumberDisplay.innerHTML = cardNumberInput.value || '0000 0000 0000 0000';
    cardHolderDisplay.innerHTML = cardHolderInput.value || 'John Doe';
    cardExpiryDisplay.innerHTML = cardExpiryInput.value || 'MM/YY';
    cardCvvDisplay.textContent = cardCvvInput.value || '123';
}
// Event listeners for input changes
cardNumberInput.addEventListener('input', updateCardDisplay);
cardHolderInput.addEventListener('input', updateCardDisplay);
cardExpiryInput.addEventListener('input', updateCardDisplay);
cardCvvInput.addEventListener('input', updateCardDisplay);
// Initial display update
updateCardDisplay();
// Function to flip the card
/* * This function toggles the 'flipped' class on the card element,
 * which triggers the CSS transition to flip the card.
 * * The 'flipped' class is added when the card is flipped to show the back side,
function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}
*/

cardNumberInput.onkeyup = function() {
    cardNumberDisplay.innerHTML = cardNumberInput.value || '#### #### #### ####';
}
cardHolderInput.onkeyup = function() {
    cardHolderDisplay.innerHTML = cardHolderInput.value || 'FULL NAME';
}
cardMonhInput.onkeyup = function() {
    cardExpiryMonth.innerHTML = cardMonhInput.value || 'MM';
}
cardYearInput.onkeyup = function() {
    cardExpiryYear.innerHTML = cardYearInput.value || 'YY';
}
cardCvvInput.onkeyup = function() {
    cardCvvDisplay.innerHTML = cardCvvInput.value || 'CVV';
}

function generateYear(){
    for(let i = 2023; i <= 2030; i++){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        cardYearInput.appendChild(option);
    }
}
generateYear();

function generateMonth(){
    for(let i = 1; i <= 12; i++){
        let option = document.createElement('option');
        option.value = i < 10 ? '0' + i : i;
        option.textContent = i < 10 ? '0' + i : i;
        cardMonhInput.appendChild(option);
    }
}
generateMonth();

/*
// Function to flip the card
function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}
/*
// Function to unflip the card
function unflipCard() {
    const card = document.querySelector('.card');
    card.classList.remove('flipped');
}*/
/*
// Event listeners for flipping the card
document.querySelector('.card').addEventListener('click', function() {
    const card = document.querySelector('.card');
    if (card.classList.contains('flipped')) {
        unflipCard();
    } else {
        flipCard();
    }
});

// Event listeners for input focus to flip the card
cardNumberInput.addEventListener('focus', flipCard);
cardHolderInput.addEventListener('focus', flipCard);
cardMonhInput.addEventListener('focus', flipCard);
*/

cardCvvInput.onfocus = function() {
    const card = document.querySelector('.card');
    card.classList.add('flipped');
}

cardCvvInput.onblur = function() {
    const card = document.querySelector('.card');
    card.classList.remove('flipped');
}

cardMonhInput.onchange = function() {
    if (cardMonhInput.value != 0) {
      cardExpiryMonth.innerHTML = cardMonhInput.value; // Prevent past months
    }else {
      cardExpiryMonth.innerHTML = 'MM'; // Default value if no month is selected
    }
}

cardYearInput.onchange = function() {
    if (cardYearInput.value != 0) {
      cardExpiryYear.innerHTML = cardYearInput.value; // Prevent past years
    }
    else {
      cardExpiryYear.innerHTML = 'YYYY'; // Default value if no year is selected
    }

}
/*
// Function to validate the card expiry date
function validateExpiryDate() {
    const month = parseInt(cardMonhInput.value, 10);
    const year = parseInt(cardYearInput.value, 10);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        cardExpiryMonth.innerHTML = 'MM';
        cardExpiryYear.innerHTML = 'YY';
        alert('Invalid Expiry Date');
    } else {
        cardExpiryMonth.innerHTML = month < 10 ? '0' + month : month; // Format month
        cardExpiryYear.innerHTML = year.toString().slice(-2); // Last two digits of the year
    }
}
// Event listener for expiry date input changes
cardMonhInput.addEventListener('change', validateExpiryDate);
cardYearInput.addEventListener('change', validateExpiryDate);

// Initial validation on page load
validateExpiryDate();

/*
// Function to validate the card number format
function validateCardNumber() {
    const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // Remove spaces
    const regex = /^\d{16}$/; // Regex for 16 digits
    if (!regex.test(cardNumber)) {
        cardNumberDisplay.innerHTML = 'Invalid Card Number';
    } else {
        cardNumberDisplay.innerHTML = cardNumber.match(/.{1,4}/g).join(' '); // Format as XXXX XXXX XXXX XXXX
    }
}
// Event listener for card number input
cardNumberInput.addEventListener('input', validateCardNumber);  
// Initial validation on page load
validateCardNumber();   
// Function to validate the card holder name
function validateCardHolder() {
    const cardHolder = cardHolderInput.value.trim();
    if (cardHolder === '') {
        cardHolderDisplay.innerHTML = 'FULL NAME';
    } else {
        cardHolderDisplay.innerHTML = cardHolder.toUpperCase(); // Display in uppercase
    }
}
// Event listener for card holder input
cardHolderInput.addEventListener('input', validateCardHolder);
// Initial validation on page load
validateCardHolder();
*/
