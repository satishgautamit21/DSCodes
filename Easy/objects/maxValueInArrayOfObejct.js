/*
    const input = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Bob", age: 35 }
    ]
*/

function maxValueInArrayOfObejct(arr, key) {
    return Math.max(...arr.map(item => item[key]));
}