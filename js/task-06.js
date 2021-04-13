const inputWithValidatorRef = document.querySelector('#validation-input');
const handleValidator = (e) => {
  const textLength = e.currentTarget.value.length
  const valueAttribute = +inputWithValidatorRef.getAttribute("data-length"); 
  textLength === valueAttribute ? inputWithValidatorRef.style.borderColor = 'green'
   : inputWithValidatorRef.style.borderColor = 'red'
}
inputWithValidatorRef.addEventListener('blur', handleValidator);