const findTheOldest = function(array) {
    let oldest = array.sort((a,b) => {
        if(!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        }
        else if(!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        }
        return a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth)
        });
    return oldest[oldest.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
