// using hashMap
function removeDublicatesByKey(arr) {
    const map = new Map();
    return arr.filter(item => {
        if (!map.has(item.id)) {
            map.set(item.id, true);
            return true;
        }
        return false;
    })
}

// using hashMap and map function
function removeDublicatesByKey(arr) {
   return [...new Map(arr.map(item => [item.id, item])).values()];
}


const input = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "John" },
    { id: 1, name: "Bob" },
];

console.log(removeDublicatesByKey(input, "id"));