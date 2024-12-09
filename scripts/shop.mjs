class ShopRats {
    constructor(shopId, breed, sex, fur, hasRedEyes) {
        this.shopId = shopId
        this.breed = breed
        this.sex = sex
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
let ratToBuy = []
const buyRat = (e) => {
    // e.preventDefault()

    let idCounter = 1
    if (playerRats.length !== 0) {
        idCounter = playerRats[playerRats.length - 1].id + 1
    }
    
    let nameInput = document.getElementById('name').value

    let sexInput = ratToBuy[0].sex
    
    let breedInput = ratToBuy[0].breed

    let furInput = ratToBuy[0].fur

    let hasRedEyes = ratToBuy[0].hasRedEyes

    let cageInput = ''
    if (getAvailableCages().length === 1) {
        cageInput = document.querySelector('input[name=ratcage]').value
    } else {
        cageInput = document.querySelector('input[name=ratcage]:checked').value
    }

    ratForm.reset()
    
    const newRatty = new Rat(idCounter, nameInput, sexInput, breedInput, cageInput, furInput, hasRedEyes)

    playerRats.push(newRatty)

    playerCages.forEach(element => {
        if (element.cageName === cageInput) {
            element.heldRats.push(newRatty)
        }
    })
    
    save('playercages', playerCages)
    save('playerrats', playerRats)
}

//RETURNS AN ARRAY OF 3 RANDOM FUR COLORS
const createShopFurs = () => {
    const shopFurColors = []
    for (let i = 0; i < 3; i++) {
    const randomFur = randomIndex(furColors)
    shopFurColors.push(randomFur)
    }
    return shopFurColors
}

// RETURNS AN ARRAY OF 3 RANDOM SEX OPTIONS
const createAvailableSexes = () => {
    const shopSexes = []
    for (let i = 0; i < 3; i++) {
        const randomSex = randomIndex(sexArr)
        shopSexes.push(randomSex)
    }
    return shopSexes
}

// RETURNS FALSE IF THERE ARE DUPES
// RETURNS THE ARRAY IF ALL ARE UNIQUE
const checkForDupes = (array) => {
    const uniqueFur = new Set(array)
    if (uniqueFur.size !== array.length) {
        createShopFurs()
        return false
    } else {
        return array
    }
}

// RETURNS FALSE IF THEY ARE ALL THE SAME
// RETURNS THE ARRAY IF THEY ARE NOT ALL THE SAME
const allSame = (array) => {
    if (array.every(val => val === array[0])) {
        createAvailableSexes()
        return false
    } else {
        return array
    }
}

// RANDOM NUMBER BETWEEN 0-20
const redEyesChance = () => {
    const random = Math.floor(Math.random() * 20)
    if (random === 1) {
        return true
    }else{
        return false
    }
}

// RETURNS ARRAY OF THREE RATS OF THE BREED CHOOSEN
const generateShopRats = () => {
    const breedInput = document.querySelector('input[name=breed]:checked').value
    
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

        shopRats.push(new ShopRats(shopRatIds[i], currentBreed, shopSexesAvailable[i], shopFurColors[i], redEyesChance()))
    }

    // CREATE CSS RATS
    shopRats.forEach(element => {
        // clear previous rats
        const $shopRats = document.getElementById(`${element.shopId}`)
        if ($shopRats) {
            $shopRats.remove()
        }
        
        const cssRat = new RatBody(element.shopId,
            {
            parent: document.getElementById("shopRatsContainer"),
            furColor: element.fur,
            hasRedEyes: element.hasRedEyes,
            hasRexFur: element.hasRexFur,
            isTailless: element.isTailless,
            isSatin: element.isSatin,
            isHairless: element.isHairless,
            hasDumboEars: element.hasDumboEars,
            hasBristleFur: element.hasBristleFur
        })
    })

    // CREATE EVENT LISTENERS
    createEventListeners(shopRats)    

    // console.log(shopRats)
    return shopRats
}

const createEventListeners = (shopRats) => {
    const $shopRats = document.querySelectorAll('.canvas')
    $shopRats.forEach(element => {
        // CREATE MOUSE OVER EVENT TO SEE SEX OF RAT
        element.addEventListener('mouseenter', event => {
            const currentRat = event.currentTarget
            // console.log(currentRat)
            for (let i = 0; i < shopRats.length; i++) {
                if (shopRats[i].shopId === currentRat.id) {
                    const sex = document.createElement('p')
                    sex.className = 'ratSexes'
                    sex.innerHTML = `${shopRats[i].sex}`
                    currentRat.append(sex)
                }
            }
        })
        element.addEventListener('mouseleave', event => { 
           document.querySelector('.ratSexes').remove()
         })

        // CREATE ON CLICK OF RAT
        element.addEventListener('click', event => {
            ratToBuy = []
            const currentRat = event.currentTarget

            shopRats.forEach(element => {
                if (currentRat.id !== element.shopId) {
                    document.getElementById(`${element.shopId}`).style.display = 'none'
                } else {
                    ratToBuy.push(element)

                    document.getElementById('wantToBuy').style.display = 'block'

                    // ifAlreadyClicked = false
                }
            })
        })
    })

    document.getElementById('noToBuy').addEventListener('click', ()=>{
        document.getElementById('wantToBuy').style.display = 'none'
    
        ratToBuy.length = 0  
    
        shopRats.forEach(element => {
            document.getElementById(`${element.shopId}`).style.display = 'block'
        })

        // ifAlreadyClicked = true
    })
}

// FIRST RAT
let firstRatToBuy = []
const buyFirstRat = (e) => {
    e.preventDefault()

    let idCounter = 1
    if (playerRats.length !== 0) {
        idCounter = playerRats[playerRats.length - 1].id + 1
    }
    
    let nameInput = document.getElementById('firstRatName').value

    let sexInput = firstRatToBuy[0].sex
    
    let breedInput = firstRatToBuy[0].breed

    let furInput = firstRatToBuy[0].fur

    let hasRedEyes = firstRatToBuy[0].hasRedEyes

    firstRatForm.reset()
    
    console.log(getAvailableCages())

    const newRatty = new Rat(idCounter, nameInput, sexInput, breedInput, 'Small Cage', furInput, hasRedEyes)

    playerRats.push(newRatty)

    playerCages[0].heldRats.push(newRatty)
    
    save('playercages', playerCages)
    save('playerrats', playerRats)


    location.href = "home.html"
}

const generateFirstRats = () => {
    let shopRats = []
    let currentBreed = 'standard'
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

        shopRats.push(new ShopRats(shopRatIds[i], currentBreed, shopSexesAvailable[i], shopFurColors[i], redEyesChance()))
    }

    // CREATE CSS RATS
    shopRats.forEach(element => {
        // clear previous rats
        const $shopRats = document.getElementById(`${element.shopId}`)
        if ($shopRats) {
            $shopRats.remove()
        }
        
        // create css rat
        const cssRat = new RatBody(element.shopId,
            {
            parent: document.getElementById("first_shop"),
            furColor: element.fur,
            hasRedEyes: element.hasRedEyes
        })
    })

    // CREATE EVENT LISTENERS
    createFirstEventListeners(shopRats)   

    // console.log(shopRats)
    // return shopRats
}

const createFirstEventListeners = (shopRats) => {
    const $shopRats = document.querySelectorAll('.canvas')
    $shopRats.forEach(element => {
        // CREATE MOUSE OVER EVENT TO SEE SEX OF RAT
        element.addEventListener('mouseenter', event => {
            const currentRat = event.currentTarget
            // console.log(currentRat)
            for (let i = 0; i < shopRats.length; i++) {
                if (shopRats[i].shopId === currentRat.id) {
                    const sex = document.createElement('p')
                    sex.className = 'ratSexes'
                    sex.innerHTML = `${shopRats[i].sex}`
                    currentRat.append(sex)
                }
            }
        })
        element.addEventListener('mouseleave', event => { 
           document.querySelector('.ratSexes').remove()
         })

        // CREATE ON CLICK OF RAT
        element.addEventListener('click', event => {
            firstRatToBuy = []
            const currentRat = event.currentTarget

            shopRats.forEach(element => {
                if (currentRat.id !== element.shopId) {
                    document.getElementById(`${element.shopId}`).style.display = 'none'
                } else {
                    firstRatToBuy.push(element)

                    document.getElementById('firstWantToBuy').style.display = 'block'

                    // ifAlreadyClicked = false
                }
            })
        })
    })

    document.getElementById('firstNoToBuy').addEventListener('click', ()=>{
        document.getElementById('firstWantToBuy').style.display = 'none'
    
        firstRatToBuy.length = 0  
    
        shopRats.forEach(element => {
            document.getElementById(`${element.shopId}`).style.display = 'block'
        })

        // ifAlreadyClicked = true
    })
}

const askName = () => {
    do {
        playerName = prompt("What is your name?")
    } while (playerName === '' || playerName === null){
        console.log(playerName)
        generateFirstRats()
        save('playername', playerName)
    }
}

window.addEventListener('DOMContentLoaded', () =>{
    const shop = document.getElementById('shop')
    const first_shop = document.getElementById('first_shop')
    const closed = document.getElementById('closed')
    
    console.log(retrieve('playername'))

    if (retrieve('playername') === '' || retrieve('playername') === null) {
        first_shop.style.display = 'block'
        askName()
    }else if(retrieve('date').timeOfDay === 'night'){
        closed.style.display = 'block'
    } else {
        shop.style.display = 'block'
    }

    // FIRST SHOP
    const firstYesBuy = document.getElementById('firstYesToBuy')
    const firstRatName = document.getElementById('firstRatName')
    firstYesBuy.addEventListener('click', ()=>{
        console.log(firstRatToBuy)
        document.getElementById('firstWantToBuy').style.display = 'none'
        document.getElementById('firstRatForm').style.display = 'block'
        // move on to submit
    })

    // BUY FIRST RAT
    const firstRatForm = document.getElementById('firstRatForm')
    firstRatForm.addEventListener("submit", buyFirstRat)


    // SHOP
    // BUY NEW CAGE
    const cageForm = document.getElementById('cageForm')
    cageForm.addEventListener("submit", buyCage)

    // GENERATES CSS SHOP RATS 
    const breed = document.querySelectorAll('input[name="breed"]')
    breed.forEach(breed => {
        breed.addEventListener('change', generateShopRats)
    })

    // DISABLE SUBMIT BUTTON IF NO ROOM
    const ratSubmit = document.getElementById('ratSubmit')
    if (globalCapacity() === true) {
        ratSubmit.disabled = false
        createCageOptions()
    }

    // SHOW BUY RAT FORM
    const yesBuy = document.getElementById('yesToBuy')
    const ratName = document.getElementById('name')
    yesBuy.addEventListener('click', ()=>{
        console.log(ratToBuy)
        document.getElementById('wantToBuy').style.display = 'none'
        ratSubmit.style.display = 'block'
        ratName.style.display = 'block'
        // move on to submit
    })

    // BUY NEW RAT
    const ratForm = document.getElementById('ratForm')
    ratForm.addEventListener("submit", buyRat)
})
