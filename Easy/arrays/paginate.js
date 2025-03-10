function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const input = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
    { id: 5, name: "Charlie" },
    { id: 6, name: "David" },
    { id: 7, name: "Eve" },
    { id: 8, name: "Frank" },
    { id: 9, name: "Grace" },
    { id: 10, name: "Henry" },
];

console.log(paginate(input, 3, 2));