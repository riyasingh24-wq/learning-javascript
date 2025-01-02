const user = {
      username: "Riya",
      price: 999,

      WelcomeMessage: function(){
            console.log(`${this.username}, Welcome to the Website`);
            // console.log(this);
            
      }
}
// user.WelcomeMessage()
// user.username = "Sam"
// user.WelcomeMessage()
// console.log(this);

function chai(){
      let username = "riya"
      console.log(this.username);
}
chai()