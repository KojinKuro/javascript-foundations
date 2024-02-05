function createAirport(name, airlines, availableGates) {
  return { name, airlines, availableGates };
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`;
}

function landPlanes(airport, gateCount) {
  airport.availableGates -= gateCount;

  if(!airport.overflow) airport.overflow = 0;
  if(airport.availableGates > 0 && airport.overflow === 0) {
    airport.message = `Success! Current availability is ${airport.availableGates}.`
    return airport;
  }

  airport.overflow += Math.abs(airport.availableGates);
  airport.availableGates = 0;
  airport.message = `Oh no! Not enough gates available. Current overflow is ${airport.overflow}.`;
  return airport;
}

function checkAirlineLocations(airports, airline) {
  let array = [];

  airports.map((airport) => {
    if(airport.airlines.find((ar) => ar === airline)) {
      array.push(airport.name);
    }
  });

  return array;
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
