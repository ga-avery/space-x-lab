# Space X API
This is a Mongoose project with examples

1. Set up the server (includes a home route to the API)
2. Set up Mongoose
3. Make a file to get some data ( use the same data to add to our database )
4. Make a Model
5. Make a playground.js file to test our Model
6. Make more routes.

## Roadster Schema

```text
{
  "name": {
    "type": "String"
  },
  "launch_date_utc": {
    "type": "String"
  },
  "launch_date_unix": {
    "type": "Number"
  },
  "launch_mass_kg": {
    "type": "Number"
  },
  "launch_mass_lbs": {
    "type": "Number"
  },
  "norad_id": {
    "type": "Number"
  },
  "epoch_jd": {
    "type": "Number"
  },
  "orbit_type": {
    "type": "String"
  },
  "apoapsis_au": {
    "type": "Number"
  },
  "periapsis_au": {
    "type": "Number"
  },
  "semi_major_axis_au": {
    "type": "Number"
  },
  "eccentricity": {
    "type": "Number"
  },
  "inclination": {
    "type": "Number"
  },
  "longitude": {
    "type": "Number"
  },
  "periapsis_arg": {
    "type": "Number"
  },
  "period_days": {
    "type": "Number"
  },
  "speed_kph": {
    "type": "Number"
  },
  "speed_mph": {
    "type": "Number"
  },
  "earth_distance_km": {
    "type": "Number"
  },
  "earth_distance_mi": {
    "type": "Number"
  },
  "mars_distance_km": {
    "type": "Number"
  },
  "mars_distance_mi": {
    "type": "Number"
  },
  "flickr_images": [
    "String"
  ],
  "wikipedia": {
    "type": "String"
  },
  "video": {
    "type": "String"
  },
  "details": {
    "type": "String"
  }
}
```