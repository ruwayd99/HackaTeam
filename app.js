var usernameFinal = null;
class UserAccount {
  constructor(userName, password) {
          this.firstName = null; //String
          this.lastName = null; //String
          this.userName = userName; //String
          this.email = null; //String
          this.phoneNumber = null; //String
          this.password = password; //String
          this.userDetails = null; //UserDetails object
          this.team = null; //Team object
          this.algoScore = null; //int 0-20
    }

    //accessor property(setter)
  set setFirstName(firstName) {
      this.firstName = firstName;
  }

  //accessor property(setter)
  set setLastName(lastName) {
      this.lastName = lastName;
  }

  //accessor property(setter)
  set setEmail(email) {
      this.email = email;
  }

  //accessor property(setter)
  set setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
  }

  //accessor property(setter)
  set setUserDetails(userDetails) {
      this.userDetails = userDetails;
  }

  set setTeam(team) {
      this.team = team;
  }
  }
  
    class Team {
      constructor(teamName, teamDescription, userAccounts) {
      this.id = generateString(5);
      this.teamName = teamName; //String
      this.teamDescription = teamDescription; //String
      this.UserAccounts = userAccounts; //List of user accounts
      this.teamLimit = 4;
    }
  }
  
  class UserDetails {
      constructor(experienceLevel, seriousness) {
              this.experienceLevel = experienceLevel; //Experience level enum
              this.languages = null; //List of String
              this.interests = null; //List of String
              this.hackathon = null; //String
              this.seriousness = seriousness; //int 1-10
              this.checkboxGoals = null; //ListofGoals
              this.stringGoals = null; //String
              this.aboutMe = null; //String
           }
  }
  
  // Modifies: A given team and a User
  // Requires: A team that is not full
  // Effects: if has team returns true, prompt the user if they do indeed want to leave their team
  
  //modifies: both users teams as well as creates a new team
  //requires: userAccounts that are both not on teams
  //effects: constucts new team and places both users on said team
  function createNewTeam(u1, u2) {
      newTeamMembers = [u1, u2];
      newTeam = new Team["DefaultName", "DefaultDescription", newTeamMembers];
      u1.UserDetails.hasTeam = true;
      u2.userDetails.hasTeam = false;
      u1.team = newTeam;
      u2.team = newTeam;
  }

  // Effects: If userAccount is on a team return true
  function onTeam(u1) {
      if (u1.team == nulll) {
          return false
      }
      return true;
  }
  
  
  
  
  // make random string
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  function generateString(length) {
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return result;
  }

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
  usernameFinal = req.body.username;
  const existingUser = await coll.findOne({ username: usernameFinal });
  if (existingUser) {
    res.sendFile(__dirname + "/sign-up-again.html")
    client.close();
    return;
  }
  // Hash the password
  const saltRounds = 10;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

 /*  // Insert the new user in the collection
  const newUser = {
    username: req.body.username,
    password: hashedPassword
  } */

  var newUser = new UserAccount(usernameFinal, hashedPassword);
  
  await coll.insertOne(newUser);
  res.sendFile(__dirname + "/user-details.html");
  client.close();
});

// Log-in post
app.post('/login', async (req, res) => {
  // Connect to the MongoDB cluster
  const client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db("User_info");
  const coll = db.collection("User-sign_in");

  // Find the user in the collection
  const user = await coll.findOne({ userName: req.body.username });
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
app.post('/user-details', async (req, res) => {
  // Connect to the MongoDB cluster
  const client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db("User_info");
  const coll = db.collection("User-sign_in");

  // Look through the database and locate the user with the same username
  // Find the user in the collection by their username
  const user = await coll.findOne({ userName: usernameFinal });
  if (!user) {
    res.send(`${usernameFinal} not found`);
    client.close();
    return;
  }

  userDet = new UserDetails(req.body.expLevel, req.body.seriousness);
  var userScore = Number(req.body.expLevel) + Number(req.body.seriousness);
  // Add the new information to the user document
  await coll.updateOne({ userName: usernameFinal}, { $set: {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNum,
    userDetails: userDet,
    algoScore: userScore,
  } });
  res.send("User information added!");
  client.close();
});

app.get('/main-page', async (req, res) => {
  // Connect to the MongoDB cluster
  const client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db("User_info");
  const coll = db.collection("User-sign_in");

  // Find all the documents in the collection
  const data = await coll.find({}).toArray();
  res.send(data[0].lastName);
  client.close();
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );