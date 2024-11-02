$(() => {
    //object of rat
    class Rat {
        constructor(name,sex,personality,breed){
            this.name = name
            this.age = `${1} month`
            this.sex = sex
            this.personality = personality
            this.mother = ''
            this.father = ''
            this.cage = []
            this.food = {
                amount: '',
                type: ''
            }
            this.tricks = []
            this.affection = 'neutral'
            this.mood = 'neutral'
            this.weight = 'normal'
            this.health = 'normal'
            this.endurance = 10
            this.quickness = 10
            this.jump = 10
            this.grooming = 10
            this.appearance = 10
            this.charm = 10
            this.toilet = 'untrained'
            this.bed = 'untrained'
            this.eating = 'untrained'
            this.wheel = 'untrained'
            this.nibbling = 'untrained'
            this.breed = breed
            this.competitionRank = 1
            this.competitionEntered = []
        }
    }

    //VARIABLES

    //user input
    const sex = ['Male', 'Female']

    //randomized
    const personalityArr = ['agile','anxious','attentive','bold', 'cautious','communicative','cconfident','curious','determined','docile','dominant','easy going','easy to handle','enthusiastic','friendly','cheerful','irritable','lively','shy','solitary','tame','tempermental','trusting']

    //user input
    const foodTypeArr = ['cheap','normal','expensive']
    const foodAmountArr = ['few','normal','many']

    //starts at neutral
    //should maybe start at unsure or cautious then move torwards direction based on actions
    const affectionArr = ['hate','dislike','whatever','like','love','adore']

    //starts at neutral
    const moodArr = ['happy','sad','angry','content']

    //weight - dependant on food, amount/type
    const weightArr = ['skinny','slim','normal','tubby','fat']

    //health - starts at normal
    const healthArr = ['sick','normal','tip-top']

    //stats will be calculated based on breed and incremented based on activites the rat does in cage

    //training:
    //user interaction
    const trainedLevel = ['untrained', 'barely trained', 'decently trained', 'trained', 'perfectly trained']
    
    //breed - user input
    const breeds = ['standard', 'rex', 'tailless', 'hairless','satin','dumbo','bristle coat']

    //competition rank starts at 1

    //competition entered
    const competitions = ['eating contest','poleclimb', '10m dash', '100m dash', 'monkey bars', 'beauty contest', 'talent show']

    //rat activites
    const activites = ['wheel','bed','potty','food','water']

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
    //morning - sleepy rats
    //evening - semi active/sleepy
    //night - very active

    const $ratContainer =  $('.ratContainer')

    //randomizers
    const arrayLength  = (array) => {
        let length  = 0
        for (let i = 0; i < array.length; i++) {
            length = i + 1  
        }
        return length
    }

    const personalityi = Math.floor(Math.random() * arrayLength(personalityArr))
    const randomPersonality = personalityArr[personalityi]

    const moodi = Math.floor(Math.random() * arrayLength(moodArr))
    const randomMood = moodArr[moodi]

    //localstorage
    let cage = []

    if (localStorage.length === 0) {
        localStorage.setItem('ratArray', JSON.stringify(cage))
    }

    //cursed -- should be fixed. uncomment > refresh > comment out again.

    //can make into start over function

    // localStorage.removeItem('ratArray')

    const storedRats = []
    //local storage startup stuff
    const onStartUp = () => {
        //make sure cage is populated with local storage
        cage = (JSON.parse(localStorage.getItem('ratArray')))
        //reinstantiate objects to be apart of Rat local storage does not keep typing since it turns them into a string
        if (cage.length != 0) {
            for (let i = 0; i < cage.length; i++) {
                storedRats.push(new Rat(...Object.values(cage[i])))
            }
        }

        showRat()
    }
   
    //show rat info
    const showRat = () => {
        for (let i = 0; i < cage.length; i++) {

            const $rats = $('<div>').addClass('rat').attr('id', cage[i].name).appendTo($('.cage'))

            $('<button>').attr('id', cage[i].name).val(`${cage[i].name}`).text(`${cage[i].name}`).addClass('ratInfo').appendTo($rats)
        } 
    }
    onStartUp()
    
    // MODAL
    const $modal = $('#modal')
    const $close = $('#close')
    const $open = $('.ratInfo')

    //close modal
    const closeModal = () => {
        $modal.hide()
    }
    $close.on('click',closeModal)
    
    //open modal
    $open.on('click', (event) => {
        $('.allRatInfo').remove()
        $modal.show()

        const name = $(event.target).val()

        for (let i = 0; i < cage.length; i++) {
            if (cage[i].name === name) {
                //get the array
                let ratId = i

                //to put all info in
                const $moreInfo = $('<div>').addClass('allRatInfo').appendTo($('#modalText'))

                const $ratInfo =  $('<div>').addClass('ratInfo').appendTo($moreInfo)
                const $ratTricks =  $('<div>').addClass('ratTricks').appendTo($moreInfo)
                const $ratCondition =  $('<div>').addClass('ratCondition').appendTo($moreInfo)
                const $ratStats =  $('<div>').addClass('ratStats').appendTo($moreInfo)
                const $ratTraining =  $('<div>').addClass('ratTraining').appendTo($moreInfo)
                const $ratBreed =  $('<div>').addClass('ratBreed').appendTo($moreInfo)
                const $ratCompetition =  $('<div>').addClass('ratCompetition').appendTo($moreInfo)

                // rat info
                $('<p>').addClass('ratAge').text(`name: ${cage[ratId].name}`).appendTo($ratInfo)

                $('<p>').addClass('ratAge').text(`age: ${cage[ratId].age}`).appendTo($ratInfo)

                $('<p>').addClass('ratSex').text(`sex: ${cage[i].sex}`).appendTo($ratInfo)

                $('<p>').addClass('ratPersonality').text(`personality: ${cage[i].personality}`).appendTo($ratInfo)

                $('<p>').addClass('ratMother').text(`Mother: ${cage[i].mother}`).appendTo($ratInfo)

                $('<p>').addClass('ratFather').text(`Father: ${cage[i].father}`).appendTo($ratInfo)

                $('<p>').addClass('ratCage').text(`Cage: ${cage[i].cage}`).appendTo($ratInfo)

                $('<p>').addClass('ratFood').text(`Food: ${cage[i].food}`).appendTo($ratInfo)

                // rat tricks
                $('<p>').addClass('ratTricks').text(`Tricks: ${cage[i].tricks}`).appendTo($ratTricks)

                // rat condition
                $('<p>').addClass('ratAffection').text(`affection: ${cage[i].affection}`).appendTo($ratCondition)

                $('<p>').addClass('ratMood').text(`mood: ${cage[i].mood}`).appendTo($ratCondition)

                $('<p>').addClass('ratWeight').text(`weight: ${cage[i].weight}`).appendTo($ratCondition)

                $('<p>').addClass('ratHealth').text(`health: ${cage[i].health}`).appendTo($ratCondition)

                // rat stats
                $('<p>').addClass('ratEndurance').text(`Endurance: ${cage[i].endurance}`).appendTo($ratStats)

                $('<p>').addClass('ratQuickness').text(`Quickness: ${cage[i].quickness}`).appendTo($ratStats)

                $('<p>').addClass('ratJump').text(`Jump: ${cage[i].jump}`).appendTo($ratStats)

                $('<p>').addClass('ratGrooming').text(`Groomin: ${cage[i].grooming}`).appendTo($ratStats)

                $('<p>').addClass('ratAppearance').text(`Appearance: ${cage[i].appearance}`).appendTo($ratStats)

                $('<p>').addClass('ratCharm').text(`Charm: ${cage[i].charm}`).appendTo($ratStats)

                // rat training
                $('<p>').addClass('ratToilet').text(`Toilet: ${cage[i].toilet}`).appendTo($ratTraining)

                $('<p>').addClass('ratBed').text(`Bed: ${cage[i].bed}`).appendTo($ratTraining)

                $('<p>').addClass('ratEating').text(`Eating: ${cage[i].eating}`).appendTo($ratTraining)

                $('<p>').addClass('ratWheel').text(`Wheel: ${cage[i].wheel}`).appendTo($ratTraining)

                $('<p>').addClass('ratNibbling').text(`Nibbling: ${cage[i].nibbling}`).appendTo($ratTraining)

                // rat breed
                $('<p>').addClass('ratBreed').text(`breed: ${cage[i].breed}`).appendTo($ratBreed)

                //rat competition
                $('<p>').addClass('ratCompetitionRank').text(`rank: ${cage[i].competitionRank}`).appendTo($ratCompetition)

                $('<p>').addClass('ratCompetitionEntered').text(`Entered: ${cage[i].competitionEntered}`).appendTo($ratCompetition)
            }
        }
    })

    //buy a rat
    $('form').on('submit', event => {
        // event.preventDefault()

        const $sexInput = $('input[name="sex"]')
        let sexInput = $('input[name="sex"]:checked').val()

        const $breedInput = $('input[name="breed"]')
        let breedInput = $('input[name="breed"]:checked').val()

        let nameInput = $('#name').val()

        //clears after submit
        $('#name').val('')
        $sexInput.prop('checked', false)
        $breedInput.prop('checked', false)

        //local storage get cage arr
        JSON.parse(localStorage.getItem('ratArray'))

        if (nameInput === 'gwenk'){
            cage.push(new Rat(nameInput, 'male', 'stinky', 'rex'))
        } else {
            cage.push(new Rat(nameInput, sexInput, randomPersonality, breedInput))
        }
        
        //local storage add new rat to cage
        localStorage.setItem('ratArray', JSON.stringify(cage))
    })

})