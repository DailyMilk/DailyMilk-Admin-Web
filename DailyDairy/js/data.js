const list_div = document.querySelector("#list_div");
var db = firebase.firestore();

db.collection("users").onSnapshot(function(querySnapshot)  {
    querySnapshot.docChanges().forEach(function(change)  {
        if(change.type === "added"){
            list_div.innerHTML += "<div class=list-item><h3>Name : " + change.doc.data().Name + "</h3><p>Email : " + change.doc.data().Email + "<p>Address : " + change.doc.data().Address + "</p><p>Number : " + change.doc.data().Number + "</p><p>Plan : " + change.doc.data().Plan + "</p></div>"
        }
        
    });
});
