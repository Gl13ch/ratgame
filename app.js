$(() => {
    //object of rat
    class Rat {
        constructor(id,name,sex,personality,breed,cage){
            this.id = id
            this.name = name
            this.sex = sex
            this.personality = personality
            this.breed = breed
            this.cage = cage
            this.happiness = 50
            this.affection = 'neutral'
            this.mood = 'neutral'
            this.weight = 'normal'
            this.health = 'normal'
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
        moveCage(cageIndex, cageIndexHeldRats,rat){
            this.cage = cageIndex
            cageIndexHeldRats.push(rat)
        }
    }

    class Cage{
        constructor(tag, cageName, capacity, cost, heldRats){
            this.tag = tag
            this.cageName = cageName
            this.capacity = capacity
            this.cost = cost
            this.heldRats = heldRats || []
            this.food = {
                amount: ['few','normal','many'],
                type: ['cheap','standard','expensive']
            } 
        }
        changeFood (foodAmount, foodType){
            this.food.amount = this.food.amount[foodAmount]
            this.food.type = this.food.type[foodType]
        }
    }

    //need to think about how cages and rats and users interact
    //maybe for now just set up a user inventory, that starts with small cage, can go to shop and buy a new cage, then can move rat between cages
    
    //maybe don't even need class for this, just make an array
    //add User class, just start with cagesOwned = ['small cage']
    //buycage(will end up being user input from choosing from cageStock)

    //maybe rename to cageStock
    //maybe only allow user to buy specialty cages once(i.e athletic and beauty)
    //specialty cages might be better as an extention of Cage

    //cage ui a drop down, when buying new rat if only cagesOwned.length =< 2 && cage.capacity != max ask which cage to put in

    //need, probaly a drop down also, for changing hamster between owned cages, can appear in modal

    const cageContainer = []
    

    const smallCage = new Cage('smallCage','small cage', 1,'$100')
    const largeCage = new Cage('largeCage','large cage', 3, '$200')
    const twoStoryCage = new Cage('twoStoryCage','2-story cage', 4,'$300')
    const athleticCage = new Cage('athleticCage','sporty cage', 2,'$400')
    const beautyCage = new Cage('beautyCage','beauty cage', 2,'$400')

    // userCages.push(smallCage)
    // smallCage.heldRats =[]

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

    //starts at neutral
    const moodArr = ['happy','sad','angry','content']

    //user input
    const foodTypeArr = ['cheap','normal','expensive']
    const foodAmountArr = ['few','normal','many']

    //starts at neutral
    //should maybe start at unsure or cautious then move torwards direction based on actions
    const affectionArr = ['hate','dislike','whatever','like','love','adore']

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
    //save

    //day night cycle
    //morning - sleepy rats
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

    const sexIndex = Math.floor(Math.random() * arrayLength(sexArr))
    const randomSex = sexArr[sexIndex]

    const personalityIndex = Math.floor(Math.random() * arrayLength(personalityArr))
    const randomPersonality = personalityArr[personalityIndex]

    // const moodIndex = Math.floor(Math.random() * arrayLength(moodArr))
    // const randomMood = moodArr[moodIndex]

    //localstorage
    let rats = []
    let userCages =[smallCage]
    

    if (localStorage.length === 0) {
        localStorage.setItem('ratArray', JSON.stringify(rats))

        localStorage.setItem('cageArray', JSON.stringify(userCages))
    }

    // localStorage.removeItem('ratArray')
    // localStorage.removeItem('cageArray')

    //local storage startup stuff
    const onStartUp = () => {
        //make sure rats is populated with local storage
        rats = (JSON.parse(localStorage.getItem('ratArray')))

        userCages = (JSON.parse(localStorage.getItem('cageArray')))

        //reinstantiate rats
        const tempRats = []
        for (let i = 0; i < rats.length; i++) {
            tempRats.push(new Rat(...Object.values(rats[i])))
        }
        rats.length = 0
        for (let i = 0; i < tempRats.length; i++) {
            rats.push(tempRats[i])
        }

        //reinstantiate userCages
        const tempCages = []
        for (let i = 0; i < userCages.length; i++) {
            tempCages.push(new Cage(...Object.values(userCages[i])))
        }
        userCages.length = 0
        for (let i = 0; i < tempCages.length; i++) {
            userCages.push(tempCages[i])
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
    // rats[0].moveCage(userCages[0].cageName, userCages[0].heldRats, rats[0])
    // // console.log(rats[0])
    // console.log(smallCage)

    //BABY RAT - sets mother and father
    // rats[0].baby(rats[0].breed, rats[0].name, rats[1].name)

    const tempArray = []
    // let globalCapacity = ''
    //creates cage options to put rats in when buying a rat
    const checkCageCapacity = () => {
        tempArray.length = 0
        // if (userCages.length > 1) {
        for (let i = 0; i < userCages.length; i++) {
            if (userCages[i].capacity === userCages[i].heldRats.length + 1) {
                console.log("skipped")
            } else {
                tempArray.push(userCages[i])

                if (tempArray.length > 1) {
                    for (let j = 0; j < tempArray.length; j++) {
                        const $cageRadio = $(`<input type="radio" name="cage" required="true" value='${tempArray[j].cageName}'>`)
                        const $cageLabel = $(`<label for="cage">${tempArray[j].cageName}</label>`)

                        $('#ratSubmit').before($cageRadio,$cageLabel)
                    }
                }
            }
        }
    }

    // checkCageCapacity()

    // console.log(userCages)
    

    // console.log(tempArray)

    // const checkCageCapacity = () => {
    //     if (userCages.length > 1) {
    //         for (let i = 0; i < userCages.length; i++) {
    //             if (userCages[i].capacity !== userCages[i].heldRats.length) {
    //                 return true
    //             } else {
    //                 return false
    //             }
    //         }
    //     } else {
    //         return false
    //     }
    // }

    
    
    // checkCageCapacity()
    // console.log(checkCageCapacity())

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


    // console.log(globalCapacity())
    //show shop items depending on what player wants to look at 
    $('.shopItems').on('click', event => {
        if ($('.shopItems').val() === 'rat'){
            // if (globalCapacity() === false) {
                $('#ifCage').hide()
                $('#ifRat').show()
            // }
            
        } else if ($('.shopItems').val() === 'cage'){
            $('#ifRat').hide()
            $('#ifCage').show()
        } else {
            $('#ifRat').hide()
            $('#ifCage').hide()
        }
    })


    // let availableCapacity = ''
    // const globalCapacity = () => {
    //     for (let i = 0; i < userCages.length; i++) {
    //         if (userCages[i].capacity >= userCages[i].heldRats.length) {
    //             availableCapacity = true
    //         } else {
    //             availableCapacity = false
    //         }
    //     }
    // }
    // globalCapacity()
    console.log(userCages)
    for (let i = 0; i < userCages.length; i++) {
        console.log(userCages[i].capacity)
        console.log(userCages[i].heldRats.length)
        console.log(!(userCages[i].capacity <= userCages[i].heldRats.length))
    }

    //buy a rat
    $('.ratForm').on('submit', event => {
        for (let i = 0; i < userCages.length; i++) {
            if (!(userCages[i].capacity <= userCages[i].heldRats.length)) {
                // event.preventDefault()

                const $sexInput = $('input[name="sex"]')
                let sexInput = $('input[name="sex"]:checked').val()

                const $breedInput = $('input[name="breed"]')
                let breedInput = $('input[name="breed"]:checked').val()

                let nameInput = $('#name').val()

                // if (availableCapacity === true) {
                    //Cages
                    let cageInput = userCages[0].cageName
                    let cageIndex = 0

                    // if (globalCapacity !== false) {
                    //     cageInput = $('input[name="cage"]:checked').val()

                    //     for (let i = 0; i < userCages.length; i++) {
                    //         if (cageInput === userCages[i].cageName) {
                    //             cageIndex = i
                    //         }
                    //     }
                    // }

                    //clears after submit
                    $('#name').val('')
                    $sexInput.prop('checked', false)
                    $breedInput.prop('checked', false)

                    let newRattyIndex = 0
                    for (let i = 0; i < rats.length; i++) {
                        newRattyIndex = i
                    }

                    //local storage get rats
                    JSON.parse(localStorage.getItem('ratArray'))
                    JSON.parse(localStorage.getItem('cageArray'))

                    if (nameInput === 'gwenk'){
                        rats.push(new Rat(nameInput, 'male', 'stinky', 'rex',cageInput))

                        rats[newRattyIndex].moveCage(userCages[cageIndex].cageName,userCages[cageIndex].heldRats, rats[newRattyIndex])
                    } else {
                        rats.push(new Rat(idCounter, nameInput, sexInput, randomPersonality, breedInput, cageInput))
                        
                        rats[newRattyIndex].moveCage(userCages[cageIndex].cageName,userCages[cageIndex].heldRats, rats[newRattyIndex])
                    }

                    // rats[0].moveCage(userCages[0].cageName, userCages[0].heldRats, rats[0])
                    // console.log(rats[newRatty])
                    // console.log(userCages[cageIndex])
                    
                    //local storage add new rat to cage
                    localStorage.setItem('ratArray', JSON.stringify(rats))

                    localStorage.setItem('cageArray', JSON.stringify(userCages))

                    // console.log(rats)

                    // showRat()
            } else {
                alert('you do not have enough room')
            }
        }
        

        // } else {
        //     globalCapacity()
        //     console.log(globalCapacity())
        //     //clears after submit
        //     $('#name').val('')
        //     $sexInput.prop('checked', false)
        //     $breedInput.prop('checked', false)
        //     alert('you do not have enough room')
        // }
    })
        
    

    // console.log(rats[rats.length-1])
    // console.log(userCages[cageIndex])

    // Buy a cage
    $('.cageForm').on('submit', event => {
        // event.preventDefault()

        const $cageInput = $('input[name="cage"]')
        let cageInput = $('input[name="cage"]:checked').val()

        //clears after submit
        $cageInput.prop('checked', false)

        //local storage get rats
        JSON.parse(localStorage.getItem('cageArray'))

        //push specified cage into userCage
        for (let i = 0; i < cageContainer.length; i++) {
            if (cageContainer[i].tag === cageInput) {
                userCages.push(cageContainer[i])
            }
        }

        //local storage add new rat to cage
        localStorage.setItem('cageArray', JSON.stringify(userCages))
    })
})