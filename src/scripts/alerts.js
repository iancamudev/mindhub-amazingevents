let notEventsFound = () =>{

    Swal.fire({
          html: `
              <div class="flex flex-col items-center" > 
                <img src="../assets/no_result.png" class="w-32"/>
                  <div class="text-[#D90368]">
                    <h4 class="">No events found</h4>
                    <p class=""> Try another search!</p>
                  </div>
              </div>
      `,
        showCloseButton: false,
        confirmButtonText: 'Back',
        width: '340px',
        //grow: 'row',
        padding: '1rem',
        scrollbarPadding: false,
        confirmButtonColor: '#d90368',
        backdrop: 'rgba(247,0,18,0.38)',
      }).then(()=>fetchData()
      ).then((response)=>{
        let inputSearch = document.getElementById('search-input')
        inputSearch.value = ''
        let checkList = document.querySelectorAll('input[type="checkbox"]:checked').forEach((c)=>c.checked = false)
        filterData({events: response.events, currentDate: response.currentDate})
    })
}
// let main = document.getElementById('main-home')
// let inputSearch = document.getElementById('search-input')
// inputSearch.value = ''
// filterData({events, container:main})
