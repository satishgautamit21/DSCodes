function debounce(func, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer); // restart the timer if a new call comes
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

function test() {
    console.log('test');
}

const debounced = debounce(test, 1000);
debounced();