const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectID } = require('mongodb');
const app = express();

app.use(bodyParser());

app.post('/delete', async (req, res) => {
  const id = req.body.id;
  console.log(req.body);
  const coll = await db.collection('notes');
  try {
    let notes = await db.collection('notes').find();
    notes = await notes.toArray();
    console.log(notes);
    await coll.remove({ _id: ObjectID(id) });
    res.send('Deleted successfully!');
  } catch (err) {
    console.log(err);
    res.status(400).send('Not found');
  }
});

app.get('/view', async (req, res) => {
  let notes = await db.collection('notes').find();
  notes = await notes.toArray();
  res.send(notes);
});

app.post('/add', async (req, res) => {
  const coll = await db.collection('notes');
  await coll.insert({ title: req.body.title, body: req.body.body });
  res.send('Added new note');
});

const DB_URL = 'mongodb://localhost:27017';
const PORT = 8000;

let db;

MongoClient.connect(DB_URL, { useUnifiedTopology: true }, function(
  err,
  client
) {
  db = client.db('todo-demo');
  console.log('Connected to DB');
  if (err) throw err;
});

app.listen(PORT, () => console.log(`Live at port ${PORT}`));
