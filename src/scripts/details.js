let detailJs = async () => {
    let { events, currentDate } = await fetchData();
    const id = new URLSearchParams(window.location.search).get('id')

    let event = events.find((e)=>e._id == id)
    let main = document.getElementById("main-home");
    main.innerHTML = detailTemplate(event)

    
};
detailJs();
  
  