class ImmutableObject {
    constructor(data) {
        this.data = Object.freeze({...data});
    }
    getObjectCopy() {
        return this.data;
    }

    static isMutable(obj) {
        return obj && !Object.isFrozen(obj);
    }
}

const tesObj = { a: 1, b: 2, c: 3 };

const obj = new ImmutableObject(tesObj);
console.log(obj.getObjectCopy());
console.log(ImmutableObject.isMutable(tesObj));
console.log(ImmutableObject.isMutable(obj.getObjectCopy()));  // false