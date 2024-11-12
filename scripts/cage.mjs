class Cage{
  constructor(tag, cageName, capacity, cost, heldRats = [],foodAmount = "normal", foodType = "standard"){
      this.tag = tag
      this.cageName = cageName
      this.capacity = capacity
      this.cost = cost
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

const cageContainer = []

const smallCage = new Cage('SMALL','small cage', 2,'$100')
const largeCage = new Cage('LARGE','large cage', 3, '$200')
const twoStoryCage = new Cage('TWOSTORY','2-story cage', 4,'$300')
const athleticCage = new Cage('ATHLETIC','sporty cage', 2,'$400')
const beautyCage = new Cage('BEAUTY','beauty cage', 2,'$400')

cageContainer.push(smallCage)
cageContainer.push(largeCage)
// cageContainer.push(twoStoryCage)
// cageContainer.push(athleticCage)
// cageContainer.push(beautyCage)

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