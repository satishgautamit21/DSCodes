function aggregate(arr) {
    const groupItems = {};

    for (let item of arr) {
        if(!groupItems[item.name]) {
            groupItems[item.name] = {
                name: item.name,
                quantity: 0,
                region: new Set()
            }
        }

        groupItems[item.name].quantity += item.quantity;
        groupItems[item.name].region.add(item.region);
    }
    return Object.values(groupItems).map(item => {
        item.region = [...item.region];
        return item
    });
}

const products = [
    { name: "laptop", quantity: 1, region: "US" },
    { name: "phone", quantity: 2, region: "IN" },
    { name: "tablet", quantity: 1, region: "CA" },
    { name: "laptop", quantity: 2, region: "US" },
    { name: "phone", quantity: 1, region: "IN" },
    { name: "tablet", quantity: 1, region: "UK" },
    { name: "laptop", quantity: 1, region: "IN" }
]

console.log(aggregate(products));