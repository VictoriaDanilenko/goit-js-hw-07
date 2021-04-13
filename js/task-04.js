const decrementBtn = document.querySelector('[data-action="decrement"]'),
      incrementBtn = document.querySelector('[data-action="increment"]'),
      resultSpan = document.querySelector('#value');
let counterValue = 0;
const handleChangeIncrement = () => {
        counterValue++;
        resultSpan.textContent = counterValue;
      }
const handleChangeDecrement = () => {
        counterValue--;
        resultSpan.textContent = counterValue;
      }
decrementBtn.addEventListener('click', handleChangeDecrement);
incrementBtn.addEventListener('click', handleChangeIncrement);