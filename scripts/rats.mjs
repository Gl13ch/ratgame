class Rat {
    constructor(id, ratName, sex, breed, cage, fur, hasRedEyes){
        this.id = id
        this.ratName = ratName
        this.sex = sex
        this.breed = breed
        this.cage = cage
        this.fur = fur
        this.hasRedEyes = hasRedEyes
        
        this.personality = randomIndex(personalityArr)
        
        if (this.breed === 'rex') {this.hasRexFur = true}
        if (this.breed === 'tailless') {this.isTailless = true}
        if (this.breed === 'satin') {this.isSatin = true}
        if (this.breed === 'hairless') {this.isHairless = true}
        if (this.breed === 'dumbo') {this.hasDumboEars = true}
        if (this.breed === 'bristleCoat') {this.hasBristleFur = true}

    }
    // FOR LOCAL STORAGE
    setPersonality(p){
        this.personality = p
    }
}

//REINSTANTIATE RATS
const reinstantiateRats = () => {
    playerRats = retrieve('playerrats')
    if (playerRats.length !== 0) {
        const temp = []
        for (let i = 0; i < playerRats.length; i++) {
            temp.push(new Rat(...Object.values(playerRats[i])))
            temp[i].setPersonality(playerRats[i].personality)
        }
        playerRats.length = 0
        for (let i = 0; i < temp.length; i++) {
            playerRats.push(temp[i])
        }
    }
    return playerRats
}

reinstantiateRats()