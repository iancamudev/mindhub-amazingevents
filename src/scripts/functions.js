let parseDate = (date) => {
  const arr = date.split("-");
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return months[parseInt(arr[1])] + " " + (arr[2].at(0) == 0 ? arr[2].at(1) : arr[2]) + "th, " + arr[0];
};

let categoriesGenerator = (categories) => {
  return categories.map((category) => categoryTemplate(category)).join(' ')
}

let compare = (event, value) => {
  return (event.name.toLowerCase().includes(value.toLowerCase()) || event.description.toLowerCase().trim().includes(value.toLowerCase()) || 
        event.place.toLowerCase().includes(value.toLowerCase()))
}

let filterData = ({events, checkList, searchInput, container}) => {
  let filtrados
  if (checkList.length) {
    filtrados = events.filter(
      (event) => compare(event, searchInput.value) && checkList.includes(event.category));
  } else {
    filtrados = events.filter(
      (event) => compare(event, searchInput.value))
  } 
  container.innerHTML = filtrados.map((el) => cardGenerator(el)).join(" ");
  console.log(filtrados)
}