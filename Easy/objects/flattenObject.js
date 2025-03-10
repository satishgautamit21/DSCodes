// const input = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         zip: "12345"
//     }
// }

// const output = {
//     name: "John",
//     age: 30,
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345"
// }

function flattenObject(obj) {
    const result = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            const flatObj = flattenObject(obj[key]);
            for (let flatKey in flatObj) {
                result[`${flatKey}`] = flatObj[flatKey];
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;  
}