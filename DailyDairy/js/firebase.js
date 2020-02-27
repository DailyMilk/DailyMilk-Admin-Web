const auth = firebase.auth();
function logIn(){
  var userName = document.getElementById("username").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userName, userPass).then(function(){
    // window.location="index.html";
    window.location.replace("index.html");
  }).catch(function (error){
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function signOut(){
  auth.signOut().then(() =>{
    window.location.replace("login.html");
  })
}