window.addEventListener("DOMContentLoaded", ()=>{  
    const open = document.getElementById("hamburgerIcon")
    const modal = document.getElementById("homeModal")

    open.addEventListener("click", e => {
        modal.style.visibility = 'visible'
    })

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.style.visibility = 'hidden'
        } 
    })
})

