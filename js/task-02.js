const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const creatElem = (title) => {
    const elem =  document.createElement('li');
    elem.textContent = title;
    return elem;
}


document.querySelector('#ingredients').append(...ingredients.map(creatElem));