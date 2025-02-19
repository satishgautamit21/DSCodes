function throttle(func, delay) {
    let lastExecutedTime = 0;  // Tracks last function execution

    return function (...args) {
        const now = Date.now();

        if (now - lastExecutedTime >= delay) {  // Allow execution only after delay
            lastExecutedTime = now;
            func.apply(this, args);
        }
    };
}


function log(message) {
    console.log(message);
}

const throttledLog = throttle(log, 1000);
throttledLog("Hello");
throttledLog("World");