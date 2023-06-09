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

let getEvents = ({events, currentDate}) => {
  const currentPage = window.location.href.split('/').at(-1).split('.')[0]
  let orderedEvents;
  switch (currentPage) {
    case 'upcoming' : 
    orderedEvents = events.filter((event)=> new Date(event.date) > new Date(currentDate)).sort((a,b)=>new Date(a.date) - new Date(b.date));
    return orderedEvents
    case 'past' : 
    orderedEvents = events.filter((event)=> new Date(event.date) < new Date(currentDate)).sort((a,b)=> new Date(b.date) - new Date(a.date));
    return orderedEvents
    default: 
    return events
  }
}



let displayEvents = (events) => {
  let main = document.getElementById('main-home')
  main.innerHTML = events.map((el) => cardGenerator(el)).join(" ");
}

let filterData =  ({events, currentDate, searchInput, checkList}) => {
  //Obtenemos los eventos segun si los pide por upcoming past o en home
  let filtrados = getEvents({events, currentDate})
  //Si hay checklist filtramos por su value
  if ((checkList && checkList.length) && (searchInput.value !== '')) {
    filtrados = filtrados.filter(
      (event) => checkList.includes(event.category) && compare(event, searchInput.value)) 
  //Si hay un search input filtramos por su value
  } else if ((searchInput && searchInput.value !== '') && !checkList.length) {
    filtrados = filtrados.filter(
      (event) => compare(event, searchInput.value))
  } else if ((checkList && checkList.length) && !searchInput.value) {
    filtrados = filtrados.filter(
      (event) => checkList.includes(event.category))
  }
  filtrados.length > 0 ? displayEvents(filtrados) : notEventsFound()
}


//Navbar
window.addEventListener('resize', ()=>{  
  let nav = document.getElementById('nav-container')
  if (window.innerWidth > 750) {
    nav.innerHTML = navbarTemplate()
  } else {
    nav.innerHTML = navbarMobileTemplate()
  }
})
let displayNavbar = () => {
  let nav = document.getElementById('nav-container')
  if (window.innerWidth > 750) {
    nav.innerHTML = navbarTemplate()
  } else {
    nav.innerHTML = navbarMobileTemplate()
  }
}
displayNavbar()

let orderEvents = ({events, order, currentDate}) => {
  let orderedEvents;
  switch (order) {
    case 'upcoming' : 
    orderedEvents = events.filter((event)=> new Date(event.date) > new Date(currentDate)).sort((a,b)=>new Date(a.date) - new Date(b.date));
    break
    case 'past' : 
    orderedEvents = events.filter((event)=> new Date(event.date) < new Date(currentDate)).sort((a,b)=> new Date(b.date) - new Date(a.date));
    break
  }
  let orderedCategories = Array.from(new Set(orderedEvents.map((event)=>event.category)))
  return {orderedEvents, orderedCategories}
}

let percAttendance = (events, value) => {
  let arr = events.map((event)=>{return {name: event.name, percentageAttendance: (event.assistance / event.capacity) * 100}}).sort((a,b)=>b.percentageAttendance - a.percentageAttendance)
  return value === 'highest' ? arr[0] : arr.at(-1)
}
let highestCapacity = (events) => {
  let arr = events.sort((a,b)=>b.capacity - a.capacity)
  return arr[0]
}

let categoriesFilter = (events, categories) => {
  let arr = []
  for (let category of categories) {
    let revenues = events.reduce((revenues, event) => revenues += (event.category === category ? event.price * event.estimate : 0) , 0)
    let capacity = events.reduce((capacity, event) => capacity += (event.category === category ? event.capacity : 0) , 0)
    let estimate = events.reduce((estimate, event) => estimate += (event.category === category ? event.estimate : 0) , 0)
    arr.push({category: category, revenues, attendance: (estimate / capacity ) * 100
     })
  }
  return arr
}

let categoriesPastFilter = (events, categories) => {
  let arr = []
  for (let category of categories) {
    let revenues = events.reduce((revenues, event) => revenues += (event.category === category ? event.price * event.assistance : 0) , 0)
    let capacity = events.reduce((capacity, event) => capacity += (event.category === category ? event.capacity : 0) , 0)
    let assistance = events.reduce((assistance, event) => assistance += (event.category === category ? event.assistance : 0) , 0)
    arr.push({category: category, revenues, attendance: (assistance / capacity ) * 100
     })
  }
  return arr
}