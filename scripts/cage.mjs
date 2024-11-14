class Cage{
    constructor(id, tag, cageName, capacity, heldRats = [],foodAmount = "normal", foodType = "standard"){
        this.id = id
        this.tag = tag
        this.cageName = cageName
        this.capacity = capacity
        this.heldRats = heldRats
        this.foodAmount = foodAmount
        this.foodType = foodType
    } 
    changeFoodAmount (amount){
        this.foodAmount = amount
    }
    changeFoodType (type){
        this.foodType = type
    }
}

// CLEAR LOCAL STORAGE
// clear()

// REINSTANTIATE
const reinstantiateCages = () => {
    playerCages = retrieve('playercages')
    if (playerCages.length !== 0) {
        //reinstantiate cages
        const temp = []
        for (let i = 0; i < playerCages.length; i++) {
            temp.push(new Cage(...Object.values(playerCages[i])))
        }
        playerCages.length = 0
        for (let i = 0; i < temp.length; i++) {
            playerCages.push(temp[i])
        }
    }
}
reinstantiateCages()

// CREATE CAGES
const createCageID = () => {
   let cageID = `C${playerCages.length + 1}`
   return cageID
}

const createCages = {
    small: () => {
        c = new Cage(createCageID(), 'small', 'Small Cage', 2)
        return c
    },
    large: () => {
        c = new Cage(createCageID(),'large','Large Cage', 3)
        return c
    },
    twostory: () => {
        c = new Cage(createCageID(),'twostory','Two Story Cage', 4)
        return c
    },
    athletic: () => {
        c = new Cage(createCageID(),'athletic','Athletic Cage', 2)
        return c
    },
    beauty: () => {
        c = new Cage(createCageID(),'beauty','Beauty Cage', 2)
        return c
    }
}

const initialCage = () => {
    if (playerCages.length === 0) {
        playerCages.push(createCages['small']())
        save('playercages', playerCages)
    }
}
initialCage()





// const globalCapacity = () => {
//     for (let i = 0; i < cages.length; i++) {
//         if (!(cages[i].capacity <= cages[i].heldRats.length)) {
//             return true
//         } 
//     }
// }

// let onlyAvailableCage = []
//     let ifRatInCage = []

//     // can maybe split this into two functions check for rat at home and check for shop
//     const checkCageCapacity = () => {
//         const $moveText = $('<p>').addClass('move').text('Would you like to move your rat to another cage?')

//         //resets on function call
//         onlyAvailableCage.length = 0
//         ifRatInCage.length = 0

//         //resets values
//         $('input[name="shopCage"]').remove()
//         $('label[for="shopCage"]').remove()
//         $('input[name="ratInfoCage"]').remove()
//         $('label[for="ratInfoCage"]').remove()
//         $('#moveSubmit').hide()

//         //if capacity is available push into array
//         for (let i = 0; i < cages.length; i++) {
//             if (cages[i].capacity <= cages[i].heldRats.length) {
//                 // console.log("skipped")
//             } else {
//                 // console.log('pushed to temp array')
//                 onlyAvailableCage.push(cages[i])
//             }
//         }

//         //if rat is in cage put that cage into array to be checked against
//         for (let i = 0; i < cages.length; i++) {
//             cages[i].heldRats.forEach(element => {
//                 if (element.id !== Number(currentRatId[0])) {
//                     // console.log('skip')
//                 } else {
//                     // console.log('push')
//                     ifRatInCage.push(cages[i])
//                 }
//             });
//         }

//         for (let j = 0; j < onlyAvailableCage.length; j++) {

//         if (ifRatInCage.length > 0) {
//             if (ifRatInCage[0].tag === onlyAvailableCage[j].tag) {
                
//             } else {
//                 //users cages
//                 const $ratInfoCageRadio = $(`<input type="radio" name="ratInfoCage" required="true" value='${onlyAvailableCage[j].cageName}'>`)
//                 const $ratInfoCageLabel = $(`<label for="ratInfoCage">${onlyAvailableCage[j].cageName}</label>`)

//                 const $inRatInfo = $('.moveRat').prepend($ratInfoCageRadio,$ratInfoCageLabel)

//                 $moveText.prependTo($('#modalText'))
//                 $('#moveSubmit').show()
//             }
//             }
//         }

//         //if there is only one cage in the array no need to display
//         if (onlyAvailableCage.length > 1) {
//             // console.log('2 or more cages')
//             let availableCageRatId = []

//             //loop through available cages with capacity to display them to user
//             for (let j = 0; j < onlyAvailableCage.length; j++) {

//                 //shop
//                 const $shopCageRadio = $(`<input type="radio" name="shopCage" required="true" value='${onlyAvailableCage[j].cageName}'>`)
//                 const $shopCageLabel = $(`<label for="shopCage">${onlyAvailableCage[j].cageName}</label>`)
                
//                 //shop can show all
//                 const $inShop = $('#ratSubmit').before($shopCageRadio,$shopCageLabel)      
//             }
//         }
//     }


//     // Buy a cage
//     $('.cageForm').on('submit', event => {
//         // event.preventDefault()

//         const $cageInput = $('input[name="cage"]')
//         let cageInput = $('input[name="cage"]:checked').val()

//         //clears after submit
//         $cageInput.prop('checked', false)

//         //local storage get rats
//         JSON.parse(localStorage.getItem('cageArray'))

//         //push specified cage into userCage
//         for (let i = 0; i < cageContainer.length; i++) {
//             if (cageContainer[i].tag === cageInput) {
//                 cages.push(cageContainer[i])
//             }
//         }

//         //local storage add new rat to cage
//         localStorage.setItem('cageArray', JSON.stringify(cages))
//     })

// export {Cage, cageContainer}