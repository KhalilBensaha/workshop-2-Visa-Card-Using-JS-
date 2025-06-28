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
