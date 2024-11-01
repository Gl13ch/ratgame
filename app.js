$(() => {
    //object of rat
    class Rat {
        constructor(name,sex,personality,mood,hunger){
            this.name = name
            this.sex = sex
            this.personality = personality
            this.mood = mood
            this.hunger = hunger || 10
        }
        feed(){
           if (this.hunger === 10) {
             console.log('all full')
           } else if (this.hunger < 10) {
            for (let i = 0; i < 10; i++) {
                this.hunger + 1
            }
           } 
        }
    }

    //feed one at a time until 10 or feed up to 10 on feed?

    //could make hunger get incrementally more as it approaches 0, if reach 0 rat leaves

    //or could have weight system and have food always available, player able to choose how much food is available at all times, weight is affected by how many rats to ratio food available, few, normal, many amount.

    //feeding until 10

    //one feed up to 10

    //or allow above 10 which will make rat gain weight and lead to health problems, chonky rat

    //or a feed once a day thing, if fed that day = true, then all happy. if feed = false, then not happy... too many days without feeding - rat leaves

    //variables
    const sex = ['Male', 'Female']
    const personality = ['legoobreeious','timid','cheerful','quiet', 'optimistic']
    const mood = ['happy','sad','angry','content']

    let cage = []

    //randomizers
    const arrayLength  = (array) => {
        let length  = 0
        for (let i = 0; i < array.length; i++) {
            length = i + 1  
        }
        return length
    }

    const personalityIndex = Math.floor(Math.random() * arrayLength(personality))
    const randomPersonality = personality[personalityIndex]

    const moodIndex = Math.floor(Math.random() * arrayLength(mood))
    const randomMood = mood[moodIndex]

    // localStorage.removeItem('ratArray')

    //local storage does not keep the objects instantiated, therefore have to re instantiate them 
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

            $('<p>').addClass('ratSex').text(`sex: ${cage[i].sex}`).appendTo($ratContainer)

            $('<p>').addClass('ratPersonality').text(`personality: ${cage[i].personality}`).appendTo($ratContainer)

            $('<p>').addClass('ratMood').text(`mood: ${cage[i].mood}`).appendTo($ratContainer)

            $('<p>').addClass('ratName').text(`hunger: ${cage[i].hunger}`).appendTo($ratContainer)
        }
    }

    //buy a rat
    $('form').on('submit', event => {
        event.preventDefault()

        const $radioInput = $('input[name="sex"]')
        let sexInput = ''

        let nameInput = $('#name').val()

        if ($('input[name="sex"]:checked').val() === 'male') {
            sexInput = 'male'
        } 
        else {
            sexInput = 'female'
        }

        $('#name').val('')
        $radioInput.prop('checked', false)

        JSON.parse(localStorage.getItem('ratArray'))

        cage.push(new Rat(nameInput, sexInput, randomPersonality, randomMood))

        localStorage.setItem('ratArray', JSON.stringify(cage))

        $('.ratContainer').remove() 

    }) 

    if (cage.length != 0) {
        showRat()
    }
    
    // hunger
    // let hungerAmount = cage[0].hunger 

    // const interval = setInterval(() => {
    //     hungerAmount -= 1
    //     if (hungerAmount === 0) {
    //         console.log('starved')
    //         clearInterval(interval) 
    //     }
    // }, 2000);

})