function reverseWordInSentence(sentence) {
    // remove any leading or trailing spaces
    sentence = sentence.trim();
    return sentence.split(" ").reverse().join(" ");
}