/* 
The total time complexity is O(n * m), where:

n is the number of strings in the array.
m is the length of the longest string in the array.
*/
function longestCommonPrefix(arr){
    let prefix = arr[0];

    for(let i=1; i< arr.length;i++){
        // arr[i].indexOf(prefix) will be 0 when 
        // prefix subsring present in arr[i]

        // let say arr[1]  = "ram" and prefix = "ramayan"
        // then we will slice prefix until prefix match arr[1] i.e. indexOf(prefix) will be 0

        while(arr[i].indexOf(prefix)!==0) {
            prefix =  prefix.slice(0, prefix.length-1)
            if(prefix.length === 0){
                return "";
            }
        }
    }
    return prefix
}

console.log(longestCommonPrefix(["kit", "kitten", "kite"]))