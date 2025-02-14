
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    const firstTwo = drivers.slice(0,2);
    return firstTwo;
}

const returnLastTwoDrivers = function() {
    const lastTwo = drivers.slice(2,4)
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fare) {
    return function() {
        fare = 5;
        return fare * 5;
    };
  }

function fareDoubler(doubles) {
    doubles = 10;
    return doubles * 2;
}

function fareTripler(triples) {
    triples = 12;
    return triples * 3;
}
function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }