$(() => {
    //object of rat
    class Rat {
        constructor(name,sex,personality,breed){
            this.name = name
            this.age = `${1} month`
            this.sex = sex
            this.personality = personality
            /*
            this.mother = ''
            this.father = ''
            this.cage = []
            */
            this.food = {
                amount: '',
                type: ''
            }
            //this.tricks = []
            this.affection = 'neutral'
            this.mood = 'neutral'
            this.weight = 'normal'
            this.health = 'normal'
            /*
            this.endurance = endurance
            this.quickness = quickness
            this.jump = jump
            this.grooming = grooming
            this.appearance = appearance
            this.charm = charm
            this.toilet = toilet
            this.bed = bed
            this.eating = eating
            this.wheel = wheel
            this.nibbling = nibbling
            */
            this.breed = breed
            /*
            this.competitionRank = competitionRank || 1
            this.competitionEntered = []
            */
        }
    }

    //variables

    //name - user input
    // age by months
    //father
    //mother
    // cage = []
    //trick page = []

    //sex - user input
    const sex = ['Male', 'Female']

    //personality
    const personalityArr = ['agile','anxious','attentive','bold', 'cautious','communicative','cconfident','curious','determined','docile','dominant','easy going','easy to handle','enthusiastic','friendly','cheerful','irritable','lively','shy','solitary','tame','tempermental','trusting']

    //food
    const foodTypeArr = ['cheap','normal','expensive']
    const foodAmountArr = ['few','normal','many']

    //affection
    //should maybe start at unsure or cautious then move torwards direction based on actions
    const affectionArr = ['hate','dislike','whatever','like','love','adore']

    //mood
    const moodArr = ['happy','sad','angry','content']

    //weight
    const weightArr = ['skinny','slim','normal','tubby','fat']

    //health
    const healthArr = ['sick','normal','tip-top']

    //stats will be calculated based on breed and incremented based on activites the rat does in cage
    //endurance
    //quickness
    //jump
    //grooming
    //appearance
    //charm

    //training:
    const trainedLevel = ['untrained', 'barely trained', 'decently trained', 'trained', 'perfectly trained']
    //toilet
    //bed
    //eating
    //items
    //nibbling

    //breed - user input
    const breeds = ['standard/fancy', 'rex', 'railless', 'hairless','satin','dumbo','bristle coat']

    //competition rank starts at 1

    //competition entered
    const competitions = ['eating contest','poleclimb', '10m dash', '100m dash', 'monkey bars', 'beauty contest', 'talent show']

    //cage activites
    const activites = ['wheel','bed','potty','food','water']
    //wheel
    //bed
    //potty
    //food
    //water

    //user actions in cage
    //back
    //bath
    //view stats
    //pet
    //grab
    //poke
    //treat
    //brush

    //user actions outside of cage
    //skip time
    //store
    //enter competition

    //day night cycle
    //morning - sleepy
    //evening - semi active/sleepy
    //night - very active

    //randomizers
    const arrayLength  = (array) => {
        let length  = 0
        for (let i = 0; i < array.length; i++) {
            length = i + 1  
        }
        return length
    }

    const personalityIndex = Math.floor(Math.random() * arrayLength(personalityArr))
    const randomPersonality = personalityArr[personalityIndex]

    const moodIndex = Math.floor(Math.random() * arrayLength(moodArr))
    const randomMood = moodArr[moodIndex]

    //localstorage
    let cage = []

    if (localStorage.length === 0) {
        localStorage.setItem('ratArray', JSON.stringify(cage))
    }

    //cursed
    // localStorage.removeItem('ratArray')

    //local storage does not keep the objects instantiated, therefore have to reinstantiate them 
    const storedRats = []
    const onStartUp = () => {
        //make sure cage is populated with local storage
        cage = (JSON.parse(localStorage.getItem('ratArray')))
        if (cage.length != 0) {
            for (let i = 0; i < cage.length; i++) {
                storedRats.push(new Rat(...Object.values(cage[i])))
            }
        }
    }
    onStartUp()
   
    //show rat info
    const showRat = () => {
        const $ratContainer =  $('<div>').addClass('ratContainer').appendTo($('.cage'))

        for (let i = 0; i < cage.length; i++) {
            $('<p>').addClass('ratName').text(`name: ${cage[i].name}`).appendTo($ratContainer)

            $('<p>').addClass('ratAge').text(`age: ${cage[i].age}`).appendTo($ratContainer)

            $('<p>').addClass('ratSex').text(`sex: ${cage[i].sex}`).appendTo($ratContainer)

            $('<p>').addClass('ratBreed').text(`breed: ${cage[i].breed}`).appendTo($ratContainer)

            $('<p>').addClass('ratPersonality').text(`personality: ${cage[i].personality}`).appendTo($ratContainer)

            $('<p>').addClass('ratAffection').text(`affection: ${cage[i].affection}`).appendTo($ratContainer)

            $('<p>').addClass('ratMood').text(`mood: ${cage[i].mood}`).appendTo($ratContainer)

            $('<p>').addClass('ratWeight').text(`weight: ${cage[i].weight}`).appendTo($ratContainer)

            $('<p>').addClass('health').text(`health: ${cage[i].health}`).appendTo($ratContainer)
        }
    }

    //buy a rat
    $('form').on('submit', event => {
        event.preventDefault()

        const $sexInput = $('input[name="sex"]')
        let sexInput = $('input[name="sex"]:checked').val()

        const $breedInput = $('input[name="breed"]')
        let breedInput = $('input[name="breed"]:checked').val()

        let nameInput = $('#name').val()

        $('#name').val('')
        $sexInput.prop('checked', false)
        $breedInput.prop('checked', false)

        JSON.parse(localStorage.getItem('ratArray'))

        cage.push(new Rat(nameInput, sexInput, randomPersonality, breedInput))

        localStorage.setItem('ratArray', JSON.stringify(cage))

        console.log(cage)

        $('.ratContainer').remove() 

    }) 

    if (cage.length != 0) {
        showRat()
    }

})