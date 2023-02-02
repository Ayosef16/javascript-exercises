const removeFromArray = function(a,...theArgs) {
    for (const arg of theArgs) {
        if (a.indexOf(arg) < 0) {
            continue;
        }
        else {
            a.splice(a.indexOf(arg),1);
        }        
    };
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
