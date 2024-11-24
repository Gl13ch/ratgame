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

    currentRats.forEach(element => {
        const cssRat = new RatBody(element.id,
            {
            parent: document.getElementById("ratContainer"),
            draggable: true,
            positionLeft: randPos(40, 550),
            positionTop: randPos(0, 248),
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
}

const randPos = (min, max) => {
    const rand = Math.floor(Math.random() * (max - min) + min)
    return `${rand}px`
}

window.addEventListener('DOMContentLoaded', () => {
    const ratContainer = document.getElementById('ratContainer')

    loadCage()
    loadRats()

    const dragRats = document.querySelectorAll('.draggable')
    
    // mouse position
    let newX = 0
    let newY = 0
    let startX = 0
    let startY = 0

    // Can make fake bounds to follow

    dragRats.forEach(element => {
        let currentDiv = document.getElementById(`${element.id}`)
        const mouseMove = (event) => {
            newX = startX - event.clientX
            newY = startY - event.clientY
        
            startX = event.clientX
            startY = event.clientY

            let left = currentDiv.offsetLeft - newX
            let top = currentDiv.offsetTop - newY

            let right = window.innerHeight - element.getBoundingClientRect().right

            const rightBounds = window.innerHeight - ratContainer.getBoundingClientRect().right

            const bottom = window.innerHeight - element.getBoundingClientRect().bottom
            
            if (left < 0) {
                currentDiv.style.zIndex = 0
                currentDiv.removeEventListener('mousemove', mouseMove)
                left = 1
            }

            if (top < -80){
                currentDiv.style.zIndex = 0
                currentDiv.removeEventListener('mousemove', mouseMove)
                top = -80
            }

            if (bottom < -10){
                currentDiv.style.zIndex = 0
                currentDiv.removeEventListener('mousemove', mouseMove)
                top = 249
            }

            if (right < rightBounds){
                console.log(right)
                console.log(rightBounds)
                currentDiv.style.zIndex = 0
                currentDiv.removeEventListener('mousemove', mouseMove)
                left = 589
            }

            currentDiv.style.left = left + 'px'
            currentDiv.style.top = top + 'px'
            currentDiv.style.zIndex = 20
        }

        element.addEventListener('mousedown', event => {
            // current mouse position
            startX = event.clientX
            startY = event.clientY

            currentDiv.addEventListener('mousemove', mouseMove)
            currentDiv.addEventListener('mouseup', () => {
                currentDiv.style.zIndex = 0
                currentDiv.removeEventListener('mousemove', mouseMove)
            })
        })
    })

})
