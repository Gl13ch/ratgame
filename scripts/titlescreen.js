// to test if no data exists
// clearData()

const newGame = () => {
    if (localStorage.length === 0 || confirm('are you sure you want to start a new game?')) {
        isNewGame = true
        createFreshData()
        location.href = 'shop.html'
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const new_game = document.getElementById('new_game')
    new_game.addEventListener("click", newGame)

    const load = document.getElementById('load')
    if (localStorage.length === 0) {
        load.disabled = true
    }
    load.addEventListener("click",()=>{location.href ='home.html'})
})