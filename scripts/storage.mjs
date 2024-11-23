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

// CLEAR ALL DATA AND CREATE LOCAL STORAGE WITH INITIAL DATA
const clear = () => {
    // CLEAR DATA
    localStorage.clear()
    // SET DATA
    localStorage.setItem('date', JSON.stringify(date))
    localStorage.setItem('playercages', JSON.stringify(playerCages))
    localStorage.setItem('playerrats', JSON.stringify(playerRats))
}
// clear()

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

// SESSION STORAGE----------------------
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






























// // LOAD
// const load = () => {
//     //make sure elements are populated with local storage
//     currentDate = (JSON.parse(localStorage.getItem('currentDate')))
//     rats = (JSON.parse(localStorage.getItem('ratArray')))
//     cages = (JSON.parse(localStorage.getItem('cageArray')))

//     const tempRats = []
//     const tempCages = []

//     // reinstantiate rats
//     for (let i = 0; i < rats.length; i++) {
//         tempRats.push(new Rat(...Object.values(rats[i])))
//         tempRats[i].setAgeMonth(rats[i].ageMonth)
//         tempRats[i].setAgeYear(rats[i].ageYear)
//     }
//     rats.length = 0
//     for (let i = 0; i < tempRats.length; i++) {
//         rats.push(tempRats[i])
//     }
    
//     //reinstantiate cages
//     for (let i = 0; i < cages.length; i++) {
//         tempCages.push(new Cage(...Object.values(cages[i])))
//     }
//     cages.length = 0
//     for (let i = 0; i < tempCages.length; i++) {
//         cages.push(tempCages[i])
//     }

//     showCages()
// }

// load()
