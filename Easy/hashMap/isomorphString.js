function isomorphString(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const mapS = new Map();
    const mapT = new Map();

    // for foo and bar beolw maps and mapt will be
    // mapS = {f:1,o:1,o:1}
    // mapT = {b:1,a:1,r:1}

    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], mapS.get(s[i]) + 1 || 1);
        mapT.set(t[i], mapT.get(t[i]) + 1 || 1);
    }

    // check if both maps are equal
    for (let i = 0; i < s.length; i++) {
        if (mapS.get(s[i]) !== mapT.get(t[i])) {
            return false;
        }
    }
    return true;
}