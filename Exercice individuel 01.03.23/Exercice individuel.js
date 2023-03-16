function getLatinCharacterList(text) {
    let charArray = []
    for (let i = 0; i < text.length -1; i++){
        charArray[i] = text[i] 
    }
    return charArray
}

let result = getLatinCharacterList("Hello World")
console.log(result)

