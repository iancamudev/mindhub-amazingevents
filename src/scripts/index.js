let indexJs = async () => {
  let { events, currentDate } = await fetchData();
  let categories = Array.from(new Set(events.map((event) => event.category)))

  let main = document.getElementById("main-home");

  main.innerHTML = events.map((el) => cardGenerator(el)).join(" ");


  //Category manager
  let categoryBtnActive = false;
  let categoryBtn = document.getElementById("category-button");
  let categoriesContainer = document.getElementById("categories-container");
  categoryBtn.addEventListener("click",() => {
  categoryBtnActive = !categoryBtnActive
    if (categoryBtnActive) {
      categoriesContainer.innerHTML = categoriesGenerator(categories)
      categoryBtn.innerHTML = 'Categorias: <i class="fa-solid fa-sort-down duration-300"></i>'
    } else {
      categoriesContainer.innerHTML = ''
      categoryBtn.innerHTML = 'Categorias: <i class="fa-solid fa-sort-down rotate-180 duration-300"></i>'
    }
});

  //Filters manager
  let checkList = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value)
  let searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keyup', ()=>{
    filtrados = events.filter(
      (event) => {
        console.log('Input value: ', searchInput.value, 'Event category: ', event.category, 'Check List: ', checkList, 'Sentencia: ' + compare(event, searchInput.value) && (checkList.length === 0 || checkList.includes(event.category)))
        return compare(event, searchInput.value) && (checkList.length === 0 || checkList.includes(event.category))
      });
    main.innerHTML = filtrados.map((el) => cardGenerator(el)).join(" ");
  })





};
indexJs();

