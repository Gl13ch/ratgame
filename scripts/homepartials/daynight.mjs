date = retrieve('date')

let currentTimeofDay = date.timeOfDay
let nextTimeofDay = 'night'

const days = ['MON','TUE','WED','THU','FRI','SAT','SUN']
let year = date.year

window.addEventListener("DOMContentLoaded", ()=>{

    const $month = document.getElementById("month")
    const $weekNumber = document.getElementById("weekNumber")
    const $day = document.getElementById("day")
    const $yearNumber = document.getElementById("yearNumber")
    const $morning = document.getElementById("morning")
    const $evening = document.getElementById("evening")
    const $night = document.getElementById("night")

    const setCurrentDate = () => {
        date = retrieve('date')
        if (date.timeOfDay === 'morning') {
            nextTimeofDay = 'evening'
            $morning.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if (date.timeOfDay === 'evening') {
            nextTimeofDay = 'night'
            $evening.style.visibility = 'visible'
            $morning.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if(date.timeOfDay === 'night'){
            nextTimeofDay = 'morning'
            $night.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $morning.style.visibility = 'hidden'
        }
        $day.innerHTML = `${date.day}`
        $weekNumber.innerHTML = `${date.week}`
        $month.innerHTML = `${date.month}`
        $yearNumber.innerHTML = `${date.year}`
    }

    const dayNightCycle = () => {
        if (nextTimeofDay === 'morning') {
            goNextDay()
            date.timeOfDay = 'morning'
            nextTimeofDay = 'evening'
            $morning.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if (nextTimeofDay === 'evening') {
            date.timeOfDay = 'evening'
            nextTimeofDay = 'night'
            $evening.style.visibility = 'visible'
            $morning.style.visibility = 'hidden'
            $night.style.visibility = 'hidden'
        } else if(nextTimeofDay === 'night'){
            date.timeOfDay = 'night'
            nextTimeofDay = 'morning'
            $night.style.visibility = 'visible'
            $evening.style.visibility = 'hidden'
            $morning.style.visibility = 'hidden'
        }
        save('date',date)
    }
    
    setCurrentDate()
    setInterval(dayNightCycle, 180000)

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
        $day.innerHTML = `${date.day}`
        $weekNumber.innerHTML = `${date.week}`
    }

    const goNextMonth = () => {
        // ageUpRats()
        if (date.month === 12) {
            date.month = 1
            date.year++
            $yearNumber.innerHTML = `${date.year}`
        } else {
            date.month++
        } 
        $month.innerHTML = `${date.month}`
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