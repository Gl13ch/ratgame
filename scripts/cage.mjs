const selectedCage = sessionRetrieve('currentCage')

const loadCage = () => {
    let cageName = document.createElement("p")
        cageName.className = 'cageInfo'
        cageName.textContent = `Cage Name: ${selectedCage[0].cageName}`

    let cageCapacity = document.createElement("p")
        cageCapacity.className = 'cageInfo'
        cageCapacity.textContent = `Cage Capacity: ${selectedCage[0].capacity}`

    let cageHeldRats = document.createElement("p")
        cageHeldRats.className = 'cageInfo'
        cageHeldRats.textContent = `Held Rats: `
        for (let i = 0; i < selectedCage[0].heldRats.length; i++) {
            cageHeldRats.textContent += `${selectedCage[0].heldRats[i].ratName} `
        }

    document.body.appendChild(cageName)
    document.body.appendChild(cageCapacity)
    document.body.appendChild(cageHeldRats)
}

const getCurrentRats = () => {
    playerRats = reinstantiateRats()
    let currentRats = []
    playerRats.forEach(allRats => {
        selectedCage[0].heldRats.forEach(cageRat => {
            if (cageRat.id === allRats.id) {
                currentRats.push(cageRat)  
            }
        })
    })
    return currentRats
} 

const loadRats = () => {
    let currentRats = getCurrentRats()
    console.log(currentRats)

    const test1 = new RatBody({
        parent: document.getElementById("ratContainer"),
        furColor: 'cocoa',
        isTailless: true,
        redEyes: false,
        hasBristleFur: true,
        hasDumboEars: true,
        isHairless: true
    })
}


window.addEventListener('DOMContentLoaded', () => {
    loadCage()
    loadRats()
})
