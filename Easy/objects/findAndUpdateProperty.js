/*
    input = {
        name: "John",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        }
    }
*/

// you have given a key nname which could be at any level in a deeply nested object. you need to 
// update the value of that property.

function findAndUpdateProperty(obj, keyName, value) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            findAndUpdateProperty(obj[key], keyName, value);
        } else if (key === keyName) {
            obj[key] = value;
        }
    }
    return obj;
}