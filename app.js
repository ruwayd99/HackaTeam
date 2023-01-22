const bcrypt = require('bcrypt');
const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const app = express();
const connectionString = "mongodb+srv://ruwayd99:vBGjISx3ePtxYCG3@hackateam.nvutpxw.mongodb.net/User_info?retryWrites=true&w=majority";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/sign-in.html");
});
// Sign in post
app.post('/', async (req, res) => {
  // Hash the password
  const saltRounds = 10;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Connect to the MongoDB cluster
  const client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db("User_info");
  const coll = db.collection("User-sign_in");
  
  // insert the data in the collection
  const data = {
    username: req.body.username,
    password: hashedPassword
  }
  await coll.insertOne(data);
  client.close();

  res.send('Data received:\n');
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );

// app.post('/', async function (req, res) {
//   try{
//     let client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
//     let db = client.db("User_info");
//     let coll = db.collection("User-sign_in");
//     await coll.insertOne(req.body);
//     client.close();
//     res.send('Data received:\n' + JSON.stringify(req.body));
//   } catch(err) {
//     console.log(err);
//     res.send(err);
//   }
// 
