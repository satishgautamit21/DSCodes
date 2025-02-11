function removeDublicatesByKey(arr) {
    return arr.filter(
        (item, index, self) => self.findIndex(t => t.id === item.id) === index
    )
}

const input = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "John" },
    { id: 1, name: "Bob" },
];

console.log(removeDublicatesByKey(input, "id"));