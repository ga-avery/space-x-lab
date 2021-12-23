const mongoose = require('mongoose');
const Launchpad = require('./models/launchpad');
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const Roadster = require('./models/roadster');

// Create a Roaster
const createRoadster = async (obj) => {
    Roadster.create(obj, (err, roadster) => {
        console.log(roadster);
        // response with json 
        // res.json(roadster)
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
    "name": "Paul's Tesla Roadster",
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
    "details": "Paul's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
    "id": "5eb75f0842fea42237d7f3f4"
}`

// parse this json
let obj = JSON.parse(roadsterOne);

// run function
// createRoadster(obj)

// function will be good for /roadster/:id
const fetchRoadster = (_id) => {
    Roadster.findOne({ _id }, (err, roadster) => {
        if (err) console.log(err);
        console.log(roadster);
        // response with json
        // res.json(roadster)
    })
}

// run the function
// fetchRoadster(`60b8e2a655766506288a12ef`);
// fetchRoadster(`60b8ef643305a30f00a6c130`);

const fetchRoadsters = async () => {
    Roadster.find({}, (err, roadsters) => {
        if (err) console.log(err);
        console.log(roadsters);
        // res.json(roadster)
    });
}

fetchRoadsters();

const updateRoadster = async (_id, name) => {
    Roadster.findOneAndUpdate({ _id }, { name }, { new: true }, (err, roadster) => {
        console.log(roadster);
        // response with redirect
        // res.redirect(`/roadster/${_id}`);
    })
}

// updateRoadster('60b8ef643305a30f00a6c130', 'Vinny Tesla Roadster');

const deleteRoadster = async (_id) => {
    Roadster.findOneAndRemove({ _id }, (err) => {
        if (err) console.log(err);
        console.log('Deleted!');
    });
    // response with a going back to /roadster
    // res.redirect('/roadster');
}

// deleteRoadster(`60b8e2a655766506288a12ef`);
/**
 * 
 * @param {{name: String,full_name: String,status: String,locality: String,region: String,timezone: String,latitude: Number,longitude: Number,launch_attempts: Number,launch_successes: Number,details: String}} obj 
 */
const createLaunchpad = async (obj) => {
    try {
        const launchpad = await Launchpad.create(obj);
        return launchpad;
    } catch (error) {
        console.error(error);
        return error
    }

}

createLaunchpad({
    "name": "VAFB SLC 3W",
    "full_name": "Vandenberg Space Force Base Space Launch Complex 3W",
    "locality": "Vandenberg Space Force Base",
    "region": "California",
    "timezone": "America/Los_Angeles",
    "latitude": 34.6440904,
    "longitude": -120.5931438,
    "launch_attempts": 0,
    "launch_successes": 0,
    "details": "SpaceX's original west coast launch pad for Falcon 1. It was used in a static fire test but was never employed for a launch, and was abandoned due to range scheduling conflicts arising from overflying other active pads.",
    "status": "retired",
    "id": "5e9e4501f5090910d4566f83"
})

const launchpad = {
    "name": "VAFB SLC 3W",
    "full_name": "Vandenberg Space Force Base Space Launch Complex 3W",
    "locality": "Vandenberg Space Force Base",
    "region": "California",
    "timezone": "America/Los_Angeles",
    "latitude": 34.6440904,
    "longitude": -120.5931438,
    "launch_attempts": 0,
    "launch_successes": 0,
    "details": "SpaceX's original west coast launch pad for Falcon 1. It was used in a static fire test but was never employed for a launch, and was abandoned due to range scheduling conflicts arising from overflying other active pads.",
    "status": "retired",
    "id": "5e9e4501f5090910d4566f83"
}