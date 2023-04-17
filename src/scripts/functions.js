let parseDate = (date) => {
  const arr = date.split("-");
  const months = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre",
  };
  return arr[2] + " de " + months[parseInt(arr[1])] + " de " + arr[0];
};

let categoriesGenerator = (categories) => {
  return categories.map((category) => categoryTemplate(category)).join(' ')
}

let compare = (event, value) => {
  return (event.name.toLowerCase().includes(value.toLowerCase()) || event.description.toLowerCase().trim().includes(value.toLowerCase()) || 
        event.place.toLowerCase().includes(value.toLowerCase()))
}
