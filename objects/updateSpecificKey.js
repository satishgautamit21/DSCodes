function updateSpecificKey(arr, value) {
    const tarr = arr.map(item => {
        let { salary } = item;
        salary = salary + (value/100)*salary;
        return { ...item, salary: salary }
    });
}

const arr = [
    { name: "john", salary: 100 },
    { name: "jane", salary: 200 },
    { name: "bob", salary: 300 },
];

console.log(updateSpecificKey(arr, "salary", 10));