
var firebaseConfig = {
      apiKey: "AIzaSyCrmqjcbWN6M2Q_LjeItW2LMtUZwLW40zk",
      authDomain: "kwitter-7bbb5.firebaseapp.com",
      databaseURL: "https://kwitter-7bbb5-default-rtdb.firebaseio.com",
      projectId: "kwitter-7bbb5",
      storageBucket: "kwitter-7bbb5.appspot.com",
      messagingSenderId: "750121933597",
      appId: "1:750121933597:web:1547840652669ad948dff4",
      measurementId: "G-S0S4WPV8LL"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;


       
      });});}
getData();
