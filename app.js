const express = require('express');
const mongoose = require('mongoose');
const Launchpad = require('./models/launchpad');

const app = express();
const PORT = process.env.PORT || 8000;
app.set('json spaces', 2);

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MONGOOSE
mongoose.connect('mongodb://localhost/spacexClone',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  });

const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

db.on('error', () => {
  console.log(`MongoDB Error`);
});

// Models
const Roadster = require('./models/roadster');

// ROUTES
app.get('/', (req, res) => {
  res.json({ message: 'SEI 412 Space X Clone' });
});

app.get('/roadster', (req, res) => {
  const fetchRoadsters = async () => {
    Roadster.find({}, (err, roadsters) => {
      if (err) console.log(err);
      console.log(roadsters);
      res.json(roadsters);
    });
  }

  fetchRoadsters();
})

app.get('/roadster/:id', (req, res) => {
  let _id = req.params.id; // pass down to function when called
  const fetchRoadster = (_id) => {
    Roadster.findOne({ _id }, (err, roadster) => {
      if (err) console.log(err);
      console.log(roadster);
      // response with json
      res.json(roadster);
    })
  }
  fetchRoadster(_id)
})

app.get('/launchpad/id/:id', async (rq, rs) => {
  try {
    let _id = rq.params.id;
    const launchpad = await Launchpad.findOne({ _id }).exec();
    console.log(launchpad);
    rs.json(launchpad);
  } catch (error) {
    console.error('launchpad', error);
  }
});
app.get('/launchpad/name/:name', async (rq, rs) => {
  try {
    let name = rq.params.name;
    const launchpad = await Launchpad.findOne({ name }).exec();
    console.log(launchpad);
    rs.json(launchpad)
  } catch (error) {
    console.log('intentional error', error);
  }
})

app.listen(PORT, () => {
  console.log(`You are now listening to the smooth sounds of ${PORT} 🎧`);
});