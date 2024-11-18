// PERSONALITIES
const personalityArr = ['agile','anxious','attentive','bold', 'cautious','communicative','confident','curious','determined','docile','dominant','easy going','easy to handle','enthusiastic','friendly','cheerful','irritable','lively','shy','solitary','tame','tempermental','trusting']

const furColors = ['beige', 'black', 'blue', 'blueBeige', 'champagne', 'chocolate', 'cocoa', 'lilac', 'mink', 'platinum', 'powderBlue', 'russianBlue', 'russianDove', 'skyBlue', 'white']

//user input
const sexArr = ['Male', 'Female']

// RETURNS 'array[randomindex]'
const randomIndex  = (array) => {
    let length  = 0
    for (let i = 0; i < array.length; i++) {
        length = i + 1  
    }
    let index = Math.floor(Math.random() * length)
    return array[index]
}