$(() => {
    // STEPS TO ADDING NEW VARIABLES TO RAT
    // Pass variable in all 3 places in rat(this.val = val) constructor(val)
    // pass in onsubmit event
    // reset local storage
    class Rat {
        constructor(id, name, sex, personality, breed, cage, fur, hasRedEyes){
            this.id = id
            this.name = name
            this.sex = sex
            this.personality = personality
            this.breed = breed
            this.cage = cage
            this.fur = fur
            this.hasRedEyes = hasRedEyes
            this.breedObj = []
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
            this.competitionEntered = ''
            this.ageMonth = 1
            this.ageYear = 0
            this.mother = ''
            this.father = ''
        }
        makeBaby (babyId, babyName, babySex, babyPersonality, babyBreed, babyCage, babyFur, babyHasRedEyes, babyMother, babyFather){
            const baby = new Rat(babyId, babyName, babySex, babyPersonality, babyBreed, babyCage, babyFur, babyHasRedEyes)
            console.log(baby)
            baby.mother = babyMother
            baby.father = babyFather
            return baby
        }
        startingCage(cageIndex, newRat, newCageIndexHeldRats){
            this.cage = cageIndex
            newCageIndexHeldRats.push(newRat)
        }
        moveCage(cageIndex, newRat, newCageIndexHeldRats, oldCageIndexHeldRats, removeIndex){
            this.cage = cageIndex
            newCageIndexHeldRats.push(newRat)
            oldCageIndexHeldRats.splice(removeIndex, 1)
        }
        ageUpMonth(){
            this.ageMonth++
        }
        birthday(){
            this.ageYear++
        }
        resetMonth(){
            this.ageMonth = 0
        }

        // for when the object is recreated with local storage
        setAgeMonth(month){
            this.ageMonth = month
        }
        setAgeYear(year){
            this.ageYear = year
        }
        setBreed(obj){
            this.breedObj.push(obj)
        }
    }

    // for breeding "genetics"
    class Breed {
        constructor() {
            this.standard = 0,
            this.rex = 0,
            this.tailless = 0,
            this.hairless = 0,
            this.satin = 0,
            this.dumbo = 0,
            this.bristleCoat = 0
        }
    }

    // const testBreed = new Breed()
    // console.log(testBreed)
    // const testRat = new Rat('id', 'name', 'sex', 'personality', [], 'cage', 'fur', false)
    // console.log(testRat)
    // for (const [key] of Object.entries(testBreed)) {
    //     // console.log(key, value)
    //     testBreed[key] = 100
    // }

    // testRat.setBreed()

    class ShopRats {
        constructor(shopId, breed, sex, personality, fur, hasRedEyes) {
            this.shopId = shopId
            this.breed = breed
            this.sex = sex
            this.personality = personality
            this.fur = fur
            this.hasRedEyes = hasRedEyes
        }
    }

    class Cage{
        constructor(tag, cageName, capacity, cost, heldRats = [],foodAmount = "normal", foodType = "standard"){
            this.tag = tag
            this.cageName = cageName
            this.capacity = capacity
            this.cost = cost
            this.heldRats = heldRats
            this.foodAmount = foodAmount
            this.foodType = foodType
        } 
        changeFoodAmount (amount){
            this.foodAmount = amount
        }
        changeFoodType (type){
            this.foodType = type
        }
    }

    // Next:
    // clean up ui
    // - shop ui
    // - view of cage
    // - modal view
    // -find all little ui bugs such as
    // --would you like to move to a new cage is being displayed multiple times on click of the shop (realisticaly doesn't matter but would be good for multiple events to not be fireing)
    // --reset values of shop if clicked out(this might not matter if eventually the other views will be hidden)

    // choose new functionality to add
    // -user interactiblity(might be better once I have a cage view)
    // --tricks(after user interactiblity)
    // -stats(start with what different breeds should start with)

    // -add "genetics" to breeding

    //Cages
    const cageContainer = []

    const smallCage = new Cage('smallCage','small cage', 2,'$100')
    const largeCage = new Cage('largeCage','large cage', 3, '$200')
    const twoStoryCage = new Cage('twoStoryCage','2-story cage', 4,'$300')
    const athleticCage = new Cage('athleticCage','sporty cage', 2,'$400')
    const beautyCage = new Cage('beautyCage','beauty cage', 2,'$400')

    cageContainer.push(smallCage)
    cageContainer.push(largeCage)
    cageContainer.push(twoStoryCage)
    cageContainer.push(athleticCage)
    cageContainer.push(beautyCage)

    //VARIABLES---------------------------------

    //CSS Rats
    // const $canvas = $('.canvas')
    // const $standardCss = $('div.canvas.standard')
    // const $satinCss = $('div.canvas.satin')
    // const $dumboCss = $('div.canvas.dumbo')
    // const $bristleCoatCss = $('div.canvas.bristleCoat')
    // const $taillessCss = $('div.canvas.tailless')
    // const $hairlessCss = $('div.canvas.hairless')
    // const $rexCss = $('div.canvas.rex')

    // COLORS
    // If white then chance to have red eyes
    const furColors = ['beige', 'black', 'blue', 'blueBeige', 'champagne', 'chocolate', 'cocoa', 'lilac', 'mink', 'platinum', 'powderBlue', 'russianBlue', 'russianDove', 'skyBlue', 'white']

    //user input
    const sexArr = ['Male', 'Female']

    //randomized
    const personalityArr = ['agile','anxious','attentive','bold', 'cautious','communicative','confident','curious','determined','docile','dominant','easy going','easy to handle','enthusiastic','friendly','cheerful','irritable','lively','shy','solitary','tame','tempermental','trusting']

    //starts at neutral
    const moodArr = ['happy','sad','angry','content', 'thrilled', 'whatever', 'stressed']

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
    const breedsArr = ['standard', 'rex', 'tailless', 'hairless','satin','dumbo','bristle coat']

    //competition rank starts at 1

    //competition entered
    const competitions = ['eating contest','poleclimb', '10m dash', '100m dash', 'monkey bars', 'beauty contest', 'talent show']

    //rat activites
    const activites = ['wheel','bed','potty','food','water']

    //user actions in cage
    const userActions = ['go back', 'bathe', 'view stats', 'pet', 'grab','poke','give treat', 'brush']

    // Food
    const foodAmount = ['few','normal','many']
    const foodType = ['cheap','standard','expensive']

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
    const randomizeArray  = (array) => {
        let length  = 0
        for (let i = 0; i < array.length; i++) {
            length = i + 1  
        }
        let randomizedIndex = Math.floor(Math.random() * length)
        return randomizedIndex
    }

    const randomSex = sexArr[randomizeArray(sexArr)]

    const randomPersonality = personalityArr[randomizeArray(personalityArr)]

    //localstorage
    let rats = []
    let cages =[smallCage]
    let currentDate = {
        timeOfDay:'evening',
        day: 'Tuesday',
        week: 1,
        month: 'January',
        year: 1,
    }

    let nextTimeofDay = 'evening'
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']

    // ON START NEW GAME
    // if local storage does not exist create local storage
    if (localStorage.length === 0) {
        localStorage.setItem('ratArray', JSON.stringify(rats))
        localStorage.setItem('cageArray', JSON.stringify(cages))
        localStorage.setItem('currentDate', JSON.stringify(currentDate))
    }

    // START OVER
    // Remove Local Storage
    // localStorage.removeItem('ratArray')
    // localStorage.removeItem('cageArray')
    // localStorage.removeItem('currentDate')

    // LOAD
    //local storage startup stuff
    const load = () => {
        //make sure elements are populated with local storage
        currentDate = (JSON.parse(localStorage.getItem('currentDate')))
        rats = (JSON.parse(localStorage.getItem('ratArray')))
        cages = (JSON.parse(localStorage.getItem('cageArray')))

        const tempRats = []
        const tempCages = []

        //reinstantiate rats
        for (let i = 0; i < rats.length; i++) {
            tempRats.push(new Rat(...Object.values(rats[i])))
            tempRats[i].setAgeMonth(rats[i].ageMonth)
            tempRats[i].setAgeYear(rats[i].ageYear)
        }
        rats.length = 0
        for (let i = 0; i < tempRats.length; i++) {
            rats.push(tempRats[i])
        }
        
        //reinstantiate cages
        for (let i = 0; i < cages.length; i++) {
            tempCages.push(new Cage(...Object.values(cages[i])))
        }
        cages.length = 0
        for (let i = 0; i < tempCages.length; i++) {
            cages.push(tempCages[i])
        }

        showCages()
    }

    // SAVE
    // Should be just to set current state of rats and cages

    //show cages owned with rats owned into specific cage
    const showCages = () => {
        let $canvas = ''
        // let $clone = ''
        for (let i = 0; i < cages.length; i++) {

            const $cages = $('<div>').addClass('cage').attr('id', cages[i].tag).appendTo($('.cageContainer'))

            const $cageName = $('<h3>').text(`${cages[i].cageName}`).appendTo($(`#${cages[i].tag}`))

            cages[i].heldRats.forEach(element => {
                // console.log(element)
                let $rat = $('<div>').attr('id', element.id).addClass(`${element.breed} canvas draggable`).css('cursor','pointer').appendTo($(`#${cages[i].tag}`))

                $(`#${element.breed.toUpperCase()}`).children().clone().prependTo($rat)

                if (element.breed != 'hairless') {
                    let $body = $(`#${element.id}`).children('.ratBody').addClass(`${element.fur}`)
                    let $ear = $(`#${element.id}`).children('.ear').addClass(`${element.fur}`)
                    let $fur = $(`#${element.id}`).children('.fur').addClass(`${element.fur}`)
        
                    let $rexFur = $(`#${element.id}`).children('.rexFur').addClass(`rexFur-${element.fur}`).css('background', 'transparent')
                }
                if (element.hasRedEyes === true) { 
                    let $eyes = $(`#${element.id}`).children('.eyes').addClass(`red`)
                }
            })
        }
    }

    load()
    // After load()-------------------------------

    let newX = 0
    let newY = 0
    let startX = 0
    let startY = 0

    $('.draggable').on('mousedown', event => {
        startX = event.clientX
        startY = event.clientY

        let id = event.currentTarget.id

        // current mouse position
        // console.log(startX,startY)
        $('.draggable').on('mousemove', event => {
            newX = startX - event.clientX
            newY = startY - event.clientY
     
            startX = event.clientX
            startY = event.clientY
     
            $(`#${id}`).css("top", ($(`#${id}`).offset().top - newY) + 'px')
            $(`#${id}`).css("left", ($(`#${id}`).offset().left - newX) + 'px')
     
            // console.log(newX,newY)
            // console.log(startX,startY)
         })
         $('.draggable').on('mouseup', event => {
            $('.draggable').off('mousemove')
         })
    })

    // console.log(rats[0])
    // rats[i].setAgeMonth(rats[i].ageMonth)
    // rats[i].setAgeYear(rats[i].ageYear)

    // DAY NIGHT CYCLE
    const setCurrentTimeOfDay = () => {
        currentDate = (JSON.parse(localStorage.getItem('currentDate')))
        if (currentDate.timeOfDay === 'morning') {
            nextTimeofDay = 'morning'
            $('body').css('background-color', 'lightslategray')
        } else if (currentDate.timeOfDay === 'evening') {
            nextTimeofDay = 'evening'
            $('body').css('background-color', '#39365b')
        } else if(currentDate.timeOfDay === 'night'){
            nextTimeofDay = 'night'
            $('body').css('background-color', '#46465b')
        }
        $('.timeofday').text(`Time of Day: ${currentDate.timeOfDay}`)
        $('.week').text(`Week: ${currentDate.week}`)
        $('.day').text(`Day: ${currentDate.day}`)
        $('.month').text(`Month: ${currentDate.month}`)
    }

    // eventually wouldl like to look into a way to pause the timer when not viewing the in cage view
    // maybe a adding a class to the cage view would work, but unsure
    // take away when not viewing, re-add when click in again
    // need to test ^
    const dayNightCycle = () => {
        if (nextTimeofDay === 'morning') {
            goNextDay()
            console.log(currentDate.day)
            console.log(currentDate.month)
            $('body').css('background-color', 'lightslategray')
            currentDate.timeOfDay = 'morning'
            nextTimeofDay = 'evening'
        } else if (nextTimeofDay === 'evening') {
            $('body').css('background-color', '#39365b')
            currentDate.timeOfDay = 'evening'
            nextTimeofDay = 'night'
        } else if(nextTimeofDay === 'night'){
            $('body').css('background-color', '#46465b')
            currentDate.timeOfDay = 'night'
            nextTimeofDay = 'morning'
        }
        localStorage.setItem('currentDate', JSON.stringify(currentDate))
        $('.timeofday').text(`Time of Day: ${currentDate.timeOfDay}`)
        $('.week').text(`Week: ${currentDate.week}`)
    }

    // run day night cycle
    setCurrentTimeOfDay()
    // setInterval(dayNightCycle, 1000)

    const goNextDay = () => {
        const currentDayIndex = days.indexOf(currentDate.day);
        if (currentDayIndex === 6) {
            currentDate.week++
        }
        if (currentDate.week === 5 && currentDayIndex === 6) {
            goNextMonth()
        }
        const nextIndex = (currentDayIndex + 1) % days.length;
        currentDate.day = days[nextIndex];
        $('.day').text(`Day: ${currentDate.day}`)
        console.log('week: ',currentDate.week)
    }

    const goNextMonth = () => {
        ageUpRats()
        console.log(rats[0])
        currentDate.week = 1
        const currentMonthIndex = months.indexOf(currentDate.month);
        if (currentMonthIndex === 11) {
            currentDate.year++
        }
        const nextIndex = (currentMonthIndex + 1) % months.length;
        currentDate.month = months[nextIndex];
        $('.month').text(`Month: ${currentDate.month}`)
        console.log('year: ',currentDate.year)
    }

    // AGE UP RATS
    // need to local storage this change
    const ageUpRats = () => {
        rats.forEach(element => {
            element.ageUpMonth()
            $('.ratAge').text(`${element.ageMonth} month`)
            if (element.ageMonth === 12) {
                element.resetMonth()
                element.birthday()
                $('.ratAge').text(`${element.ageYear} year`)
            } else if (element.ageYear !== 0) {
                $('.ratAge').text(`${element.ageMonth} month, ${element.ageYear} year`)
            }
        })
        localStorage.setItem('ratArray', JSON.stringify(rats))
    }

    // BREEDING
    // rats should only be able to breed at 4 months old
    // rats should not be able to breed with parents and probably siblings(will need to add that)

    // may want to change the whole breed structure and do percentages

    const getRandomFromTwo = (item1, item2) => {
        const rand = Math.floor(Math.random() * 2)
        if (rand === 1) {
            return item1
        } else {
            return item2
        }
    }

    const redEyes = (eyes1, eyes2) => {
        console.log('rat1:',eyes1)
        console.log('rat2:',eyes2)
        if (eyes1 === true && eyes2 === true) {
            console.log(`rat1 red: ${eyes1 === true} rat2 red ${eyes2 === true}`)
            return eyes1
        } else if (eyes1 === false && eyes2 === false) {
            console.log(`rat1 red: ${eyes1 === true} rat2 red ${eyes2 === true}`)
            return eyes1
        } else {
            console.log('else')
            const rand = Math.floor(Math.random() * 2)
            if (rand === 1) {
                return true
            } else {
                return false
            }
        }
    }
    
    let selectedRat = ''
    let loopCount = 0
    // rat 1
    const generateMatchmaking = () => {
        
        rats.forEach(element => {
            $('#blankRat1').after(`<option value= ${element.name}> ${element.name}</option>`)
        });
    }

    // rat 2
    $('select[name="ratToBreed1"]').on('change', event => {
        selectedRat = $('select[name="ratToBreed1"]').val()
        
        rats.forEach(element => {
            if (selectedRat !== element.name) {
                loopCount++
                $('#blankRat2').after(`<option value= ${element.name}> ${element.name}</option>`)
            }
        })
        $('#rat2').show()
        // $('#matchmakingSubmit').show()
        selectedRat = ''
        if (loopCount === 1) {
            $('#matchmakingSubmit').show()
            $('#matchmakingName').show()
        }
    })

    $('select[name="ratToBreed2"]').on('change', event => {
        $('#matchmakingSubmit').show()
        $('#matchmakingName').show()
    })

    // can probably seprate males and females before the submit if wanted to
    $('.matchmakingForm').on('submit', event => {
        event.preventDefault()

        let rat1 = $('select[name="ratToBreed1"]').val()
        let rat2 = $('select[name="ratToBreed2"]').val()
        let nameInput = $('#matchmakingName').val()
        let idCounter = rats[rats.length - 1].id + 1
        let mother = ''
        let father = ''

        rats.forEach(element => {
          if (rat1 === element.name) {
            rat1 = element
          }  
          if (rat2 === element.name) {
            rat2 = element
          }
        });

        if (rat1.sex === 'Female') {
            mother = rat1
            father = rat2
        } else {
            mother = rat2
            father = rat1
        }

        rats.push(mother.makeBaby(idCounter, nameInput, randomSex, randomPersonality, getRandomFromTwo(mother.breed, father.breed), 'large cage', getRandomFromTwo(mother.fur, father.fur), redEyes(mother.hasRedEyes, father.hasRedEyes), mother.name, father.name))

        // rats.push(newRatty)
        console.log(rats)
    })

    // make sure to update function to reflect changes
    // makeBaby (id, name, sex, personality, breed, fur, hasRedEyes, mother, father){
    //     const baby = new Rat(idCounter,'baby',randomSex,randomPersonality,breed,fur,hasRedEyes)
    //     baby.mother = female
    //     baby.father = male
    //     // needs fur and hasRedEyes
    //     // test this first then we can see about making hybrids
    // }

    // SHOP RATS
    //create array of 3 random fur colors
    const createShopFurs = () => {
        const shopFurColors = []
        for (let i = 0; i < 3; i++) {
        const randomFur = furColors[randomizeArray(furColors)]
        shopFurColors.push(randomFur)
        }
        return shopFurColors
    }

    // create array of 3 random sexes
    const createAvailableSexes = () => {
        const shopSexes = []
        for (let i = 0; i < 3; i++) {
            const randomSex = sexArr[randomizeArray(sexArr)]
            shopSexes.push(randomSex)
        }
        return shopSexes
    }

    // check if array(shopFurColors) has any dupes, if it does rerun array(shopFurColors)
    const checkForDupes = (array) => {
        const uniqueFur = new Set(array)
        if (uniqueFur.size !== array.length) {
            createShopFurs()
            return false
        } else {
            return array
        }
    }

    // check if all the values in the array(shopSexes) are the same, if all values are the same reroll
    const allSame = (array) => {
        if (array.every(val => val === array[0])) {
            createAvailableSexes()
            return false
        } else {
            return array
        }
    }

    // random number between 0-20
    const redEyesChance = () => {
        const random = Math.floor(Math.random() * 20)
        if (random === 1) {
            // console.log('has red eyes')
            return true
        }else{
            // console.log('has black eyes')
            return false
        }
    }

    const generateShopRats = () => {
        let shopRats = []
        let currentBreed = $(event.target).val()
        let shopFurColors = []
        let shopSexesAvailable = []
        let shopRatIds = ['a','b','c']
        
        do {
            shopFurColors = checkForDupes(createShopFurs())
        } while (shopFurColors === false);

        do {
            shopSexesAvailable = allSame(createAvailableSexes())
        } while (shopSexesAvailable === false);

        for (let i = 0; i < 3; i++) {
            const randomPersonality = personalityArr[randomizeArray(personalityArr)]

            shopRats.push(new ShopRats(shopRatIds[i], currentBreed, shopSexesAvailable[i], randomPersonality, shopFurColors[i], redEyesChance()))
        }
        // console.log(shopRats)

        shopRats.forEach(element => {
            let $shopRats = $('<div>').attr('id', element.shopId).addClass(`${element.breed} canvas shopRats`).css('cursor','pointer').appendTo($('.shopRatsContainer'))

            $(`#${element.breed.toUpperCase()}`).children().clone().prependTo($shopRats)

            if (element.breed != 'hairless') {
                let $body = $(`#${element.shopId}`).children('.ratBody').addClass(`${element.fur}`)
                let $ear = $(`#${element.shopId}`).children('.ear').addClass(`${element.fur}`)
                let $fur = $(`#${element.shopId}`).children('.fur').addClass(`${element.fur}`)
    
                let $rexFur = $(`#${element.shopId}`).children('.rexFur').addClass(`rexFur-${element.fur}`).css('background', 'transparent')
            }
            if (element.hasRedEyes === true) { 
                let $eyes = $(`#${element.shopId}`).children('.eyes').addClass(`red`)
            }
        })
        return shopRats
    } 

    let currentShopRats = ''
    
    //on choosing breed - generate shop rats
    $('input[name="breed"]').on('change', event => {
        // reset values
        $('#a').remove()
        $('#b').remove()
        $('#c').remove()
        $('.wantToBuy').remove()

        currentShopRats = generateShopRats()
        
        // mouseenter works wierd with delegating, but works fine nested.
        $('.shopRats').on("mouseenter", event => {
            const currentRat = event.currentTarget
            for (let i = 0; i < currentShopRats.length; i++) {
                if (currentShopRats[i].shopId == currentRat.id) {
                    $('<p>').addClass('ratSexes').text(`${currentShopRats[i].sex}`).appendTo(currentRat)
                }
            }
        }).on("mouseleave", () =>{
            $('.ratSexes').remove()
        });
    })

    const ratToBuy = []
    let ifAlreadyClicked = true
    $('.shopRatsContainer').on("click",".shopRats", event => {
        if (ifAlreadyClicked === true) {
            if (globalCapacity() === true) {
                // remove values
                $('.wantToBuy').remove()

                const $currentRat = event.currentTarget
                // console.log($currentRat)
                currentShopRats.forEach(element => {
                    if ($currentRat.id !== element.shopId) {
                        $(`#${element.shopId}`).hide()
                    } else {
                        ratToBuy.push(element)

                        const $wantToBuy = $('<div>').addClass('wantToBuy').appendTo('.tempItems')
                        $(`#${$currentRat.id}`).after($('.wantToBuy'))
                        $('<p>').text('Would you like to buy this rat?').appendTo('.wantToBuy')
                        $('<button>').addClass('yesButton').val('yes').text('Yes').appendTo($('.wantToBuy'))
                        $('<button>').addClass('noButton').val('no').text('No').appendTo($('.wantToBuy'))
                        ifAlreadyClicked = false
                    }
                })
            }
        }
    })

    $('.shopRatsContainer').on('click',".yesButton", event => {
        $('.wantToBuy').remove()
        console.log(ratToBuy)

        $('.shopName').show()
        $('.shopSubmit').show()

        // move onto submit
    })

    $('.shopRatsContainer').on('click',".noButton", event => {
        // $('.shopRatsContainer').on("click",".shopRats")
        $('.wantToBuy').remove()
        $('.shopRats').show()
        ratToBuy.length = 0
        ifAlreadyClicked = true
    })

    //check capacity of all user cages, if room in any cage return true
    const globalCapacity = () => {
        for (let i = 0; i < cages.length; i++) {
            if (!(cages[i].capacity <= cages[i].heldRats.length)) {
                return true
            } 
        }
    }

    //show name above rat
    $('.canvas').on( "mouseenter", event => {
        const currentRat = event.currentTarget

        for (let i = 0; i < rats.length; i++) {

            if (rats[i].id == currentRat.id) {
                 let ratId = i

                 $('<p>').addClass('ratName').text(`${rats[ratId].name}`).appendTo(currentRat)
            }
        }
    }).on( "mouseleave", () =>{
        
        $('.ratName').remove()
    });

    //creates cage options to put rats in when buying a rat
    let onlyAvailableCage = []
    let ifRatInCage = []

    // can maybe split this into two functions check for rat at home and check for shop
    const checkCageCapacity = () => {
        const $moveText = $('<p>').addClass('move').text('Would you like to move your rat to another cage?')

        //resets on function call
        onlyAvailableCage.length = 0
        ifRatInCage.length = 0

        //resets values
        $('input[name="shopCage"]').remove()
        $('label[for="shopCage"]').remove()
        $('input[name="ratInfoCage"]').remove()
        $('label[for="ratInfoCage"]').remove()
        $('#moveSubmit').hide()

        //if capacity is available push into array
        for (let i = 0; i < cages.length; i++) {
            if (cages[i].capacity <= cages[i].heldRats.length) {
                // console.log("skipped")
            } else {
                // console.log('pushed to temp array')
                onlyAvailableCage.push(cages[i])
            }
        }

        //if rat is in cage put that cage into array to be checked against
        for (let i = 0; i < cages.length; i++) {
            cages[i].heldRats.forEach(element => {
                if (element.id !== Number(currentRatId[0])) {
                    // console.log('skip')
                } else {
                    // console.log('push')
                    ifRatInCage.push(cages[i])
                }
            });
        }

        for (let j = 0; j < onlyAvailableCage.length; j++) {

        if (ifRatInCage.length > 0) {
            if (ifRatInCage[0].tag === onlyAvailableCage[j].tag) {
                
            } else {
                //users cages
                const $ratInfoCageRadio = $(`<input type="radio" name="ratInfoCage" required="true" value='${onlyAvailableCage[j].cageName}'>`)
                const $ratInfoCageLabel = $(`<label for="ratInfoCage">${onlyAvailableCage[j].cageName}</label>`)

                const $inRatInfo = $('.moveRat').prepend($ratInfoCageRadio,$ratInfoCageLabel)

                $moveText.prependTo($('#modalText'))
                $('#moveSubmit').show()
            }
            }
        }

        //if there is only one cage in the array no need to display
        if (onlyAvailableCage.length > 1) {
            // console.log('2 or more cages')
            let availableCageRatId = []

            //loop through available cages with capacity to display them to user
            for (let j = 0; j < onlyAvailableCage.length; j++) {

                //shop
                const $shopCageRadio = $(`<input type="radio" name="shopCage" required="true" value='${onlyAvailableCage[j].cageName}'>`)
                const $shopCageLabel = $(`<label for="shopCage">${onlyAvailableCage[j].cageName}</label>`)
                
                //shop can show all
                const $inShop = $('#ratSubmit').before($shopCageRadio,$shopCageLabel)      
            }
        }
    }

    // MODAL
    const $foodAmount = $('label[for="foodAmount"]')
    const $foodType = $('label[for="foodType"]')

    const $modal = $('#modal')
    const $close = $('#close')
    const $open = $('.canvas')//click on rat

    //close modal
    const closeModal = () => {
        $modal.hide()
    }
    $close.on('click',closeModal)

    let currentRatId = []
    let currentCage = []
    
    // open modal
    $open.on('click', (event) => {
        $('.allRatInfo').remove()
        $('.move').remove()
        currentRatId.length = 0
        currentCage.length = 0

        $modal.show()

        // let eventID = event.currentTarget
        let eventID = event.currentTarget.getAttribute('id')

        currentRatId.push(eventID)
        
        for (let i = 0; i < rats.length; i++) {

            if ((rats[i].id) == eventID) {
                //get the array
                 let ratId = i
                 let currentRatCage = rats[ratId].cage

                 currentCage.push(rats[ratId].cage)

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
                $('<p>').addClass('ratNameInfo').text(`name: ${rats[ratId].name}`).appendTo($ratInfo)

                $('<p>').addClass('ratAge').text(`${rats[ratId].ageMonth} month`).appendTo($ratInfo)

                $('<p>').addClass('ratSex').text(`sex: ${rats[i].sex}`).appendTo($ratInfo)

                $('<p>').addClass('ratPersonality').text(`personality: ${rats[i].personality}`).appendTo($ratInfo)

                $('<p>').addClass('ratMother').text(`Mother: ${rats[i].mother}`).appendTo($ratInfo)

                $('<p>').addClass('ratFather').text(`Father: ${rats[i].father}`).appendTo($ratInfo)

                $('<p>').addClass('ratCage').text(`Cage: ${rats[i].cage}`).appendTo($ratInfo)

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

                // Food
                $('<p>').addClass('ratFoodAmount').text(`Food amount: ${getFoodAmount(currentRatCage)}`).appendTo($ratInfo)

                $('<p>').addClass('ratFoodType').text(`Food type: ${getFoodType(currentRatCage)}`).appendTo($ratInfo)

                $foodAmount.appendTo($('.ratFoodAmount'))
                $foodType.appendTo($('.ratFoodType'))

                if (globalCapacity() === true) {
                    checkCageCapacity()
                }
            }
        }
    })

    // for modal
    const getCurrentCage = () => {
        let cage = ''
        cages.forEach(element => {
            if (element.cageName === currentCage[0]) {
                cage = element
            }
        })
        return cage
    }

    // food amount for selected cage
    const getFoodAmount = (selectedCage) => {
        let cage = selectedCage
        let foodAmount = ''
        cages.forEach(element => {
            // console.log(cage)
            // console.log(element.cageName)
            if (cage === element.cageName) {
                foodAmount = element.foodAmount

            }
        })
        return foodAmount
    }

    // food amount for selected cage
    const getFoodType = (selectedCage) => {
        let cage = selectedCage
        let foodType = ''
        cages.forEach(element => {
            // console.log(cage)
            // console.log(element.cageName)
            if (cage === element.cageName) {
                foodType = element.foodType

            }
        })
        return foodType
    }

    // Only works once because I am reappending the element the click event is on, therefore getting rid of the click event
    // reload page seems like best option for now
    // need to come back and tweak, it is a little finicky
    $('.foodAmount').on('click', event => {
        JSON.parse(localStorage.getItem('cageArray'))
        let amount = $('.foodAmount').val()
        let currentCage = getCurrentCage()
        if (amount !== '---') {
            if (currentCage.foodAmount !== amount) {
                currentCage.changeFoodAmount(amount)
                localStorage.setItem('cageArray', JSON.stringify(cages))
                location.reload()
            }
        }
    })

    $('.foodType').on('click', event => {
        JSON.parse(localStorage.getItem('cageArray'))
        let type = $('.foodType').val()
        let currentCage = getCurrentCage()
        if (type !== '---') {
            if (currentCage.foodType !== type) {
                currentCage.changeFoodType(type)
                localStorage.setItem('cageArray', JSON.stringify(cages))
                location.reload()
            }  
        }
    })

    //move rat to another cage
    //should not show the cage the rat is currently in 
    $('.moveRat').on('submit', event => {
        // event.preventDefault()

        const $cageInput = $('input[name="ratInfoCage"]')
        let cageInput = $('input[name="ratInfoCage"]:checked').val()
        
        let chosenRatIndex = 0
        for (let i = 0; i < rats.length; i++) {
            if (rats[i].id === Number(currentRatId[0])) {
                chosenRatIndex = i
            }
        }

        let cageIndex = 0
        let oldCageIndex = rats[chosenRatIndex].cage
        for (let i = 0; i < cages.length; i++) {
            if (cageInput === cages[i].cageName) {
                cageIndex = i
            }
            if (oldCageIndex === cages[i].cageName) {
                oldCageIndex = i
            }
        }
        
        let oldCageRatIndex = 0
        for (let i = 0; i < cages[oldCageIndex].heldRats.length; i++) {
            if (rats[chosenRatIndex].name === cages[oldCageIndex].heldRats[i].name) {
                oldCageRatIndex = i
            }
        }
        
        //clear input
        $cageInput.prop('checked', false)

        //get local storage
        JSON.parse(localStorage.getItem('ratArray'))
        JSON.parse(localStorage.getItem('cageArray'))

        //move rat from one cage to another
        rats[chosenRatIndex].moveCage(cages[cageIndex].cageName, rats[chosenRatIndex],cages[cageIndex].heldRats, cages[oldCageIndex].heldRats, oldCageRatIndex)

        //set local storage
        localStorage.setItem('ratArray', JSON.stringify(rats))
        localStorage.setItem('cageArray', JSON.stringify(cages))
    })

    const disableSubmit = () =>{
        if (globalCapacity() !== true) {
            $('.shopSubmit').prop('disabled',true)
        } else {
            $('.shopSubmit').prop('disabled',false)
        }
    }

    //show shop items depending on what player wants to look at 
    $('.shopItems').on('click', event => {
        if ($('.shopItems').val() === 'rat'){
            disableSubmit()
            $('.hasSpace').remove()
            checkCageCapacity()
            if (globalCapacity() !== true) {
                $('<p>').addClass('hasSpace').text('you do not have any room to buy a new rat!').appendTo($('.buyarat'))
            }
            $('#ifMatchmaking').hide()
            $('#ifCage').hide()
            $('#ifRat').show()
        } else if ($('.shopItems').val() === 'cage'){
            $('#ifMatchmaking').hide()
            $('#ifRat').hide()
            $('#ifCage').show()
        } else if ($('.shopItems').val() === 'matchmaking'){
            $('.hasSpace').remove()
            if (globalCapacity() !== true) {
                $('<p>').addClass('hasSpace').text('you do not have any room to house a new rat!').appendTo($('.breedrats'))
            }
            generateMatchmaking()
            $('#ifMatchmaking').show()
            $('#ifRat').hide()
            $('#ifCage').hide()
        } else {
            $('#ifMatchmaking').hide()
            $('#ifRat').hide()
            $('#ifCage').hide()
        }
    })

    const setBreedInput = () => {
        let breedInput = ratToBuy[0].breed
        const newBreedObj = new Breed()
        for (const [key] of Object.entries(newBreedObj)) {
            if (key === breedInput) {
                newBreedObj[key] = 100
            }
        }
        return newBreedObj
    }

    //buy a rat
    $('.ratForm').on('submit', event => {      
        if (globalCapacity() === true) {
            event.preventDefault()

            //rat id
            let idCounter = 0
            if (rats.length !== 0) {
                idCounter = rats[rats.length - 1].id + 1
            }

            let nameInput = $('#name').val()

            let sexInput = ratToBuy[0].sex

            let breedInput = ratToBuy[0].breed

            let furInput = ratToBuy[0].fur

            let hasRedEyesInput = ratToBuy[0].hasRedEyes

            const $cageInput = $('input[name="shopCage"]')
            let cageInput = $('input[name="shopCage"]:checked').val()

            //clears after submit
            $('#name').val('')
            // $sexInput.prop('checked', false)
            // $breedInput.prop('checked', false)
            $cageInput.prop('checked', false)

            // Cage logic
            if (onlyAvailableCage.length === 1){
                cageInput = onlyAvailableCage[0].cageName
            }

            let cageIndex = 0
            for (let i = 0; i < cages.length; i++) {
                if (cageInput === cages[i].cageName) {
                    cageIndex = i
                }
            }

            let newRattyIndex = 0
        
            if (rats.length > 0) {
                newRattyIndex = rats.length
            }      

            //local storage get rats
            JSON.parse(localStorage.getItem('ratArray'))
            JSON.parse(localStorage.getItem('cageArray'))

            if (nameInput === 'gwenk'){
                rats.push(new Rat(nameInput, 'male', 'stinky', 'rex',cageInput))

                rats[newRattyIndex].startingCage(cages[cageIndex].cageName, rats[newRattyIndex], cages[cageIndex].heldRats)
            } else {
                rats.push(new Rat(idCounter, nameInput, sexInput, randomPersonality, breedInput, cageInput, furInput, hasRedEyesInput))
                
                rats[newRattyIndex].startingCage(cages[cageIndex].cageName, rats[newRattyIndex], cages[cageIndex].heldRats)
                rats[newRattyIndex].setBreed(setBreedInput())
            }

            console.log(rats)
            
            //local storage add new rat to cage
            localStorage.setItem('ratArray', JSON.stringify(rats))
            localStorage.setItem('cageArray', JSON.stringify(cages))
        } else {
            alert('you do not have enough room')
        }
    })

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
                cages.push(cageContainer[i])
            }
        }

        //local storage add new rat to cage
        localStorage.setItem('cageArray', JSON.stringify(cages))
    })
})