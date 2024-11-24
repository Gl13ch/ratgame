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

    currentRats.forEach(element => {
        const cssRat = new RatBody(element.id,
            {
            parent: document.getElementById("ratContainer"),
            draggable: true,
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


// DRAG AND DROP
// starting mouse postion
// let startMousePos = {x: 0, y: 0}
// let newMousePos = {x: 0, y: 0}

// const mouseDown = (event) => {
//     const currentRat = document.getElementById('1')
    
//     startMousePos.x = event.clientX
//     startMousePos.y = event.clientY

//     currentRat.addEventListener('mousemove', mouseMove)
//     currentRat.addEventListener('mouseup', () => {
//         currentRat.removeEventListener('mousemove', mouseMove)
//     })
// }


// const mouseMove = (event) => {
//     const currentRat = document.getElementById('1')

//     let mouseMoveDir = {
//         x: startMousePos.x - event.clientX,
//         y: startMousePos.y - event.clientY
//     }

//     startMousePos.x = event.clientX
//     startMousePos.y = event.clientY

//     currentRat.style.left = (currentRat.offsetLeft - mouseMoveDir.x) + 'px'
//     currentRat.style.top = (currentRat.offsetTop - mouseMoveDir.y) + 'px'
// }

// const setOffSet = (x, y) => {
//     const currentRat = document.getElementById('1')

//     const left = currentRat.offsetLeft - x
//     const top = currentRat.offsetTop - y

//     if (condition) {
        
//     }

//     return {
//         x: left < 0 ? 0 : left,
//         y: top < 0 ? 0 : top
//     }
// }




window.addEventListener('DOMContentLoaded', () => {
    loadCage()
    loadRats()

    const dragRats = document.querySelectorAll('.draggable')
    const ratContainer = document.getElementById('ratContainer')


    // mouse position
    let newX = 0
    let newY = 0
    let startX = 0
    let startY = 0

    dragRats.forEach(element => {
        let currentDiv = document.getElementById(`${element.id}`)
        const mouseMove = (event) => {
            newX = startX - event.clientX
            newY = startY - event.clientY
        
            startX = event.clientX
            startY = event.clientY

            let left = currentDiv.offsetLeft - newX
            let top = currentDiv.offsetTop - newY

            const leftBounds = window.innerHeight - ratContainer.getBoundingClientRect().left

            const topBounds = window.innerHeight - ratContainer.getBoundingClientRect().top

            const bottomBounds = window.innerHeight - ratContainer.getBoundingClientRect().bottom

            const rightBounds = window.innerHeight - ratContainer.getBoundingClientRect().right
            // console.log(left)
            console.log(top)
            // const bottom = window.innerHeight - element.getBoundingClientRect().bottom
            
            if (left < 0) {
                currentDiv.removeEventListener('mousemove', mouseMove)
                left = 0
            }

            if (top === topBounds){
                currentDiv.removeEventListener('mousemove', mouseMove)
                top = topBounds
            }

            // if (top > 700){
            //     console.log('ran')
            //     currentDiv.removeEventListener('mousemove', mouseMove)
            //     top = 700
            // }

            currentDiv.style.left = left + 'px'
            currentDiv.style.top = top + 'px'
        }

        element.addEventListener('mousedown', event => {
            // current mouse position
            startX = event.clientX
            startY = event.clientY

            currentDiv.addEventListener('mousemove', mouseMove)
            currentDiv.addEventListener('mouseup', () => {
                currentDiv.removeEventListener('mousemove', mouseMove)
            })
        })
    
    })

})
