let currentTimeofDay = 'evening'
let nextTimeofDay = 'night'

const days = ['MON','TUE','WED','THU','FRI','SAT','SUN']
let day = days[1]

let week = 1
let month = 1
let year = 1

window.addEventListener("DOMContentLoaded", ()=>{
    const $month = document.getElementById("month")
    const $weekNumber = document.getElementById("weekNumber")
    const $day = document.getElementById("day")
    const $yearNumber = document.getElementById("yearNumber")
    const $morning = document.getElementById("morning")
    const $evening = document.getElementById("evening")
    const $night = document.getElementById("night")

    const setCurrentDate = () => {
        if (currentTimeofDay === 'morning') {
            nextTimeofDay = 'evening'
            $morning.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if (currentTimeofDay === 'evening') {
            nextTimeofDay = 'night'
            $evening.style.visibility = 'visible'
            $morning.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if(currentTimeofDay === 'night'){
            nextTimeofDay = 'morning'
            $night.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $morning.style.visibility = 'hidden'
        }
        $day.innerHTML = `${day}`
        $weekNumber.innerHTML = `${week}`
        $month.innerHTML = `${month}`
        $yearNumber.innerHTML = `${year}`
    }

    const dayNightCycle = () => {
        if (nextTimeofDay === 'morning') {
            goNextDay()
            currentTimeofDay = 'morning'
            nextTimeofDay = 'evening'
            $morning.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if (nextTimeofDay === 'evening') {
            currentTimeofDay = 'evening'
            nextTimeofDay = 'night'
            $evening.style.visibility = 'visible'
            $morning.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if(nextTimeofDay === 'night'){
            currentTimeofDay = 'night'
            nextTimeofDay = 'morning'
            $night.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $morning.style.visibility = 'hidden'
        }
    }
    
    setCurrentDate()
    setInterval(dayNightCycle, 180000)

    const goNextDay = () => {
        const currentDayIndex = days.indexOf(day)
        if (currentDayIndex === 6) {
            week++
        }
        if (week === 5 && currentDayIndex === 6) {
            week = 1
            goNextMonth()
        }
        const nextDayIndex = (currentDayIndex + 1) % days.length
        day = days[nextDayIndex]
        $day.innerHTML = `${day}`
        $weekNumber.innerHTML = `${week}`
    }

    const goNextMonth = () => {
        // ageUpRats()
        if (month === 12) {
            month = 1
            year++
            $yearNumber.innerHTML = `${year}`
        } else {
            month++
        } 
        $month.innerHTML = `${month}`
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