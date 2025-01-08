class UniqueArray {
    getUnique(arr) {
        let i=0;
        for(let j=0; j<arr.length; j++) {
            /*
                Here whenever it found duplicate element, j is incremented, otherwise
                i is incremented and arr[i] = arr[j]. There is
                no need to worry when a[0] is not set as it is taken care
            */

            if(arr[i] !== arr[j]) {
                arr[++i] = arr[j];
            }
        }
        arr.length = i+1;
        return arr
    }
}

const uniqueArray = new UniqueArray();

console.log("unique array", uniqueArray.getUnique([1, 2,2,3, 3, 4, 5,5, 6, 7,8, 8, 9, 10])); 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]