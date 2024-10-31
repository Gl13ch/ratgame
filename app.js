// $(() => {
// console.log('hello')

class Rat {
    constructor(){
        this.sex = randomSex
        this.personality = 'gloomy'
        this.mood = 'sad'
    }
}

const sex = ['Male', 'Female']

const random = Math.floor(Math.random() * arrayNumber(sex))

const randomSex = sex[random]

function arrayNumber(array) {
    let length  = 0
    for (let i = 0; i < array.length; i++) {
        length = i + 1  
    }
    return length
}

const ratty = new Rat()
console.log(ratty)

// const ratty = new Rat()
// console.log(ratty)

// })