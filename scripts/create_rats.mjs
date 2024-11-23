class RatBody {
    constructor(id, options = {}){
        // CANVAS
        this.canvas = document.createElement("div")
        this.canvas.className = "canvas "
        this.canvas.style.cursor = "pointer"
        this.canvas.id = id
        
        if (options.parent) {
            options.parent.appendChild(this.canvas)
        }

        if(options.draggable === true){
            this.canvas.className += 'draggable'
        }

        // EARS
        if(options.hasDumboEars === true){
            // dumboLeftEar dumboEar
            this.dumboEarL = document.createElement("div")
            this.dumboEarL.className = "dumboLeftEar dumboEar "
            this.canvas.insertBefore(this.dumboEarL, this.body)
        
            // dumboRightEar dumboEar
            this.dumboEarR = document.createElement("div")
            this.dumboEarR.className = "dumboRightEar dumboEar "
            this.canvas.insertBefore(this.dumboEarR, this.body)
        } else {
            // leftEar ear color
            this.earL = document.createElement("div")
            this.earL.className = "leftEar ear "
            this.canvas.insertBefore(this.earL, this.body)
            
            // rightEar ear color
            this.earR = document.createElement("div")
            this.earR.className = "rightEar ear "
            this.canvas.insertBefore(this.earR, this.body)
        }

        // TAIL
        if(options.isTailless !== true){
            this.tail = document.createElement("div")
            this.tail.className = "tail "
            this.canvas.insertBefore(this.tail, this.body)
        }

        // BODY
        this.body = document.createElement("div")
        this.body.className = "ratBody "
        this.canvas.appendChild(this.body)
 
        // TOE L
        this.toesL = document.createElement("div")
        this.toesL.className = "toesLeft toes"
        this.canvas.appendChild(this.toesL)

        // TOE R
        this.toesR = document.createElement("div")
        this.toesR.className = "toesRight toes"
        this.canvas.appendChild(this.toesR)

        // WHISKERS L
        this.whiskersL = document.createElement("div")
        this.whiskersL.className = "whiskersLeft whiskers"
        this.canvas.appendChild(this.whiskersL)

        // WHISKERS R
        this.whiskersR = document.createElement("div")
        this.whiskersR.className = "whiskersRight whiskers"
        this.canvas.appendChild(this.whiskersR)

        // HAND L
        this.handsL = document.createElement("div")
        this.handsL.className = "handsLeft hands"
        this.canvas.appendChild(this.handsL)

        // HAND R
        this.handsR = document.createElement("div")
        this.handsR.className = "handsRight hands"
        this.canvas.appendChild(this.handsR)

        // NOSE
        this.nose = document.createElement("div")
        this.nose.className = "nose"
        this.canvas.appendChild(this.nose)

        // EYE L
        this.eyeL = document.createElement("div")
        this.eyeL.className = "eyesLeft eyes" 
        this.canvas.appendChild(this.eyeL)
        
        // EYE R
        this.eyeR = document.createElement("div")
        this.eyeR.className = "eyesRight eyes"
        this.canvas.appendChild(this.eyeR)

        // Rat ID
        if(options.canvasID){
            this.canvas.id = options.canvasID
        }

        // Rat Breed
        if(options.canvasBreed){
            this.canvas.className += options.canvasBreed
        }

        // has bristle fur
        if(options.hasBristleFur === true){
            
        }

        // RAT FUR COLOR
        if (options.furColor) { 
            // IF HAIRLESS
            if(options.isHairless === true){
                this.body.className += 'hairlessBody'

                if (options.isTailless !== true) {
                    this.tail.className += 'hairlessTail'
                }
                
                if(options.hasDumboEars === true){
                    this.dumboEarL.className += 'hairlessEar'
                    this.dumboEarR.className += 'hairlessEar'
                } else {
                    this.earL.className += 'hairlessEar'
                    this.earR.className += 'hairlessEar'
                }

            } else {
                // body   
                this.body.className += options.furColor

                // ears
                if (options.hasDumboEars === true) {
                    this.dumboEarL.className += options.furColor
                    this.dumboEarR.className += options.furColor
                } else {
                    this.earL.className += options.furColor
                    this.earR.className += options.furColor
                }
                
                // Bristle Fur
                if (options.hasBristleFur === true) {
                    // bristleFur fur color
                    this.bristleFur = document.createElement("div")
                    this.bristleFur.className = "bristleFur fur "
                    this.canvas.insertBefore(this.bristleFur, this.body)

                    // bristleFur2 fur color
                    this.bristleFur2 = document.createElement("div")
                    this.bristleFur2.className = "bristleFur2 fur "
                    this.canvas.insertBefore(this.bristleFur2, this.body)

                    // bristleFur3 fur color
                    this.bristleFur3 = document.createElement("div")
                    this.bristleFur3.className = "bristleFur3 fur "
                    this.canvas.insertBefore(this.bristleFur3, this.body)

                    this.bristleFur.className += options.furColor
                    this.bristleFur2.className += options.furColor
                    this.bristleFur3.className += options.furColor
                }  

                // REX FUR
                if (options.hasRexFur === true) {

                    this.rexFur1 = document.createElement("div")
                    this.rexFur1.className = "rexFur1 rexFur rexFur-"
                    this.rexFur1.style.background = 'transparent'
                    this.canvas.appendChild(this.rexFur1)

                    this.rexFur2 = document.createElement("div")
                    this.rexFur2.className = "rexFur2 rexFur rexFur-"
                    this.rexFur2.style.background = 'transparent'
                    this.canvas.appendChild(this.rexFur2)

                    this.rexFur3 = document.createElement("div")
                    this.rexFur3.className = "rexFur3 rexFur rexFur-"
                    this.rexFur3.style.background = 'transparent'
                    this.canvas.appendChild(this.rexFur3)

                    this.rexFur1.className += options.furColor
                    this.rexFur2.className += options.furColor
                    this.rexFur3.className += options.furColor
                }

                if(options.isSatin === true){
                    this.shinySpot = document.createElement("div")
                    this.shinySpot.className = "shinySpots"
                    this.canvas.appendChild(this.shinySpot)
                }
            }
        }

        // Has red eyes
        if(options.hasRedEyes === true) {
            this.eyeL.className += ' red'
            this.eyeR.className += ' red'
        }
    } 
}

// EXAMPLES
// const test1 = new RatBody({
//     parent: document.getElementById("shopRatsContainer"),
//     furColor: 'cocoa',
//     isTailless: true,
//     redEyes: false,
//     hasBristleFur: true,
//     hasDumboEars: true,
//     isHairless: true
// })

// console.log(test1)

// const test2 = new RatBody({
//     parent: document.getElementById("shopRatsContainer"),
//     furColor: 'blue',
//     tail: true,
//     redEyes: false,
//     hasRexFur: true,
//     isSatin: true,
// })

// const test3 = new RatBody({
//     parent: document.getElementById("shopRatsContainer"),
//     furColor: testShopRat.fur,
//     isSatin: testShopRat.isSatin,
//     hasRedEyes: testShopRat.hasRedEyes,
// })