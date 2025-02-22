function decodeColorCipher(cipher) {
    const map = {
        "a": "Red",
        "b": "Green",
        "c": "Blue",
        "d": "Yellow",
        "e": "Orange",
        "f": "Purple"
    };

    const text = "";
    const cipherStr= ""

    for(let char of cipher) {
        text += char;
        let cipherChar = Object.keys(map).find(key => map[key] === char);

        if(cipherChar) {
            cipherStr += cipherChar;
            text = "";
        }
    }

    return cipherStr
}


console.log(decodeColorCipher("RedGreenBlueYellow")); // "abce"
