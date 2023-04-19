let indexJs = async () => {
  let { events, currentDate } = await fetchData();
  let categories = Array.from(new Set(events.map((event) => event.category)))

  let main = document.getElementById("main-home");

  filterData({events, currentDate})


  //Category manager
  let categoryBtnActive = false;
  let categoryBtn = document.getElementById("category-button");
  let categoriesContainer = document.getElementById("categories-container");
  categoryBtn.addEventListener("click",() => {
  categoryBtnActive = !categoryBtnActive
    if (categoryBtnActive) {
      categoriesContainer.innerHTML = categoriesGenerator(categories)
      categoryBtn.innerHTML = 'Categorias: <i class="fa-solid fa-sort-down duration-300"></i>'

      //Le agregamos un event listener para hacer el filtrado, si lo ponemos afuera intenta agarrar los checkbox antes de que se muestren en el dom
      let allCheckBox = document.querySelectorAll('input[type="checkbox"]')
      //Agregamos un event listener a los checkbox
      allCheckBox.forEach((checkbox)=>checkbox.addEventListener('change', () => {
        let checkList = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value)
        filterData({events, checkList, currentDate, searchInput})
      }))
    } else {
      categoriesContainer.innerHTML = ''
      categoryBtn.innerHTML = 'Categorias: <i class="fa-solid fa-sort-down rotate-180 duration-300"></i>'
    }
});

  //Filters manager
  let searchInput = document.getElementById('search-input');


  //Agregamos un event listener para cuando se escriba en el input, lance un filtrado.
  searchInput.addEventListener('keyup', ()=>{
    let checkList = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value)
    filterData({events, checkList, searchInput, currentDate})
  })






};
indexJs();

