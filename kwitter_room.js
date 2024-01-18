// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_name);
    row = "<div class='room_name' id="+Room_names+" onlick='redirectToRoomName(this.id)' >#"+Room_names +"<div></div>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);


  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.Storage.removeItem("user_name");
  localStorage.Storage.removeItem("room_name");
     window.location = "index.html";
}
