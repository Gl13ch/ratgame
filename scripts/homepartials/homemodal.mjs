window.addEventListener("DOMContentLoaded", ()=>{  
    const open = document.getElementById("hamburgerIcon")
    const modal = document.getElementById("homeModal")
    const home_save_and_exit = document.getElementById('home_save_and_exit')

    open.addEventListener("click", e => {
        modal.style.visibility = 'visible'
    })

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.style.visibility = 'hidden'
        }
    })

    home_save_and_exit.addEventListener('click', () => {
        // not needed right now but because everytime I go to home page the local storage is already saved
        // saveAll()

        clearSession()
        location.href = 'index.html'
    })
})

