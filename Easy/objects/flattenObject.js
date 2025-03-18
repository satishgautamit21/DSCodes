// const input = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         zip: "12345"
//     },
//     phone: ["555-1234", "555-5678"],
//     email: {
//         work: ["iM2wP@example.com",
//         "M0Hs3@example.com"]
//}
// }

// const output = {
//     name: "John",
//     age: 30,
//     address.street: "123 Main St",
//     address.city: "Anytown",
//     address.state: "CA",
//     address.zip: "12345"
// }

function flattenObject(obj) {
    const result = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            const flatObj = flattenObject(obj[key]);
            for (let flatKey in flatObj) {
                result[`${key}.${flatKey}`] = flatObj[flatKey];
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;  
}