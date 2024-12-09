let isNewGame = false

// INITIAL DATA
let date = {
    timeOfDay:'evening',
    day: 'TUE',
    week: 1,
    month: 1,
    year: 1,
}
let playerCages = []
let playerRats = []
let playerName = ''

const createInitialData = () => {
    // if (localStorage.length === 0) {
        localStorage.setItem('date', JSON.stringify(date))
        localStorage.setItem('playercages', JSON.stringify(playerCages))
        localStorage.setItem('playerrats', JSON.stringify(playerRats))
    // }
}

// CLEAR
const clearData = () => {
    localStorage.clear()
}

// CLEAR ALL DATA AND CREATE LOCAL STORAGE WITH INITIAL DATA
const createFreshData = () => {
    // CLEAR DATA
    localStorage.clear()
    // SET DATA
    localStorage.setItem('date', JSON.stringify(date))
    localStorage.setItem('playercages', JSON.stringify(playerCages))
    localStorage.setItem('playerrats', JSON.stringify(playerRats))
}
// createFreshData()

// REMOVE SINGLE DATA
const remove = (key) => {
    localStorage.removeItem(key)
}

// RESET CAGES AND RATS
// remove('playercages')
// remove('playerrats')
// localStorage.setItem('playercages', JSON.stringify(playerCages))
// localStorage.setItem('playerrats', JSON.stringify(playerRats))

// RETRIEVE DATA
const retrieve = (key = String) => {
    let data = (JSON.parse(localStorage.getItem(key)))
    return data
}

// SAVE DATA OR CREATE NEW DATA
const save = (key = String, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const saveAll = () => {
    localStorage.setItem('date', JSON.stringify(date))
    localStorage.setItem('playercages', JSON.stringify(playerCages))
    localStorage.setItem('playerrats', JSON.stringify(playerRats))
}

// SESSION STORAGE----------------------
const clearSession = () => {
    sessionStorage.clear()
}

// REMOVE SINGLE DATA
const sessionRemove = (key) => {
    sessionStorage.removeItem(key)
}

// RETRIEVE DATA
const sessionRetrieve = (key = String) => {
    let data = (JSON.parse(sessionStorage.getItem(key)))
    return data
}

// SAVE DATA OR CREATE NEW DATA
const sessionSave = (key = String, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}
