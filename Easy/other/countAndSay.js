/*
    Examples 
    1 -> "1"        also called base case
    2 -> "11"       prepare from prv - one time "1" => 11
    3 -> "21"       prepare from prv - two times "1" => 21
    4 -> "1211"     prepare from prv - one time "2" and one time "1" => 1211
    5 -> "111221"   prepare from prv - one time "1" and one time "2" and two times "1" => 111221
*/



function countAndSay(n) {
    // result string will be used to store the final result
    let result = '1';
    if(n===1) return result
    for (let i = 1; i < n; i++) {

        // current string will be used to store the current result
        let current = result;
        result = '';
        let count = 1;

        // count the consecutive numbers and add them to the result string
        for (let j = 1; j < current.length; j++) {

            // if the current number is equal to the previous number, increment the count
            // else add the count and number to the result string
            if (current[j] === current[j - 1]) {
                count++;
            } else {
                // add the count and number to the result string
                result += count + current[j - 1];
                count = 1;
            }
        }

        // add the last count and number to the result string
        result += count + current[current.length - 1];
    }
    return result;
}


console.log(countAndSay(5));
// here time complexity is O(n^2) and space complexity is O(n)