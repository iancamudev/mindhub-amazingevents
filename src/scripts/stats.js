let startStats = async () => {
    let { events, currentDate } = await fetchData();
    let categories = Array.from(new Set(events.map((event) => event.category)))

    let main = document.getElementById('main-stats')
    let firstTableContainer = document.getElementById('firstTable-container')
    let secondTableContainer = document.getElementById('secondTable-container')
    let thirdTableContainer = document.getElementById('thirdTable-container')
    
    //Primer tabla
    let displayFirstTable = ({events, container}) => {
        let {orderedEvents} = orderEvents({events, order: 'past', currentDate})
        let highestPA = percAttendance(orderedEvents, 'highest')
        let lowestPA = percAttendance(orderedEvents, 'lowest')
        let eventMaxCapacity = highestCapacity(orderedEvents)
        let card1 = templateCardStats('The highest percentage of attendance', highestPA.name, highestPA.percentageAttendance.toFixed(2).concat('%') )
        let card2 = templateCardStats('The lowest percentage of attendance', lowestPA.name, lowestPA.percentageAttendance.toFixed(2).concat('%') )
        let card3 = templateCardStats('Events with larger capacity', eventMaxCapacity.name, eventMaxCapacity.capacity )
        container.innerHTML = card1 + card2 + card3
    }
    displayFirstTable({events, container: firstTableContainer})

    let displaySecondTable = ({events,container}) => {
        let { orderedEvents, orderedCategories } = orderEvents({events, order: 'upcoming', currentDate})
        let categoryStats = categoriesFilter(orderedEvents, orderedCategories)
        container.innerHTML = categoryStats.map((obj)=>templateRowStats(obj.category, obj.revenues, obj.attendance.toFixed(2))).join(' ')
    }
    displaySecondTable({events, container: secondTableContainer })
    
    let displayThirdTable = ({events,container}) => {
        let { orderedEvents, orderedCategories } = orderEvents({events, order: 'past', currentDate})
        let categoryStats = categoriesPastFilter(orderedEvents, orderedCategories)
        container.innerHTML = categoryStats.map((obj)=>templateRowStats(obj.category, obj.revenues, obj.attendance.toFixed(2))).join(' ')
    }
    displayThirdTable({events, container: thirdTableContainer })
}
startStats();