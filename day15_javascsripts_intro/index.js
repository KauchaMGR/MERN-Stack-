let a= document.getElementById('head');
a.textContent="hmmm"
console.log(a.textContent);


const grid = document. querySelector(' [data-test-grid]');
console. log(grid)

// Create a new element
const card = document. createElement ('div');
card.classList.add('card');
card.classList.add('new-card');
card. textContent = 'New Card';

// Append to the DOM
document.querySelector('[data-test-grid]').appendChild(card);
document.querySelector('[data-test-grid]').append(card,antherEL);
document.querySelector('[data-test-grid]').prepend(card); // first child

I
