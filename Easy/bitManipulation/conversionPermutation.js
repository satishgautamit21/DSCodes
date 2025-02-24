function conversionPermutation(n) {

    let smallest = null;

    for(let i=2; i<=36; i++) {

        // convert number to string in base i
        const converted = n.toString(i);

        // converted string compared lexographically
        if(smallest===null || converted < smallest) {
            smallest = converted;
        }
    }
    return smallest
}

console.log(conversionPermutation(3))  // 10