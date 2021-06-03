const mongoose = require('mongoose');

// Create a schema

const roadsterSchema = new mongoose.Schema({
    name: String,
    launch_date_utc: String,
    launch_date_unix: Number,
    launch_mass_kg: Number,
    launch_mass_lbs: Number,
    norad_id: Number,
    epoch_jd: Number,
    orbit_type: String,
    apoapsis_au: Number,
    periapsis_au: Number,
    semi_major_axis_au: Number,
    eccentricity: Number,
    inclination: Number,
    longitude: Number,
    periapsis_arg: Number,
    period_days: Number,
    speed_kph: Number,
    speed_mph: Number,
    earth_distance_km: Number,
    earth_distance_mi: Number,
    mars_distance_km: Number,
    mars_distance_mi: Number,
    flickr_images: String,
    wikipedia: String,
    video: String,
    details: String
});

roadsterSchema.methods.intro = function() {
    console.log(`The roadster name is ${this.name}`);
}

const Roadster = mongoose.model('Roadster', roadsterSchema);

module.exports = Roadster;