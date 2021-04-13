const categoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории.`)
categoriesRef.forEach((elem, i) =>{
    console.log(`Категория: ${ elem.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${categoriesRef[i].querySelectorAll('li').length} `)
})

