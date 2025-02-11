function getNewArrayByKey(arr, key) {
    return arr.reduce((ac, cv) => {
        ac.push(cv[key]);
        return ac
    }, [])
}


const input = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
]

// output ["john", "jane", "bob"]

console.log(getNewArrayByKey(input, "name"));