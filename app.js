$(() => {

class Rat {
    constructor(name,sex,personality,mood){
        this.name = name
        this.sex = sex
        this.personality = personality
        this.mood = mood
    }
}

const sex = ['Male', 'Female']
const personality = ['gloomy','timid','cheerful','quiet']
const mood = ['happy','sad','angry','normal']

// const sexIndex = Math.floor(Math.random() * arrayLength(sex))
// const randomSex = sex[sexIndex]

const personalityIndex = Math.floor(Math.random() * arrayLength(personality))
const randomPersonality = personality[personalityIndex]

const moodIndex = Math.floor(Math.random() * arrayLength(sex))
const randomMood = mood[moodIndex]

function arrayLength(array) {
    let length  = 0
    for (let i = 0; i < array.length; i++) {
        length = i + 1  
    }
    return length
}

const ratty = new Rat(/*input*/randomPersonality,randomMood)
console.log(ratty)

//on click create rat
//generate stats

//flow
//buy rat > male or female > choose name > the rest randomly generated

const buyRat = $('#buyRat')

})