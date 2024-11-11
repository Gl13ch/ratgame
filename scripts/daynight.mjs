let currentDate = {
    timeOfDay:'evening',
    day: 'TUE',
    week: 1,
    month: 1,
    year: 1,
}

if (localStorage.length === 2) {
    localStorage.setItem('currentDate', JSON.stringify(currentDate))
}

// localStorage.removeItem('currentDate')

const load = () => {
    currentDate = (JSON.parse(localStorage.getItem('currentDate')))
}

load()

let currentTimeofDay = currentDate.timeOfDay
let nextTimeofDay = 'night'

const days = ['MON','TUE','WED','THU','FRI','SAT','SUN']
let year = currentDate.year

window.addEventListener("DOMContentLoaded", ()=>{

    const $month = document.getElementById("month")
    const $weekNumber = document.getElementById("weekNumber")
    const $day = document.getElementById("day")
    const $yearNumber = document.getElementById("yearNumber")
    const $morning = document.getElementById("morning")
    const $evening = document.getElementById("evening")
    const $night = document.getElementById("night")

    const setCurrentDate = () => {
        currentDate = (JSON.parse(localStorage.getItem('currentDate')))
        if (currentDate.timeOfDay === 'morning') {
            nextTimeofDay = 'evening'
            $morning.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if (currentDate.timeOfDay === 'evening') {
            nextTimeofDay = 'night'
            $evening.style.visibility = 'visible'
            $morning.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if(currentDate.timeOfDay === 'night'){
            nextTimeofDay = 'morning'
            $night.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $morning.style.visibility = 'hidden'
        }
        $day.innerHTML = `${currentDate.day}`
        $weekNumber.innerHTML = `${currentDate.week}`
        $month.innerHTML = `${currentDate.month}`
        $yearNumber.innerHTML = `${currentDate.year}`
    }

    const dayNightCycle = () => {
        if (nextTimeofDay === 'morning') {
            goNextDay()
            currentDate.timeOfDay = 'morning'
            nextTimeofDay = 'evening'
            $morning.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if (nextTimeofDay === 'evening') {
            currentDate.timeOfDay = 'evening'
            nextTimeofDay = 'night'
            $evening.style.visibility = 'visible'
            $morning.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if(nextTimeofDay === 'night'){
            currentDate.timeOfDay = 'night'
            nextTimeofDay = 'morning'
            $night.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $morning.style.visibility = 'hidden'
        }
        localStorage.setItem('currentDate', JSON.stringify(currentDate))
    }
    
    setCurrentDate()
    setInterval(dayNightCycle, 180000)

    const goNextDay = () => {
        const currentDayIndex = days.indexOf(currentDate.day)
        if (currentDayIndex === 6) {
            currentDate.week++
        }
        if (currentDate.week === 5 && currentDayIndex === 6) {
            currentDate.week = 1
            goNextMonth()
        }
        const nextDayIndex = (currentDayIndex + 1) % days.length
        currentDate.day = days[nextDayIndex]
        $day.innerHTML = `${currentDate.day}`
        $weekNumber.innerHTML = `${currentDate.week}`
    }

    const goNextMonth = () => {
        // ageUpRats()
        if (currentDate.month === 12) {
            currentDate.month = 1
            currentDate.year++
            $yearNumber.innerHTML = `${currentDate.year}`
        } else {
            currentDate.month++
        } 
        $month.innerHTML = `${currentDate.month}`
    }
})






// // AGE UP RATS
// const ageUpRats = () => {
//     rats.forEach(element => {
//         element.ageUpMonth()
//         $('.ratAge').text(`${element.ageMonth} month`)
//         if (element.ageMonth === 12) {
//             element.resetMonth()
//             element.birthday()
//             $('.ratAge').text(`${element.ageYear} year`)
//         } else if (element.ageYear !== 0) {
//             $('.ratAge').text(`${element.ageMonth} month, ${element.ageYear} year`)
//         }
//     })
//     localStorage.setItem('ratArray', JSON.stringify(rats))
// }