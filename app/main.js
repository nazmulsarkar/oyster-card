import Stations from './stations';
import Fares from './fares';
import transport from './transports';
/**
 * Tube Holborn to Earl's Court
 * 328 bus from Earl's Court to Chelsea
 * Tube Earl's court to Hammersmith
 */


let fares = new Fares();


const BUS = new transport('bus').transport;
const TUBE = new transport('tube').transport;

let passengerJourney = () => {
    fares.barrierEntry(new Stations('Holborn'), TUBE);
    fares.barrierLeave(new Stations("Earl's Court"), TUBE);

    fares.barrierEntry(new Stations("Earl's Court"), BUS);
    fares.barrierLeave(new Stations('Chelsea'), BUS);

    fares.barrierEntry(new Stations("Earl's Court"), TUBE);
    fares.barrierLeave(new Stations('Hammersmith'), TUBE);

    fares.calculateFare();
}


passengerJourney();

let newBalance = fares.currentFare;

console.log(newBalance);













