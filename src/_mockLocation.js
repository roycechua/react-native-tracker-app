import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            // Apple headquarters
            // latitude: 37.33233,
            // longitude: -122.03121,
            longitude: 121.0472514 + increment * tenMetersWithDegrees,
            latitude: 14.6900846 + increment * tenMetersWithDegrees,
        },
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);
