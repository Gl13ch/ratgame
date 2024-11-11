console.log('storage.mjs')
// // IMPORTS
// import { Cage, cageContainer} from "./cage.mjs"
// import { Rat } from "./rats.mjs"

// //LOCAL STORAGE VARIABLES
// let rats = []
// let cages =[cageContainer[0]]
// let currentDate = {
//     timeOfDay:'evening',
//     day: 'Tuesday',
//     week: 1,
//     month: 'January',
//     year: 1,
// }

// // NEW GAME
// if (localStorage.length === 0) {
//     localStorage.setItem('ratArray', JSON.stringify(rats))
//     localStorage.setItem('cageArray', JSON.stringify(cages))
//     localStorage.setItem('currentDate', JSON.stringify(currentDate))
// }

// // START OVER
// // localStorage.removeItem('ratArray')
// // localStorage.removeItem('cageArray')
// // localStorage.removeItem('currentDate')

// // localStorage.clear()

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
