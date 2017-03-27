window.addEventListener('load', function () {

  var loginButton = document.getElementById('login');
	var users = [{ id:0,
                 userInput : "user1",
                 passInput : "user1",
                 home : "index.html?id=0"
               }];

  	if(loginButton)
  	loginButton.addEventListener('click',function() {
  		var userInput = document.getElementById('username').value;
  		var passInput = document.getElementById('password').value;
  		var userStatus = document.getElementById('user_status');
  		var passStatus = document.getElementById('pass_status');

        for (var user of users) { //para recorer los usuarios del array;

        			var done=0;

        			if (userInput==user.userInput && passInput==user.passInput) {
        				localStorage.setItem("userId", user.id);
        				window.location= users[0].home;
        			}
              if (userInput == user.userInput){
                userStatus.innerHTML = "";
              }
        			if (userInput !== user.userInput){
        				userStatus.innerHTML = "Username does not exist";
        			}
        			if (userInput == ""){
        				userStatus.innerHTML = "The field can not be blank";
        			}
              if (passInput == user.passInput){
                passStatus.innerHTML = "";
              }
        			if (passInput !== user.passInput){
        				passStatus.innerHTML = "Password is incorrect";
        			}
        			if (passInput == ""){
        				passStatus.innerHTML = "The field can not be blank";
        			}
        }

    });

});
