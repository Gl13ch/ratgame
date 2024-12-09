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
            // small cage x bounds
            positionLeft: `${randPos(40, 550)}px`,
            // small cage y bounds
            positionTop: `${randPos(0, 248)}px`,
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
    return rand
}

const items = ['bed', 'wheel', 'drink', 'food', 'potty', 'idle']

const getActivity = () => {
    // these numbers only work for a small cage, will change when the cages are different sizes
    const item =  randomIndex(items)
    // console.log(item)
    if (item === 'bed') {
        const x = 136
        const y = -17
        return {x:x, y:y}
        // element.style.left = '136px'
        // element.style.top = '-17px'
    }
    if (item === 'wheel') {
        const x = 372
        const y = -61
        return {x:x, y:y}
        // element.style.left = '372px'
        // element.style.top = '-61px'
    }
    if (item === 'drink') {
        const x = 525
        const y = 36
        return {x:x, y:y}
        // element.style.left = '525px'
        // element.style.top = '36px'
    }
    if (item === 'food') {
        const x = 544
        const y = 230
        return {x:x, y:y}
        // element.style.left = '544px'
        // element.style.top = '230px'
    }
    if (item === 'potty') {
        const x = 35
        const y = 238
        return {x:x, y:y}
        // element.style.left = '35px'
        // element.style.top = '238px'
    }
    if(item === 'idle'){
        const x = randPos(40, 550)
        const y = randPos(0, 248)
        return {x:x, y:y}
        // element.style.left = randPos(40, 550)
        // element.style.top = randPos(0, 248)
    }
}

// DAY NIGHT CYCLE

date = retrieve('date')

let nextTimeofDay = 'night'

const days = ['MON','TUE','WED','THU','FRI','SAT','SUN']

const setCurrentDate = () => {
    date = retrieve('date')
    if (date.timeOfDay === 'morning') {
        nextTimeofDay = 'evening'
    } else if (date.timeOfDay === 'evening') {
        nextTimeofDay = 'night'
    } else if(date.timeOfDay === 'night'){
        nextTimeofDay = 'morning'
    }
}
setCurrentDate()

const dayNightCycle = () => {
    if (nextTimeofDay === 'morning') {
        goNextDay()
        date.timeOfDay = 'morning'
        nextTimeofDay = 'evening'
    } else if (nextTimeofDay === 'evening') {
        date.timeOfDay = 'evening'
        nextTimeofDay = 'night'
    } else if(nextTimeofDay === 'night'){
        date.timeOfDay = 'night'
        nextTimeofDay = 'morning'
    }
    location.href = "home.html"
    save('date',date)
}

let count = sessionRetrieve('count') || 0

const counter = () => {
    count++
    if (count >= 180) {
        count = 0
        dayNightCycle()
    }
    sessionSave('count', count)
}

// let cycle = setInterval(dayNightCycle, 180000)
let cycle = setInterval(counter, 1000)

const goNextDay = () => {
    const currentDayIndex = days.indexOf(date.day)
    if (currentDayIndex === 6) {
        date.week++
    }
    if (date.week === 5 && currentDayIndex === 6) {
        date.week = 1
        goNextMonth()
    }
    const nextDayIndex = (currentDayIndex + 1) % days.length
    date.day = days[nextDayIndex]
}

const goNextMonth = () => {
    // ageUpRats()
    if (date.month === 12) {
        date.month = 1
        date.year++
    } else {
        date.month++
    } 
}


// Rat animation
window.addEventListener('DOMContentLoaded', () => {
    const ratContainer = document.getElementById('ratContainer')

    loadCage()
    loadRats()

    const dragRats = document.querySelectorAll('.draggable')

    function draw(element, speed) {
        currentDiv = element

        let currX = currentDiv.offsetLeft
        let currY = currentDiv.offsetTop
    
        const activity = getActivity()
        const newX = activity.x
        const newY = activity.y
        
        const start = setInterval(frame, speed);

        function frame() {

            let xfinished = false
            let yfinsihed = false

            if (currX > newX) {
                currX--
                currentDiv.style.left = currX + 'px'
            } else if(currX < newX) {
                currX++
                currentDiv.style.left = currX + 'px'
            } else {
                xfinished = true
            }

            if (currY > newY) {
                currY--
                currentDiv.style.top = currY + 'px'
            } else if(currY < newY) {
                currY++
                currentDiv.style.top = currY + 'px'
            } else {
                yfinsihed = true
            }

            if (xfinished === true && yfinsihed === true) {
                // console.log('cleared')
                clearInterval(start);
            }
        }
        
    }


    // don't remember what this was, not sure it works
    // maybe was another attempt

    // let start
    // const animate = (timestamp) => {
    //     if (start === undefined) {
    //         start = timestamp;
    //     }
    //     const elapsed = timestamp - start;

    //     const shift = Math.min(0.1 * elapsed, 200);

    //     dragRats[0].style.transform = `translateX(${shift}px)`

    //     if (shift < 200) {
    //         requestAnimationFrame(animate)
    //     }  
    // }

    // requestAnimationFrame(animate)


    // Works, need to look at again see if I can make more than one animaton work at the same time. Might just be a timing thing. Only works if the intervals have different timings

    // one way to have multiple animations going is to probably start drawing all the rats at the same time, not setting intervals for each one, instead maybe handle the rat position in the rat itself
    setInterval(draw, 6000, dragRats[0], randPos(1,10))
    // setInterval(draw, 3000, dragRats[1], randPos(1,10))

    // setInterval(draw, 5000, dragRats[0], randPos(1,5))
    // setInterval(draw, 8000, dragRats[1], randPos(1,5))
    

    // DRAGGABLE
    // mouse position
    let newX = 0
    let newY = 0
    let startX = 0
    let startY = 0

    // Can make fake (mouse?) bounds to follow
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
                currentDiv.style.zIndex = 1
                currentDiv.removeEventListener('mousemove', mouseMove)
                left = 1
            }

            if (top < -80){
                currentDiv.style.zIndex = 1
                currentDiv.removeEventListener('mousemove', mouseMove)
                top = -80
            }

            if (bottom < -10){
                currentDiv.style.zIndex = 1
                currentDiv.removeEventListener('mousemove', mouseMove)
                top = 249
            }

            if (right < rightBounds){
                console.log(right)
                console.log(rightBounds)
                currentDiv.style.zIndex = 1
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
                currentDiv.style.zIndex = 1
                currentDiv.removeEventListener('mousemove', mouseMove)
            })
        })
    })
})


