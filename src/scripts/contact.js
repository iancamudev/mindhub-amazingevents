
let modal = document.getElementById("contactModal");

document.getElementById("btnContactModal").onclick = () => modal.style.display = "block";

document.getElementById("closeModal").onclick = () => modal.style.display = "none";;

document.getElementById("sendBtn").onclick = () => {
    
   var form = document.querySelectorAll('.form')

    let array_form = Array.from(form)
    console.log(array_form);
    array_form.forEach( each => each.addEventListener(
        'submit',
         event => {
                    if ( each.checkValidity() ) {
                        Swal.fire({ 'title': 'Sent',
                                'text': `We will contact you as soon as possible.`,
                                'icon': 'success'   });
                                yourname.value=""
                                email.value=""
                                message.value=""
                        event.preventDefault()
                        event.stopPropagation()
                        modal.style.display = "none"
                    }else{  
                            event.preventDefault()
                            event.stopPropagation()
                            //each.classList.add('ring-red-900 was-validated')
                    }
                }
            , false)  ) 
                                                     
  }


