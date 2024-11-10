// // STEPS TO ADDING NEW VARIABLES TO RAT
// // Pass variable in all 3 places in rat(this.val = val) constructor(val)
// // pass in onsubmit event
// // reset local storage
// class Rat {
//     constructor(id, name, sex, personality, breed, cage, fur, hasRedEyes){
//         this.id = id
//         this.name = name
//         this.sex = sex
//         this.personality = personality
//         this.breed = breed
//         this.cage = cage
//         this.fur = fur
//         this.hasRedEyes = hasRedEyes
//         this.breedObj = []
//         this.happiness = 50
//         this.affection = 'neutral'
//         this.mood = 'neutral'
//         this.weight = 'normal'
//         this.health = 'normal'
//         this.tricks = []
//         this.endurance = 10
//         this.quickness = 10
//         this.jump = 10
//         this.grooming = 10
//         this.appearance = 10
//         this.charm = 10
//         this.toilet = 'untrained'
//         this.bed = 'untrained'
//         this.eating = 'untrained'
//         this.wheel = 'untrained'
//         this.nibbling = 'untrained'
//         this.competitionRank = 1
//         this.competitionEntered = ''
//         this.ageMonth = 1
//         this.ageYear = 0
//         this.mother = ''
//         this.father = ''
//     }
//     makeBaby (babyId, babyName, babySex, babyPersonality, babyBreed, babyCage, babyFur, babyHasRedEyes, babyMother, babyFather){
//         const baby = new Rat(babyId, babyName, babySex, babyPersonality, babyBreed, babyCage, babyFur, babyHasRedEyes)
//         console.log(baby)
//         baby.mother = babyMother
//         baby.father = babyFather
//         return baby
//     }
//     startingCage(cageIndex, newRat, newCageIndexHeldRats){
//         this.cage = cageIndex
//         newCageIndexHeldRats.push(newRat)
//     }
//     moveCage(cageIndex, newRat, newCageIndexHeldRats, oldCageIndexHeldRats, removeIndex){
//         this.cage = cageIndex
//         newCageIndexHeldRats.push(newRat)
//         oldCageIndexHeldRats.splice(removeIndex, 1)
//     }
//     ageUpMonth(){
//         this.ageMonth++
//     }
//     birthday(){
//         this.ageYear++
//     }
//     resetMonth(){
//         this.ageMonth = 0
//     }
//     // for when the object is recreated with local storage
//     setAgeMonth(month){
//         this.ageMonth = month
//     }
//     setAgeYear(year){
//         this.ageYear = year
//     }
//     setBreed(obj){
//         this.breedObj.push(obj)
//     }
// }

// // for breeding "genetics"
// class Breed {
//     constructor() {
//         this.standard = 0,
//         this.rex = 0,
//         this.tailless = 0,
//         this.hairless = 0,
//         this.satin = 0,
//         this.dumbo = 0,
//         this.bristleCoat = 0
//     }
// }

// // VARIABLES

// const furColors = ['beige', 'black', 'blue', 'blueBeige', 'champagne', 'chocolate', 'cocoa', 'lilac', 'mink', 'platinum', 'powderBlue', 'russianBlue', 'russianDove', 'skyBlue', 'white']

// const sexArr = ['Male', 'Female']

// const personalityArr = ['agile','anxious','attentive','bold', 'cautious','communicative','confident','curious','determined','docile','dominant','easy going','easy to handle','enthusiastic','friendly','cheerful','irritable','lively','shy','solitary','tame','tempermental','trusting']

// const moodArr = ['happy','sad','angry','content', 'thrilled', 'whatever', 'stressed']

// const foodTypeArr = ['cheap','normal','expensive']
// const foodAmountArr = ['few','normal','many']

// const affectionArr = ['hate','dislike','whatever','like','love','adore']

// const weightArr = ['skinny','slim','normal','tubby','fat']

// const healthArr = ['sick','normal','tip-top']

// const trainedLevel = ['untrained', 'barely trained', 'decently trained', 'trained', 'perfectly trained']

// const breedsArr = ['standard', 'rex', 'tailless', 'hairless','satin','dumbo','bristle coat']

// const competitions = ['eating contest','poleclimb', '10m dash', '100m dash', 'monkey bars', 'beauty contest', 'talent show']

// const activites = ['wheel','bed','potty','food','water']

// const userActions = ['go back', 'bathe', 'view stats', 'pet', 'grab','poke','give treat', 'brush']

// const foodAmount = ['few','normal','many']
// const foodType = ['cheap','standard','expensive']


// export { Breed, Rat};