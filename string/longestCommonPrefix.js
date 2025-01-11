function longestCommonPrefix(arr){
    let prefix = arr[0];

    for(let i=1; i< arr.length;i++){
        // arr[i].indexOf(prefix) will be 0 when 
        // prefix subsring present in arr[i]
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