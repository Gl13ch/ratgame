$(() => {
    class Rat {
        constructor(name,sex,personality,mood){
            this.name = name
            this.sex = sex
            this.personality = personality
            this.mood = mood
            this.hunger = 10
        }
    }

    const $radioInput = $('input[name="sex"]')
    let sexInput = ''
    let nameInput = ''
    const cage = []
    const sex = ['Male', 'Female']
    const personality = ['legoobreeious','timid','cheerful','quiet']
    const mood = ['happy','sad','angry','content']

    const arrayLength  = (array) => {
        let length  = 0
        for (let i = 0; i < array.length; i++) {
            length = i + 1  
        }
        return length
    }

    const personalityi = Math.floor(Math.random() * arrayLength(personality))
    const randomPersonality = personality[personalityi]

    const moodIndex = Math.floor(Math.random() * arrayLength(sex))
    const randomMood = mood[moodIndex]

    

    const showRat = () => {
        const $ratContainer =  $('<div>').addClass('ratContainer').appendTo($('.cage'))

        for (let i = 0; i < cage.length; i++) {
            $('<p>').addClass('ratName').text(`name: ${cage[i].name}`).appendTo($ratContainer)

            $('<p>').addClass('ratSex').text(`sex: ${cage[i].sex}`).appendTo($ratContainer)

            $('<p>').addClass('ratPersonality').text(`personality: ${cage[i].personality}`).appendTo($ratContainer)

            $('<p>').addClass('ratMood').text(`mood: ${cage[i].mood}`).appendTo($ratContainer)
        }
    }


    $('form').on('submit', event => {
        event.preventDefault()

        nameInput = $('#name').val()

        if ($('input[name="sex"]:checked').val() === 'male') {
            sexInput = 'male'
        } 
        else {
            sexInput = 'female'
        }

        $('#name').val('')
        $radioInput.prop('checked', false)

        const newRatty = cage.push(new Rat(nameInput, sexInput, randomPersonality, randomMood))

        $('.ratContainer').remove()
        showRat()
    })

    //maybe click on rat and see more info about it
    //show immediate needs example: Ratty:Hungry
})