const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const Roadster = require('./models/roadster');

// Create a Roaster
const createRoadster = async (obj) => {
    Roadster.create(obj, (err, roadster) => {
        console.log(roadster);
    });
    // const newRoadster = await Roadster.create(obj);
}

/*
 "flickr_images": [
        "https://farm5.staticflickr.com/4615/40143096241_11128929df_b.jpg",
        "https://farm5.staticflickr.com/4702/40110298232_91b32d0cc0_b.jpg",
        "https://farm5.staticflickr.com/4676/40110297852_5e794b3258_b.jpg",
        "https://farm5.staticflickr.com/4745/40110304192_6e3e9a7a1b_b.jpg"
    ],
*/ 

let roadsterOne = `{
    "name": "Rome Bell's Tesla Roadster",
    "launch_date_utc": "2018-02-06T20:45:00.000Z",
    "launch_date_unix": 1517949900,
    "launch_mass_kg": 1350,
    "launch_mass_lbs": 2976,
    "norad_id": 43205,
    "epoch_jd": 2459365.187337963,
    "orbit_type": "heliocentric",
    "apoapsis_au": 1.664463098340991,
    "periapsis_au": 0.9857837639927796,
    "semi_major_axis_au": 63.03387626319803,
    "eccentricity": 0.2560815537578172,
    "inclination": 1.075784869680417,
    "longitude": 316.9253625836428,
    "periapsis_arg": 177.6872773741898,
    "period_days": 557.1638451242845,
    "speed_kph": 7453.521809848619,
    "speed_mph": 4631.402300507447,
    "earth_distance_km": 74300972.02818942,
    "earth_distance_mi": 46168469.29012809,
    "mars_distance_km": 309731249.9491183,
    "mars_distance_mi": 192458016.5121336,
    "wikipedia": "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
    "video": "https://youtu.be/wbSwFU6tY1c",
    "details": "Rome Bell's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
    "id": "5eb75f0842fea42237d7f3f4"
}`

// parse this json
let obj = JSON.parse(roadsterOne);

// run function
createRoadster(obj)