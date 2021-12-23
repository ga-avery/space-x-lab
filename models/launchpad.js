const mongoose = require('mongoose');

// Create a schema

const launchpadSchema = new mongoose.Schema({ // Schema is missing a few objects
  name: String,                               // because they require subdocuments
  full_name: String,
  status: String,
  locality: String,
  region: String,
  timezone: String,
  latitude: Number,
  longitude: Number,
  launch_attempts: Number,
  launch_successes: Number,
  details: String,
});

launchpadSchema.methods.intro = function () {
  console.log(`The launchpad name is ${this.name}`);
}

const Launchpad = mongoose.model('Launchpad', launchpadSchema);



module.exports = Launchpad;