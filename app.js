const bcrypt = require('bcrypt');
const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const app = express();
const connectionString = "mongodb+srv://ruwayd99:vBGjISx3ePtxYCG3@hackateam.nvutpxw.mongodb.net/User_info?retryWrites=true&w=majority";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
// sign up get
app.get("/sign-up", function(req, res){
  res.sendFile(__dirname + "/sign-up.html");
});
// login get 
app.get("/login", function(req, res){
  res.sendFile(__dirname + "/login.html");
});
// Sign up post
app.post('/sign-up', async (req, res) => {
  // Connect to the MongoDB cluster
  const client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db("User_info");
  const coll = db.collection("User-sign_in");

  // Check if a similar username already exists in the collection
  const existingUser = await coll.findOne({ username: req.body.username });
  if (existingUser) {
    res.sendFile(__dirname + "/sign-up-again.html")
    client.close();
    return;
  }
  // Hash the password
  const saltRounds = 10;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Insert the new user in the collection
  const newUser = {
    username: req.body.username,
    password: hashedPassword
  }
  await coll.insertOne(newUser);
  res.send("User Created!")
  client.close();
});

// Log-in post
app.post('/login', async (req, res) => {
  // Connect to the MongoDB cluster
  const client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db("User_info");
  const coll = db.collection("User-sign_in");

  // Find the user in the collection
  const user = await coll.findOne({ username: req.body.username });
  if(!user){
    res.sendFile(__dirname + "/failure.html");
    client.close();
    return;
  }
  // Compare the plaintext password with the hashed password stored in the MongoDB database
  const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

  if (isPasswordCorrect) {
    res.send('Logged in successfully');
  } else {
    res.sendFile(__dirname + "/failure.html");
  }
  client.close();
});
// Failure post
app.post("/failure", function(req, res){
  res.redirect("/login");
});
app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
