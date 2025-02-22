function reverseVowels(s) {
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    while (left < right) {
        if(!vowels.includes(arr[left])) left++;
        if(!vowels.includes(arr[right])) right--;
        if(vowels.includes(arr[left]) && vowels.includes(arr[right])) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};


console.log(reverseVowels("hello"));