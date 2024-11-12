window.addEventListener("DOMContentLoaded", ()=>{

    const cages = document.getElementById('cages')
    const $next = document.getElementById("next")
    const $previous = document.getElementById("previous")

    // create cages from users owned cages
    for (let i = 0; i < cageContainer.length; i++) {
        let canvas = document.createElement("div")
        canvas.className = `cageCanvas ${cageContainer[i].tag}`
        let cage = document.createElement("div")
        cage.className = `classPlaceholder${i}`
        cage.id = `placeholder${i}`
        let cageName = document.createElement("h3")
        cageName.className = 'cageName'
        cageName.textContent = `${cageContainer[i].cageName}`

        cages.insertBefore(canvas, $next)
        canvas.appendChild(cageName)
        canvas.appendChild(cage)
    }

    // CAROSEL
    if (cageContainer.length > 1) {
        $previous.style.display = "block"
        $next.style.display = "block"

        const $canvas = document.querySelectorAll('.cageCanvas')
    
        let currentCageIndex = 0
        let numOfCages = cageContainer.length - 1
    
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

