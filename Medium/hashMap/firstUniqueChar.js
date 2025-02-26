function firstUniqueChar(str){
    const frequencyMap = new Map();
    
    for(let char of str){
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    for(let char of str){
        if(frequencyMap.get(char) === 1){
            return char;
        }
    }
    return -1;
}