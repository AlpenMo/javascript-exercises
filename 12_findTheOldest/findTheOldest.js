const findTheOldest = function (people) {
    if (people.length === 0) return null;

    let now = new Date();
    let currentYear = now.getFullYear();
   
    return people.reduce((oldest, current) => {
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
        return currentAge > oldestAge ? current : oldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
