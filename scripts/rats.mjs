class Rat {
    constructor(id, ratName, sex, breed, cage){
        this.id = id
        this.ratName = ratName
        this.sex = sex
        this.breed = breed
        this.cage = cage
        this.personality = randomIndex(personalityArr)
    }
    // FOR LOCAL STORAGE
    setPersonality(p){
        this.personality = p
    }
}

// const test = new Rat('id','name','sex','breed','cage')
// console.log(test.personality)

//REINSTANTIATE RATS
const reinstantiateRats = () => {
    playerRats = retrieve('playerrats')
    if (playerRats.length !== 0) {
        const temp = []
        for (let i = 0; i < playerRats.length; i++) {
            temp.push(new Rat(...Object.values(playerRats[i])))
            temp[i].setPersonality(playerRats[i].personality)
        }
        playerRats.length = 0
        for (let i = 0; i < temp.length; i++) {
            playerRats.push(temp[i])
        }
    }
    return playerRats
}
reinstantiateRats()


// could probably do sub class (super?) for mixed breeds. all the same traits except would have extra features (i.e hasRexFur, hasBristleCoatFur, hasTail, hasHairlessFur, hasDumboEars, hasSatinFur)

// class Rat {
//     constructor(id, name, sex, personality, breed, cage, fur, hasRedEyes){
//         this.id = id
//         this.name = name
//         this.sex = sex
//         // Can maybe just make personality random right here and not have to even push it, just set it for reinstantiate
//         // e.g. this.personality = random(personalityArr)
//         this.personality = personality
//         this.breed = breed
//         this.cage = cage
//         this.fur = fur
//         this.hasRedEyes = hasRedEyes
//         this.breedObj = []
//         this.happiness = 50
//         this.affection = 'neutral'
//         this.mood = 'neutral'
//         this.weight = 'normal'
//         this.health = 'normal'
//         this.tricks = []
//         this.endurance = 10
//         this.quickness = 10
//         this.jump = 10
//         this.grooming = 10
//         this.appearance = 10
//         this.charm = 10
//         this.toilet = 'untrained'
//         this.bed = 'untrained'
//         this.eating = 'untrained'
//         this.wheel = 'untrained'
//         this.nibbling = 'untrained'
//         this.competitionRank = 1
//         this.competitionEntered = ''
//         this.ageMonth = 1
//         this.ageYear = 0
//         this.mother = ''
//         this.father = ''
//     }
//     makeBaby (babyId, babyName, babySex, babyPersonality, babyBreed, babyCage, babyFur, babyHasRedEyes, babyMother, babyFather){
//         const baby = new Rat(babyId, babyName, babySex, babyPersonality, babyBreed, babyCage, babyFur, babyHasRedEyes)
//         console.log(baby)
//         baby.mother = babyMother
//         baby.father = babyFather
//         return baby
//     }
//     startingCage(cageIndex, newRat, newCageIndexHeldRats){
//         this.cage = cageIndex
//         newCageIndexHeldRats.push(newRat)
//     }
//     moveCage(cageIndex, newRat, newCageIndexHeldRats, oldCageIndexHeldRats, removeIndex){
//         this.cage = cageIndex
//         newCageIndexHeldRats.push(newRat)
//         oldCageIndexHeldRats.splice(removeIndex, 1)
//     }
//     ageUpMonth(){
//         this.ageMonth++
//     }
//     birthday(){
//         this.ageYear++
//     }
//     resetMonth(){
//         this.ageMonth = 0
//     }
//     // for when the object is recreated with local storage
//     setAgeMonth(month){
//         this.ageMonth = month
//     }
//     setAgeYear(year){
//         this.ageYear = year
//     }
//     setBreed(obj){
//         this.breedObj.push(obj)
//     }
// }

// // for breeding "genetics"
// class Breed {
//     constructor() {
//         this.standard = 0,
//         this.rex = 0,
//         this.tailless = 0,
//         this.hairless = 0,
//         this.satin = 0,
//         this.dumbo = 0,
//         this.bristleCoat = 0
//     }
// }

// // VARIABLES

// const furColors = ['beige', 'black', 'blue', 'blueBeige', 'champagne', 'chocolate', 'cocoa', 'lilac', 'mink', 'platinum', 'powderBlue', 'russianBlue', 'russianDove', 'skyBlue', 'white']

// const sexArr = ['Male', 'Female']

// const personalityArr = ['agile','anxious','attentive','bold', 'cautious','communicative','confident','curious','determined','docile','dominant','easy going','easy to handle','enthusiastic','friendly','cheerful','irritable','lively','shy','solitary','tame','tempermental','trusting']

// const moodArr = ['happy','sad','angry','content', 'thrilled', 'whatever', 'stressed']

// const foodTypeArr = ['cheap','normal','expensive']
// const foodAmountArr = ['few','normal','many']

// const affectionArr = ['hate','dislike','whatever','like','love','adore']

// const weightArr = ['skinny','slim','normal','tubby','fat']

// const healthArr = ['sick','normal','tip-top']

// const trainedLevel = ['untrained', 'barely trained', 'decently trained', 'trained', 'perfectly trained']

// const breedsArr = ['standard', 'rex', 'tailless', 'hairless','satin','dumbo','bristle coat']

// const competitions = ['eating contest','poleclimb', '10m dash', '100m dash', 'monkey bars', 'beauty contest', 'talent show']

// const activites = ['wheel','bed','potty','food','water']

// const userActions = ['go back', 'bathe', 'view stats', 'pet', 'grab','poke','give treat', 'brush']

// const foodAmount = ['few','normal','many']
// const foodType = ['cheap','standard','expensive']

// // DRAG AND DROP
// // let newX = 0
// // let newY = 0
// // let startX = 0
// // let startY = 0

// // $('.draggable').on('mousedown', event => {
// //     startX = event.clientX
// //     startY = event.clientY

// //     let id = event.currentTarget.id

// //     // current mouse position
// //     // console.log(startX,startY)
// //     $('.draggable').on('mousemove', event => {
// //         newX = startX - event.clientX
// //         newY = startY - event.clientY
    
// //         startX = event.clientX
// //         startY = event.clientY
    
// //         $(`#${id}`).css("top", ($(`#${id}`).offset().top - newY) + 'px')
// //         $(`#${id}`).css("left", ($(`#${id}`).offset().left - newX) + 'px')
    
// //         // console.log(newX,newY)
// //         // console.log(startX,startY)
// //         })
// //     $('.draggable').on('mouseup', event => {
// //         $('.draggable').off('mousemove')
// //     })
// // })

// // BREEDING
// const getRandomFromTwo = (item1, item2) => {
//     const rand = Math.floor(Math.random() * 2)
//     if (rand === 1) {
//         return item1
//     } else {
//         return item2
//     }
// }

// const redEyes = (eyes1, eyes2) => {
//     // console.log('rat1:',eyes1)
//     // console.log('rat2:',eyes2)
//     if (eyes1 === true && eyes2 === true) {
//         // console.log(`rat1 red: ${eyes1 === true} rat2 red ${eyes2 === true}`)
//         return eyes1
//     } else if (eyes1 === false && eyes2 === false) {
//         // console.log(`rat1 red: ${eyes1 === true} rat2 red ${eyes2 === true}`)
//         return eyes1
//     } else {
//         // console.log('else')
//         const rand = Math.floor(Math.random() * 2)
//         if (rand === 1) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// let selectedRat = ''
// let loopCount = 0
// const generateMatchmaking = () => {
//     rats.forEach(element => {
//         $('#blankRat1').after(`<option value= ${element.name}> ${element.name}</option>`)
//     });
// }

// $('select[name="ratToBreed1"]').on('change', event => {
//     selectedRat = $('select[name="ratToBreed1"]').val()
    
//     rats.forEach(element => {
//         if (selectedRat !== element.name) {
//             loopCount++
//             $('#blankRat2').after(`<option value= ${element.name}> ${element.name}</option>`)
//         }
//     })
//     $('#rat2').show()
//     // $('#matchmakingSubmit').show()
//     selectedRat = ''
//     if (loopCount === 1) {
//         $('#matchmakingSubmit').show()
//         $('#matchmakingName').show()
//     }
// })

// $('select[name="ratToBreed2"]').on('change', event => {
//     $('#matchmakingSubmit').show()
//     $('#matchmakingName').show()
// })

// $('.matchmakingForm').on('submit', event => {
//     event.preventDefault()

//     let rat1 = $('select[name="ratToBreed1"]').val()
//     let rat2 = $('select[name="ratToBreed2"]').val()
//     let nameInput = $('#matchmakingName').val()
//     let idCounter = rats[rats.length - 1].id + 1
//     let mother = ''
//     let father = ''

//     rats.forEach(element => {
//         if (rat1 === element.name) {
//         rat1 = element
//         }  
//         if (rat2 === element.name) {
//         rat2 = element
//         }
//     });

//     if (rat1.sex === 'Female') {
//         mother = rat1
//         father = rat2
//     } else {
//         mother = rat2
//         father = rat1
//     }

//     rats.push(mother.makeBaby(idCounter, nameInput, randomSex, randomPersonality, getRandomFromTwo(mother.breed, father.breed), 'large cage', getRandomFromTwo(mother.fur, father.fur), redEyes(mother.hasRedEyes, father.hasRedEyes), mother.name, father.name))

//     // console.log(rats)
// })

// $('.canvas').on( "mouseenter", event => {
//     const currentRat = event.currentTarget

//     for (let i = 0; i < rats.length; i++) {

//         if (rats[i].id == currentRat.id) {
//              let ratId = i

//              $('<p>').addClass('ratName').text(`${rats[ratId].name}`).appendTo(currentRat)
//         }
//     }
// }).on( "mouseleave", () =>{
    
//     $('.ratName').remove()
// });

// // MODAL
// const $foodAmount = $('label[for="foodAmount"]')
// const $foodType = $('label[for="foodType"]')

// const $modal = $('#modal')
// const $close = $('#close')
// const $open = $('.canvas')//click on rat

// //close modal
// const closeModal = () => {
//     $modal.hide()
// }
// $close.on('click',closeModal)

// let currentRatId = []
// let currentCage = []

// // open modal
// $open.on('click', (event) => {
//     $('.allRatInfo').remove()
//     $('.move').remove()
//     currentRatId.length = 0
//     currentCage.length = 0

//     $modal.show()

//     // let eventID = event.currentTarget
//     let eventID = event.currentTarget.getAttribute('id')

//     currentRatId.push(eventID)
    
//     for (let i = 0; i < rats.length; i++) {

//         if ((rats[i].id) == eventID) {
//             //get the array
//              let ratId = i
//              let currentRatCage = rats[ratId].cage

//              currentCage.push(rats[ratId].cage)

//             //to put all info in
//             const $moreInfo = $('<div>').addClass('allRatInfo').appendTo($('#modalText'))

//             const $ratInfo =  $('<div>').addClass('ratInfo').appendTo($moreInfo)
//             const $ratTricks =  $('<div>').addClass('ratTricks').appendTo($moreInfo)
//             const $ratCondition =  $('<div>').addClass('ratCondition').appendTo($moreInfo)
//             const $ratStats =  $('<div>').addClass('ratStats').appendTo($moreInfo)
//             const $ratTraining =  $('<div>').addClass('ratTraining').appendTo($moreInfo)
//             const $ratBreed =  $('<div>').addClass('ratBreed').appendTo($moreInfo)
//             const $ratCompetition =  $('<div>').addClass('ratCompetition').appendTo($moreInfo)

//             // rat info
//             $('<p>').addClass('ratNameInfo').text(`name: ${rats[ratId].name}`).appendTo($ratInfo)

//             $('<p>').addClass('ratAge').text(`${rats[ratId].ageMonth} month`).appendTo($ratInfo)

//             $('<p>').addClass('ratSex').text(`sex: ${rats[i].sex}`).appendTo($ratInfo)

//             $('<p>').addClass('ratPersonality').text(`personality: ${rats[i].personality}`).appendTo($ratInfo)

//             $('<p>').addClass('ratMother').text(`Mother: ${rats[i].mother}`).appendTo($ratInfo)

//             $('<p>').addClass('ratFather').text(`Father: ${rats[i].father}`).appendTo($ratInfo)

//             $('<p>').addClass('ratCage').text(`Cage: ${rats[i].cage}`).appendTo($ratInfo)

//             // rat tricks
//             $('<p>').addClass('ratTricks').text(`Tricks: ${rats[i].tricks}`).appendTo($ratTricks)

//             // rat condition
//             $('<p>').addClass('ratAffection').text(`affection: ${rats[i].affection}`).appendTo($ratCondition)

//             $('<p>').addClass('ratMood').text(`mood: ${rats[i].mood}`).appendTo($ratCondition)

//             $('<p>').addClass('ratWeight').text(`weight: ${rats[i].weight}`).appendTo($ratCondition)

//             $('<p>').addClass('ratHealth').text(`health: ${rats[i].health}`).appendTo($ratCondition)

//             // rat stats
//             $('<p>').addClass('ratEndurance').text(`Endurance: ${rats[i].endurance}`).appendTo($ratStats)

//             $('<p>').addClass('ratQuickness').text(`Quickness: ${rats[i].quickness}`).appendTo($ratStats)

//             $('<p>').addClass('ratJump').text(`Jump: ${rats[i].jump}`).appendTo($ratStats)

//             $('<p>').addClass('ratGrooming').text(`Groomin: ${rats[i].grooming}`).appendTo($ratStats)

//             $('<p>').addClass('ratAppearance').text(`Appearance: ${rats[i].appearance}`).appendTo($ratStats)

//             $('<p>').addClass('ratCharm').text(`Charm: ${rats[i].charm}`).appendTo($ratStats)

//             // rat training
//             $('<p>').addClass('ratToilet').text(`Toilet: ${rats[i].toilet}`).appendTo($ratTraining)

//             $('<p>').addClass('ratBed').text(`Bed: ${rats[i].bed}`).appendTo($ratTraining)

//             $('<p>').addClass('ratEating').text(`Eating: ${rats[i].eating}`).appendTo($ratTraining)

//             $('<p>').addClass('ratWheel').text(`Wheel: ${rats[i].wheel}`).appendTo($ratTraining)

//             $('<p>').addClass('ratNibbling').text(`Nibbling: ${rats[i].nibbling}`).appendTo($ratTraining)

//             // rat breed
//             $('<p>').addClass('ratBreed').text(`breed: ${rats[i].breed}`).appendTo($ratBreed)

//             //rat competition
//             $('<p>').addClass('ratCompetitionRank').text(`rank: ${rats[i].competitionRank}`).appendTo($ratCompetition)

//             $('<p>').addClass('ratCompetitionEntered').text(`Entered: ${rats[i].competitionEntered}`).appendTo($ratCompetition)

//             // Food
//             $('<p>').addClass('ratFoodAmount').text(`Food amount: ${getFoodAmount(currentRatCage)}`).appendTo($ratInfo)

//             $('<p>').addClass('ratFoodType').text(`Food type: ${getFoodType(currentRatCage)}`).appendTo($ratInfo)

//             $foodAmount.appendTo($('.ratFoodAmount'))
//             $foodType.appendTo($('.ratFoodType'))

//             if (globalCapacity() === true) {
//                 checkCageCapacity()
//             }
//         }
//     }
// })

// // for modal
// const getCurrentCage = () => {
//     let cage = ''
//     cages.forEach(element => {
//         if (element.cageName === currentCage[0]) {
//             cage = element
//         }
//     })
//     return cage
// }

// // food amount for selected cage
// const getFoodAmount = (selectedCage) => {
//     let cage = selectedCage
//     let foodAmount = ''
//     cages.forEach(element => {
//         // console.log(cage)
//         // console.log(element.cageName)
//         if (cage === element.cageName) {
//             foodAmount = element.foodAmount

//         }
//     })
//     return foodAmount
// }

// // food amount for selected cage
// const getFoodType = (selectedCage) => {
//     let cage = selectedCage
//     let foodType = ''
//     cages.forEach(element => {
//         // console.log(cage)
//         // console.log(element.cageName)
//         if (cage === element.cageName) {
//             foodType = element.foodType

//         }
//     })
//     return foodType
// }

// // Only works once because I am reappending the element the click event is on, therefore getting rid of the click event
// // reload page seems like best option for now
// // need to come back and tweak, it is a little finicky
// $('.foodAmount').on('click', event => {
//     JSON.parse(localStorage.getItem('cageArray'))
//     let amount = $('.foodAmount').val()
//     let currentCage = getCurrentCage()
//     if (amount !== '---') {
//         if (currentCage.foodAmount !== amount) {
//             currentCage.changeFoodAmount(amount)
//             localStorage.setItem('cageArray', JSON.stringify(cages))
//             location.reload()
//         }
//     }
// })

// $('.foodType').on('click', event => {
//     JSON.parse(localStorage.getItem('cageArray'))
//     let type = $('.foodType').val()
//     let currentCage = getCurrentCage()
//     if (type !== '---') {
//         if (currentCage.foodType !== type) {
//             currentCage.changeFoodType(type)
//             localStorage.setItem('cageArray', JSON.stringify(cages))
//             location.reload()
//         }  
//     }
// })

// //move rat to another cage
// //should not show the cage the rat is currently in 
// $('.moveRat').on('submit', event => {
//     // event.preventDefault()

//     const $cageInput = $('input[name="ratInfoCage"]')
//     let cageInput = $('input[name="ratInfoCage"]:checked').val()
    
//     let chosenRatIndex = 0
//     for (let i = 0; i < rats.length; i++) {
//         if (rats[i].id === Number(currentRatId[0])) {
//             chosenRatIndex = i
//         }
//     }

//     let cageIndex = 0
//     let oldCageIndex = rats[chosenRatIndex].cage
//     for (let i = 0; i < cages.length; i++) {
//         if (cageInput === cages[i].cageName) {
//             cageIndex = i
//         }
//         if (oldCageIndex === cages[i].cageName) {
//             oldCageIndex = i
//         }
//     }
    
//     let oldCageRatIndex = 0
//     for (let i = 0; i < cages[oldCageIndex].heldRats.length; i++) {
//         if (rats[chosenRatIndex].name === cages[oldCageIndex].heldRats[i].name) {
//             oldCageRatIndex = i
//         }
//     }
    
//     //clear input
//     $cageInput.prop('checked', false)

//     //get local storage
//     JSON.parse(localStorage.getItem('ratArray'))
//     JSON.parse(localStorage.getItem('cageArray'))

//     //move rat from one cage to another
//     rats[chosenRatIndex].moveCage(cages[cageIndex].cageName, rats[chosenRatIndex],cages[cageIndex].heldRats, cages[oldCageIndex].heldRats, oldCageRatIndex)

//     //set local storage
//     localStorage.setItem('ratArray', JSON.stringify(rats))
//     localStorage.setItem('cageArray', JSON.stringify(cages))
// })

// //buy a rat
// $('.ratForm').on('submit', event => {      
//     if (globalCapacity() === true) {
//         event.preventDefault()

//         //rat id
//         let idCounter = 0
//         if (rats.length !== 0) {
//             idCounter = rats[rats.length - 1].id + 1
//         }

//         let nameInput = $('#name').val()

//         let sexInput = ratToBuy[0].sex

//         let breedInput = ratToBuy[0].breed

//         let furInput = ratToBuy[0].fur

//         let hasRedEyesInput = ratToBuy[0].hasRedEyes

//         const $cageInput = $('input[name="shopCage"]')
//         let cageInput = $('input[name="shopCage"]:checked').val()

//         //clears after submit
//         $('#name').val('')
//         // $sexInput.prop('checked', false)
//         // $breedInput.prop('checked', false)
//         $cageInput.prop('checked', false)

//         // Cage logic
//         if (onlyAvailableCage.length === 1){
//             cageInput = onlyAvailableCage[0].cageName
//         }

//         let cageIndex = 0
//         for (let i = 0; i < cages.length; i++) {
//             if (cageInput === cages[i].cageName) {
//                 cageIndex = i
//             }
//         }

//         let newRattyIndex = 0
    
//         if (rats.length > 0) {
//             newRattyIndex = rats.length
//         }      

//         //local storage get rats
//         JSON.parse(localStorage.getItem('ratArray'))
//         JSON.parse(localStorage.getItem('cageArray'))

//         if (nameInput === 'gwenk'){
//             rats.push(new Rat(nameInput, 'male', 'stinky', 'rex',cageInput))

//             rats[newRattyIndex].startingCage(cages[cageIndex].cageName, rats[newRattyIndex], cages[cageIndex].heldRats)
//         } else {
//             rats.push(new Rat(idCounter, nameInput, sexInput, randomPersonality, breedInput, cageInput, furInput, hasRedEyesInput))
            
//             rats[newRattyIndex].startingCage(cages[cageIndex].cageName, rats[newRattyIndex], cages[cageIndex].heldRats)
//             rats[newRattyIndex].setBreed(setBreedInput())
//         }

//         console.log(rats)
        
//         //local storage add new rat to cage
//         localStorage.setItem('ratArray', JSON.stringify(rats))
//         localStorage.setItem('cageArray', JSON.stringify(cages))
//     } else {
//         alert('you do not have enough room')
//     }
// })