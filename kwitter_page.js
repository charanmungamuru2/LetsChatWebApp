import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJwfp9IHSBSvxefQH846J9F-cvLbApQpQ",
  authDomain: "kwitter-ae77b.firebaseapp.com",
  databaseURL: "https://kwitter-ae77b-default-rtdb.firebaseio.com",
  projectId: "kwitter-ae77b",
  storageBucket: "kwitter-ae77b.appspot.com",
  messagingSenderId: "104443251152",
  appId: "1:104443251152:web:fc070b1a00ad65f27791d5",
  measurementId: "G-NSF4WQ5S34"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      
      document.getElementById("msg").value = "";
}
