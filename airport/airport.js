createAirport('Denver International Airport', ['United', 'Southwest', 'Delta'], 144)

function createAirport(name, airlines, availableGates) {
  return { name, airlines, availableGates };
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`;
}

function landPlanes(airport, gateCount) {
  airport.availableGates -= gateCount;

  if(airport.availableGates > 0) {
    airport.message = `Success! Current availability is ${airport.availableGates}.`
  } else {
    let overflow = Math.abs(airport.availableGates);
    airport.availableGates = 0;
    airport.message = `Oh no! Not enough gates available. Current overflow is ${overflow}.`;
  }

  return airport;
}

function checkAirlineLocations(airports, airline) {
  let arrayOfAirlines = [];
  for(let i=0; i < airports.length; ++i) {
    if (airports[i].airlines.find((ar) => ar === airline)) {
      arrayOfAirlines.push(airports[i].name);
    }
  }

  return arrayOfAirlines
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
