class ShopRats {
    constructor(shopId, breed, sex, personality, fur, hasRedEyes) {
        this.shopId = shopId
        this.breed = breed
        this.sex = sex
        this.personality = personality
        this.fur = fur
        this.hasRedEyes = hasRedEyes

        if (this.breed === 'rex') {
            this.hasRexFur = true
        }
        if (this.breed === 'tailless') {
            this.isTailless = true
        }
        if (this.breed === 'satin') {
            this.isSatin = true
        }
        if (this.breed === 'hairless') {
            this.isHairless = true
        }
        if (this.breed === 'dumbo') {
            this.hasDumboEars = true
        }
        if (this.breed === 'bristleCoat') {
            this.hasBristleFur = true
        }
    }
}

// BUY NEW CAGE
const buyCage = (e) => {
    // e.preventDefault()

    const cageInput = document.querySelector('input[name=cage]:checked').value

    cageForm.reset()

    playerCages.push(createCages[cageInput]())
    
    save('playercages', playerCages)
}

// CREATE AVAILABLE CAGES FOR RAT
const createCageOptions = () => {
    const shopName = document.getElementById('name')
    const availableCages = getAvailableCages()

    if (availableCages.length > 1) {
        availableCages.forEach(element => {
            const cageOption = document.createElement("input")
            cageOption.type = "radio"
            cageOption.requried = "true"
            cageOption.name = "ratcage"
            cageOption.value = `${element.cageName}`
    
            const cageLabel = document.createElement("label")
            cageLabel.for = "ratcage"
            cageLabel.innerHTML = `${element.cageName}`
    
            ratForm.insertBefore(cageOption, shopName)
            ratForm.insertBefore(cageLabel, shopName)
        })
        // take out when css is done
        const br = document.createElement("br")
        ratForm.insertBefore(br, shopName)
    } else {
        const hiddenCage = document.createElement("input")
        hiddenCage.type = "hidden"
        hiddenCage.name = "ratcage"
        hiddenCage.value = `${availableCages[0].cageName}`
        ratForm.insertBefore(hiddenCage, shopName)
    }
}

// BUT NEW RAT
const buyRat = (e) => {
    // e.preventDefault()

    let idCounter = 1
    if (playerRats.length !== 0) {
        idCounter = playerRats[playerRats.length - 1].id + 1
    }
    
    let nameInput = document.getElementById('name').value

    let sexInput = document.querySelector('input[name=sex]:checked').value
    
    let breedInput = document.querySelector('input[name=breed]:checked').value

    let cageInput = ''
    if (getAvailableCages().length === 1) {
        cageInput = document.querySelector('input[name=ratcage]').value
    } else {
        cageInput = document.querySelector('input[name=ratcage]:checked').value
    }

    ratForm.reset()
    
    const newRatty = new Rat(idCounter, nameInput, sexInput, breedInput, cageInput)
    playerRats.push(newRatty)

    playerCages.forEach(element => {
        if (element.cageName === cageInput) {
            element.heldRats.push(newRatty)
        }
    })
    
    save('playercages', playerCages)
    save('playerrats', playerRats)
}

// const testLoad = () => {
//     const testShopRat = new ShopRats('id','satin','sex','personality','blue',true)
//     // console.log(testShopRat)  

//     const test3 = new RatBody({
//         parent: document.getElementById("shopRatsContainer"),
//         furColor: testShopRat.fur,
//         isSatin: testShopRat.isSatin,
//         hasRedEyes: testShopRat.hasRedEyes,
//     })
// }

const buyNewRatty = () => {
    if (globalCapacity() === true) {
        event.preventDefault()
    
        //rat id
        let idCounter = 0
        if (rats.length !== 0) {
            idCounter = rats[rats.length - 1].id + 1
        }
    
        let nameInput = $('#name').val()
    
        let sexInput = ratToBuy[0].sex
    
        let breedInput = ratToBuy[0].breed
    
        let furInput = ratToBuy[0].fur
    
        let hasRedEyesInput = ratToBuy[0].hasRedEyes
    
        const $cageInput = $('input[name="shopCage"]')
        let cageInput = $('input[name="shopCage"]:checked').val()
    
        //clears after submit
        $('#name').val('')
        // $sexInput.prop('checked', false)
        // $breedInput.prop('checked', false)
        $cageInput.prop('checked', false)
    
        // Cage logic
        if (onlyAvailableCage.length === 1){
            cageInput = onlyAvailableCage[0].cageName
        }
    
        let cageIndex = 0
        for (let i = 0; i < cages.length; i++) {
            if (cageInput === cages[i].cageName) {
                cageIndex = i
            }
        }
    
        let newRattyIndex = 0
    
        if (rats.length > 0) {
            newRattyIndex = rats.length
        }      
    
        //local storage get rats
        JSON.parse(localStorage.getItem('ratArray'))
        JSON.parse(localStorage.getItem('cageArray'))
    
        if (nameInput === 'gwenk'){
            rats.push(new Rat(nameInput, 'male', 'stinky', 'rex',cageInput))
    
            rats[newRattyIndex].startingCage(cages[cageIndex].cageName, rats[newRattyIndex], cages[cageIndex].heldRats)
        } else {
            rats.push(new Rat(idCounter, nameInput, sexInput, randomPersonality, breedInput, cageInput, furInput, hasRedEyesInput))
            
            rats[newRattyIndex].startingCage(cages[cageIndex].cageName, rats[newRattyIndex], cages[cageIndex].heldRats)
            rats[newRattyIndex].setBreed(setBreedInput())
        }
    
        console.log(rats)
        
        //local storage add new rat to cage
        localStorage.setItem('ratArray', JSON.stringify(rats))
        localStorage.setItem('cageArray', JSON.stringify(cages))
    } else {
        alert('you do not have enough room')
    }
}


//returns an array of 3 random fur colors
const createShopFurs = () => {
    const shopFurColors = []
    for (let i = 0; i < 3; i++) {
    const randomFur = randomIndex(furColors)
    shopFurColors.push(randomFur)
    }
    return shopFurColors
}

// returns an array of 3 random sex options
const createAvailableSexes = () => {
    const shopSexes = []
    for (let i = 0; i < 3; i++) {
        const randomSex = randomIndex(sexArr)
        shopSexes.push(randomSex)
    }
    return shopSexes
}

// returns false if there are dupes
// returns the array if all are unique
const checkForDupes = (array) => {
    const uniqueFur = new Set(array)
    if (uniqueFur.size !== array.length) {
        createShopFurs()
        return false
    } else {
        return array
    }
}

// returns false if they are all the same
// returns the array if they are not all the same
const allSame = (array) => {
    if (array.every(val => val === array[0])) {
        createAvailableSexes()
        return false
    } else {
        return array
    }
}

// random number between 0-20
const redEyesChance = () => {
    const random = Math.floor(Math.random() * 20)
    if (random === 1) {
        // console.log('has red eyes')
        return true
    }else{
        // console.log('has black eyes')
        return false
    }
}

const generateShopRats = () => {

    let breedInput = document.querySelector('input[name=breed]:checked').value
    
    let shopRats = []
    let currentBreed = breedInput
    let shopFurColors = []
    let shopSexesAvailable = []
    let shopRatIds = ['a','b','c']
    
    do {
        shopFurColors = checkForDupes(createShopFurs())
    } while (shopFurColors === false);

    do {
        shopSexesAvailable = allSame(createAvailableSexes())
    } while (shopSexesAvailable === false);

    for (let i = 0; i < 3; i++) {
        const randomPersonality = randomIndex(personalityArr)

        shopRats.push(new ShopRats(shopRatIds[i], currentBreed, shopSexesAvailable[i], randomPersonality, shopFurColors[i], redEyesChance()))
    }

    // CSS RATS HERE
    // shopRats.forEach(element => {
    //     let $shopRats = $('<div>').attr('id', element.shopId).addClass(`${element.breed} canvas shopRats`).css('cursor','pointer').appendTo($('.shopRatsContainer'))

    //     $(`#${element.breed.toUpperCase()}`).children().clone().prependTo($shopRats)

    //     if (element.breed != 'hairless') {
    //         let $body = $(`#${element.shopId}`).children('.ratBody').addClass(`${element.fur}`)
    //         let $ear = $(`#${element.shopId}`).children('.ear').addClass(`${element.fur}`)
    //         let $fur = $(`#${element.shopId}`).children('.fur').addClass(`${element.fur}`)

    //         let $rexFur = $(`#${element.shopId}`).children('.rexFur').addClass(`rexFur-${element.fur}`).css('background', 'transparent')
    //     }
    //     if (element.hasRedEyes === true) { 
    //         let $eyes = $(`#${element.shopId}`).children('.eyes').addClass(`red`)
    //     }
    // })

    return shopRats
} 

window.addEventListener('DOMContentLoaded', () =>{

    const breed = document.querySelectorAll('input[name="breed"]')

    breed.forEach(breed => {
        breed.addEventListener('change', generateShopRats)
    })

    // BUY NEW CAGE
    const cageForm = document.getElementById('cageForm')
    cageForm.addEventListener("submit", buyCage)

    // BUY NEW RAT
    const ratSubmit = document.getElementById('ratSubmit')
    if (globalCapacity() === true) {
        ratSubmit.disabled = false
        createCageOptions()
    }

    const ratForm = document.getElementById('ratForm')

    ratForm.addEventListener("submit", buyRat)
})

//     let currentShopRats = ''
    
//     //on choosing breed - generate shop rats
//     $('input[name="breed"]').on('change', event => {
//         // reset values
//         $('#a').remove()
//         $('#b').remove()
//         $('#c').remove()
//         $('.wantToBuy').remove()

//         currentShopRats = generateShopRats()
        
//         // mouseenter works wierd with delegating, but works fine nested.
//         $('.shopRats').on("mouseenter", event => {
//             const currentRat = event.currentTarget
//             for (let i = 0; i < currentShopRats.length; i++) {
//                 if (currentShopRats[i].shopId == currentRat.id) {
//                     $('<p>').addClass('ratSexes').text(`${currentShopRats[i].sex}`).appendTo(currentRat)
//                 }
//             }
//         }).on("mouseleave", () =>{
//             $('.ratSexes').remove()
//         });
//     })

//     const ratToBuy = []
//     let ifAlreadyClicked = true
//     $('.shopRatsContainer').on("click",".shopRats", event => {
//         if (ifAlreadyClicked === true) {
//             if (globalCapacity() === true) {
//                 // remove values
//                 $('.wantToBuy').remove()

//                 const $currentRat = event.currentTarget
//                 // console.log($currentRat)
//                 currentShopRats.forEach(element => {
//                     if ($currentRat.id !== element.shopId) {
//                         $(`#${element.shopId}`).hide()
//                     } else {
//                         ratToBuy.push(element)

//                         const $wantToBuy = $('<div>').addClass('wantToBuy').appendTo('.tempItems')
//                         $(`#${$currentRat.id}`).after($('.wantToBuy'))
//                         $('<p>').text('Would you like to buy this rat?').appendTo('.wantToBuy')
//                         $('<button>').addClass('yesButton').val('yes').text('Yes').appendTo($('.wantToBuy'))
//                         $('<button>').addClass('noButton').val('no').text('No').appendTo($('.wantToBuy'))
//                         ifAlreadyClicked = false
//                     }
//                 })
//             }
//         }
//     })

//     $('.shopRatsContainer').on('click',".yesButton", event => {
//         $('.wantToBuy').remove()
//         console.log(ratToBuy)

//         $('.shopName').show()
//         $('.shopSubmit').show()

//         // move onto submit
//     })

//     $('.shopRatsContainer').on('click',".noButton", event => {
//         // $('.shopRatsContainer').on("click",".shopRats")
//         $('.wantToBuy').remove()
//         $('.shopRats').show()
//         ratToBuy.length = 0
//         ifAlreadyClicked = true
//     })

//     //show shop items depending on what player wants to look at 
//     $('.shopItems').on('click', event => {
//         if ($('.shopItems').val() === 'rat'){
//             disableSubmit()
//             $('.hasSpace').remove()
//             checkCageCapacity()
//             if (globalCapacity() !== true) {
//                 $('<p>').addClass('hasSpace').text('you do not have any room to buy a new rat!').appendTo($('.buyarat'))
//             }
//             $('#ifMatchmaking').hide()
//             $('#ifCage').hide()
//             $('#ifRat').show()
//         } else if ($('.shopItems').val() === 'cage'){
//             $('#ifMatchmaking').hide()
//             $('#ifRat').hide()
//             $('#ifCage').show()
//         } else if ($('.shopItems').val() === 'matchmaking'){
//             $('.hasSpace').remove()
//             if (globalCapacity() !== true) {
//                 $('<p>').addClass('hasSpace').text('you do not have any room to house a new rat!').appendTo($('.breedrats'))
//             }
//             generateMatchmaking()
//             $('#ifMatchmaking').show()
//             $('#ifRat').hide()
//             $('#ifCage').hide()
//         } else {
//             $('#ifMatchmaking').hide()
//             $('#ifRat').hide()
//             $('#ifCage').hide()
//         }
//     })

//     const setBreedInput = () => {
//         let breedInput = ratToBuy[0].breed
//         const newBreedObj = new Breed()
//         for (const [key] of Object.entries(newBreedObj)) {
//             if (key === breedInput) {
//                 newBreedObj[key] = 100
//             }
//         }
//         return newBreedObj
//     }