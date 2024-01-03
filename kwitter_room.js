const firebaseConfig = {
    apiKey: "AIzaSyDJwfp9IHSBSvxefQH846J9F-cvLbApQpQ",
    authDomain: "kwitter-ae77b.firebaseapp.com",
    projectId: "kwitter-ae77b",
    storageBucket: "kwitter-ae77b.appspot.com",
    messagingSenderId: "104443251152",
    appId: "1:104443251152:web:fc070b1a00ad65f27791d5",
    measurementId: "G-NSF4WQ5S34"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
