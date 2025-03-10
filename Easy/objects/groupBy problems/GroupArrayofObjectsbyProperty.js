function groupArrayOfObjectsByProperty(arr, property) {
    const grouped = {};
    for (let obj of arr) {
        const group = obj[property];
        if (!grouped[group]) {
            grouped[group] = [];
        }
        grouped[group].push(obj);
    }
    return grouped;
}

/*
    input = [ 
        { name: "John", age: 30, city: "New York" }, 
        { name: "Jane", age: 25, city: "London" },
        { name: "Boby", age: 44, city: "Paris" },
        { name: "Janefer", age: 35, city: "London" }, 
        { name: "Bob", age: 40, city: "Paris" } 
    ]

    output = {
        "New York": [ { name: "John", age: 30, city: "New York" } ],
        "London": [ { name: "Jane", age: 25, city: "London" }, { name: "Janefer", age: 35, city: "London" } ],
        "Paris": [ { name: "Boby", age: 44, city: "Paris" }, { name: "Bob", age: 40, city: "Paris" } ]
    }
*/