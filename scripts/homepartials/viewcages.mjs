window.addEventListener("DOMContentLoaded", ()=>{
    const cages = document.getElementById('cages')
    const $next = document.getElementById("next")
    const $previous = document.getElementById("previous")

    // create cages from playerCages
    for (let i = 0; i < playerCages.length; i++) {
        let canvas = document.createElement("div")
        canvas.className = `cageCanvas ${playerCages[i].tag.toUpperCase()}`
        // canvas.id = `${playerCages[i].id}`

        let cage = document.createElement("div")
        cage.className = `cage ${playerCages[i].tag}`
        cage.id = `${playerCages[i].id}`

        let cageName = document.createElement("h3")
        cageName.className = 'cageName'
        cageName.textContent = `${playerCages[i].cageName}`

        let heldRats = document.createElement("h3")
        heldRats.className = 'heldRats'
        heldRats.textContent = `${playerCages[i].heldRats}`

        cages.insertBefore(canvas, $next)
        canvas.appendChild(cageName)
        canvas.appendChild(heldRats)
        canvas.appendChild(cage)
    }

    // CAROSEL
    if (playerCages.length > 1) {
        $previous.style.display = "block"
        $next.style.display = "block"

        const $canvas = document.querySelectorAll('.cageCanvas')
    
        let currentCageIndex = 0
        let numOfCages = playerCages.length - 1
    
        // CAROSEL - next
        $next.addEventListener("click", e => {
            $canvas[currentCageIndex].style.display = "none"
            if (currentCageIndex < numOfCages) {
                currentCageIndex++
            } else {
                currentCageIndex = 0
            }
            $canvas[currentCageIndex].style.display = "flex"
        })
    
        // CAROSEL - previous
        $previous.addEventListener("click", e => {
            $canvas[currentCageIndex].style.display = "none"
            if (currentCageIndex > 0) {
                currentCageIndex--
            } else {
                currentCageIndex = numOfCages
            }
            $canvas[currentCageIndex].style.display = "flex"
        })
    } else {
        $previous.style.display = "none"
        $next.style.display = "none"
    }   
})









