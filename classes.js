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