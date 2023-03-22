const fibonacci = function(a) {
    let fib = [1,1,2,3,5,8];
    for (i=5 ; i <= 100; i++) {
        let add = fib[i] + fib[i-1];
        fib.push(add);
    }
    if (a>0) {
        return fib[a-1];
    }
    else {
        return "OOPS"
    }
};

// Do not edit below this line 
module.exports = fibonacci;