let pastJs = async () => {
    let { events, currentDate } = await fetchData();
    let categories = Array.from(new Set(events.map((event) => event.category)))
    events = events.filter((event)=> new Date(event.date) < new Date(currentDate)).sort((a,b)=> new Date(b.date) - new Date(a.date))
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
  
        //Le agregamos un event listener para hacer el filtrado, si lo ponemos afuera intenta agarrar los checkbox antes de que se muestren en el dom
        let allCheckBox = document.querySelectorAll('input[type="checkbox"]')
        //Agregamos un event listener a los checkbox
        allCheckBox.forEach((checkbox)=>checkbox.addEventListener('change', () => {
          console.log('Se ejecuto un change: ', checkbox);
          console.log(checkbox.checked)
          if (checkbox.checked) {
            filtrados = events.filter(
              (event) => compare(event, searchInput.value) && checkbox.value.includes(event.category)
              );
              main.innerHTML = filtrados.map((el) => cardGenerator(el)).join(" ");
          } else {
            filtrados = events.filter(
              (event) => compare(event, searchInput.value)
              );
              main.innerHTML = filtrados.map((el) => cardGenerator(el)).join(" ");
          }
            
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
      filtrados = events.filter(
        (event) => compare(event, searchInput.value) && (checkList.length === 0 || checkList.includes(event.category))
        );
      main.innerHTML = filtrados.map((el) => cardGenerator(el)).join(" ");
    })
  
  
  
  
  
  
  };
  pastJs();
  
  