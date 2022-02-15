class user{
    constructor(username,email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(`${this.username} Logged in !`);
        return this;
    }
    logout(){
        console.log(`${this.username} Logged out !`);
        return this;
    }

    incScore(){
        this.score ++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this; // to chain the methods
    }
}

//inheritance using the extends keyword
const userone = new user('ATC','weebletkun@gmail.com');
const usertwo = new user('Shubham','thepromathematician@gmail.com');
userone.login().incScore().incScore().logout();
