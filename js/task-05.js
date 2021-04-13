const inputTextRef = document.querySelector('#name-input'),
      spanResultRef = document.querySelector('#name-output');

const handleChangeStatus = (e) => {
  let textResult = e.currentTarget.value
   if (textResult){
     spanResultRef.textContent = textResult;
   }else{
    spanResultRef.textContent = 'незнакомец';
   }
  
}




inputTextRef.addEventListener('input', handleChangeStatus);