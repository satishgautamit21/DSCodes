function wordPattern(pattern, s) {
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== s[i]) {
                return false;
            }
        } else {
            // this make sure if new character found then new word found 
            // should not be present, if present then return false
            if (set.has(s[i])) {
                return false;
            }

            map.set(pattern[i], s[i]);
            set.add(s[i]);
        }
    }
    return true
}