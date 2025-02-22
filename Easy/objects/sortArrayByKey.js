function sortArrayByKey(array, key) {
    return array.sort((a, b) => a[key] - b[key]);
}

const input = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
]

console.log(sortArrayByKey(input, "age"));