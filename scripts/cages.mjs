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

// CLEAR ALL LOCAL STORAGE
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


// CAGE ID
const createCageID = () => {
   let cageID = `C${playerCages.length + 1}`
   return cageID
}

// CREATE NEW CAGES
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

// PLAYER ALWAYS STARTS WITH SMALL CAGE
const startingCage = () => {
    if (playerCages.length === 0) {
        playerCages.push(createCages['small']())
        save('playercages', playerCages)
    }
}
startingCage()

// CLICK ON CAGE -> BRING INSIDE CAGE
window.onload = () => {
    const canvas = document.querySelectorAll('.cageCanvas')
    for (let i = 0; i < canvas.length; i++) {
        canvas[i].addEventListener("click", e => {
            if (e.target.id === playerCages[i].id) {
                // saves to session storage to be retrieved from 'cage.mjs'
                let selectedCage = []
                selectedCage.push(playerCages[i])
                sessionSave('currentCage',selectedCage)

                // brings to 'cage.html'
                location.href="cage.html"
            }
        })
    }
}

// RETURNS TRUE IF SPACE AVAILABLE IN ANY CAGE
const globalCapacity = () => {
    for (let i = 0; i < playerCages.length; i++) {
        if (!(playerCages[i].capacity <= playerCages[i].heldRats.length)) {
            return true
        } 
    }
}

// RETURNS AN ARRAY OF CAGES THAT HAVE AVAILABLITY
const getAvailableCages = () => {
    let availableCages = []
    for (let i = 0; i < playerCages.length; i++) {
        if (!(playerCages[i].capacity <= playerCages[i].heldRats.length)) {
            availableCages.push(playerCages[i])
        } 
    }
    return availableCages
}

