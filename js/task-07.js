const inputChangeRange = document.querySelector('#font-size-control'),
      spanResult = document.querySelector('#text');

 const handleSubscriberRange = (e) => {
    const fontSize = e.currentTarget.value;
    spanResult.style.fontSize = `${fontSize}px`
 }    
 inputChangeRange.addEventListener('change', handleSubscriberRange);