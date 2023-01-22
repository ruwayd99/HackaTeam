class UserAccount {
    constructor(firstName, lastName, userName, email, phoneNumber, password, userDetails) {
            this.firstName = firstName; //String
            this.lastName = lastName; //String
            this.userName = userName; //String
            this.email = email; //String
            this.phoneNumber = phoneNumber; //String
            this.password = password; //String
            this.UserDetails = userDetails; //UserDetails object
            this.team = null; //Team object
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
        constructor(experienceLevel, languages, interests, 
            hackathon, seriousness, checkboxGoals, stringGoals,
             hasTeam) {
                this.experienceLevel = experienceLevel; //Experience level enum
                this.languages = languages; //List of String
                this.interests = interests; //List of String
                this.hackathon = hackathon; //String
                this.seriousness = seriousness; //int 1-10
                this.checkboxGoals = checkboxGoals; //ListofGoals
                this.stringGoals = stringGoals; //String
                this.hasTeam = hasTeam; //Boolean
                this.aboutMe = null; //String
             }
    }
    
    // Modifies: A given team and a User
    // Requires: A team that is not full
    // Effects: if has team returns true, prompt the user if they do indeed want to leave their team
    function()
    // if functio
    
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