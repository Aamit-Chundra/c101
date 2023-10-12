
//ADD YOUR FIREBASE LINKS

var firebaseConfig = 
{ apiKey: "AIzaSyCJYBg-WWinjk76GSNh7d5M8dCx1Js7-8M", 
authDomain: "kwitter-1a987.firebaseapp.com", 
databaseURL:"https://kwitter-1a987-default-rtdb.firebaseio.com",
projectId: "kwitter-1a987", 
storageBucket: "kwitter-1a987.appspot.com", 
messagingSenderId: "353289862466", 
appId: "1:353289862466:web:4e2310a333196dbaeb9cdb" };

firebase.initializeApp(firebaseConfig);


function addUser()
{

user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({purpose : "adding user"})

}