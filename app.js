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
            this.fur = ''
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
    }

    class ShopRats {
        constructor(shopId, breed, sex, personality, fur) {
            this.shopId = shopId
            this.breed = breed
            this.sex = sex
            this.personality = personality
            this.fur = fur
        }
    }

    class Cage{
        constructor(tag, cageName, capacity, cost, heldRats = []){
            this.tag = tag
            this.cageName = cageName
            this.capacity = capacity
            this.cost = cost
            this.heldRats = heldRats
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

    //Rat Variables:

    // COLORS
    // If white then chance to have red eyes
    const furColors = ['beige', 'black', 'blue', 'blueBeige', 'champagne', 'chocolate', 'cocoa', 'lilac', 'mink', 'platinum', 'powderBlue', 'russianBlue', 'russianDove', 'skyBlue', 'white']

    //user input
    const sexArr = ['Male', 'Female']

    //randomized
    const personalityArr = ['agile','anxious','attentive','bold', 'cautious','communicative','cconfident','curious','determined','docile','dominant','easy going','easy to handle','enthusiastic','friendly','cheerful','irritable','lively','shy','solitary','tame','tempermental','trusting']

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

    //user actions outside of cage
    //skip time
    //store
    //enter competition
    //save

    //day night cycle
    //morning - sleepy rats
    //evening - semi active/sleepy
    //night - very active

    // Tests---------------------------------------

    //Works, test to make sure you can append a div and all it's children
    // const divChildrenTest = () =>{
    //     let $canvas = $('div.canvas.standard')
    //     // console.log($canvas.attr('class'))
    //     $canvas.appendTo(".test")
    //     $canvas.children().appendTo($canvas)
    // }
    // divChildrenTest()

    // Hover Test
    // $('.hoverme').on( "mouseenter", () =>{
    //     $('.showme').show()
    // }).on( "mouseleave", () =>{
    //     $('.showme').hide()
    // });  

    // -------------------------------------------

    //randomizers
    const randomizeArray  = (array) => {
        let length  = 0
        for (let i = 0; i < array.length; i++) {
            length = i + 1  
        }
        let randomizedIndex = Math.floor(Math.random() * length)
        return randomizedIndex
    }

    //for baby rats
    const randomSex = sexArr[randomizeArray(sexArr)]

    const randomPersonality = personalityArr[randomizeArray(personalityArr)]

    //users items - localstorage
    let rats = []
    let cages =[smallCage]

    // ON START NEW GAME
    // if local storage does not exist create local storage
    if (localStorage.length === 0) {
        localStorage.setItem('ratArray', JSON.stringify(rats))

        localStorage.setItem('cageArray', JSON.stringify(cages))
    }

    // START OVER
    // Remove Local Storage
    // localStorage.removeItem('ratArray')
    // localStorage.removeItem('cageArray')

    // LOAD
    //local storage startup stuff
    const load = () => {
        //make sure rats is populated with local storage
        rats = (JSON.parse(localStorage.getItem('ratArray')))

        cages = (JSON.parse(localStorage.getItem('cageArray')))

        const tempRats = []
        const tempCages = []

        //reinstantiate rats
        for (let i = 0; i < rats.length; i++) {
            tempRats.push(new Rat(...Object.values(rats[i])))
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

                let $rat = $('<div>').attr('id', element.id).addClass(`${element.breed} canvas`).appendTo($(`#${cages[i].tag}`))

                $(`#${element.breed.toUpperCase()}`).children().clone().prependTo($rat)
            })
        }
    }   



    load()
    // After load()-------------------------------

    // when choose to buy rats on shop open ask which breed would like to buy then randomly generate 3 colors to choose from, should I also generate gender and personality and show, or just show gender, or be able to always choose male or female.
    //eventully rat breeds will unlock later, so starting rat maybe choose standard rat and always be able to choose between male and female.
    // choosing between male and female should probably always be choice, so maybe only show color
    // "these are the color choices I have available:"
    // show rat or show just an example of the color

    const createShopFurs = () => {
        const shopFurColors = []
        for (let i = 0; i < 3; i++) {
        const randomFur = furColors[randomizeArray(furColors)]
        shopFurColors.push(randomFur)
        }
        return shopFurColors
    }

    const createAvailableSexes = () => {
        const shopSexes = []
        for (let i = 0; i < 3; i++) {
            const randomSex = sexArr[randomizeArray(sexArr)]
            shopSexes.push(randomSex)
        }
        return shopSexes
    }

    const checkForDupes = (array) => {
        const uniqueFur = new Set(array)
        // console.log(uniqueFur)
        // console.log(array)
        if (uniqueFur.size !== array.length) {
            // console.log('dupes')
            // console.log(false)
            createShopFurs()
            return false
        } else {
            // console.log('no dupes')
            return array
        }
    }

    const allSame = (array) => {
        if (array.every(val => val === array[0])) {
            // console.log(array)
            // console.log('they are all the same')
            // console.log(false)
            createAvailableSexes()
            return false
        } else {
            // console.log(array)
            // console.log('they are not all the same')
            return array
        }
    }

    // $('#0 div:nth-child(7)').addClass('black')
    // console.log($('.ratBody'))


    // const test = $(`#STANDARD`).children()
    // console.log(test)

    let shopRats = []

    //generate daily shop
    $('input[type="radio"][name="breed"]').on('change', event => {
        shopRats.length = 0
        $('#a').remove()
        $('#b').remove()
        $('#c').remove()

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

            shopRats.push(new ShopRats(shopRatIds[i],currentBreed, shopSexesAvailable[i],randomPersonality,shopFurColors[i]))
        }

        // for (let i = 0; i < shopRats.length; i++) {
        //     let $shopRats = $('<div>').attr('id', shopRatIds[i]).addClass(`${shopRats[i].breed} canvas`).appendTo($('.shopRatsContainer'))

        //     $(`div.${shopRats[i].breed}.canvas`).children().clone().prependTo($shopRats)
        // }

        // cages[i].heldRats.forEach(element => {

        //     let $rat = $('<div>').attr('id', element.id).addClass(`${element.breed} canvas`).appendTo($(`#${cages[i].tag}`))

        //     $(`div.${element.breed}.canvas`).children().clone().prependTo($rat)
        // })

        shopRats.forEach(element => {
            // console.log('ran')
            let $shopRats = $('<div>').attr('id', element.shopId).addClass(`${element.breed} canvas`).appendTo($('.shopRatsContainer'))

            $(`#${element.breed.toUpperCase()}`).children().clone().prependTo($shopRats)

            // let $body = $(`#${element.shopId} div:nth-child(4)`).addClass(`${element.fur}`)

            let $body = $(`#${element.shopId}`).children('.ratBody').addClass(`${element.fur}`)
            // console.log($body)
        });

        // let $body = $(`#${element.shopId}`).children('.ratbody').addClass(`${element.fur}`)

        // $(`div.${element.breed}.canvas`).children().clone().prependTo($('#'))

        // let $body = $(`#${shopRatIds[i]} div:nth-child(4)`).addClass(`${shopRats[i].fur}`)

        // console.log(shopRats)

        // $('#0 div:nth-child(7)').addClass('black')
        // console.log($('.ratBody'))

        // let $rat = $('<div>').attr('id', element.id).addClass(`${element.breed} canvas`).appendTo($('.shopRatsContainer'))

        // $(`div.${element.breed}.canvas`).children().clone().prependTo($rat)
        
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
    $('.canvas').on( "mouseenter", event =>{
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

    //BABY RAT - sets mother and father
    // Will be matchmaking in shop
    // Should be a chance
    // will probably need rat relationships to increase chances
    // rats[0].baby(rats[0].breed, rats[0].name, rats[1].name)

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
    const $modal = $('#modal')
    const $close = $('#close')
    const $open = $('.canvas')//click on rat

    //close modal
    const closeModal = () => {
        $modal.hide()
    }
    $close.on('click',closeModal)

    let currentRatId = []
    
    //open modal
    $open.on('click', (event) => {
        $('.allRatInfo').remove()
        $('.move').remove()
        currentRatId.length = 0

        $modal.show()

        // let eventID = event.currentTarget
        let eventID = event.currentTarget.getAttribute('id')

        currentRatId.push(eventID)
        
        for (let i = 0; i < rats.length; i++) {

            if ((rats[i].id) == eventID) {

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

                if (globalCapacity() === true) {
                    checkCageCapacity()
                }
            }

            //need to run in it's own cage loop
            // append to('.ratInfo')
            //will be easier when player has to click into cage so you can get current cage info
            // $('<p>').addClass('ratFood').text(`Food amount: ${cageContaier[i].food.amount}`).appendTo($ratInfo)

            // $('<p>').addClass('ratFood').text(`Food type: ${cageContaier[i].food.type}`).appendTo($ratInfo)
        }
    })

    // $('#0 div:nth-child(7)').addClass('black')
    // console.log($('.ratBody'))

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

    //show shop items depending on what player wants to look at 
    $('.shopItems').on('click', event => {
        if ($('.shopItems').val() === 'rat'){
            checkCageCapacity()
            globalCapacity()
            // console.log(`globalCapacity: ${globalCapacity()}`)
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
    $('.ratForm').on('submit', event => {      
        if (globalCapacity() === true) {
            // event.preventDefault()

            //rat id
            let idCounter = 0
            if (rats.length !== 0) {
                idCounter = rats[rats.length - 1].id + 1
            }

            let nameInput = $('#name').val()

            const $sexInput = $('input[name="sex"]')
            let sexInput = $('input[name="sex"]:checked').val()

            const $breedInput = $('input[name="breed"]')
            let breedInput = $('input[name="breed"]:checked').val()

            const $cageInput = $('input[name="shopCage"]')
            let cageInput = $('input[name="shopCage"]:checked').val()

            //clears after submit
            $('#name').val('')
            $sexInput.prop('checked', false)
            $breedInput.prop('checked', false)
            $cageInput.prop('checked', false)

            
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
                rats.push(new Rat(idCounter, nameInput, sexInput, randomPersonality, breedInput, cageInput))
                
                rats[newRattyIndex].startingCage(cages[cageIndex].cageName, rats[newRattyIndex], cages[cageIndex].heldRats)
            }
            
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