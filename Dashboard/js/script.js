$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
  }else{
    uid = null;
    window.location.replace("login.html");
  }
});












