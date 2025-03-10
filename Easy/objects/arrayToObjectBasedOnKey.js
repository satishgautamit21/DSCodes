function arrayToObjectBasedOnKey(arr, key) {
    return arr.reduce((ac, cv) => {
        ac[cv[key]] = cv;
        return ac;
    }, {})
}