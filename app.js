$(() => {
    //object of rat
    class Rat {
        constructor(id,name,sex,personality,breed){
            this.id = id
            this.name = name
            this.sex = sex
            this.personality = personality
            this.breed = breed
            this.happiness = 50
            this.affection = 'neutral'
            this.mood = 'neutral'
            this.weight = 'normal'
            this.health = 'normal'
            this.cage = 'small cage'
            this.tricks = []
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
            this.competitionRank = 1
            this.competitionEntered = []
            this.age = '1 month'
            this.mother = ''
            this.father = ''
        }
         baby (femaleBreed, female, male){
            const baby = new Rat(idCounter,'baby',randomSex,randomPersonality,femaleBreed)
            baby.mother = female
            baby.father = male
            console.log(baby)
        }
        moveCage(cageIndex){
            this.cage = cageIndex
        }
    }

    class Cage{
        constructor(cageName,capacity,cost){
            this.food = {
                amount: ['few','normal','many'],
                type: ['cheap','standard','expensive']
            }
            this.heldRats = []
            this.cageName = cageName
            this.capacity = capacity
            this.cost = cost
        }
        changeFood (foodAmount, foodType){
            this.food.amount = this.food.amount[foodAmount]
            this.food.type = this.food.type[foodType]
        }
    }

    const cageContainer = []

    const smallCage = new Cage('small cage', 2,'$100')
    const largeCage = new Cage('large cage', 3, '$200')
    const twoStoryCage = new Cage('2-story cage', 4,'$300')
    const athleticCage = new Cage('sporty cage', 2,'$400')
    const beautyCage = new Cage('beauty cage', 2,'$400')

    cageContainer.push(smallCage)
    cageContainer.push(largeCage)
    cageContainer.push(twoStoryCage)
    cageContainer.push(athleticCage)
    cageContainer.push(beautyCage)

    //VARIABLES

    //user input
    const sexArr = ['Male', 'Female']

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

    const sexIndex = Math.floor(Math.random() * arrayLength(sexArr))
    const randomSex = sexArr[sexIndex]

    const personalityIndex = Math.floor(Math.random() * arrayLength(personalityArr))
    const randomPersonality = personalityArr[personalityIndex]

    const moodIndex = Math.floor(Math.random() * arrayLength(moodArr))
    const randomMood = moodArr[moodIndex]

    //localstorage
    let rats = []

    if (localStorage.length === 0) {
        localStorage.setItem('ratArray', JSON.stringify(rats))
    }

    // localStorage.removeItem('ratArray')

    //local storage startup stuff
    const onStartUp = () => {
        //make sure rats is populated with local storage
        rats = (JSON.parse(localStorage.getItem('ratArray')))

        //reinstantiate objects to be apart of Rat local storage does not keep typing since it turns them into a string
        const tempRats = []
        for (let i = 0; i < rats.length; i++) {
            tempRats.push(new Rat(...Object.values(rats[i])))
        }

        rats.length = 0

        for (let i = 0; i < tempRats.length; i++) {
            rats.push(tempRats[i])
        }

        showRat()
    }

    //show rat info
    const showRat = () => {
        for (let i = 0; i < rats.length; i++) {

            const $rats = $('<div>').addClass('rat').attr('id', rats[i].name).appendTo($('.cage'))

            $('<button>').attr('id', rats[i].name).val(`${rats[i].name}`).text(`${rats[i].name}:${rats[i].id}`).addClass('ratInfo').appendTo($rats)
        } 
    }

    onStartUp()

    let idCounter = 0
    if (rats.length !==0) {
        idCounter = rats[rats.length - 1].id + 1
    }

    //change cage rat is in
    // rats[0].moveCage(cageContainer[3].cageName)
    // console.log(rats[0])

    //BABY RAT - sets mother and father
    // rats[0].baby(rats[0].breed, rats[0].name, rats[1].name)


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

        for (let i = 0; i < rats.length; i++) {
            if (rats[i].name === name) {
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
                $('<p>').addClass('ratAge').text(`name: ${rats[ratId].name}`).appendTo($ratInfo)

                $('<p>').addClass('ratAge').text(`age: ${rats[ratId].age}`).appendTo($ratInfo)

                $('<p>').addClass('ratSex').text(`sex: ${rats[i].sex}`).appendTo($ratInfo)

                $('<p>').addClass('ratPersonality').text(`personality: ${rats[i].personality}`).appendTo($ratInfo)

                $('<p>').addClass('ratMother').text(`Mother: ${rats[i].mother}`).appendTo($ratInfo)

                $('<p>').addClass('ratFather').text(`Father: ${rats[i].father}`).appendTo($ratInfo)

                $('<p>').addClass('ratCage').text(`Cage: ${rats[i].cage}`).appendTo($ratInfo)

                // $('<p>').addClass('ratFood').text(`Food amount: ${cageContaier[i].food.amount}`).appendTo($ratInfo)

                // $('<p>').addClass('ratFood').text(`Food type: ${cageContaier[i].food.type}`).appendTo($ratInfo)

                // rat tricks
                $('<p>').addClass('ratTricks').text(`Tricks: ${rats[i].tricks}`).appendTo($ratTricks)

                // rat condition
                $('<p>').addClass('ratAffection').text(`affection: ${rats[i].affection}`).appendTo($ratCondition)

                $('<p>').addClass('ratMood').text(`mood: ${rats[i].mood}`).appendTo($ratCondition)

                $('<p>').addClass('ratWeight').text(`weight: ${rats[i].weight}`).appendTo($ratCondition)

                $('<p>').addClass('ratHealth').text(`health: ${rats[i].health}`).appendTo($ratCondition)

                // rat stats
                $('<p>').addClass('ratEndurance').text(`Endurance: ${rats[i].endurance}`).appendTo($ratStats)

                $('<p>').addClass('ratQuickness').text(`Quickness: ${rats[i].quickness}`).appendTo($ratStats)

                $('<p>').addClass('ratJump').text(`Jump: ${rats[i].jump}`).appendTo($ratStats)

                $('<p>').addClass('ratGrooming').text(`Groomin: ${rats[i].grooming}`).appendTo($ratStats)

                $('<p>').addClass('ratAppearance').text(`Appearance: ${rats[i].appearance}`).appendTo($ratStats)

                $('<p>').addClass('ratCharm').text(`Charm: ${rats[i].charm}`).appendTo($ratStats)

                // rat training
                $('<p>').addClass('ratToilet').text(`Toilet: ${rats[i].toilet}`).appendTo($ratTraining)

                $('<p>').addClass('ratBed').text(`Bed: ${rats[i].bed}`).appendTo($ratTraining)

                $('<p>').addClass('ratEating').text(`Eating: ${rats[i].eating}`).appendTo($ratTraining)

                $('<p>').addClass('ratWheel').text(`Wheel: ${rats[i].wheel}`).appendTo($ratTraining)

                $('<p>').addClass('ratNibbling').text(`Nibbling: ${rats[i].nibbling}`).appendTo($ratTraining)

                // rat breed
                $('<p>').addClass('ratBreed').text(`breed: ${rats[i].breed}`).appendTo($ratBreed)

                //rat competition
                $('<p>').addClass('ratCompetitionRank').text(`rank: ${rats[i].competitionRank}`).appendTo($ratCompetition)

                $('<p>').addClass('ratCompetitionEntered').text(`Entered: ${rats[i].competitionEntered}`).appendTo($ratCompetition)
            }
        }
    })

    //show shop items
    // console.log($('option').val() === "rat")

    // const checkShop = () => {
       
    // }

    $('.shopItems').on('change', event => {
        if ($('.shopItems').val() === 'rat'){
            $('#ifCage').hide()
            $('#ifRat').show()
        } else if ($('.shopItems').val() === 'cage'){
            $('#ifRat').hide()
            $('#ifCage').show()
        } else {
            $('#ifRat').hide()
            $('#ifCage').hide()
        }
    })

    //buy a rat
    $('form').on('submit', () => {
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
            rats.push(new Rat(nameInput, 'male', 'stinky', 'rex'))
        } else {
            rats.push(new Rat(idCounter, nameInput, sexInput, randomPersonality, breedInput))
        }
        
        //local storage add new rat to cage
        localStorage.setItem('ratArray', JSON.stringify(rats))
    })

})